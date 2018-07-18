import * as React from 'react'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'

import 'assets/css/global.css'
import { ThemeProvider, theme } from 'config/theme'
import nav from 'config/navigation'
import Header from './app/Header'
import Footer from './app/Footer'
import Side from './app/Side'
import Page from './app/Page'
import store from 'store'
import S from './App.styled'

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <S.Layout>
          <Side nav={nav}/>
          <S.Main>
            <Header/>
            <Page/>
            <Footer/>
          </S.Main>
        </S.Layout>
      </ThemeProvider>
    </Provider>
  )
}
