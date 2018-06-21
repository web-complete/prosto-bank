import * as React from 'react'
import { ThemeProvider, theme } from '../../src/config/theme'

const WithThemeProvider = props => (<ThemeProvider theme={theme}>{props.children}</ThemeProvider>)

export default WithThemeProvider
