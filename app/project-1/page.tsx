import Link from "next/link"

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="grid gap-6">
        <Link href="/projects/project-1" className="border p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Project 01</h2>
          <p className="text-gray-600">Korte teaser beschrijving.</p>
        </Link>

        <Link href="/projects/project-2" className="border p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Project 02</h2>
          <p className="text-gray-600">Korte teaser beschrijving.</p>
        </Link>

        <Link href="/projects/project-3" className="border p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Project 03</h2>
          <p className="text-gray-600">Korte teaser beschrijving.</p>
        </Link>
      </div>
    </main>
  )
}