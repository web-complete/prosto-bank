import * as React from 'react'
import { Props as TabProps } from './Tab'
import S from './Tabs.styled'

interface Props {
  active?: string | null,
  children: React.ReactElement<TabProps>[],
  onSelect?: (code: string) => void,
}

interface State {
  active: string | null,
}

class Tabs extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      active: props.active || null,
    }
  }

  onClickTab(code: string) {
    this.setState({ active: code }, () => {
      this.props.onSelect && this.props.onSelect(code)
    })
  }

  render() {
    return (
      <div>
        {this.renderTabs()}
        {this.renderTabsContent()}
      </div>
    )
  }

  renderTabs() {
    return (
      <S.List>
        {this.props.children.map(item => (
          <S.Item
            onClick={() => this.onClickTab(item.props.code)}
            className={item.props.code === this.state.active ? 'active' : ''}
            key={item.props.code}
          >
            {item.props.title}
          </S.Item>
        ))}
      </S.List>
    )
  }

  renderTabsContent() {
    return (
      <S.Content>
        {this.props.children.map(item => (
          React.cloneElement(item, {
            active: item.props.code === this.state.active,
            key: item.props.code,
          })
        ))}
      </S.Content>
    )
  }
}

export default Tabs
