import styled from 'config/theme'
import { Calendar } from 'styled-icons/octicons/Calendar'
import 'react-day-picker/lib/style.css'

const S: any = {}
S.Root = styled.div.attrs<any>({})`
  cursor: pointer;
  display: inline-block;
  width: ${props => props.width || '100%'};
  position: relative;
  margin-top: 15px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid ${props => props.theme.colorGray};
  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
    height: 2px;
    width: 0;
    background: ${props => props.theme.colorPrimary};
    z-index: 1;
    transition: all 0.2s;
  }
  &.active::after {
    width: 100%;
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
  color: ${props => props.theme.colorGray};
  transition: all 0.2s;
  z-index: 1;
  line-height: 1;
  &.up {
    top: -10px;
    transform: none;
    font-size: 12px;
  }
`
S.Icon = Calendar.extend`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  height: 14px;
  transition: all 0.2s;
`
S.DateWrapper = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  width: 245px;
  line-height: 1.2;
  background: #fff;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  z-index: 100;
  &.active {
    display: block;
  }
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
