import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Bell,
  Building2,
  Car,
  ChevronRight,
  Database,
  Inbox,
  KanbanSquare,
  LayoutDashboard,
  Play,
  RefreshCcw,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

const tabs = [
  { id: 'executive', label: 'Executive Summary', icon: LayoutDashboard },
  { id: 'inbox', label: 'Lead Inbox', icon: Inbox },
  { id: 'pipeline', label: 'Pipeline Board', icon: KanbanSquare },
  { id: 'records', label: 'Lead Records', icon: Database },
  { id: 'manager', label: 'Manager View', icon: Users },
  { id: 'reactivation', label: 'Reactivation', icon: RefreshCcw },
];

const initialLeads = [
  {
    id: 'LD-1042',
    name: 'Afsal K',
    channel: 'Instagram',
    interest: '2023 Kia Seltos GTX+',
    budget: '\u20B911L\u2013\u20B913L',
    location: 'Kozhikode',
    finance: 'Required',
    timeline: '0\u20137 days',
    score: 92,
    status: 'hot',
    assigned: 'Athira',
    phone: '+91 98XXXXXX41',
    lastSeen: '12 sec ago',
    nextAction: 'Call in 5 min',
    source: 'Instagram DM Campaign',
    branch: 'Makkaraparamba',
    stockRef: 'STK-8821',
    stockStatus: 'Matching vehicle in stock',
    stockAge: '11 days in stock',
    followupStatus: 'Callback overdue in 2 min',
    financeReadiness: 'Pre-qualified',
    riskLevel: 'Low risk',
    summary: 'High-intent lead. Exact model asked. Budget aligned. Finance required. Purchase intent this week.',
    activity: [
      { time: '10:41', text: 'Lead created from Instagram DM' },
      { time: '10:41', text: 'AI replied in 21 sec' },
      { time: '10:42', text: 'Qualification completed' },
      { time: '10:42a', text: 'Scored 92 / Hot' },
      { time: '10:42b', text: 'Assigned to Athira' },
    ],
    messages: [
      { from: 'customer', text: 'Hi, Seltos available?' },
      { from: 'ai', text: 'Yes, available. Which variant are you looking for?' },
      { from: 'customer', text: 'Automatic. Budget around 12 lakh.' },
      { from: 'ai', text: 'Got it. Which location are you from, and would you need finance support?' },
      { from: 'customer', text: 'Kozhikode. Yes, finance needed. Want to buy this week.' },
    ],
  },
  {
    id: 'LD-1038',
    name: 'Nidhin P',
    channel: 'WhatsApp',
    interest: 'Swift VXi',
    budget: '\u20B95L\u2013\u20B96L',
    location: 'Malappuram',
    finance: 'No',
    timeline: '30\u201345 days',
    score: 74,
    status: 'warm',
    assigned: 'Shihas',
    phone: '+91 97XXXXXX12',
    lastSeen: '8 min ago',
    nextAction: 'Follow up tomorrow',
    source: 'WhatsApp Inbound',
    branch: 'Pattambi',
    stockRef: 'STK-7145',
    stockStatus: 'Alternative vehicle suggested',
    stockAge: '23 days in stock',
    followupStatus: 'Follow-up due tomorrow',
    financeReadiness: 'Cash buyer',
    riskLevel: 'Medium risk',
    summary: 'Qualified lead. Realistic budget. Not urgent, but still active.',
    activity: [
      { time: '09:18', text: 'Lead created from WhatsApp' },
      { time: '09:18a', text: 'AI qualification started' },
      { time: '09:20', text: 'Scored 74 / Warm' },
    ],
    messages: [
      { from: 'customer', text: 'Swift price?' },
      { from: 'ai', text: 'Sure. What budget range are you considering?' },
      { from: 'customer', text: '5 to 6 lakh.' },
      { from: 'ai', text: 'Perfect. Which location are you from, and are you buying soon?' },
    ],
  },
  {
    id: 'LD-1019',
    name: 'Fahad',
    channel: 'Website',
    interest: 'Baleno',
    budget: 'Not shared',
    location: 'Thrissur',
    finance: 'Maybe',
    timeline: 'Researching',
    score: 42,
    status: 'cold',
    assigned: 'Nurture Queue',
    phone: '+91 96XXXXXX77',
    lastSeen: '2 days ago',
    nextAction: 'Day-3 reactivation at 6 PM',
    source: 'Website Form',
    branch: 'Kochi',
    stockRef: 'STK-5521',
    stockStatus: 'Waiting for stock match',
    stockAge: 'No confirmed match',
    followupStatus: 'Queued for reactivation',
    financeReadiness: 'Unknown',
    riskLevel: 'High risk',
    summary: 'Top-of-funnel lead. Good fit for automated reactivation.',
    activity: [
      { time: '2d-ago', text: 'Lead created from website form' },
      { time: '2d-ago-b', text: 'No budget shared' },
      { time: 'scheduled', text: 'Reactivation queued' },
    ],
    messages: [
      { from: 'customer', text: 'Need details for Baleno.' },
      { from: 'ai', text: 'Sure \u2014 what budget are you considering, and how soon are you planning to buy?' },
      { from: 'customer', text: 'Just checking for now.' },
    ],
  },
];

const reactivationQueue = [
  { name: 'Fahad', vehicle: 'Baleno', stage: 'Day 3', sendAt: '6:00 PM', status: 'Queued' },
  { name: 'Shameer', vehicle: 'Brezza', stage: 'Day 7', sendAt: '7:30 PM', status: 'Queued' },
  { name: 'Navas', vehicle: 'i20', stage: 'Day 14', sendAt: 'Tomorrow', status: 'Drafted' },
];

const liveScenario = [
  {
    delay: 900,
    type: 'createLead',
    payload: {
      id: 'LD-1088',
      name: 'Riyaz M',
      channel: 'Instagram',
      interest: 'Unknown',
      budget: 'Not captured',
      location: 'Not captured',
      finance: 'Unknown',
      timeline: 'Unknown',
      score: 18,
      status: 'new',
      assigned: 'Unassigned',
      phone: '+91 99XXXXXX08',
      lastSeen: 'just now',
      nextAction: 'Awaiting qualification',
      source: 'Instagram DM Campaign',
      branch: 'Makkaraparamba',
      stockRef: 'Pending vehicle match',
      stockStatus: 'Checking inventory',
      stockAge: 'Not checked yet',
      followupStatus: 'Live conversation started',
      financeReadiness: 'Unknown',
      riskLevel: 'Medium risk',
      summary: 'New inbound enquiry. Qualification not started yet.',
      activity: [{ time: 'now-0', text: 'Lead created from Instagram DM' }],
      messages: [{ from: 'customer', text: 'Hi, Creta available?' }],
    },
    toast: 'New lead captured from Instagram',
  },
  { delay: 1200, type: 'appendMessage', payload: { from: 'ai', text: 'Yes, available. Which variant are you looking for?' }, toast: 'AI replied in 18 seconds' },
  { delay: 1100, type: 'updateLead', payload: { status: 'qualifying', summary: 'Qualification started. Vehicle interest identified as Creta.', nextAction: 'Capture budget', stockStatus: 'Creta inventory check started', followupStatus: 'Qualification in progress', activityEntry: { time: 'now-1', text: 'AI started qualification' } } },
  { delay: 1300, type: 'appendMessage', payload: { from: 'customer', text: 'Automatic. Budget 13 to 14 lakh.' }, toast: 'Budget captured' },
  { delay: 1100, type: 'updateLead', payload: { interest: 'Hyundai Creta Automatic', budget: '\u20B913L\u2013\u20B914L', score: 46, stockRef: 'STK-9214', stockStatus: 'Exact stock match found', stockAge: '14 days in stock', summary: 'Budget captured. Strong model intent detected.', nextAction: 'Capture location and finance need', activityEntry: { time: 'now-2', text: 'Budget and model captured' } } },
  { delay: 1100, type: 'appendMessage', payload: { from: 'ai', text: 'Got it. Which location are you from, and would you need finance support?' } },
  { delay: 1300, type: 'appendMessage', payload: { from: 'customer', text: 'Malappuram. Yes finance. Need in 2 weeks.' }, toast: 'Location, finance and timeline captured' },
  { delay: 1200, type: 'updateLead', payload: { location: 'Malappuram', finance: 'Required', timeline: '7\u201314 days', score: 89, status: 'hot', assigned: 'Athira', financeReadiness: 'Finance-ready', riskLevel: 'Low risk', followupStatus: 'Callback due in 5 min', nextAction: 'Immediate callback', summary: 'High-intent buyer. Budget aligned. Finance required. Purchase intent within two weeks.', activityEntry: { time: 'now-3', text: 'Lead scored 89 / Hot and routed to Athira' } }, toast: 'Lead routed to sales' },
  { delay: 1000, type: 'appendMessage', payload: { from: 'ai', text: "Perfect \u2014 I'm assigning this to our sales team right now. They'll contact you shortly." } },
];

const BADGE_COLORS = {
  hot: { bg: '#3f0d12', color: '#fda4af', border: '#7f1d1d' },
  warm: { bg: '#3b2f12', color: '#fde68a', border: '#6b4f1d' },
  cold: { bg: '#0f2234', color: '#93c5fd', border: '#1d4ed8' },
  new: { bg: '#172033', color: '#cbd5e1', border: '#334155' },
  qualifying: { bg: '#1e293b', color: '#bfdbfe', border: '#475569' },
  queued: { bg: '#172033', color: '#cbd5e1', border: '#334155' },
  finance: { bg: '#052e16', color: '#86efac', border: '#166534' },
  risk: { bg: '#3b2f12', color: '#fde68a', border: '#6b4f1d' },
  live: { bg: '#082f49', color: '#7dd3fc', border: '#0ea5e9' },
};

function nowLabel() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function salesActionForLead(lead) {
  if (!lead) return { owner: '-', priority: '-', action: '-', sla: '-', checklist: [] };
  if (lead.status === 'new') return { owner: 'Automation Queue', priority: 'New enquiry', action: 'Start qualification and capture vehicle intent', sla: 'Reply within 30 sec', checklist: ['Create lead record', 'Tag source channel', 'Start qualification'] };
  if (lead.status === 'qualifying') return { owner: 'YEL6AI Qualifier', priority: 'Qualification in progress', action: 'Capture budget, finance need, location, and timeline', sla: 'Complete within 2 mins', checklist: ['Budget captured', 'Location pending', 'Finance check pending'] };
  if (lead.status === 'hot') return { owner: lead.assigned, priority: 'Immediate callback', action: 'Call now, confirm stock, push finance-ready buyer to close', sla: 'Sales callback within 5 mins', checklist: ['Vehicle match ready', 'Finance-ready', 'Assign closer'] };
  if (lead.status === 'warm') return { owner: lead.assigned, priority: 'Keep active', action: 'Share matching inventory and schedule follow-up', sla: 'Follow up within 24 hrs', checklist: ['Send options', 'Log buyer response', 'Rescore after follow-up'] };
  return { owner: 'Reactivation Queue', priority: 'Nurture', action: 'Re-engage automatically with matching stock and finance angle', sla: 'Day-3 / Day-7 / Day-14', checklist: ['Queued sequence', 'Watch replies', 'Route back if active'] };
}

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Space+Grotesk:wght@500;700&display=swap');

  :root {
    --bg: #030b17;
    --panel: rgba(15, 23, 42, 0.9);
    --panel-soft: #0b1324;
    --panel-border: #1f2d44;
    --accent: #7dd3fc;
    --accent-2: #38bdf8;
    --text-main: #e5e7eb;
    --text-soft: #9fb0c9;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(125,211,252,0.45); }
    70% { box-shadow: 0 0 0 12px rgba(125,211,252,0); }
    100% { box-shadow: 0 0 0 0 rgba(125,211,252,0); }
  }

  @keyframes toastIn {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes toastOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-8px); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes riseIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  html, body, #root {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    background: var(--bg);
  }

  * { box-sizing: border-box; }

  .carlet-root {
    min-height: 100vh;
    background:
      radial-gradient(circle at 8% 8%, rgba(56, 189, 248, 0.14) 0, rgba(56, 189, 248, 0) 34%),
      radial-gradient(circle at 90% 18%, rgba(16, 185, 129, 0.12) 0, rgba(16, 185, 129, 0) 32%),
      radial-gradient(circle at bottom, #0f172a 0%, #030b17 58%);
    color: var(--text-main);
    font-family: 'DM Sans', sans-serif;
    padding: 40px;
  }

  .carlet-layout {
    max-width: 1560px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 28px;
  }

  .panel {
    background: var(--panel);
    border: 1px solid var(--panel-border);
    border-radius: 22px;
    padding: 28px;
    box-shadow: 0 16px 40px rgba(0,0,0,0.25);
    animation: riseIn 0.3s ease-out both;
    animation-delay: var(--delay, 0ms);
  }

  .panel-inner {
    background: var(--panel-soft);
    border: 1px solid var(--panel-border);
    border-radius: 22px;
    padding: 22px;
    box-shadow: none;
  }

  .panel-sm {
    background: var(--panel-soft);
    border: 1px solid var(--panel-border);
    border-radius: 16px;
    padding: 18px;
  }

  .panel-card {
    background: var(--panel-soft);
    border: 1px solid var(--panel-border);
    border-radius: 16px;
    padding: 16px;
  }

  .sidebar {
    padding: 24px;
    align-self: start;
    position: sticky;
    top: 40px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }

  .brand-mark {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: linear-gradient(140deg, #0ea5e9, #22d3ee);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #031322;
  }

  .sidebar-label {
    color: #8ba0c2;
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .sidebar-title {
    font-size: 24px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 800;
    margin-bottom: 4px;
  }

  .sidebar-desc {
    color: #8fa1bf;
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .nav-grid {
    display: grid;
    gap: 12px;
    margin-bottom: 24px;
  }

  .nav-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    text-align: left;
    border-radius: 14px;
    padding: 14px 16px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.12s;
  }

  .nav-btn:hover {
    transform: translateX(2px);
  }

  .nav-btn-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  .nav-btn-label {
    display: flex;
    align-items: center;
    gap: 9px;
  }

  .nav-btn-arrow {
    opacity: 0.45;
  }

  .nav-btn:focus-visible {
    outline: 2px solid #7dd3fc;
    outline-offset: 2px;
  }

  .nav-btn--active {
    border: 1px solid #94a3b8;
    background: #e2e8f0;
    color: #0f172a;
  }

  .nav-btn--inactive {
    border: 1px solid #22324d;
    background: #0b1324;
    color: #dbe4f0;
  }

  .nav-btn--inactive:hover {
    background: #111f35;
    border-color: #334155;
  }

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .header-label {
    color: #8ba0c2;
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .header-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 34px;
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  .header-sub {
    color: #94a3b8;
    margin-top: 10px;
    line-height: 1.6;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 14px;
    padding: 14px 20px;
    background: #f8fafc;
    color: #0f172a;
    font-weight: 800;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    transition: background 0.15s;
  }

  .btn-primary:hover { background: #cbd5e1; }
  .btn-primary:focus-visible { outline: 2px solid #7dd3fc; outline-offset: 2px; }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #334155;
    border-radius: 14px;
    padding: 14px 20px;
    background: transparent;
    color: #e5e7eb;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    transition: background 0.15s;
  }

  .btn-secondary:hover { background: #1e293b; }
  .btn-secondary:focus-visible { outline: 2px solid #7dd3fc; outline-offset: 2px; }

  .toast {
    border-radius: 16px;
    background: #052e16;
    border: 1px solid #166534;
    color: #bbf7d0;
    font-weight: 700;
    padding: 12px 16px;
    margin-bottom: 14px;
  }

  .utility-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    gap: 16px;
    flex-wrap: wrap;
  }

  .search-shell {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #0a1220;
    border: 1px solid #24344f;
    border-radius: 12px;
    padding: 10px 12px;
    min-width: 240px;
  }

  .search-shell input {
    border: none;
    outline: none;
    background: transparent;
    color: #dbe4f0;
    width: 100%;
    font-family: inherit;
    font-size: 13px;
  }

  .utility-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon-btn {
    width: 38px;
    height: 38px;
    border-radius: 11px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #2a3d5b;
    background: #0a1220;
    color: #dbe4f0;
    cursor: pointer;
  }

  .profile-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 12px;
    border-radius: 999px;
    border: 1px solid #2a3d5b;
    background: #0a1220;
    font-size: 13px;
    color: #dbe4f0;
    font-weight: 700;
  }

  .profile-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #34d399;
  }

  .toast--entering {
    animation: toastIn 0.25s ease-out;
  }

  .toast--exiting {
    animation: toastOut 0.3s ease-in forwards;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    text-transform: capitalize;
    white-space: nowrap;
  }

  .lead-card {
    width: 100%;
    text-align: left;
    border-radius: 18px;
    padding: 18px;
    margin-bottom: 12px;
    cursor: pointer;
    color: #e5e7eb;
    font-family: inherit;
    font-size: 14px;
    transition: background 0.15s, border-color 0.15s;
  }

  .lead-card:hover { background: #111f35 !important; }
  .lead-card:focus-visible { outline: 2px solid #7dd3fc; outline-offset: 2px; }

  .lead-card--selected {
    background: #111f35;
    border: 1px solid #5b708f;
  }

  .lead-card--default {
    background: #09111f;
    border: 1px solid #1f2d44;
  }

  .lead-card--pulse {
    animation: pulse 1.8s infinite;
  }

  .inbox-grid {
    display: grid;
    grid-template-columns: 320px 1fr 320px;
    gap: 24px;
  }

  .pipeline-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(220px, 1fr));
    gap: 18px;
    overflow-x: auto;
  }

  .pipeline-col {
    min-height: 360px;
    transition: outline-color 0.2s;
  }

  .pipeline-col--active {
    outline: 2px solid #7dd3fc;
  }

  .pipeline-item {
    background: #09111f;
    border: 1px solid #1f2d44;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: background 0.15s;
  }

  .pipeline-item:hover { background: #111f35; }
  .pipeline-item:focus-visible { outline: 2px solid #7dd3fc; outline-offset: 2px; }

  .msg-bubble {
    max-width: 84%;
    margin-bottom: 14px;
    border-radius: 16px;
    padding: 14px 16px;
    border: 1px solid #26364f;
    animation: fadeIn 0.2s ease-out;
  }

  .msg-bubble--ai {
    margin-left: auto;
    background: #17243a;
  }

  .msg-bubble--customer {
    margin-left: 0;
    background: #111827;
  }

  .msg-typing {
    max-width: 84%;
    margin-left: auto;
    border-radius: 16px;
    padding: 12px 14px;
    background: #1e293b;
    border: 1px solid #334155;
    color: #94a3b8;
  }

  .records-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }

  .records-table thead tr { background: #0b1324; }

  .records-table th {
    text-align: left;
    padding: 12px 10px;
    color: #9fb0c9;
    border-bottom: 1px solid #1f2d44;
    white-space: nowrap;
  }

  .records-table tbody tr {
    border-bottom: 1px solid #162338;
    cursor: pointer;
    transition: background 0.12s;
  }

  .records-table tbody tr:hover { background: #111f35; }
  .records-table tbody tr:focus-visible { outline: 2px solid #7dd3fc; outline-offset: -2px; }

  .records-table td {
    padding: 12px 10px;
    white-space: nowrap;
  }

  .records-table td.wrap { white-space: normal; min-width: 150px; }

  .pipeline-head-stats {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }

  .pipeline-row-live {
    background: rgba(14, 165, 233, 0.08);
    border-left: 2px solid #0ea5e9;
  }

  .stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 20px; }
  .detail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; }
  .conv-layout { display: grid; grid-template-columns: 1fr; gap: 20px; }
  .manager-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 24px; }
  .react-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

  .lead-facts {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 24px;
  }

  .lead-fact {
    min-width: 170px;
    border: 1px solid #22324a;
    border-radius: 12px;
    background: rgba(9, 17, 31, 0.62);
    padding: 10px 12px;
  }

  .lead-fact-label {
    color: #8fa1bf;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .lead-fact-value {
    margin-top: 6px;
    font-size: 13px;
    line-height: 1.45;
  }

  .lead-conversation {
    padding-right: 4px;
  }

  .lead-insights {
    display: grid;
    gap: 16px;
  }

  .lead-insight-block {
    border-left: 2px solid #223a59;
    padding-left: 14px;
  }

  .timeline-row {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 10px;
    margin-bottom: 10px;
  }

  .label-upper {
    color: #8fa1bf;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .label-sub { color: #8fa1bf; font-size: 12px; }
  .text-muted { color: #9fb0c9; }
  .text-body { color: #dbe4f0; line-height: 1.65; font-size: 14px; }

  .minibar-track {
    height: 8px;
    background: #111827;
    border-radius: 999px;
    margin-bottom: 12px;
    overflow: hidden;
  }

  .minibar-fill {
    height: 8px;
    border-radius: 999px;
    background: linear-gradient(90deg, #cbd5e1, #7dd3fc);
    transition: width 0.4s ease;
  }

  .empty-state {
    color: #475569;
    font-size: 13px;
    text-align: center;
    padding: 40px 16px;
    font-style: italic;
  }

  .smoke-item { color: #9fb0c9; line-height: 1.7; font-size: 13px; }

  @media (max-width: 1200px) {
    .carlet-layout {
      grid-template-columns: 1fr;
    }

    .sidebar {
      position: static;
    }

    .inbox-grid,
    .manager-grid,
    .react-grid,
    .conv-layout {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 720px) {
    .carlet-root {
      padding: 14px;
    }

    .header-title {
      font-size: 28px;
    }

    .search-shell {
      width: 100%;
    }

    .header-row {
      margin-bottom: 12px;
    }
  }
`;

function Badge({ type, children }) {
  const c = BADGE_COLORS[type] || BADGE_COLORS.queued;
  return (
    <span
      className="badge"
      style={{ border: `1px solid ${c.border}`, background: c.bg, color: c.color }}
    >
      {children || type}
    </span>
  );
}

function MiniBar({ value, max = 100 }) {
  const pct = Math.max(8, Math.min((value / max) * 100, 100));
  return (
    <div className="minibar-track">
      <div className="minibar-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

function EmptyState({ text = 'No leads in this stage' }) {
  return <div className="empty-state">{text}</div>;
}

function SectionTitle({ icon: Icon, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      {Icon && <Icon size={18} color="#7dd3fc" />}
      <div style={{ fontWeight: 800, fontSize: 18 }}>{title}</div>
    </div>
  );
}

export default function CarletYel6AIDemo() {
  const [tab, setTab] = useState('executive');
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLeadId, setSelectedLeadId] = useState(initialLeads[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scenarioIndex, setScenarioIndex] = useState(-1);
  const [toast, setToast] = useState('');
  const [toastPhase, setToastPhase] = useState('idle');
  const timersRef = useRef([]);
  const playingRef = useRef(false);

  const selectedLead = useMemo(() => leads.find((l) => l.id === selectedLeadId) || leads[0], [leads, selectedLeadId]);
  const salesAction = useMemo(() => salesActionForLead(selectedLead), [selectedLead]);

  const hotLeads = useMemo(() => leads.filter((l) => l.status === 'hot'), [leads]);
  const warmLeads = useMemo(() => leads.filter((l) => l.status === 'warm'), [leads]);
  const newLeads = useMemo(() => leads.filter((l) => l.status === 'new'), [leads]);
  const qualifyingLeads = useMemo(() => leads.filter((l) => l.status === 'qualifying'), [leads]);
  const coldLeads = useMemo(() => leads.filter((l) => l.status === 'cold'), [leads]);
  const financeReady = useMemo(() => leads.filter((l) => l.financeReadiness === 'Finance-ready' || l.financeReadiness === 'Pre-qualified'), [leads]);
  const stockMatched = useMemo(() => leads.filter((l) => l.stockStatus.toLowerCase().includes('match')), [leads]);
  const overdueFollowups = useMemo(() => leads.filter((l) => l.followupStatus.toLowerCase().includes('overdue') || l.followupStatus.toLowerCase().includes('due')), [leads]);
  const branchCount = useMemo(() => new Set(leads.map((l) => l.branch)).size, [leads]);

  const pipelineRows = useMemo(() => {
    const stageRank = { new: 0, qualifying: 1, hot: 2, warm: 3, cold: 4 };
    return [...leads].sort((a, b) => {
      const rankA = stageRank[a.status] ?? 99;
      const rankB = stageRank[b.status] ?? 99;
      if (rankA !== rankB) return rankA - rankB;
      return b.score - a.score;
    });
  }, [leads]);

  // Compute dynamic manager data from leads state
  const teamStats = useMemo(() => {
    const byOwner = {};
    leads.forEach((l) => {
      if (!byOwner[l.assigned]) byOwner[l.assigned] = { active: 0, hot: 0 };
      byOwner[l.assigned].active++;
      if (l.status === 'hot') byOwner[l.assigned].hot++;
    });
    const team = ['Athira', 'Shihas', 'Anusha', 'Abhilash'];
    return team.map((name) => ({
      name,
      active: byOwner[name]?.active || 0,
      hot: byOwner[name]?.hot || 0,
    }));
  }, [leads]);

  const channelStats = useMemo(() => {
    const channels = {};
    leads.forEach((l) => {
      const ch = l.channel;
      channels[ch] = (channels[ch] || 0) + 1;
    });
    return channels;
  }, [leads]);

  useEffect(() => () => timersRef.current.forEach((id) => clearTimeout(id)), []);

  useEffect(() => {
    if (!toast) { setToastPhase('idle'); return; }
    setToastPhase('entering');
    const exitTimer = window.setTimeout(() => setToastPhase('exiting'), 1300);
    const clearTimer = window.setTimeout(() => { setToast(''); setToastPhase('idle'); }, 1600);
    return () => { clearTimeout(exitTimer); clearTimeout(clearTimer); };
  }, [toast]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  }, []);

  const resetDemo = useCallback(() => {
    clearTimers();
    playingRef.current = false;
    setLeads(initialLeads);
    setSelectedLeadId(initialLeads[0].id);
    setIsPlaying(false);
    setScenarioIndex(-1);
    setToast('');
    setToastPhase('idle');
  }, [clearTimers]);

  const updateLiveLead = useCallback((mutator) => {
    setLeads((current) => current.map((lead) => (lead.id === 'LD-1088' ? mutator(lead) : lead)));
  }, []);

  const applyScenarioStep = useCallback((step, index) => {
    if (!playingRef.current) return;
    setScenarioIndex(index);
    if (step.type === 'createLead') {
      setLeads((current) => {
        if (current.some((l) => l.id === step.payload.id)) return current;
        return [step.payload, ...current];
      });
      setSelectedLeadId(step.payload.id);
    }
    if (step.type === 'appendMessage') {
      updateLiveLead((lead) => ({ ...lead, lastSeen: 'just now', messages: [...lead.messages, step.payload] }));
    }
    if (step.type === 'updateLead') {
      updateLiveLead((lead) => {
        const { activityEntry, ...rest } = step.payload;
        return {
          ...lead,
          ...rest,
          activity: activityEntry ? [{ time: nowLabel(), text: activityEntry.text }, ...lead.activity] : lead.activity,
        };
      });
    }
    if (step.toast) setToast(step.toast);
  }, [updateLiveLead]);

  const playLiveDemo = useCallback(() => {
    resetDemo();
    // Use a microtask to ensure reset state has flushed before scheduling new timers
    Promise.resolve().then(() => {
      playingRef.current = true;
      setTab('inbox');
      setIsPlaying(true);
      let total = 200;
      liveScenario.forEach((step, index) => {
        total += step.delay;
        const timer = window.setTimeout(() => {
          applyScenarioStep(step, index);
          if (index === liveScenario.length - 1) {
            setIsPlaying(false);
            playingRef.current = false;
          }
        }, total);
        timersRef.current.push(timer);
      });
    });
  }, [resetDemo, applyScenarioStep]);

  const handleKeyNav = useCallback((e, action) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); action(); }
  }, []);

  return (
    <div className="carlet-root">
      <style>{STYLES}</style>
      <div className="carlet-layout">
        {/* Sidebar */}
        <aside className="panel sidebar" style={{ '--delay': '40ms' }}>
          <div className="brand">
            <div className="brand-mark"><Car size={20} strokeWidth={2.4} /></div>
            <div>
              <div className="sidebar-label">YEL6AI OS</div>
              <div className="sidebar-title">Carlet</div>
            </div>
          </div>
          <div className="sidebar-desc">Operational control system for lead capture, qualification, sales routing, stock matching, and reactivation.</div>
          <nav className="nav-grid" aria-label="Main navigation">
            {tabs.map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`nav-btn ${tab === item.id ? 'nav-btn--active' : 'nav-btn--inactive'}`}
                aria-current={tab === item.id ? 'page' : undefined}
              >
                <span className="nav-btn-label">
                  <item.icon className="nav-btn-icon" />
                  {item.label}
                </span>
                <ChevronRight size={16} className="nav-btn-arrow" />
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main>
          <div className="utility-row">
            <label className="search-shell" aria-label="Search leads">
              <Search size={16} color="#93c5fd" />
              <input type="text" value="" readOnly placeholder="Search lead, vehicle, branch" />
            </label>
            <div className="utility-actions">
              <button className="icon-btn" aria-label="Notifications"><Bell size={17} /></button>
              <div className="profile-chip"><span className="profile-dot" /> Operations Online</div>
            </div>
          </div>

          <div className="header-row">
            <div>
              <div className="header-label">YEL6AI &middot; Carlet Workspace</div>
              <div className="header-title">Lead Command Center</div>
              <div className="header-sub">Used-car lead operating system for faster response, finance-ready buyers, branch visibility, and zero lead leakage.</div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button onClick={playLiveDemo} className="btn-primary" disabled={isPlaying}>
                <Play size={16} />
                {isPlaying ? 'Running\u2026' : 'Play Live Demo'}
              </button>
              <button onClick={resetDemo} className="btn-secondary"><RotateCcw size={16} />Reset</button>
            </div>
          </div>

          {/* Toast */}
          {toast && (
            <div className={`panel toast ${toastPhase === 'entering' ? 'toast--entering' : ''} ${toastPhase === 'exiting' ? 'toast--exiting' : ''}`} role="status" aria-live="polite">
              {toast}
            </div>
          )}

          {/* Executive */}
          {tab === 'executive' && (
            <section className="panel" aria-label="Executive Summary" style={{ '--delay': '70ms' }}>
              <SectionTitle icon={LayoutDashboard} title="Executive Summary" />
              <div className="stat-grid">
                {[
                  { title: 'Finance-Ready Buyers', value: financeReady.length, sub: 'ready to push into close', tone: 'finance' },
                  { title: 'Stock-Matched Enquiries', value: stockMatched.length, sub: 'inventory aligned in system', tone: 'live' },
                  { title: 'Follow-Ups Due / Overdue', value: overdueFollowups.length, sub: 'needs attention', tone: 'risk' },
                  { title: 'Branches with Live Demand', value: branchCount, sub: 'distribution across operations', tone: 'queued' },
                ].map((item) => (
                  <div key={item.title} className="panel-inner" style={{ padding: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                      <div style={{ fontWeight: 800, fontSize: 14 }}>{item.title}</div>
                      <Badge type={item.tone} />
                    </div>
                    <div style={{ fontSize: 34, fontWeight: 800, marginTop: 12 }}>{item.value}</div>
                    <div className="text-muted" style={{ marginTop: 8, fontSize: 13 }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Inbox */}
          {tab === 'inbox' && (
            <section className="inbox-grid" aria-label="Lead Inbox">
              {/* Lead list */}
              <div className="panel" style={{ '--delay': '70ms' }}>
                <SectionTitle icon={Inbox} title="Active Leads" />
                {leads.length === 0 && <EmptyState text="No active leads" />}
                {leads.map((lead) => (
                  <button
                    key={lead.id}
                    onClick={() => setSelectedLeadId(lead.id)}
                    className={`lead-card ${selectedLeadId === lead.id ? 'lead-card--selected' : 'lead-card--default'} ${lead.id === 'LD-1088' && isPlaying ? 'lead-card--pulse' : ''}`}
                    aria-pressed={selectedLeadId === lead.id}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                      <div style={{ fontWeight: 700 }}>{lead.name}</div>
                      <Badge type={lead.status} />
                    </div>
                    <div className="label-sub" style={{ marginTop: 6 }}>{lead.channel} &middot; {lead.lastSeen}</div>
                    <div style={{ marginTop: 8 }}>{lead.interest}</div>
                  </button>
                ))}
              </div>

              {/* Lead detail */}
              <div className="panel" style={{ '--delay': '110ms' }}>
                <div className="conv-layout">
                  <div className="lead-conversation">
                    <div style={{ fontWeight: 800, marginBottom: 12 }}>Conversation</div>
                    {selectedLead.messages.map((msg, idx) => (
                      <div
                        key={`${selectedLead.id}-msg-${idx}`}
                        className={`msg-bubble ${msg.from === 'ai' ? 'msg-bubble--ai' : 'msg-bubble--customer'}`}
                      >
                        <div className="label-upper" style={{ marginBottom: 6 }}>{msg.from === 'ai' ? 'YEL6AI' : 'Customer'}</div>
                        <div style={{ lineHeight: 1.55 }}>{msg.text}</div>
                      </div>
                    ))}
                    {isPlaying && selectedLead.id === 'LD-1088' && scenarioIndex < liveScenario.length - 1 && (
                      <div className="msg-typing">typing&hellip;</div>
                    )}
                  </div>
                  <div className="lead-insights">
                    <div className="lead-insight-block">
                      <div style={{ fontWeight: 800, marginBottom: 10 }}>AI Summary</div>
                      <div className="text-body">{selectedLead.summary}</div>
                    </div>
                    <div className="lead-insight-block">
                      <div style={{ fontWeight: 800, marginBottom: 10 }}>Timeline</div>
                      {selectedLead.activity.map((item, idx) => (
                        <div key={`${selectedLead.id}-act-${idx}`} className="timeline-row">
                          <div className="label-sub">{item.time.replace(/[a-z]-/g, '').replace(/\d+-/g, '')}</div>
                          <div style={{ fontSize: 13, lineHeight: 1.5 }}>{item.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: 24, fontWeight: 800 }}>{selectedLead.name}</div>
                    <div className="label-sub" style={{ marginTop: 4 }}>{selectedLead.id} &middot; {selectedLead.phone} &middot; {selectedLead.source}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <Badge type={selectedLead.status} />
                    <Badge type="finance">{selectedLead.financeReadiness}</Badge>
                    <Badge type="risk">{selectedLead.riskLevel}</Badge>
                  </div>
                </div>

                <div className="lead-facts">
                  {[
                    ['Vehicle', selectedLead.interest],
                    ['Budget', selectedLead.budget],
                    ['Location', selectedLead.location],
                    ['Finance', selectedLead.finance],
                    ['Timeline', selectedLead.timeline],
                    ['Branch', selectedLead.branch],
                    ['Stock', selectedLead.stockStatus],
                    ['Follow-Up', selectedLead.followupStatus],
                  ].map(([label, value]) => (
                    <div key={label} className="lead-fact">
                      <div className="lead-fact-label">{label}</div>
                      <div className="lead-fact-value">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sales action panel */}
              <div className="panel" style={{ '--delay': '150ms' }}>
                <SectionTitle icon={ShieldCheck} title="Sales Action Panel" />
                {[
                  ['Owner', salesAction.owner],
                  ['Priority', salesAction.priority],
                  ['Recommended Action', salesAction.action],
                  ['SLA', salesAction.sla],
                ].map(([label, value]) => (
                  <div key={label} className="panel-sm" style={{ marginBottom: 12 }}>
                    <div className="label-upper">{label}</div>
                    <div style={{ marginTop: 8, lineHeight: 1.5 }}>{value}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Pipeline */}
          {tab === 'pipeline' && (
            <section className="panel" aria-label="Pipeline Board" style={{ '--delay': '70ms' }}>
              <SectionTitle icon={KanbanSquare} title="Pipeline Board" />
              <div className="pipeline-head-stats">
                <Badge type="new">New {newLeads.length}</Badge>
                <Badge type="qualifying">Qualifying {qualifyingLeads.length}</Badge>
                <Badge type="hot">Hot {hotLeads.length}</Badge>
                <Badge type="warm">Warm {warmLeads.length}</Badge>
                <Badge type="queued">Reactivation {coldLeads.length}</Badge>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="records-table">
                  <thead>
                    <tr>
                      {['Stage', 'Lead', 'Vehicle', 'Channel', 'Score', 'Budget', 'Location', 'Owner', 'Next Action'].map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pipelineRows.length === 0 && (
                      <tr><td colSpan={9} style={{ textAlign: 'center', padding: 40, color: '#475569', fontStyle: 'italic' }}>No pipeline leads</td></tr>
                    )}
                    {pipelineRows.map((lead) => (
                      <tr
                        key={lead.id}
                        className={lead.id === 'LD-1088' && isPlaying ? 'pipeline-row-live' : ''}
                        onClick={() => { setSelectedLeadId(lead.id); setTab('inbox'); }}
                        onKeyDown={(e) => handleKeyNav(e, () => { setSelectedLeadId(lead.id); setTab('inbox'); })}
                        tabIndex={0}
                        role="button"
                        aria-label={`View lead ${lead.name}`}
                      >
                        <td><Badge type={lead.status === 'cold' ? 'queued' : lead.status}>{lead.status === 'cold' ? 'reactivation' : lead.status}</Badge></td>
                        <td>{lead.name}</td>
                        <td className="wrap">{lead.interest}</td>
                        <td>{lead.channel}</td>
                        <td>{lead.score}</td>
                        <td>{lead.budget}</td>
                        <td>{lead.location}</td>
                        <td>{lead.assigned}</td>
                        <td className="wrap">{lead.nextAction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Records */}
          {tab === 'records' && (
            <section className="panel" aria-label="Lead Records" style={{ '--delay': '70ms' }}>
              <SectionTitle icon={Database} title="Master Lead Records" />
              <div style={{ overflowX: 'auto' }}>
                <table className="records-table">
                  <thead>
                    <tr>
                      {['Lead ID', 'Name', 'Channel', 'Vehicle', 'Budget', 'Location', 'Finance', 'Timeline', 'Score', 'Status', 'Owner', 'Branch', 'Stock', 'Follow-Up', 'Next Action'].map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {leads.length === 0 && (
                      <tr><td colSpan={15} style={{ textAlign: 'center', padding: 40, color: '#475569', fontStyle: 'italic' }}>No leads found</td></tr>
                    )}
                    {leads.map((lead) => (
                      <tr
                        key={lead.id}
                        onClick={() => { setSelectedLeadId(lead.id); setTab('inbox'); }}
                        onKeyDown={(e) => handleKeyNav(e, () => { setSelectedLeadId(lead.id); setTab('inbox'); })}
                        tabIndex={0}
                        role="button"
                        aria-label={`View lead ${lead.name}`}
                      >
                        <td>{lead.id}</td>
                        <td>{lead.name}</td>
                        <td>{lead.channel}</td>
                        <td className="wrap">{lead.interest}</td>
                        <td>{lead.budget}</td>
                        <td>{lead.location}</td>
                        <td>{lead.finance}</td>
                        <td>{lead.timeline}</td>
                        <td>{lead.score}</td>
                        <td><Badge type={lead.status} /></td>
                        <td>{lead.assigned}</td>
                        <td>{lead.branch}</td>
                        <td>{lead.stockStatus}</td>
                        <td>{lead.followupStatus}</td>
                        <td className="wrap">{lead.nextAction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Manager */}
          {tab === 'manager' && (
            <section className="manager-grid" aria-label="Manager View">
              <div className="panel" style={{ '--delay': '70ms' }}>
                <SectionTitle icon={Building2} title="Manager Overview" />
                <div className="stat-grid" style={{ marginBottom: 14 }}>
                  {[
                    ['Instagram', `${channelStats['Instagram'] || 0} leads`, 'From DM campaigns'],
                    ['WhatsApp', `${channelStats['WhatsApp'] || 0} leads`, 'Inbound enquiries'],
                    ['Finance-Ready', String(financeReady.length), 'ready for faster close'],
                    ['Sales Load', `${leads.length} total`, `Across ${teamStats.filter((t) => t.active > 0).length} reps`],
                  ].map(([title, value, sub]) => (
                    <div key={title} className="panel-sm">
                      <div className="label-sub">{title}</div>
                      <div style={{ fontSize: 28, fontWeight: 800, marginTop: 8 }}>{value}</div>
                      <div className="text-muted" style={{ marginTop: 6, fontSize: 13 }}>{sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="panel" style={{ '--delay': '110ms' }}>
                <SectionTitle icon={Users} title="Team Queue" />
                {teamStats.map((member) => (
                  <div key={member.name} className="panel-sm" style={{ marginBottom: 10 }}>
                    <div style={{ fontWeight: 700 }}>{member.name}</div>
                    <div className="label-sub" style={{ marginTop: 6 }}>{member.active} active</div>
                    <div style={{ marginTop: 6, fontSize: 13 }}>{member.hot} hot lead{member.hot !== 1 ? 's' : ''}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Reactivation */}
          {tab === 'reactivation' && (
            <section className="react-grid" aria-label="Reactivation Queue">
              <div className="panel" style={{ '--delay': '70ms' }}>
                <SectionTitle icon={RefreshCcw} title="Reactivation Queue" />
                {reactivationQueue.map((item, idx) => (
                  <div key={`react-${idx}`} className="panel-sm" style={{ marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'center' }}>
                      <div style={{ fontWeight: 700 }}>{item.name}</div>
                      <Badge type="queued">{item.status}</Badge>
                    </div>
                    <div className="label-sub" style={{ marginTop: 6 }}>{item.vehicle}</div>
                    <div style={{ marginTop: 8, fontSize: 14 }}>{item.stage} &middot; {item.sendAt}</div>
                  </div>
                ))}
              </div>
              <div className="panel" style={{ '--delay': '110ms' }}>
                <SectionTitle icon={Sparkles} title="Outgoing Message Preview" />
                <div className="panel-inner" style={{ lineHeight: 1.8 }}>
                  Hi Fahad — sharing this because you had asked about Baleno earlier. We currently have a few matching options and can also help if finance support is needed. Are you still looking, or should I share the best available choices for your budget?
                </div>
              </div>
            </section>
          )}

          {/* Smoke checks */}
          <div className="panel-inner" style={{ marginTop: 16 }}>
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Smoke checks</div>
            <div className="smoke-item">&bull; Canvas preview loads without syntax errors</div>
            <div className="smoke-item">&bull; Play Live Demo creates LD-1088 and updates it through qualification</div>
            <div className="smoke-item">&bull; Navigation switches between all tabs</div>
            <div className="smoke-item">&bull; Clicking a row in Lead Records opens that lead in Lead Inbox</div>
          </div>
        </main>
      </div>
    </div>
  );
}