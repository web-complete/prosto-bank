import styled from 'config/theme'
import { ChevronDown } from 'styled-icons/feather/ChevronDown'

const S: any = {}
S.Root = styled.div.attrs<any>({})`
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
S.Icon = ChevronDown.extend`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  height: 14px;
  transition: all 0.2s;
  &.active {
    transform: translateY(-50%) rotate(180deg);
  }
`
S.Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 0;
  max-height: 0;
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  border: 1px solid ${props => props.theme.colorGray};
  transition: all 0.2s;
  &.active {
    height: auto;
    max-height: 400px;
    opacity: 1;
    visibility: visible;
 }
`
S.Option = styled.div`
  cursor: pointer;
  padding: 10px;
  transition: all 0.1s;
  &:hover, &.selected {
    background: ${props => props.theme.colorGrayLight};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colorGrayLight};
  }
`

export default S
