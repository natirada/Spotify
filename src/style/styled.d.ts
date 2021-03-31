import 'styled-components'
import {
  colors,
  fontFamilies,
  msColors,
  breakPoints,
} from './themes/defaultTheme'

export type IColors = typeof colors

export type IFontFamilys = typeof fontFamilies

export type IMsColors = typeof msColors

export type IBreakPoints = typeof breakPoints

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors
    msColors: IMsColors
    fontFamilies: IFontFamilys
    breakPoints: IBreakPoints
  }
}
