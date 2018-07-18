import styled from 'config/theme'

const S: any = {}
S.Root = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  justify-content: flex-end;
`
S.Name = styled.span`
  font-weight: 400;
  margin: 0 20px;
`
S.Button = styled.button`
  cursor: pointer;
  border: none;
`

export default S
