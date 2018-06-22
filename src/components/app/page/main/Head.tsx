import * as React from 'react'
import Price from 'components/shared/ui/Price'
import styled from 'config/theme'

interface Props {
}

const PageMainHead: React.StatelessComponent<Props> = props => (
  <StyledRoot>
    <StyledText style={{ marginBottom: '15px' }}>Всего доступно</StyledText>
    <Price value={667013.84}
           weight={600}
           size={38}
           colorThemePrimary={'colorPrimary'}
           colorThemeSecondary={'colorGray'}
           style={{ marginBottom: '15px' }}
    />
    <StyledText>Рублевый счет **0805</StyledText>
  </StyledRoot>
)

const StyledRoot = styled.div``

const StyledText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.colorGray};
`

export default PageMainHead
