import * as React from 'react'
import styled from 'config/theme'
import Heading2 from 'components/shared/ui/Heading2'
import Button from 'components/shared/ui/Button'
import { List, ListItem, ListTitle } from 'components/shared/ui/List'
import PageMainHistoryRecord from './history/Record'

interface Props {
  style?: React.CSSProperties
}

const PageMainHistory: React.StatelessComponent<Props> = props => (
  <StyledRoot style={props.style}>
    <Heading2>История платежей</Heading2>
    <StyledListWrapper>
      <StyledListContent>
        <List title={'19 апреля'}>
          <ListItem>
            <PageMainHistoryRecord type={'in'} text={'Income 1'} value={10000} />
          </ListItem>
          <ListItem>
            <PageMainHistoryRecord type={'in'} text={'Income 1'} value={43500} />
          </ListItem>
          <ListItem>
            <PageMainHistoryRecord type={'out'} text={'Outgoing 1'} value={56300} />
          </ListItem>
        </List>
      </StyledListContent>
      <StyledListFilter>
        <ListTitle style={{ marginBottom: '10px' }}>Тип операции</ListTitle>
        <Button rounded>Все платежи</Button>
        <Button rounded>Пополнение</Button>
        <Button rounded>Списание</Button>
      </StyledListFilter>
    </StyledListWrapper>
  </StyledRoot>
)

const StyledRoot = styled.div``

const StyledListWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`

const StyledListContent = styled.div`
  width: 100%;
  flex: 1 1 auto;
`

const StyledListFilter = styled.div`
  width: 300px;
  flex: 0 0 auto;
  margin-left: 20px;
  & > button {
    margin: 10px 5px 0 0;
  }
`

export default PageMainHistory
