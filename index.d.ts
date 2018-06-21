declare interface INavItem {
  code: string,
  title: string,
  path: string,
  component: React.ComponentType<any>,
  default?: boolean,
}

declare module 'react-icons/*' {
  const any: any
  export default any
}
