import * as React from 'react'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'

import 'assets/css/global.css'
import styled, { ThemeProvider, theme } from 'config/theme'
import nav from 'config/navigation'
import Header from './app/Header'
import Side from './app/Side'
import Page from './app/Page'
import store from 'store'

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <Side nav={nav}/>
          <StyledMain>
            <Header/>
            <Page/>
          </StyledMain>
        </StyledLayout>
      </ThemeProvider>
    </Provider>
  )
}

const StyledLayout = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
`

const StyledMain = styled.div`
  width: 100%;
  flex: 0 1 auto;
`
