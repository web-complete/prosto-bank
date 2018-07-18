import styled from 'config/theme'

const S: any = {}
S.Root = styled.li`
  display: block;
  & > .nav-item {
    display: block;
    text-decoration: none;
    padding: 12px 20px 12px 30px;
    font-size: 13px;
    color: #fff;
    transition: all 0.2s ease;
  }
  & > .nav-item:hover {
    background: ${props => props.theme.colorPrimaryHover};
  }
  & > .nav-item.active {
    background: ${props => props.theme.colorPrimaryActive};
  }
`

export default S
