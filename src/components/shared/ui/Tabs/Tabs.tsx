import * as React from 'react'
import { Props as TabProps } from './Tab'
import styled from 'styled-components'

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
      <StyledList>
        {this.props.children.map(item => (
          <StyledItem
            onClick={() => this.onClickTab(item.props.code)}
            className={item.props.code === this.state.active ? 'active' : ''}
            key={item.props.code}
          >
            {item.props.title}
          </StyledItem>
        ))}
      </StyledList>
    )
  }

  renderTabsContent() {
    return (
      <StyledContent>
        {this.props.children.map(item => (
          React.cloneElement(item, {
            active: item.props.code === this.state.active,
            key: item.props.code,
          })
        ))}
      </StyledContent>
    )
  }
}

const StyledList = styled.div`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #ddd
`

const StyledItem = styled.a.attrs({ href: 'javascript://' })`
  text-decoration: none;
  margin: 0 40px 0 0;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.colorGray}
  display: inline-block;
  position: relative;
  &.active {
    color: ${props => props.theme.colorPrimary}
  }
  &.active::after {
    display: block;
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${props => props.theme.colorAlert}
  }
`

const StyledContent = styled.div`
  padding: 20px 0;
`

export default Tabs
