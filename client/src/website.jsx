import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ShieldCheck,
  PackageCheck,
  Camera,
  Mic,
  Cpu,
  Projector,
  Triangle,
  Check,
  MapPin,
  Search,
  ChevronDown,
  Clock,
  Leaf,
  BookOpen,
} from "lucide-react";
import "./website.css";

export const paths = {
  home: "/",
  discover: "/equipment",
  guide: "/how-it-works",
  about: "/about",
  help: "/help",
  reservations: "/reservations",
  activity: "/activity",
};
export function currentView() {
  return (
    Object.keys(paths).find(
      (k) =>
        paths[k] === window.location.pathname.replace(/\/$/, "") ||
        (k === "home" && window.location.pathname === "/"),
    ) || "missing"
  );
}
export function PageLink({
  view,
  navigate,
  children,
  className = "",
  category,
}) {
  return (
    <a
      className={className}
      aria-current={currentView() === view ? "page" : undefined}
      href={`${paths[view]}${category ? `?category=${encodeURIComponent(category)}` : ""}`}
      onClick={(e) => {
        if (!e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
          e.preventDefault();
          navigate(view, category);
        }
      }}
    >
      {children}
    </a>
  );
}
const categories = [
  [
    "Cameras",
    Camera,
    "camera",
    "For a new perspective",
    "Photo essays, short films & campus stories",
  ],
  [
    "Audio",
    Mic,
    "audio",
    "Make yourself heard",
    "Interviews, podcasts & field recording",
  ],
  [
    "Electronics",
    Cpu,
    "electronics",
    "Build the next thing",
    "Prototypes, experiments & big little ideas",
  ],
];
export function PageHeading({ eyebrow, title, children }) {
  return (
    <div className="page-intro">
      <div className="eyebrow dark">{eyebrow}</div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
export function CTA({ navigate }) {
  return (
    <section className="site-cta">
      <div>
        <div className="eyebrow">YOUR NEXT IDEA IS WAITING</div>
        <h2>
          Good things start with
          <br />
          the right tools.
        </h2>
        <p>Find what you need. Make something that matters.</p>
      </div>
      <PageLink view="discover" navigate={navigate} className="btn light">
        Find your equipment <ArrowUpRight size={18} />
      </PageLink>
      <span className="cta-orbit" aria-hidden="true" />
    </section>
  );
}
export function Home({ navigate, onJoin }) {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-copy">
          <div className="eyebrow dark">
            <span /> THE CAMPUS EQUIPMENT COLLECTIVE
          </div>
          <h1>
            Big ideas.
            <br />
            Borrowed gear.
            <br />
            <em>All yours to make.</em>
          </h1>
          <p>
            Your next short film, first prototype, or campus event starts here.
            Discover and reserve the equipment to bring it to life.
          </p>
          <div className="hero-actions">
            <PageLink
              view="discover"
              navigate={navigate}
              className="btn primary"
            >
              Explore equipment <ArrowUpRight size={18} />
            </PageLink>
            <PageLink view="guide" navigate={navigate} className="quiet-link">
              How it works <ArrowRight size={16} />
            </PageLink>
          </div>
          <div className="hero-reassurance">
            <ShieldCheck size={17} />
            <span>Campus equipment. A simpler way to share.</span>
          </div>
        </div>
        <div className="home-hero-image">
          <img
            src="/images/hero-equipment.jpg"
            alt="Illustrative studio arrangement of creative equipment: a camera, microphone, tripod and electronics board"
            fetchPriority="high"
            onError={(e) => {
              if (!e.currentTarget.src.endsWith("/images/camera.jpg"))
                e.currentTarget.src = "/images/camera.jpg";
            }}
          />
          <span className="image-index">THE CAMPUS TOOLKIT / 01</span>
          <div className="hero-image-note">
            <span>
              <PackageCheck size={22} />
            </span>
            <div>
              <strong>Less coordinating.</strong>
              <p>More creating.</p>
            </div>
            <ArrowUpRight size={20} />
          </div>
        </div>
      </section>
      <div className="trust-row">
        <span>
          <CalendarDays />
          Choose your time
        </span>
        <span>
          <ShieldCheck />
          Get staff approval
        </span>
        <span>
          <PackageCheck />
          Pick up & create
        </span>
        <span className="trust-aside">One campus. Endless possibilities.</span>
      </div>
      <section className="home-section">
        <div className="section-top">
          <div>
            <div className="eyebrow dark">
              A LITTLE GEAR. A LOT OF POTENTIAL.
            </div>
            <h2>What are you working on?</h2>
          </div>
          <PageLink view="discover" navigate={navigate} className="quiet-link">
            Browse all equipment <ArrowUpRight size={17} />
          </PageLink>
        </div>
        <div className="category-showcase">
          {categories.map(([name, Icon, image, title, copy]) => (
            <PageLink
              key={name}
              view="discover"
              category={name}
              navigate={navigate}
              className="category-story"
            >
              <div className="category-photo">
                <img
                  src={`/images/${image}.jpg`}
                  alt={`${name} equipment inspiration`}
                  loading="lazy"
                />
                <span>
                  <Icon size={15} /> {name}
                </span>
                <i>
                  <ArrowUpRight size={21} />
                </i>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </PageLink>
          ))}
        </div>
        <p className="image-disclaimer">
          Illustrative imagery. See each equipment listing for the exact model
          and kit contents.
        </p>
      </section>
      <section className="home-process">
        <div>
          <div className="eyebrow dark">LESS ADMIN. MORE MAKING.</div>
          <h2>
            From “what if” <br />
            to “made it.”
          </h2>
          <p>
            No message chains. No guessing who has the camera. Your next
            project, with a plan.
          </p>
          <PageLink view="guide" navigate={navigate} className="quiet-link">
            Meet your new workflow <ArrowRight size={17} />
          </PageLink>
        </div>
        <div className="process-list">
          {[
            [
              "01",
              "Find your fit",
              "Browse equipment, explore the kit, and check reserved time windows.",
            ],
            [
              "02",
              "Make it a plan",
              "Choose your dates and tell staff a little about your project.",
            ],
            [
              "03",
              "Pick up. Create. Return.",
              "Once approved, collect your gear from its listed campus location.",
            ],
          ].map(([n, t, p]) => (
            <div key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
              <Check size={18} />
            </div>
          ))}
        </div>
      </section>
      <section className="project-feature">
        <div className="project-feature-photo">
          <img
            src="/images/studio.jpg"
            alt="A creative camera setup in natural light"
            loading="lazy"
          />
          <span>THE NEXT STORY COULD BE YOURS.</span>
        </div>
        <div>
          <div className="eyebrow dark">BUILT FOR YOUR CAMPUS LIFE</div>
          <h2>
            Tools for the ideas
            <br />
            outside the syllabus.
          </h2>
          <p>
            Document your club’s big day. Test the circuit you sketched in
            class. Record the conversation worth sharing. CampusSlot helps you
            make room for the work you care about.
          </p>
          <div className="project-chips">
            <span>Short films</span>
            <span>Student clubs</span>
            <span>Prototypes</span>
            <span>Presentations</span>
          </div>
          <button className="btn secondary" onClick={onJoin}>
            Start your next project <ArrowUpRight size={17} />
          </button>
        </div>
      </section>
      <CTA navigate={navigate} />
    </>
  );
}
const rules = [
  [
    "90 days",
    "Plan ahead",
    "Choose pickup and return times within the next 90 days.",
  ],
  ["7 days", "Time to create", "Each booking can last up to seven days."],
  [
    "3 active",
    "Keep it fair",
    "Have up to three pending, approved, or checked-out reservations.",
  ],
];
export function Guide({ navigate }) {
  return (
    <>
      <PageHeading
        eyebrow="YOUR QUICK START GUIDE"
        title="From idea to in your hands."
      >
        A clear path from finding the right equipment to handing it back. Here’s
        how borrowing works.
      </PageHeading>
      <div className="guide-layout">
        <div className="guide-steps">
          {[
            [
              Search,
              "Explore the equipment room",
              "Search by name, category, or pickup location. Open a listing to see specifications, kit contents, and existing reserved windows.",
            ],
            [
              CalendarDays,
              "Request your time slot",
              "Create a student account, choose your pickup and return times, and describe your project in at least 10 characters. Pending requests hold the slot while staff review.",
            ],
            [
              ShieldCheck,
              "Wait for the green light",
              "Check My reservations for approval or a staff note. Approval is required before pickup; submitting a request does not guarantee approval.",
            ],
            [
              PackageCheck,
              "Collect, create, and return",
              "Visit the pickup location shown on your listing during your approved window. Staff record checkout and return. Bring every included accessory back on time.",
            ],
          ].map(([Icon, title, copy], i) => (
            <article key={title}>
              <span className="guide-number">0{i + 1}</span>
              <div>
                <Icon size={23} />
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <aside className="guide-aside">
          <BookOpen size={28} />
          <h3>A good borrower’s checklist</h3>
          {[
            "Check the kit contents at pickup.",
            "Use equipment with care.",
            "Keep track of your return time.",
            "Return all cables and accessories.",
            "Tell pickup staff about any damage.",
          ].map((t) => (
            <p key={t}>
              <Check size={16} />
              {t}
            </p>
          ))}
          <PageLink view="help" navigate={navigate} className="quiet-link">
            More questions? <ArrowUpRight size={17} />
          </PageLink>
        </aside>
      </div>
      <div className="rule-grid">
        {rules.map(([n, t, p]) => (
          <article key={n}>
            <strong>{n}</strong>
            <h3>{t}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
      <CTA navigate={navigate} />
    </>
  );
}
const faqs = [
  [
    "Do I need an account to browse?",
    "No. Anyone can browse the equipment room and view reserved windows. You need a student account to request equipment and see your own reservations.",
  ],
  [
    "How far ahead can I book?",
    "Both pickup and return must fall within the next 90 days. Pickup must be in the future, and each reservation can last up to seven days.",
  ],
  [
    "Can I cancel a reservation?",
    "Yes. Open My reservations and cancel a pending or approved reservation. Its held time slot is then released. For equipment already checked out, visit the pickup staff to arrange a return.",
  ],
  [
    "Why is my request still pending?",
    "A staff coordinator needs to review your project and dates. Check My reservations for the current status and any staff notes. There is no guaranteed approval time.",
  ],
  [
    "Where do I collect my equipment?",
    "Every equipment listing includes its pickup location. Check that location before requesting. Staff can hand over approved equipment during the booked window.",
  ],
  [
    "What if I return something late or damaged?",
    "Contact the staff at the pickup location as soon as possible. Late equipment remains checked out until staff record its return and can delay the next borrower’s pickup. Report missing or damaged parts directly to staff.",
  ],
  [
    "Can I reserve overlapping time slots?",
    "An individual item cannot have overlapping active reservations, including pending requests. Adjacent bookings are allowed. You can have up to three active reservations across the catalog.",
  ],
  [
    "How do staff accounts work?",
    "Staff accounts are created by the campus administrator. Public account registration creates student accounts. Staff can review requests, record checkouts and returns, and view campus activity.",
  ],
];
export function Help({ navigate }) {
  const [q, setQ] = useState("");
  const filtered = faqs.filter((x) =>
    x.join(" ").toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <PageHeading
        eyebrow="A LITTLE HELP GOES A LONG WAY"
        title="Let’s clear things up."
      >
        Booking questions, pickup details, and the things you need to know
        before you go.
      </PageHeading>
      <div className="help-layout">
        <section>
          <div className="search-box faq-search">
            <Search size={20} />
            <input
              aria-label="Search frequently asked questions"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search your question…"
            />
          </div>
          <div className="faq-list">
            {filtered.map(([t, p]) => (
              <details key={t}>
                <summary>
                  {t}
                  <ChevronDown size={18} />
                </summary>
                <p>{p}</p>
              </details>
            ))}
            {!filtered.length && (
              <div className="empty">
                <Search />
                <h3>No matching questions</h3>
                <p>Try “pickup”, “cancel”, or “account”.</p>
                <button className="btn secondary" onClick={() => setQ("")}>
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>
        <aside className="help-aside">
          <div className="eyebrow dark">NEED A HAND IN PERSON?</div>
          <h2>Find your pickup desk.</h2>
          <p>
            For a delayed pickup, equipment issue, or missing accessory, speak
            to the staff at the location on your listing.
          </p>
          {[
            ["Media Lab", "Block A · Room 104", "Cameras & audio"],
            ["AV Desk", "Library · Ground Floor", "Presentation equipment"],
            [
              "Innovation Hub",
              "Block C · Room 208",
              "Electronics & prototyping",
            ],
            ["Equipment Store", "Block B · Room 012", "Accessories"],
          ].map(([t, p, c]) => (
            <div className="desk" key={t}>
              <MapPin size={19} />
              <div>
                <h3>{t}</h3>
                <p>{p}</p>
                <small>{c}</small>
              </div>
            </div>
          ))}
          <p className="small">
            Confirm desk opening hours with your campus before travelling.
          </p>
        </aside>
      </div>
      <CTA navigate={navigate} />
    </>
  );
}
export function About({ navigate }) {
  return (
    <>
      <PageHeading
        eyebrow="GOOD EQUIPMENT. GREAT IDEAS. YOUR CAMPUS."
        title="More access. More possibility."
      >
        CampusSlot makes it easier to find, borrow, and look after the tools
        your campus already shares.
      </PageHeading>
      <div className="about-banner">
        <img
          src="/images/campus.jpg"
          alt="Students gathering together on campus"
        />
        <div>
          <span className="eyebrow">MADE FOR CAMPUS LIFE</span>
          <h2>
            Ideas grow better
            <br />
            when tools are shared.
          </h2>
        </div>
      </div>
      <section className="about-story">
        <h2>
          The right tool shouldn’t
          <br />
          be the missing piece.
        </h2>
        <div>
          <p>
            A camera for a documentary. A microphone for an interview. An
            Arduino for the prototype that might just work. Campus equipment
            creates possibilities, but finding it and arranging a handover can
            take more effort than it should.
          </p>
          <p>
            CampusSlot brings that process together: a searchable equipment
            room, clear reservation windows, staff approvals, and a shared
            record of pickups and returns.
          </p>
        </div>
      </section>
      <div className="values-grid">
        {[
          [
            Camera,
            "For students",
            "Find the kit that fits your idea, plan your dates, and follow your request in one place.",
          ],
          [
            ShieldCheck,
            "For campus teams",
            "Review requests, coordinate handovers, and keep a clear history of equipment use.",
          ],
          [
            Leaf,
            "For a culture of sharing",
            "Take care of what we share, return it on time, and make room for the next person’s idea.",
          ],
        ].map(([Icon, t, p]) => (
          <article key={t}>
            <Icon />
            <h3>{t}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
      <CTA navigate={navigate} />
    </>
  );
}
export function GuestWorkspace({ onSignIn, navigate, loading }) {
  return (
    <section className="guest-workspace">
      <ShieldCheck size={40} />
      <div className="eyebrow dark">YOUR CAMPUS WORKSPACE</div>
      <h1>
        {loading
          ? "Opening your workspace…"
          : "Your projects, all in one place."}
      </h1>
      <p>
        Sign in to follow your reservations, see staff updates, and review your
        borrowing history.
      </p>
      <button className="btn primary" onClick={onSignIn} disabled={loading}>
        Sign in to continue <ArrowRight size={17} />
      </button>
      <PageLink view="discover" navigate={navigate} className="quiet-link">
        Explore equipment first <ArrowUpRight size={17} />
      </PageLink>
    </section>
  );
}
export function Missing({ navigate }) {
  return (
    <section className="guest-workspace">
      <div className="eyebrow dark">404 · PAGE NOT FOUND</div>
      <h1>This page isn’t on campus.</h1>
      <p>Head back to the equipment room to find what you need.</p>
      <PageLink view="home" navigate={navigate} className="btn primary">
        Back to home <ArrowRight size={17} />
      </PageLink>
    </section>
  );
}
