import Link from "next/link"

export default function AboutPage() {
  return (
    <main
      className="relative min-h-[100dvh] overflow-x-hidden bg-white px-5 pb-24 pt-8 text-black md:h-screen md:overflow-hidden md:px-10 md:py-10"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <section className="mx-auto w-full max-w-[1180px] md:h-full">
        <header className="border-b border-black/10 pb-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-black/62">
            Visual Design student based in Belgium, Antwerp
          </p>
          <h1 className="mt-3 text-[clamp(2rem,5.2vw,3.6rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]">
            About me
          </h1>
        </header>

        <div className="mt-6 grid gap-6 md:grid-cols-12 md:gap-8">
          <aside className="md:col-span-4 md:pr-6">
            <dl className="space-y-3 text-[11px] uppercase tracking-[0.08em] text-black/70">
              <div>
                <dt className="font-semibold">Name</dt>
                <dd className="mt-1 text-black/85">Robin Bruyninckx</dd>
              </div>
              <div>
                <dt className="font-semibold">Field</dt>
                <dd className="mt-1 text-black/85">Visual Design</dd>
              </div>
              <div>
                <dt className="font-semibold">Based in</dt>
                <dd className="mt-1 text-black/85">Belgium, Antwerp</dd>
              </div>
              <div>
                <dt className="font-semibold">Focus</dt>
                <dd className="mt-1 text-black/85">Branding, editorial, packaging, print, web</dd>
              </div>
            </dl>
          </aside>

          <article className="md:col-span-8">
            <div className="max-w-[700px] space-y-4 text-[clamp(0.95rem,1.1vw,1.06rem)] leading-[1.6] text-black/88">
              <p>
                I&apos;m a Visual Design student working across branding, editorial design,
                packaging, print, web design and image making.
              </p>

              <p>
                My work starts from research, references, typography and image experiments. I focus on
                building visual systems that fit the idea, context and material, not only the final look.
              </p>

              <p>
                This portfolio combines school projects and personal work, showing how I develop ideas
                into clear design outcomes.
              </p>
            </div>

            <section className="mt-7 border-t border-black/10 pt-5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-black/62">Focus areas</h2>

              <ul className="mt-3 space-y-2 text-[12px] leading-[1.45] text-black/86">
                <li><span className="font-semibold">Branding</span> — visual identities, tone and systems</li>
                <li><span className="font-semibold">Editorial design</span> — layout, rhythm and publication design</li>
                <li><span className="font-semibold">Packaging</span> — structure, material and shelf presence</li>
                <li><span className="font-semibold">Print</span> — paper, format and production choices</li>
                <li><span className="font-semibold">Web design</span> — digital structure and visual hierarchy</li>
                <li><span className="font-semibold">Visual research</span> — references, testing and concept development</li>
                <li><span className="font-semibold">Image making</span> — creating and directing visual language</li>
              </ul>
            </section>

            <section className="mt-6 border-t border-black/10 pt-5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-black/62">Current interests</h2>
              <ul className="mt-3 space-y-1 text-[12px] leading-[1.45] text-black/86">
                <li>visual systems and identity</li>
                <li>typography in print and digital contexts</li>
                <li>material, texture and image as part of design</li>
              </ul>
            </section>

          </article>
        </div>
      </section>

      <nav className="relative z-30 mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-bold uppercase leading-[1] md:absolute md:bottom-3 md:left-3 md:mt-0 md:flex-col md:gap-y-1 md:text-[12px] md:bottom-4 md:left-4">
        <Link href="/" className="hover:text-black">
          Home
        </Link>
        <Link href="/projects" className="hover:text-black">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-black">
          Contact
        </Link>
        <a
          href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/robinbruyninck/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          Instagram
        </a>
      </nav>
    </main>
  )
}
