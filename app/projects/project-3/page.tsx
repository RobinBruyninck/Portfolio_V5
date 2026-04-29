import Image from "next/image"
import Link from "next/link"

const gallery = [
  {
    src: "/Project 4.jpg",
    alt: "Visual Score — opening composition",
  },
]

export default function ProjectThreePage() {
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
            PROJECT 03 / VISUAL SCORE
          </p>

          <h1 className="mt-2 text-[clamp(3.2rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
            VISUAL SCORE
          </h1>

          <div className="mt-7 grid gap-8 md:grid-cols-10 md:items-start">
            <div className="space-y-4 text-[12px] leading-[1.7] text-black/84 md:col-span-6 md:text-[13px]">
              <p>
                Visual Score is a graphic research project in which sound is translated into a visual system.
                Instead of designing a traditional image, the project uses rhythm, repetition, contrast and
                spacing to create a score that can be read visually.
              </p>

              <p>
                The work explores how sound can be represented through graphic elements such as line,
                movement, density and sequence. Different visual marks were used to suggest tempo, silence,
                intensity and variation. The final result functions as both an abstract composition and a
                structured interpretation of sound.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-10 md:mt-12">
          <div className="grid grid-cols-1 gap-y-10">
            {gallery.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className="w-full max-w-[900px] space-y-2"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={3780}
                  height={2126}
                  priority
                  sizes="(max-width: 767px) 100vw, 900px"
                  className="block h-auto w-full"
                />

                <div className="mt-10 md:mt-12">
                  <dl className="grid max-w-[34rem] grid-cols-[8rem_1fr] gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.1em] text-black/62">
                    <dt className="font-semibold">Category</dt>
                    <dd className="text-black/86">Visual system</dd>

                    <dt className="font-semibold">Focus</dt>
                    <dd className="text-black/86">Sound, rhythm, sequence, notation</dd>

                    <dt className="font-semibold">Format</dt>
                    <dd className="text-black/86">Print / graphic score</dd>

                    <dt className="font-semibold">Tools</dt>
                    <dd className="text-black/86">Procreate, Adobe Photoshop</dd>

                    <dt className="font-semibold">Year</dt>
                    <dd className="text-black/86">2026</dd>
                  </dl>
                </div>
              </figure>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}