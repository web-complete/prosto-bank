import * as styledComponents from 'styled-components'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>

export interface ITheme {
  colorText: string,
  colorPrimary: string,
  colorPrimaryHover: string,
  colorPrimaryActive: string,
  colorGray: string,
  colorGrayLight: string,
  colorAlert: string,
  colorBtnDefault: string,
  colorBtnHover: string,
}

const theme: ITheme = {
  colorText: '#252A30',
  colorPrimary: '#252A30',
  colorPrimaryHover: '#2a2f34',
  colorPrimaryActive: '#3b4045',
  colorGray: '#89909d',
  colorGrayLight: '#d2dade',
  colorAlert: '#df1c41',
  colorBtnDefault: '#df514e',
  colorBtnHover: '#c44c49',
}

export default styled
export { css, injectGlobal, keyframes, ThemeProvider, theme }
