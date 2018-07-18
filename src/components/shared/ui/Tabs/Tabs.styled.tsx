import styled from 'config/theme'

const S: any = {}
S.List = styled.div`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #ddd
`
S.Item = styled.a.attrs({ href: 'javascript://' })`
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
S.Content = styled.div`
  padding: 20px 0;
`

export default S
