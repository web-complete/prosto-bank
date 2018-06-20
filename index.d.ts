declare type NavRoute = {
  path: string,
  component: React.ComponentType<any>,
  default?: boolean,
}

declare type NavItem = {
  code: string,
  title: string,
  toggled?: boolean,
  children?: NavItem[],
  route?: NavRoute,
}

declare module 'react-icons/*' {
  const any: any
  export default any
}

declare module '@reach/router' {
  export const Router: any
  export const Link: any
}

declare module 'react-jss' {

  import * as React from 'react'

  export interface CSSProperties extends React.CSSProperties {
    composes?: string | string[]
  }

  export type StyleSheet<Props = {}>
    = Record<
    string,
    CSSProperties
    | ((props: Props) => React.CSSProperties)
    >

  type StyleRules<ClassKey extends string = string, Props = {}>
    = Record<ClassKey, CSSProperties
    | ((props: Props) => React.CSSProperties)>

  export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>

  export interface WithStyles<ClassKey extends string = string> {
    classes: ClassNameMap<ClassKey>
  }

  export interface StyledComponentProps<ClassKey extends string = string> {
    classes?: Partial<ClassNameMap<ClassKey>>
  }

  /**
   * Remove properties `K` from `T`.
   *
   * @internal
   */
  type Omit<T, K extends string> = Pick<T, Exclude<keyof T, K>>

  function injectSheet<ClassKey extends string>(
    style: StyleRules<ClassKey>,
    options?: any,
  ): <P>(
    component: React.ComponentType<P & WithStyles<ClassKey>>,
  ) => React.ComponentType<Omit<P, keyof WithStyles>>

  export default injectSheet

  export const jss: any

  export const JssProvider: any

  export const ThemeProvider: any
}
