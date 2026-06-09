import { GithubIcon } from "@/components/icons/github";
import type React from "react";

export type Image = {
	src: string;
	alt?: string;
	caption?: string;
};

export type Social = {
	platform: string;
	link: string;
	icon: React.ReactNode;
};

export type Category = {
	title: string;
	page: string | undefined;
	href: string;
};

export type Meta = {
	title: string;
	description: string;
	image: Image;
};

export type SiteConfig = {
	meta: Meta;
	name: string;
	headshot: string;
	title: string;
	description: string;
	socials: Array<Social>;
	categories: Array<Category>;
};

export const CONFIG: SiteConfig = {
	meta: {
		title: "Hartface",
		description: "This is my portfolio.",
		image: {
			src: "/pfp.jpg",
			alt: "Hartface",
		},
	},
	name: "Hartface",
	headshot: "/pfp.jpg",
	title: "Technical Artist & Pipeline Developer",
	description: `I'm Hartface, an add-on developer and technical artist.
	I provide solutions for problems and make things more efficient.
	I would rather like you to look at my work below.`,
	socials: [
		{
			platform: "GitHub",
			link: "https://github.com/hartface",
			icon: <GithubIcon />,
		}
	],
	categories: [
		{
			title: "All",
			page: undefined,
			href: "/posts",
		},
		{
			title: "Add-ons",
			page: "add-ons",
			href: "/posts/add-ons",
		},
		{
			title: "Blog",
			page: "blog",
			href: "/posts/blog",
		},
	],
};
