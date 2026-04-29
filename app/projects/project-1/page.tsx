import Image from "next/image"
import Link from "next/link"

const images = [
  { src: "/Project 1.jpg", alt: "Project 1 - poster", caption: "Opening poster" },
  { src: "/project1.1.jpg", alt: "Project 1 - opening", caption: "Opening composition" },
  { src: "/AdobeStock_570270486.png", alt: "Project 1 - stock illustration", caption: "Stock illustration" },
  { src: "/AdobeStock_570270486S.png", alt: "Project 1 - stock small", caption: "Alternate crop" },
]

export default function ProjectOnePage() {
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
            Project 01 / Vinyl record
          </p>

          <h1 className="mt-2 max-w-[12ch] text-[clamp(3.4rem,9.5vw,7.6rem)] font-black uppercase leading-[0.86] tracking-[-0.06em]">
            Excentriek
          </h1>

          <div className="mt-7 grid gap-6 md:grid-cols-10 md:gap-8">
            <div className="space-y-4 text-[12px] leading-[1.7] text-black/84 md:col-span-6 md:text-[13px]">
              <p>
                Beat Bliss is a vinyl record design created for the artist Excentriek. The project explores
                how sound, movement and energy can be translated into a physical record sleeve.
              </p>

              <p>
                The visual language was developed with crayon and chalk, using expressive marks, rough
                textures and layered movement to reflect the rhythm of the music. These handmade visuals
                were later refined and composed digitally in Photoshop and InDesign, balancing raw
                materiality with a clean typographic structure.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-7 md:mt-9">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:gap-x-14">
            {images.map((im) => (
              <figure key={im.src} className="space-y-2">
                <Image
                  src={im.src}
                  alt={im.alt}
                  width={2200}
                  height={2200}
                  priority={im.src === "/Project 1.jpg"}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="block h-auto w-full"
                />
              </figure>
            ))}

            <div className="mt-2 md:col-span-2 md:grid md:grid-cols-[minmax(0,34rem)_minmax(0,1fr)] md:items-start md:gap-x-12 lg:gap-x-16">
              <dl className="grid max-w-[34rem] grid-cols-[8rem_1fr] gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.1em] text-black/62">
                <dt className="font-semibold">Category</dt>
                <dd className="text-black/86">Vinyl / Identity</dd>

                <dt className="font-semibold">Artist</dt>
                <dd className="text-black/86">Excentriek</dd>

                <dt className="font-semibold">Album</dt>
                <dd className="text-black/86">Beat Bliss</dd>

                <dt className="font-semibold">Year</dt>
                <dd className="text-black/86">2025</dd>

                <dt className="font-semibold">Tools</dt>
                <dd className="text-black/86">Photoshop, InDesign, crayon</dd>
              </dl>

              <div className="mt-6 max-w-[36rem] text-[12px] leading-[1.7] text-black/78 md:mt-0 md:text-[13px]">
              
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}