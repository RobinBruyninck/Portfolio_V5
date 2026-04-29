export type ProjectItem = {
	id: string
	title: string
	meta: string
	place: string
	year: string
	href: string
	image: string
	objectPosition?: string
	tall?: boolean
}

export const projects: ProjectItem[] = [
	{
		id: "01",
		title: "VISUAL SCORE",
		meta: "PRINT / DIGITAL",
		place: "ANTWERP",
		year: "2025",
		href: "/projects/project-1",
		image: "/visualfn.jpg",
	},
	{
		id: "02",
		title: "PRINT SYSTEM",
		meta: "EDITORIAL",
		place: "BRUSSELS",
		year: "2025",
		href: "/projects/project-2",
		image: "/mock_1.jpg",
	},
	{
		id: "03",
		title: "AIR OF NO NATION",
		meta: "IMAGE MAKING",
		place: "GHENT",
		year: "2024",
		href: "/projects/project-4",
		image: "/project3.jpg",
	},
	{
		id: "04",
		title: "MOTION STILLS",
		meta: "STILLS",
		place: "ANTWERP",
		year: "2024",
		href: "/projects/project-1",
		image: "/IMG22.jpg",
	},
	{
		id: "05",
		title: "POSTER ARCHIVE",
		meta: "POSTER SERIES",
		place: "ANTWERP",
		year: "2023",
		href: "/projects/project-2",
		image: "/portfolio.jpg",
	},
	{
		id: "06",
		title: "FIELD NOTES",
		meta: "EDITORIAL",
		place: "BRUSSELS",
		year: "2023",
		href: "/projects/project-3",
		image: "/IMG_1.jpg",
	},
	{
		id: "07",
		title: "BANNER STUDY",
		meta: "EXHIBITION",
		place: "ANTWERP",
		year: "2026",
		href: "/projects/project-3",
		image: "/banner2.jpg",
		objectPosition: "center",
		tall: true,
	},
	{
		id: "08",
		title: "AFTER THE MESSAGE",
		meta: "VISUAL FX",
		place: "ANTWERP",
		year: "2025",
		href: "/projects/project-5",
		image: "/portfolio-preview.jpg",
	},
]
