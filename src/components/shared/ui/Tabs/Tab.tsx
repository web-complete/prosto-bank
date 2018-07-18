import * as React from 'react'
import S from './Tab.styled'

export interface Props {
  code: string,
  title: string,
  active?: boolean,
}

const Tab: React.StatelessComponent<Props> = ({ active, children }) => (
  <S.Root className={active ? 'active' : ''}>
    {children}
  </S.Root>
)

export default Tab
