import styled from 'config/theme'

interface HeadingProps {
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number,
}

const Heading = styled.h1.attrs<HeadingProps>({})`
  color: ${props => props.theme.colorPrimary}
  ${p => p.mt ? `margin-top:    ${p.mt * p.theme.spacing}px;` : ''}
  ${p => p.mb ? `margin-bottom: ${p.mb * p.theme.spacing}px;` : ''}
  ${p => p.ml ? `margin-left:   ${p.ml * p.theme.spacing}px;` : ''}
  ${p => p.mr ? `margin-right:  ${p.mr * p.theme.spacing}px;` : ''}
`

const Heading1 = Heading.withComponent('h1').extend`
  font-size: 38px;
`

const Heading2 = Heading.withComponent('h2').extend`
  font-size: 30px;
`

const Heading3 = Heading.withComponent('h3').extend`
  font-size: 18px;
`

export { Heading1, Heading2, Heading3 }
