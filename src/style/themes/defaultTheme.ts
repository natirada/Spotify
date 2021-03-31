import { DefaultTheme } from 'styled-components';

export const colors = {
	white: '#fff',
	black: 'rgb(0,0,0)',
	green: '#1DB954',
};
export const msColors = {
	primaryTextcolor: '#252423',
	lightTextColor: '#484644',
	lightTextColor2: '#605e5C',
	lightBgColor: '#FAF9F8',
	lightBorderColor: '#EDEBE9',
	lightBorderColor2: '#E1DFDD',
	purple: '#6264A7',
	transparentBlack: 'rgba(0, 0, 0, 0.2)',
	hoverColor: 'rgb(16, 110, 190)',
};

export const fontFamilies = {
	GilroyBold: 'Gilroy-Bold',
	GilroyMedium: 'Gilroy-Medium',
	LucidaGrande: 'LucidaGrande',
	SFProRegular: 'SFProText-Regular',
	SFProSemibold: 'SFProText-Semibold',
	TTNormsMedium: 'TTNorms-Medium',
	SegoeUISemilight: 'Segoe-UI-Semilight',
	NotoSansKRMedium: 'NotoSansKR-Medium',
};

export const deviceSizes = {
	tablet: 768,
	mobileL: 550,
	mobileM: 375,
	mobileS: 320,
};

export const breakPoints = {
	tablet: `(max-width: ${deviceSizes.tablet}px)`,
	mobileL: `(max-width: ${deviceSizes.mobileL}px)`,
	mobileM: `(max-width: ${deviceSizes.mobileM}px)`,
	mobileS: `(max-width: ${deviceSizes.mobileS}px)`,
};

const defaultTheme: DefaultTheme = {
	colors,
	msColors,
	fontFamilies,
	breakPoints,
};

export default defaultTheme;
