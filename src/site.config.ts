import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "Johnny",
	description:
		"An open journal. Experiences, lessons learned, things I've realised to be true, some poetry, and the occasional bit of tech — written for whoever's looking for an answer and happens to find it here.",
	// Home hero: add quotes here and a random one shows on every reload,
	// styled as a blockquote with its attribution. Leave the array empty
	// to show `description` above instead.
	heroQuotes: [
		{
			text: "It is not that we have a short time to live, but that we waste a lot of it.",
			author: "Seneca",
		},
		{
			text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
			author: "Marcus Aurelius",
		},
		{
			text: "How vain it is to sit down to write when you have not stood up to live.",
			author: "Henry David Thoreau",
		},
		{
			text: "Start before you feel ready. You will never feel ready.",
		},
	],
	lang: "en-US",
	ogLocale: "en_US",
	sortPostsByUpdatedDate: false,
	title: "plain",
	// Keeps the "🚀 Powered by Astro Sienna" credit (https://github.com/AnjayGoel/astro-sienna)
	// out of the rendered footer; the markup lives on in Footer.astro.
	hideThemeCredit: true,
	// Every field besides `name` is optional — absent ones are hidden site-wide.
	profile: {
		name: "Johnny",
		github: "https://github.com/johnnysedh3lllo",
	},
	// Uncomment & fill in to enable Giscus comments on every post.
	// comments: {
	// 	repo: "your-handle/your-repo",
	// 	repoId: "...",
	// 	category: "General",
	// 	categoryId: "...",
	// },
};

export const menuLinks: { path: string; title: string }[] = [
	// Home lives on the wordmark; no explicit nav link.
	{
		path: "/writings/",
		title: "Writings",
	},
	{
		path: "/about/",
		title: "About",
	},
];

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			editorActiveTabBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			editorTabBarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
			frameBoxShadowCssValue: "none",
			terminalBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			terminalTitlebarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["min-dark", "min-light"],
	useThemedScrollbars: false,
};
