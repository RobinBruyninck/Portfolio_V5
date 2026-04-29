import Image from "next/image"
import Link from "next/link"

const projectImages = [
  {
    src: "/project2.jpg",
    alt: "Project 2 main image",
  },
  {
    src: "/Project2.2.jpg",
    alt: "Project 2 second image",
  },
  {
    src: "/Portfilio.2.3.jpg",
    alt: "Project 2 third image",
  },
  {
    src: "/Portfilio2.4.JPG",
    alt: "Project 2 fourth image",
  },
]

export default function ProjectTwoPage() {
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
            Project 02 / Editorial design
          </p>

          <h1 className="mt-2 whitespace-nowrap text-[clamp(3.2rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
            Midnight Mirage
          </h1>

          <div className="mt-7 grid gap-6 md:grid-cols-10 md:gap-8">
            <div className="space-y-4 text-[12px] leading-[1.7] text-black/84 md:col-span-6 md:text-[13px]">
              <p>
                Midnight Mirage is an editorial design project built around atmosphere, image rhythm and
                contrast. The project explores how nightlife, movement and visual tension can be translated
                into a printed layout.
              </p>

              <p>
                The design combines strong photographic material with a clean typographic structure.
                InDesign was used to build the editorial layout and page rhythm, while Photoshop was used
                to edit, adjust and prepare the imagery. The result is a visual sequence that feels dark,
                cinematic and controlled, while still keeping a clear graphic structure.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-7 md:mt-9">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:gap-x-14">
            {projectImages.map((image) => (
              <figure key={image.src} className="space-y-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={image.src === "/project2.jpg"}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}

            <div className="mt-2 md:col-span-2 md:grid md:grid-cols-[minmax(0,34rem)_minmax(0,1fr)] md:items-start md:gap-x-12 lg:gap-x-16">
              <dl className="grid max-w-[34rem] grid-cols-[8rem_1fr] gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.1em] text-black/62">
                <dt className="font-semibold">Category</dt>
                <dd className="text-black/86">Editorial design</dd>

                <dt className="font-semibold">Project</dt>
                <dd className="text-black/86">Midnight Mirage</dd>

                <dt className="font-semibold">Focus</dt>
                <dd className="text-black/86">Layout, image rhythm, typography</dd>

                <dt className="font-semibold">Year</dt>
                <dd className="text-black/86">2025</dd>

                <dt className="font-semibold">Tools</dt>
                <dd className="text-black/86">Photoshop, InDesign</dd>
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