export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-semibold tracking-tight text-navy">
            PowerAdmin<span className="text-gold">HQ</span>
          </span>
          <a
            href="https://app.jabrium.com?source=pahq&admin=website"
            className="bg-navy text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-navy-dark transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-4xl md:text-5xl font-bold tracking-tight text-navy">
              PowerAdmin<span className="text-gold">HQ</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            You built the community.
            <br />
            Now build the business.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tools for Facebook Group admins who are ready to turn their passion
            into a profession.
          </p>
          <a
            href="https://app.jabrium.com?source=pahq&admin=website"
            className="inline-block bg-navy text-white px-8 py-3.5 rounded-md text-base font-medium hover:bg-navy-dark transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-14">
            Sound familiar?
          </h2>
          <div className="space-y-5 mb-12">
            {[
              "You moderate for free.",
              "You create content for free.",
              "You build engagement for free.",
            ].map((line) => (
              <div
                key={line}
                className="flex items-center gap-4 bg-white rounded-lg px-6 py-4 border border-gray-200"
              >
                <span className="text-gray-400 text-xl shrink-0">&mdash;</span>
                <span className="text-lg text-gray-600">{line}</span>
              </div>
            ))}
            <div className="flex items-center gap-4 bg-navy/5 rounded-lg px-6 py-4 border border-navy/10">
              <span className="text-gold text-xl shrink-0">&rarr;</span>
              <span className="text-lg text-navy font-semibold">
                Facebook profits. You don&apos;t.
              </span>
            </div>
          </div>
          <p className="text-center text-xl text-gray-600 font-medium">
            What if your community could support{" "}
            <span className="text-navy">you</span> directly?
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            What PowerAdminHQ Offers
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            Everything you need to monetize your community — managed through
            conversation, not complicated dashboards.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                title: "Accept Tips",
                desc: "Let your most engaged members show appreciation with direct tips.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                ),
                title: "Paid Memberships",
                desc: "Offer premium access and exclusive content to your most dedicated members.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                ),
                title: "Own Your Email List",
                desc: "Build a contact list you actually own. No algorithm standing between you and your members.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
                title: "Real Analytics",
                desc: "Track what's working. See engagement, revenue, and growth in one place.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                ),
                title: "Conversation-First",
                desc: "Manage everything through conversation with an AI agent. No learning curve.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                title: "You Keep 90%",
                desc: "We handle payments, compliance, and infrastructure. You keep 90% of everything you earn.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:border-navy/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-navy/5 text-navy flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-14">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Connect your community",
                desc: "Download Jabrium and tell us about your group. We'll set everything up for you.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-3.061a4.5 4.5 0 0 0-1.242-7.244l4.5-4.5a4.5 4.5 0 0 1 6.364 6.364l-1.757 1.757" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Choose your path",
                desc: "Tips, paid memberships, or both. Pick what fits your community and start whenever you're ready.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Start earning",
                desc: "We handle payments and compliance. You get paid monthly. You keep 90%.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <div className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-14">
            Who It&apos;s For
          </h2>
          <div className="space-y-4 mb-10">
            {[
              "Admins with 1,000+ engaged members",
              "Groups built around shared passion, expertise, or identity",
              "Leaders ready to treat their community like a business",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 px-6 py-4 bg-white rounded-lg border border-gray-200"
              >
                <svg className="w-5 h-5 text-navy mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-3 px-6 py-4 bg-gray-50 rounded-lg border border-gray-200">
            <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <span className="text-gray-500 italic">
              Not for spammers or get-rich-quick seekers.
            </span>
          </div>
        </div>
      </section>

      {/* The Path Forward */}
      <section className="py-20 px-6 bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            The Path Forward
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            {[
              {
                label: "Start free",
                desc: "Just conversation, no commitment. Explore what's possible.",
              },
              {
                label: "Turn on monetization",
                desc: "When you're ready, flip the switch. We set everything up.",
              },
              {
                label: "Grow your revenue",
                desc: "Tips, memberships, email — stack the tools that work for you.",
              },
              {
                label: "Graduate to your own platform",
                desc: "When you outgrow Facebook, we help you build your own home.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 rounded-lg p-6 border border-white/10"
              >
                <h3 className="font-semibold text-gold mb-1">{item.label}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-lg text-white/80 font-medium">
            We grow with you.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-14">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I have to leave Facebook?",
                a: "No. PowerAdminHQ works alongside your existing group. Keep doing what you're doing — we just add a revenue layer on top.",
              },
              {
                q: "How do payments work?",
                a: "We handle everything — payment processing, compliance, payouts. You get paid monthly via direct deposit.",
              },
              {
                q: "What's the catch?",
                a: "No catch. We take 10% of what you earn. You keep 90%. If you earn nothing, you pay nothing.",
              },
              {
                q: "Is this against Facebook's rules?",
                a: "No. You're offering value outside the group — tips, premium content, email newsletters. Nothing violates Facebook's terms of service.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to get paid for the work you&apos;re already doing?
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Join community leaders who are turning their groups into businesses.
          </p>
          <a
            href="https://app.jabrium.com?source=pahq&admin=website"
            className="inline-block bg-navy text-white px-8 py-3.5 rounded-md text-base font-medium hover:bg-navy-dark transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-400">
            A{" "}
            <span className="font-medium text-gray-500">
              Jabrium Engage
            </span>{" "}
            Property
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
