import { createStore, applyMiddleware, AnyAction, DeepPartial } from 'redux'
import { IState, initialState } from './state'

export const NEXT_STATE = Symbol('@nextState')
export type IState = IState

const reducer = (state: IState, action: AnyAction) => {
  return (action.type === NEXT_STATE)
    ? action.state
    : state
}

const store = createStore(reducer, initialState as DeepPartial<{}>, applyMiddleware())
export const nextState = (state: IState, comment?: string) => {
  store.dispatch({ state, comment, type: NEXT_STATE })
}

export default store
