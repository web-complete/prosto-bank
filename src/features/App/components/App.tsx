import * as React from 'react'

import { Flex, Box } from '../../../shared/ui/Flex'
import Side from './Side'
import Header from './Header'

interface Props {
}

class App extends React.Component<Props> {
  render () {
    return (
      <Flex styles={{ minHeight: '100vh' }} alignTop>
        <Side/>
        <Box width={'100%'} shrink>
          <Header/>
          content
        </Box>
      </Flex>
    )
  }
}

export default App
