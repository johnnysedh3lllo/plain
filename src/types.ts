export interface ProfileConfig {
	/** Author display name; used in bylines, schema, OG images. */
	name: string;
	/** Contact email shown in About-page socials. Omit to hide. */
	email?: string;
	/** Profile URL on GitHub. Leave empty to hide. */
	github?: string;
	/** Profile URL on LinkedIn. Leave empty to hide. */
	linkedin?: string;
	/** Twitter / X profile URL. Leave empty to hide. */
	twitter?: string;
	/** Mastodon profile URL. Leave empty to hide. */
	mastodon?: string;
	/** Schema.org Person.jobTitle. */
	jobTitle?: string;
	/** Schema.org Person.worksFor.name (current employer). */
	employer?: string;
	/** Schema.org Person.worksFor.url. */
	employerUrl?: string;
	/** Schema.org Person.alumniOf.name. */
	alumni?: string;
	/** Absolute avatar/photo URL used in schema markup. */
	avatar?: string;
}

/** Optional Giscus comment-widget config (https://giscus.app). */
export interface CommentsConfig {
	/** GitHub repository hosting the discussions, e.g. "user/repo". */
	repo: string;
	/** GitHub repo node id (data-repo-id from the giscus wizard). */
	repoId: string;
	/** Discussion category name. */
	category: string;
	/** Discussion category id. */
	categoryId: string;
}

export interface HeroQuote {
	text: string;
	/** Who said it; rendered as "— Name". Omit for your own words. */
	author?: string;
}

export interface SiteConfig {
	/** Site-wide display name; fallback for profile.name. */
	author: string;
	description: string;
	/**
	 * Quotes for the home hero. When non-empty, a random one is shown on each
	 * page load instead of `description` (which stays the SEO/meta text).
	 */
	heroQuotes?: HeroQuote[];
	lang: string;
	ogLocale: string;
	sortPostsByUpdatedDate: boolean;
	title: string;
	/** Personal info for About page, schema, byline. */
	profile?: ProfileConfig;
	/** Giscus comments; skipped if absent. */
	comments?: CommentsConfig;
	hideThemeCredit?: boolean;
}

export interface SiteMeta {
	articleDate?: string | undefined;
	description?: string;
	ogImage?: string | undefined;
	title: string;
}

export type AdmonitionType = "tip" | "note" | "important" | "caution" | "warning";
