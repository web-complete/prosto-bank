import * as React from 'react'
import Text from 'components/shared/ui/Text'
import Price from 'components/shared/ui/Price'

interface Props {
}

const PageMainHead: React.StatelessComponent<Props> = props => (
  <div>
    <Text block weight={400} size={16} colorTheme={'colorGray'}>Всего доступно</Text>
    <Price value={667013.84}
           weight={600}
           size={38}
           colorThemePrimary={'colorPrimary'}
           colorThemeSecondary={'colorGray'} />
  </div>
)

export default PageMainHead
