export interface Ribbon {
	label: string;
	backgroundColour: string;
	textColour: string;
}

export interface OfferCard {
	offer: string;
	bonus: string;
	condition: string;
	brandLogo: ResponsiveAsset;
	ribbon?: Ribbon;
	htcHeroBannerResponsiveAsset?: ResponsiveAsset;
}

export interface BannerCard {
	banner?: ResponsiveAsset;
	cardSizes: {
		xl: number;
		lg: number;
		md: number;
		sm: number;
		xs: number;
	};
	youtubeVideoId?: string;
}

export interface Card extends Partial<BannerCard>, Partial<OfferCard> {
	active: boolean;
	id: number;
	title: string;
	trackingLink: string;
	tsAndCs?: string;
	tsAndCsLink?: string;
	limiter: number;
	brandName: string | undefined;
	ltid: string;
	cardSizes?: {
		xs: number;
		sm: number;
		md: number;
		lg: number;
		xl: number;
	};
}

export interface Asset {
	width: number;
	height: number;
	location: string;
	name: string;
}

export interface ResponsiveAsset {
	large: Asset;
	medium: Asset;
	small: Asset;
}

export interface WelcomeMessage {
	textBody: string;
	textBodySmall: string;
	backgroundColour: string;
	backgroundImage: ResponsiveAsset;
}
export interface SideBanner {
	title: string;
	trackingLink?: string;
	ltid: string;
	leftAsset: Asset;
	rightAsset: Asset;
}

export interface Category {
	name: string;
	metaDescription: string;
	slug: string;
	promoted: boolean;
	ribbonStyle: string;
	showFilter: boolean;
	welcomeMessage: WelcomeMessage;
	sideBanner: SideBanner;
	noPadding: boolean;
	background: ResponsiveAsset;
	cards: {
		xl: Card[];
		lg: Card[];
		md: Card[];
		sm: Card[];
		xs: Card[];
	};
}

export interface Menu {
	title: string;
	icon: {
		path: string;
		viewBox: string;
		dataIcon: string;
	};
	slug: string;
}
