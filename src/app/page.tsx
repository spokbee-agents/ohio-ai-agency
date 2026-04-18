"use client";

import { motion } from "framer-motion";
import {
  Headset,
  BriefcaseBusiness,
  TrendingUp,
  Brain,
  Server,
  Shield,
  Cloud,
  HardDrive,
  Sparkles,
  ChevronRight,
  Bot,
  Check,
  ArrowRight,
  Mail,
  Database,
  MessageSquareText,
  Receipt,
  BarChart3,
  Zap,
} from "lucide-react";

/* ─── animation helpers ─── */
const fade = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── section wrapper ─── */
function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className={`relative mx-auto max-w-6xl px-6 py-24 sm:py-32 ${className}`}
    >
      {children}
    </motion.section>
  );
}

/* ─── reusable card ─── */
function Card({
  icon: Icon,
  title,
  children,
  i = 0,
  accent = "blue",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  i?: number;
  accent?: "blue" | "violet" | "rose";
}) {
  const ring = {
    blue: "group-hover:ring-blue-500/30",
    violet: "group-hover:ring-violet-500/30",
    rose: "group-hover:ring-rose-500/30",
  };
  const iconBg = {
    blue: "bg-blue-500/10 text-blue-400",
    violet: "bg-violet-500/10 text-violet-400",
    rose: "bg-rose-500/10 text-rose-400",
  };
  return (
    <motion.div
      variants={fade}
      custom={i}
      className={`group glass rounded-2xl p-6 ring-1 ring-white/[0.06] transition-all duration-300 hover:-translate-y-1 ${ring[accent]}`}
    >
      <div
        className={`mb-4 inline-flex rounded-xl p-3 ${iconBg[accent]}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{children}</p>
    </motion.div>
  );
}

/* ─── pricing card ─── */
function PricingCard({
  tier,
  price,
  items,
  featured = false,
  i = 0,
}: {
  tier: string;
  price: string;
  items: string[];
  featured?: boolean;
  i?: number;
}) {
  return (
    <motion.div
      variants={fade}
      custom={i}
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "glow ring-2 ring-blue-500/40 bg-gradient-to-b from-blue-500/[0.08] to-transparent"
          : "glass ring-1 ring-white/[0.06]"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-blue-500 px-3 py-0.5 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-white">{tier}</h3>
      <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
        {price}
      </p>
      <ul className="mt-6 flex-1 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
            {item}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.06] px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10"
      >
        Get Started <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="grid-bg relative min-h-screen overflow-hidden">
      {/* ── ambient blurs ── */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-[60%] -right-40 h-[400px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />

      {/* ── nav ── */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.04] bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white">
            <Bot className="h-6 w-6 text-blue-400" />
            Ohio AI Agency
          </a>
          <div className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
            <a href="#use-cases" className="transition hover:text-white">Services</a>
            <a href="#architecture" className="transition hover:text-white">How It Works</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
          >
            Book a Call
          </a>
        </div>
      </nav>

      {/* ════════════════════════════════════════
         1. HERO
         ════════════════════════════════════════ */}
      <Section className="pt-32 pb-16 text-center sm:pt-44">
        <motion.div variants={fade} custom={0} className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-zinc-400">
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          Now serving Ohio businesses
        </motion.div>

        <motion.h1
          variants={fade}
          custom={1}
          className="mx-auto mt-8 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl"
        >
          Hire your first AI employee.{" "}
          <span className="gradient-text">Custom-built in Ohio.</span>
        </motion.h1>

        <motion.p
          variants={fade}
          custom={2}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          We design, train, and deploy autonomous AI assistants for your personal
          life and your business. Reclaim your time, scale your customer service,
          or automate your trading.
        </motion.p>

        <motion.div variants={fade} custom={3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="glow inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Book a Free Consultation
            <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href="#what-is"
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-8 py-3.5 text-sm font-medium text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            Learn More
          </a>
        </motion.div>
      </Section>

      {/* ════════════════════════════════════════
         2. WHAT IS AN AI ASSISTANT?
         ════════════════════════════════════════ */}
      <Section id="what-is">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.p variants={fade} className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Beyond Chatbots
            </motion.p>
            <motion.h2
              variants={fade}
              custom={1}
              className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              What is an AI Assistant?
            </motion.h2>
            <motion.p
              variants={fade}
              custom={2}
              className="mt-5 text-base leading-relaxed text-zinc-400"
            >
              An AI Assistant isn&apos;t just a chatbot — it&apos;s a{" "}
              <span className="text-white font-medium">digital worker</span> that
              connects to your software tools, understands your business data, and
              executes complex tasks autonomously.
            </motion.p>
            <motion.p
              variants={fade}
              custom={3}
              className="mt-4 text-base leading-relaxed text-zinc-400"
            >
              It answers emails, analyzes spreadsheets, talks to customers, and
              works 24/7 — without breaks, without benefits, without burnout.
            </motion.p>
          </div>

          <motion.div
            variants={fade}
            custom={2}
            className="glass grid grid-cols-2 gap-4 rounded-2xl p-6"
          >
            {[
              { label: "Answers emails", icon: "📬" },
              { label: "Books meetings", icon: "📅" },
              { label: "Analyzes data", icon: "📊" },
              { label: "Chats with customers", icon: "💬" },
              { label: "Writes reports", icon: "📝" },
              { label: "Works 24/7", icon: "⏰" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
         2b. CONCRETE EXAMPLES
         ════════════════════════════════════════ */}
      <Section id="examples">
        <motion.p variants={fade} className="text-center text-sm font-semibold uppercase tracking-widest text-blue-400">
          Real-World Automation
        </motion.p>
        <motion.h2
          variants={fade}
          custom={1}
          className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          What can an AI Agent actually do?
        </motion.h2>
        <motion.p
          variants={fade}
          custom={2}
          className="mx-auto mt-4 max-w-2xl text-center text-zinc-400"
        >
          Forget the buzzwords. Here are six specific, high-value tasks an AI
          agent executes autonomously — every single day, without supervision.
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card icon={Mail} title="Inbox Triage & Drafting" i={0} accent="blue">
            Reads every incoming email, categorizes by urgency, and drafts
            personalized replies in your exact tone of voice.
          </Card>
          <Card icon={Database} title="CRM Data Entry" i={1} accent="violet">
            Listens to your sales calls or reads meeting transcripts,
            automatically extracting action items and updating
            Salesforce/HubSpot.
          </Card>
          <Card icon={MessageSquareText} title="24/7 Lead Qualification" i={2} accent="rose">
            Engages website visitors instantly, asks qualifying questions, and
            books high-intent leads directly onto your calendar.
          </Card>
          <Card icon={Receipt} title="Invoice & Expense Processing" i={3} accent="blue">
            Monitors an inbox for PDF invoices, extracts line items via Vision
            AI, and pushes the data directly into QuickBooks.
          </Card>
          <Card icon={BarChart3} title="Competitor Price Monitoring" i={4} accent="violet">
            Scrapes competitor websites daily, tracking price changes and
            automatically adjusting your eCommerce listings to maintain margins.
          </Card>
          <Card icon={Zap} title="Algorithmic Trade Execution" i={5} accent="rose">
            Monitors live stock/crypto data streams and executes trades via API
            the millisecond your custom mathematical parameters are met.
          </Card>
        </div>
      </Section>

      {/* ════════════════════════════════════════
         3. USE CASES
         ════════════════════════════════════════ */}
      <Section id="use-cases">
        <motion.p variants={fade} className="text-center text-sm font-semibold uppercase tracking-widest text-blue-400">
          What We Build
        </motion.p>
        <motion.h2
          variants={fade}
          custom={1}
          className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          AI Assistants for Every Role
        </motion.h2>
        <motion.p
          variants={fade}
          custom={2}
          className="mx-auto mt-4 max-w-2xl text-center text-zinc-400"
        >
          From front-desk support to Wall-Street-grade trading, we build agents
          that fit your exact workflow.
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card icon={Headset} title="The Customer Service Rep" i={0} accent="blue">
            Handles 80% of inbound queries, books appointments, and resolves
            tickets instantly — so your team can focus on the work that truly
            matters.
          </Card>
          <Card icon={BriefcaseBusiness} title="The Personal Executive" i={1} accent="violet">
            Drafts your emails, organizes your calendar, and conducts deep
            internet research — like a chief-of-staff that never sleeps.
          </Card>
          <Card icon={TrendingUp} title="The Algorithmic Trader" i={2} accent="rose">
            Analyzes market data streams, monitors stock tickers, and executes
            trades based on your exact mathematical parameters — with
            lightning-fast reaction times.
          </Card>
        </div>
      </Section>

      {/* ════════════════════════════════════════
         4. ARCHITECTURE & PRIVACY
         ════════════════════════════════════════ */}
      <Section id="architecture">
        <motion.p variants={fade} className="text-center text-sm font-semibold uppercase tracking-widest text-blue-400">
          How It Works
        </motion.p>
        <motion.h2
          variants={fade}
          custom={1}
          className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Architecture & Privacy — Your Choice
        </motion.h2>
        <motion.p
          variants={fade}
          custom={2}
          className="mx-auto mt-4 max-w-2xl text-center text-zinc-400"
        >
          Every business has different needs. We let you choose the brain and the
          hosting that fit your risk tolerance and budget.
        </motion.p>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* The Brain */}
          <motion.div variants={fade} custom={0} className="glass rounded-2xl p-8">
            <div className="mb-5 inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-400">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">The Brain</h3>
            <p className="mt-2 mb-6 text-sm text-zinc-400">
              Pick the intelligence level that&apos;s right for you.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl bg-white/[0.03] p-4">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Paid Frontier Models
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    GPT-4o, Claude 3.5 — ultra-powerful reasoning for complex
                    tasks. Best for nuanced customer interactions and deep
                    analysis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl bg-white/[0.03] p-4">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Open-Source Models
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Llama 3, Mistral — absolute data privacy and zero
                    subscription fees. Your data never touches a third-party API.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Hosting */}
          <motion.div variants={fade} custom={1} className="glass rounded-2xl p-8">
            <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
              <Server className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">The Hosting</h3>
            <p className="mt-2 mb-6 text-sm text-zinc-400">
              Decide where your agent lives and where your data stays.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl bg-white/[0.03] p-4">
                <Cloud className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Cloud-Hosted
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Massive scalability, automatic updates, and zero hardware
                    management. Ideal for growing teams.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl bg-white/[0.03] p-4">
                <HardDrive className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Locally Hosted
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Runs on your own office computer. Your sensitive business data
                    never leaves the building — full sovereignty.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
         5. PRICING
         ════════════════════════════════════════ */}
      <Section id="pricing">
        <motion.p variants={fade} className="text-center text-sm font-semibold uppercase tracking-widest text-blue-400">
          Transparent Pricing
        </motion.p>
        <motion.h2
          variants={fade}
          custom={1}
          className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Packages & Pricing
        </motion.h2>
        <motion.p
          variants={fade}
          custom={2}
          className="mx-auto mt-4 max-w-2xl text-center text-zinc-400"
        >
          Straightforward ranges — no hidden fees. Every build includes onboarding,
          training, and 30 days of post-launch support.
        </motion.p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <PricingCard
            tier="Personal Assistant"
            price="$1,000 – $2,500"
            i={0}
            items={[
              "Standard integrations (Email, Calendar)",
              "Cloud-hosted on managed infrastructure",
              "Powered by frontier models (GPT-4o / Claude)",
              "Perfect for individuals reclaiming their time",
              "30-day post-launch support included",
            ]}
          />
          <PricingCard
            tier="Business Rep"
            price="$2,500 – $5,000"
            featured
            i={1}
            items={[
              "Customer-facing AI trained on your docs",
              "Website widget or CRM integration",
              "Custom conversation flows & escalation paths",
              "Analytics dashboard for query insights",
              "60-day post-launch support included",
            ]}
          />
          <PricingCard
            tier="Enterprise & Specialized"
            price="$5,000+"
            i={2}
            items={[
              "High-stakes agents (trading bots, compliance)",
              "Locally hosted open-source models available",
              "Deep system access & custom guardrails",
              "Dedicated account manager",
              "90-day post-launch support included",
            ]}
          />
        </div>
      </Section>

      {/* ════════════════════════════════════════
         6. CTA / CONTACT
         ════════════════════════════════════════ */}
      <Section id="contact" className="pb-32">
        <motion.div
          variants={fade}
          className="glass glow mx-auto max-w-2xl rounded-3xl p-10 text-center sm:p-14"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to hire your AI?
          </h2>
          <p className="mt-4 text-zinc-400">
            Book a free 30-minute consultation. We&apos;ll map your workflow,
            identify the highest-impact automation, and give you a clear quote —
            no obligations.
          </p>
          <a
            href="mailto:hello@ohioaiagency.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Book a Free Consultation
            <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>
      </Section>

      {/* ── footer ── */}
      <footer className="border-t border-white/[0.04] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="flex items-center gap-2 text-sm text-zinc-500">
            <Bot className="h-4 w-4" />
            &copy; {new Date().getFullYear()} Ohio AI Agency. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
