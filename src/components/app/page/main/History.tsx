import * as React from 'react'
import { connect } from 'react-redux'
import memoize from 'memoize-one'
import { IState } from 'store'
import styled from 'config/theme'
import Heading2 from 'components/shared/ui/Heading2'
import Radio from 'components/shared/ui/Radio'
import { List, ListItem, ListTitle } from 'components/shared/ui/List'
import PageMainHistoryRecord from './history/Record'

interface Props {
  items: IAccountItem[],
  style?: React.CSSProperties,
}
type TFilter = { type: '' | 'in' | 'out' }
interface State {
  filter: TFilter
}

class PageMainHistory extends React.PureComponent<Props, State> {
  state: State = {
    filter: {
      type: '',
    },
  }

  filterItems = memoize(
    (items: IAccountItem[], filter: TFilter) => {
      return filter.type ? items.filter(item => item.type === filter.type) : items
    },
  )

  filterType = (type: '' | 'in' | 'out') => this.setState({ filter: { type } })

  render() {
    const { filter } = this.state
    const { items, style } = this.props
    const filteredItems = this.filterItems(items, filter)

    return (
      <StyledRoot style={style}>
        <Heading2>История платежей</Heading2>
        <StyledListWrapper>
          <StyledListContent>
            <List title={'19 апреля'}>
              {filteredItems.map(item => (
                <ListItem key={item.transactionId}>
                  <PageMainHistoryRecord type={item.type} text={item.description} value={item.value} />
                </ListItem>
              ))}
            </List>
          </StyledListContent>
          <StyledListFilter>
            <ListTitle style={{ marginBottom: '10px' }}>Тип операции</ListTitle>
            <Radio onChange={this.filterType} option={''} value={filter.type}>Все платежи</Radio>
            <Radio onChange={this.filterType} option={'in'} value={filter.type}>Пополнение</Radio>
            <Radio onChange={this.filterType} option={'out'} value={filter.type}>Списание</Radio>
          </StyledListFilter>
        </StyledListWrapper>
      </StyledRoot>
    )
  }
}

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

const mapStateToProps = (state: IState, ownProps: { style?: React.CSSProperties }): Props => ({
  items: state.account.items,
  style: ownProps.style,
})
export default connect(mapStateToProps)(PageMainHistory)
