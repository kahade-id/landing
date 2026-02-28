const securityItems = [
  {
    title: "SOC2 Type 1",
    description:
      "We’ve completed SOC 2 Type 1 examination, independently audited for security, availability, and confidentiality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M12 2 4 6v6c0 4.4 3.6 8 8 10 4.4-2 8-5.6 8-10V6l-8-4Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Encryption",
    description: "Your emails are encrypted in transit and at rest",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 1 1 8 0v3" />
      </svg>
    ),
  },
  {
    title: "Enterprise-Grade Infrastructure",
    description: "Built on secure cloud infrastructure with 99.9% uptime",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <path d="M7 18a4 4 0 1 1 .7-7.9A5 5 0 0 1 17.8 11a3.5 3.5 0 1 1-.3 7H7Z" />
        <rect x="9" y="13" width="6" height="5" rx="1" />
      </svg>
    ),
  },
  {
    title: "Privacy First",
    description: "We never train AI models on your data. Your information stays yours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
        <circle cx="9" cy="8" r="3" />
        <path d="M4 19a5 5 0 0 1 10 0" />
        <rect x="13" y="13" width="7" height="6" rx="1.5" />
        <path d="M14.5 13v-1a2 2 0 1 1 4 0v1" />
      </svg>
    ),
  },
];

const badges = ["SOC 2", "CASA", "GDPR", "CCPA"];

export default function SecuritySection() {
  return (
    <section id="keamanan" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-6xl rounded-[30px] bg-[#2f2f31] px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16 lg:px-16">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Bank-level <span className="text-[#c7b4ff]">security</span> for your peace of mind
          </h2>
        </header>

        <div className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14">
          {securityItems.map((item) => (
            <article key={item.title} className="max-w-md">
              <div className="mb-5 text-[#c7b4ff]">{item.icon}</div>
              <h3 className="text-3xl font-semibold leading-snug tracking-tight">{item.title}</h3>
              <p className="mt-3 text-xl leading-relaxed text-white/72">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="my-12 border-t border-dashed border-white/30 sm:my-14" />

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex h-20 w-20 items-center justify-center rounded-full border border-[#8ca0d8]/40 bg-[#2b3f75] text-base font-bold text-white shadow-inner shadow-black/20 sm:h-24 sm:w-24 sm:text-lg"
            >
              {badge}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl">Secure. Private. Encrypted.</h3>
          <p className="mt-4 text-xl leading-relaxed text-white/75 sm:text-2xl">
            With CASA Tier 3 compliance and industry-leading encryption, your emails stay private, secure, and
            protected—always.
          </p>
        </div>
      </div>
    </section>
  );
}
