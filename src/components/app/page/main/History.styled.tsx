import styled from 'config/theme'

const S: any = {}
S.Root = styled.div``
S.ListWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`
S.ListContent = styled.div`
  width: 100%;
  flex: 1 1 auto;
`
S.ListFilter = styled.div`
  width: 300px;
  flex: 0 0 auto;
  margin-left: 20px;
  & > button {
    margin: 10px 5px 0 0;
  }
`

export default S
