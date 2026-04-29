import Image from "next/image"
import Link from "next/link"

export default function ProjectFourPage() {
  return (
    <main
      className="min-h-[100dvh] overflow-x-hidden bg-white px-6 pb-14 pt-8 text-black md:px-10 md:pb-20 md:pt-10 lg:px-12"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <section className="mx-auto w-full max-w-[1450px]">
        <Link
          href="/projects"
          className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] hover:text-black/70"
        >
          ← Back to Projects
        </Link>

        <header className="mt-7 md:mt-9">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-black/55">
            PROJECT 04 / IDENTITY SYSTEM
          </p>

          <h1 className="mt-2 text-[clamp(3.2rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
            AIR OF NO NATION
          </h1>

          <div className="mt-7 grid gap-8 md:grid-cols-10 md:items-start">
            <div className="space-y-4 text-[12px] leading-[1.7] text-black/84 md:col-span-6 md:text-[13px]">
              <p>
                Air of No Nation is a fictional airline identity built around the idea of displacement,
                migration and uncertain borders. The project uses the visual language of aviation —
                boarding passes, flight codes, routes, banners and institutional systems — to tell a more
                critical story about people who are forced to move without a clear destination.
              </p>

              <p>
                The identity translates this tension into a graphic system that feels official, structured
                and controlled, while carrying an underlying sense of instability. The boarding pass
                functions as the central object of the project: not only as a travel document, but as a
                narrative tool that questions who is allowed to move, who is registered, and who remains
                invisible.
              </p>

              <p>
                The visual outcome combines clean typographic structure with documentary references and
                symbolic imagery. The project was developed through research, concept writing, image-making
                and layout design, resulting in a fictional identity that sits between aviation branding,
                exhibition design and social commentary.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-10 md:mt-12">
          <div className="grid w-full max-w-[900px] grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:gap-x-14">
            <figure className="w-full max-w-[420px] md:max-w-[320px]">
              <Image
                src="/project3.jpg"
                alt="Air of No Nation — project image"
                width={1417}
                height={3402}
                priority
                sizes="(max-width: 767px) 420px, 320px"
                className="block h-auto w-full"
              />
            </figure>

            <figure className="w-full max-w-[420px] md:max-w-[320px]">
              <Image
                src="/boardingpass.jpg"
                alt="Air of No Nation — boarding pass"
                width={1417}
                height={3402}
                sizes="(max-width: 767px) 420px, 320px"
                className="block h-auto w-full"
              />
            </figure>
          </div>

          <div className="mt-10 w-full max-w-[900px] md:mt-12">
            <dl className="grid max-w-[34rem] grid-cols-[8rem_1fr] gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.1em] text-black/62">
              <dt className="font-semibold">Category</dt>
              <dd className="text-black/86">Identity system</dd>

              <dt className="font-semibold">Focus</dt>
              <dd className="text-black/86">Fictional airline, migration, boarding pass, exhibition</dd>

              <dt className="font-semibold">Format</dt>
              <dd className="text-black/86">Banner / print / identity</dd>

              <dt className="font-semibold">Tools</dt>
              <dd className="text-black/86">Adobe InDesign, Adobe Photoshop</dd>

              <dt className="font-semibold">Year</dt>
              <dd className="text-black/86">2026</dd>
            </dl>
          </div>
        </section>
      </section>
    </main>
  )
}
