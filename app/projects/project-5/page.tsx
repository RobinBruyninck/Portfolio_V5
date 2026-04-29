import Link from "next/link"

const videoStudy = {
  src: "/portfolio.mp4",
  caption: "POSITIVE MESSAGE STUDY",

  poster: "/portfolio-preview.jpg",
}

export default function ProjectFivePage() {
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
            PROJECT 05 / VISUAL FX
          </p>

          <h1 className="mt-2 text-[clamp(3.2rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
            AFTER THE MESSAGE
          </h1>

          <div className="mt-7 grid gap-8 md:grid-cols-10 md:items-start md:gap-6">
            <div className="space-y-4 text-[12px] leading-[1.7] text-black/84 md:col-span-6 md:text-[13px]">
              <p>
                Message is a cinematic Visual FX project consisting of two short 30-second video
                studies. Both videos start from the same simple idea: receiving a digital message. From that
                moment on, the emotional atmosphere of the scene changes completely.
              </p>

              <p>
                The first video shows the sad version. Through slower pacing, colder colour grading, darker
                framing and isolated compositions, the video translates feelings of distance, heaviness and
                inner tension. The emotion is not explained directly, but carried by the atmosphere of the
                image.
              </p>

              <p>
                The second video shows the happy version. Warmer light, softer movement, brighter tones and
                a gradual sense of release create a clear contrast with the first video. Together, the two
                videos explore how digital communication can create a deep emotional shift through light,
                colour, camera movement, editing rhythm.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-10 md:mt-12">
          <figure className="w-full max-w-[900px] space-y-2">
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={videoStudy.poster}
              >
                <source src={videoStudy.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <figcaption className="text-[11px] uppercase tracking-[0.1em] text-black/55">
              {videoStudy.caption}
            </figcaption>
          </figure>

          <div className="mt-10 w-full max-w-[900px] md:mt-12">
            <dl className="grid max-w-[34rem] grid-cols-[8rem_1fr] gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.1em] text-black/62">
              <dt className="font-semibold">Category</dt>
              <dd className="text-black/86">Visual FX</dd>

              <dt className="font-semibold">Focus</dt>
              <dd className="text-black/86">Emotion, cinematic storytelling, light, colour</dd>

              <dt className="font-semibold">Format</dt>
              <dd className="text-black/86">Two 30-second videos</dd>

              <dt className="font-semibold">Tools</dt>
              <dd className="text-black/86">After Effects, Premiere Pro, Photoshop</dd>

              <dt className="font-semibold">Year</dt>
              <dd className="text-black/86">2025</dd>
            </dl>
          </div>
        </section>
      </section>
    </main>
  )
}
