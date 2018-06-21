import * as styledComponents from 'styled-components'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>

export interface ITheme {
  colorPrimary: string,
  colorPrimaryHover: string,
  colorPrimaryActive: string,
  colorGray: string,
  colorAlert: string,
}

const theme: ITheme = {
  colorPrimary: '#252A30',
  colorPrimaryHover: '#2a2f34',
  colorPrimaryActive: '#3b4045',
  colorGray: '#89909d',
  colorAlert: '#df1c41',
}

export default styled
export { css, injectGlobal, keyframes, ThemeProvider, theme }
