declare interface INavItem {
  code: string,
  title: string,
  path: string,
  component: React.ComponentType<any>,
  default?: boolean,
}

declare interface IAccountItem {
  transactionId: string,
  type: 'in' | 'out',
  description: string,
  timestamp: number,
  value: number,
}

declare module 'react-imask' {
  export const IMaskMixin: any
  export const IMaskInput: any
}
