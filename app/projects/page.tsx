import Image from "next/image"
import Link from "next/link"

import { projects as projectItems } from "./projects-data"

export default function ProjectsPage() {
  return (
    <main
      className="relative flex min-h-[100dvh] flex-col overflow-x-hidden bg-white px-4 py-6 text-black md:px-8 md:py-8"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <h1 className="pointer-events-none relative z-40 mx-auto flex w-full max-w-[1600px] flex-col justify-between pl-[6%] text-[clamp(2.8rem,16vw,5.6rem)] font-black uppercase leading-[0.76] tracking-[-0.065em] md:h-[84vh] md:pl-[8%] md:text-[clamp(3.2rem,15vw,11rem)]">
        <span className="block">PRO</span>
        <span className="block md:pl-[35%]">JEC</span>
        <span className="block md:pl-[66%]">TS</span>
      </h1>

      <section className="relative z-30 mt-8 grid gap-4 md:hidden">
        {projectItems.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="block overflow-hidden border border-black/10 bg-white"
          >
            <div className="relative aspect-[4/3] w-full bg-neutral-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-1 border-t border-black/10 px-4 py-3">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-[15px] font-black uppercase leading-[0.95] tracking-[-0.04em]">
                  {project.title}
                </h2>
                <span className="shrink-0 text-[11px] font-bold uppercase leading-none">
                  {project.year}
                </span>
              </div>

              <p className="text-[11px] font-bold uppercase leading-[1] tracking-[-0.02em]">
                {project.meta}
              </p>

              <p className="max-w-[95%] text-[13px] leading-[1.2] tracking-[-0.02em] text-black/75">
                {project.place}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <Link
        href="/projects/project-1"
        className="pointer-events-auto absolute bottom-[4%] left-[14%] z-10 hidden w-[clamp(290px,26vw,410px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995] md:block"
      >
        <div className="w-full">
          <Image
            src="/Project 1.jpg"
            alt="Artwork poster"
            width={1200}
            height={1200}
            sizes="16vw"
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </Link>

      <Link
        href="/projects/project-2"
        className="pointer-events-auto absolute left-[46%] top-[8%] z-10 hidden w-[clamp(240px,32vw,460px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995] md:block"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/project2.jpg"
            alt="Graphic artwork"
            fill
            sizes="32vw"
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <Link
        href="/projects/project-3"
        className="pointer-events-auto absolute left-[6%] top-[40px] z-0 hidden w-[clamp(350px,32vw,520px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995] md:block"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src="/Project 4.jpg"
            alt="Project artwork four"
            fill
            sizes="14vw"
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <Link
        href="/projects/project-4"
        className="pointer-events-auto absolute right-[6%] top-[28%] z-10 hidden w-[clamp(240px,18vw,320px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995] md:block"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src="/project3.jpg"
            alt="Project artwork three"
            fill
            sizes="13vw"
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <Link
        href="/projects/project-5"
        className="absolute bottom-[9%] left-[46%] z-20 hidden w-[clamp(240px,24vw,420px)] cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.015] active:scale-[0.995] md:block"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <video
            className="pointer-events-none h-full w-full object-cover"
            muted
            playsInline
            preload="metadata"
          >
            <source src="/portfolio.mp4#t=0.8" type="video/mp4" />
          </video>
        </div>
      </Link>

      <nav className="relative z-20 mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-bold uppercase leading-[1] md:absolute md:bottom-3 md:left-3 md:mt-0 md:flex-col md:gap-y-1 md:text-[12px] md:bottom-4 md:left-4">
        <Link href="/" className="hover:text-black">
          Home
        </Link>
        <Link href="/about" className="hover:text-black">
          About
        </Link>
        <a href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/robinbruyninck/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          Instagram
        </a>
        <Link href="/contact" className="hover:text-black">
          Contact
        </Link>
      </nav>
    </main>
  )
}