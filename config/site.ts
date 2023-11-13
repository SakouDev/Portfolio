export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Vigneron Luc",
	description: "Portfolio",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Admin",
			href: "/admin",
		},
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Admin",
			href: "/admin",
		},
	],
	links: {
		github: "https://github.com/SakouDev",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
