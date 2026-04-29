import Link from "next/link"

export default function PortfolioVideoPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 text-black md:px-8 md:py-8">
      <Link
        href="/projects"
        className="inline-block text-[12px] font-bold uppercase tracking-[0.08em] hover:text-black/70"
      >
        Back to Projects
      </Link>

      <section className="mx-auto mt-6 w-full max-w-5xl">
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <video
            className="h-full w-full"
            controls
            playsInline
            preload="metadata"
            poster="/portfolio-preview.jpg"
          >
            <source src="/portfolio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </main>
  )
}
