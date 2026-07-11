const railFormatter = new Intl.DateTimeFormat("en-US", {
	day: "numeric",
	month: "short",
	year: "numeric",
});

const bylineFormatter = new Intl.DateTimeFormat("en-GB", {
	day: "numeric",
	month: "long",
	year: "numeric",
});

const eyebrowFormatter = new Intl.DateTimeFormat("en-US", {
	month: "long",
	year: "numeric",
});

/** Short rail date: `5 Mar 2026`. */
export function formatRailDate(date: Date): string {
	return railFormatter.format(date);
}

/** Article byline date: `5 March 2026`. */
export function formatBylineDate(date: Date): string {
	return bylineFormatter.format(date);
}

/** OG-image eyebrow date: `March 2026`. */
export function formatEyebrowDate(date: Date): string {
	return eyebrowFormatter.format(date);
}
