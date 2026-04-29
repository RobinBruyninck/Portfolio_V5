"use client"

import Image from "next/image"
import Link from "next/link"

export default function EditorialHome() {
	return (
		<main
			className="relative min-h-[100dvh] overflow-x-hidden bg-white px-4 pb-6 pt-5 text-black md:h-screen md:px-0 md:pb-0 md:pt-0 md:overflow-hidden"
			style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
		>
			<h1
				className="group relative z-20 w-full text-left text-[clamp(2.5rem,12vw,4.8rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] md:absolute md:left-0 md:right-0 md:top-0 md:px-1 md:text-[clamp(40px,4.2vw,76px)]"
				style={{ wordSpacing: "0.18em" }}
			>
				<span className="home-line flex w-full flex-col gap-1 transition-transform duration-500 ease-out md:flex-row md:items-baseline md:justify-between group-hover:translate-x-[8px]">
					<span className="whitespace-normal md:whitespace-nowrap">I’M ROBIN,</span>
					<span className="whitespace-normal md:whitespace-nowrap">A VISUAL DESIGN</span>
					<span className="whitespace-normal md:whitespace-nowrap">STUDENT</span>
				</span>
				<span className="home-line flex w-full flex-col gap-1 transition-transform duration-500 ease-out delay-75 md:flex-row md:items-baseline md:justify-between group-hover:translate-x-[-6px]">
					<span className="whitespace-normal md:whitespace-nowrap">WORKING ACROSS</span>
					<span className="whitespace-normal md:whitespace-nowrap">BRANDING, WEB</span>
				</span>
				<span className="home-line flex w-full flex-col gap-1 transition-transform duration-500 ease-out delay-100 md:flex-row md:items-baseline md:justify-between group-hover:translate-x-[7px]">
					<span className="whitespace-normal md:whitespace-nowrap">DESIGN,</span>
					<span className="whitespace-normal md:whitespace-nowrap">EDITORIAL</span>
					<span className="whitespace-normal md:whitespace-nowrap">DESIGN,</span>
				</span>
				<span className="home-line flex w-full flex-col gap-1 transition-transform duration-500 ease-out delay-150 md:flex-row md:items-baseline md:justify-between group-hover:translate-x-[-5px]">
					<span className="whitespace-normal md:whitespace-nowrap">PRINT,</span>
					<span className="whitespace-normal md:whitespace-nowrap">VISUAL SYSTEMS</span>
					<span className="whitespace-normal md:whitespace-nowrap">AND</span>
				</span>
				<span className="home-line block w-full transition-transform duration-500 ease-out delay-200 group-hover:translate-x-[9px]">IMAGE-MAKING.</span>
			</h1>

			<figure className="relative mx-auto mt-6 h-[clamp(320px,62vw,460px)] w-full max-w-[420px] overflow-hidden bg-neutral-200 md:absolute md:bottom-0 md:left-[44%] md:z-10 md:mt-0 md:h-[76vh] md:w-[clamp(320px,34vw,500px)] md:max-w-none">
				<Image
					src="/IMG22.jpg"
					alt="Robin portrait"
					width={900}
					height={1200}
					priority
					sizes="(max-width: 768px) 100vw, 500px"
					className="h-full w-full object-cover object-center grayscale"
				/>
			</figure>

			<nav className="relative z-20 mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-bold uppercase leading-[1] md:absolute md:bottom-3 md:left-3 md:mt-0 md:flex-col md:gap-y-1 md:text-[12px] md:bottom-4 md:left-4">
				<Link href="/projects" className="hover:text-black">
					Projects
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

			<style jsx>{`
				@media (prefers-reduced-motion: reduce) {
					.home-line {
						transition: none !important;
						transform: none !important;
					}
				}
			`}</style>
		</main>
	)
}
