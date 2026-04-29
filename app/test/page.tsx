    import Image from "next/image"
    import Link from "next/link"

    const projects = [
    {
        title: "Studio Floren",
        category: "BRANDING",
        description:
        "A visual identity for a young creative studio focused on floral concepts.",
        technical_description:
        "Brand identity system including logo exploration, typography, color palette, layout rules and visual applications.",
        images: ["/images/studio-floren-01.jpg"],
        software: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
        date_of_production: "2025-08-06",
        year: 2025,
        organisation: "Personal / School Project",
        href: "/projects/studio-floren",
    },
    {
        title: "Raspberry Comfort",
        category: "BRANDING",
        description:
        "A packaging and brand concept for a cereal product built around comfort, care and a premium visual language.",
        technical_description:
        "Packaging design with brand strategy, archetype research, box layout, typography, color system and mockup development.",
        images: ["/images/raspberry-comfort-01.jpg"],
        software: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
        date_of_production: "2025-05-18",
        year: 2025,
        organisation: "School Project",
        href: "/projects/raspberry-comfort",
    },
    {
        title: "Portfolio Website",
        category: "WEB DESIGN",
        description:
        "A minimal portfolio website presenting selected work through clean structure, typography and simple navigation.",
        technical_description:
        "Website designed and developed with Next.js, Tailwind CSS and reusable components.",
        images: ["/images/portfolio-website-01.jpg"],
        software: ["Next.js", "Tailwind CSS", "Visual Studio Code", "GitHub", "Netlify"],
        date_of_production: "2026-04-26",
        year: 2026,
        organisation: "Personal Project",
        href: "/projects/portfolio-website",
    },
    {
        title: "The Climate Shift",
        category: "WEB DESIGN",
        description:
        "An educational interface concept for children that explains climate change through interactive visual storytelling.",
        technical_description:
        "Interactive prototype with navigation structure, map interaction, quiz flow and climate comparison concept.",
        images: ["/images/climate-shift-01.jpg"],
        software: ["Figma", "Next.js", "Tailwind CSS", "Adobe Illustrator"],
        date_of_production: "2025-11-01",
        year: 2025,
        organisation: "School Project",
        href: "/projects/the-climate-shift",
    },
    {
        title: "Ruis Magazine",
        category: "EDITORIAL DESIGN",
        description:
        "An editorial research project exploring noise as a visual and conceptual element within printed media.",
        technical_description:
        "Magazine layout with grid systems, image treatment, typographic hierarchy, paper research and experimental visual tests.",
        images: ["/images/ruis-magazine-01.jpg"],
        software: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
        date_of_production: "2026-04-15",
        year: 2026,
        organisation: "School Project",
        href: "/projects/ruis-magazine",
    },
    {
        title: "Exodus Air Boarding Pass",
        category: "PRINT",
        description:
        "A speculative boarding pass used as a graphic object to communicate migration, risk and imagined departure.",
        technical_description:
        "Large-format vertical print design with strict grid, typographic hierarchy and fictional flight information.",
        images: ["/images/exodus-air-boarding-pass-01.jpg"],
        software: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
        date_of_production: "2026-04-13",
        year: 2026,
        organisation: "School Project",
        href: "/projects/exodus-air-boarding-pass",
    },
    {
        title: "Flying Object Identity Banner",
        category: "PRINT",
        description:
        "A visual banner concept showing a migrant rubber boat reimagined as a flying object.",
        technical_description:
        "Large-format banner design combining image research, documentary visual language, composition and final print preparation.",
        images: ["/images/flying-object-banner-01.jpg"],
        software: ["Adobe Photoshop", "Adobe InDesign"],
        date_of_production: "2026-04-13",
        year: 2026,
        organisation: "School Project",
        href: "/projects/flying-object-identity-banner",
    },
    {
        title: "CineCity Transit",
        category: "VISUAL SYSTEMS",
        description:
        "A visual concept based on transition periods in life, translated into abstract systems and graphic explorations.",
        technical_description:
        "Concept development with analogue and digital visual tests, design principles, image sequences and system rules.",
        images: ["/images/cinecity-transit-01.jpg"],
        software: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
        date_of_production: "2025-10-27",
        year: 2025,
        organisation: "School Project",
        href: "/projects/cinecity-transit",
    },
    {
        title: "Alpro Visual Experience",
        category: "IMAGE-MAKING",
        description:
        "A visual experiment for Alpro using a green acid-inspired style and motion-based product presentation.",
        technical_description:
        "Image and motion-based visual work using product staging, color correction, tracking and VFX elements.",
        images: ["/images/alpro-visual-experience-01.jpg"],
        software: ["Adobe After Effects", "Adobe Premiere Pro", "Adobe Photoshop"],
        date_of_production: "2025-05-24",
        year: 2025,
        organisation: "School Project",
        href: "/projects/alpro-visual-experience",
    },
    {
        title: "Flower Crunch",
        category: "IMAGE-MAKING",
        description:
        "A packaging image concept combining sunflower seeds, dark chocolate and a large floral visual language.",
        technical_description:
        "Image-making and packaging exploration with product styling, visual composition, color testing and mockup creation.",
        images: ["/images/flower-crunch-01.jpg"],
        software: ["Adobe Photoshop", "Adobe Illustrator", "Cinema 4D"],
        date_of_production: "2025-03-11",
        year: 2025,
        organisation: "School Project",
        href: "/projects/flower-crunch",
    },
    ]

    export default function ProjectsPage() {
    return (
        <main
        className="min-h-screen bg-white px-4 py-6 text-black md:px-8 md:py-8"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
        >
        <section className="relative min-h-[84vh]">
            <h1 className="pointer-events-none relative z-0 mx-auto flex w-full max-w-[1600px] flex-col justify-between pl-[6%] text-[clamp(3.2rem,15vw,11rem)] font-black uppercase leading-[0.76] tracking-[-0.065em] md:pl-[8%]">
            <span className="block">PRO</span>
            <span className="block pl-[27%] md:pl-[35%]">JEC</span>
            <span className="block pl-[56%] md:pl-[66%]">TS</span>
            </h1>

            <div className="relative z-10 mx-auto mt-10 grid w-full max-w-[1600px] grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project) => (
                <Link
                key={project.title}
                href={project.href}
                className="group block cursor-pointer"
                >
                <article className="flex h-full flex-col">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                    <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.025]"
                    />
                    </div>

                    <div className="mt-3 border-t border-black pt-2">
                    <div className="flex items-start justify-between gap-4">
                        <h2 className="text-[15px] font-black uppercase leading-[0.95] tracking-[-0.04em]">
                        {project.title}
                        </h2>
                        <span className="shrink-0 text-[11px] font-bold uppercase leading-none">
                        {project.year}
                        </span>
                    </div>

                    <p className="mt-1 text-[11px] font-bold uppercase leading-[1] tracking-[-0.02em]">
                        {project.category}
                    </p>

                    <p className="mt-3 max-w-[95%] text-[13px] leading-[1.2] tracking-[-0.02em] text-black/75">
                        {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
                        {project.software.map((tool) => (
                        <span
                            key={tool}
                            className="text-[10px] font-bold uppercase leading-none text-black/55"
                        >
                            {tool}
                        </span>
                        ))}
                    </div>
                    </div>
                </article>
                </Link>
            ))}
            </div>
        </section>

        <nav className="relative z-20 mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-bold uppercase leading-[1] md:fixed md:bottom-3 md:left-3 md:mt-0 md:flex-col md:gap-y-1 md:text-[12px] md:bottom-4 md:left-4">
            <Link href="/" className="hover:text-black/60">
            Home
            </Link>
            <Link href="/about" className="hover:text-black/60">
            About
            </Link>
            <a
            href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black/60"
            >
            LinkedIn
            </a>
            <a
            href="https://www.instagram.com/robinbruyninck/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black/60"
            >
            Instagram
            </a>
            <Link href="/contact" className="hover:text-black/60">
            Contact
            </Link>
        </nav>
        </main>
    )
    }