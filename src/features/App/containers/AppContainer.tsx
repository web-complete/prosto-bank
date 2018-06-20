import * as React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-jss'
import 'normalize.css/normalize.css'
import '../../../assets/css/global.css'

import theme from '../../../config/theme'
import store from '../../../store'
import App from '../components/App'

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </Provider>
  )
}
