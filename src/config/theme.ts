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
}

const theme: ITheme = {
  colorPrimary: '#252A30',
  colorPrimaryHover: '#3b4045',
}

export default styled
export { css, injectGlobal, keyframes, ThemeProvider, theme }
