import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/src/components/theme-switch";
import {
	GithubIcon,
	LinkedInIcon,
	NextJsIcon,
	SearchIcon,
} from "@/src/components/icons";

import { Logo } from "@/src/components/icons";

export const Navbar = () => {

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">Vigneron Luc</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-6 justify-start ml-10">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden lg:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden lg:flex gap-2">
					<a className="w-full" href={'/VigneronLuc.pdf'} download="CV Vigneron Luc.pdf">
						<Button fullWidth className="bg-teal-500 text-white">Mon CV</Button>
					</a>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.linkedIn} aria-label="LinkedIn">
						<LinkedInIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<Link isExternal href={siteConfig.links.linkedIn} aria-label="LinkedIn">
					<LinkedInIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="h-3/4 mx-4 mt-2 flex flex-col gap-2 justify-around">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem className="bg-slate-500 bg-opacity-20 p-8 rounded-xl" key={`${item}-${index}`}>
							<Link
								color={"foreground"}
								href={item.href}
								size="lg"
								className="flex items-center text-3xl"
							>
								<span className="w-full text-center">{item.label}</span>
							</Link>
						</NavbarMenuItem>
					))}

					{/* <a className="w-full " href={'/VigneronLuc.pdf'} download="CV Vigneron Luc.pdf">
						<Button fullWidth color="danger" className="text-3xl p-8 bg-opacity-20">Mon CV</Button>
					</a> */}
					<NavbarMenuItem className="bg-teal-500 bg-opacity-40 p-8 rounded-xl">
						<a
							href={'/VigneronLuc.pdf'}
							className="flex items-center text-3xl"
							download="CV Vigneron Luc.pdf"
						>
							<span className="w-full text-center">Mon CV</span>
						</a>
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
