import styled from 'config/theme'

const S: any = {}
S.Root = styled.div.attrs<any>({})`
  display: inline-block;
  width: ${p => p.width || '100%'};
  position: relative;
  margin-top: 15px;
  border-bottom: 1px solid ${p => p.theme.colorGray};
  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
    height: 2px;
    width: 0;
    background: ${p => p.theme.colorPrimary};
    z-index: 1;
    transition: all 0.2s;
  }
  &.active::after {
    width: 100%;
  }
  &.error {
    border-bottom: 1px solid ${p => p.theme.colorAlert};
    margin-bottom: 15px;
  }
  &.error.active::after {
    background: ${p => p.theme.colorAlert};
  }
`
S.Label = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  font-size: 14px;
  color: ${p => p.theme.colorGray};
  transition: all 0.2s;
  z-index: 1;
  line-height: 1;
  &.up {
    top: -10px;
    transform: none;
    font-size: 12px;
  }
`
S.Input = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 100%;
  border: none;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
`
S.Error = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  font-size: 12px;
  font-style: italic;
  line-height: 1;
  color: ${p => p.theme.colorAlert};
`

export default S
