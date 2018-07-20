import * as React from 'react'
import memoize from 'memoize-one'
import { Heading2 } from 'components/shared/ui/Heading'
import Radio from 'components/shared/ui/Radio'
import { List, ListItem, ListTitle } from 'components/shared/ui/List'
import PageMainHistoryRecord from './history/Record'
import S from './History.styled'

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
      <S.Root style={style}>
        <Heading2>История платежей</Heading2>
        <S.ListWrapper>
          <S.ListContent>
            <List title={'19 апреля'}>
              {filteredItems.map(item => (
                <ListItem key={item.transactionId}>
                  <PageMainHistoryRecord type={item.type} text={item.description} value={item.value} />
                </ListItem>
              ))}
            </List>
          </S.ListContent>
          <S.ListFilter>
            <ListTitle style={{ marginBottom: '10px' }}>Тип операции</ListTitle>
            <Radio onChange={this.filterType} option={''} value={filter.type}>Все платежи</Radio>
            <Radio onChange={this.filterType} option={'in'} value={filter.type}>Пополнение</Radio>
            <Radio onChange={this.filterType} option={'out'} value={filter.type}>Списание</Radio>
          </S.ListFilter>
        </S.ListWrapper>
      </S.Root>
    )
  }
}

export default PageMainHistory
