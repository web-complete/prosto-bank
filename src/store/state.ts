export interface IStateAccount {
  id: string,
  name: string,
  number: string,
  value: number,
  items: IAccountItem[],
}
export interface IState {
  accounts: IStateAccount[],
}

export const initialState: IState = {
  accounts: [
    {
      id: '1',
      name: 'ООО "Веб Комплит"',
      number: '50701 310 5 2315 0000815',
      value: 667013.57,
      items: [
        {
          transactionId: '00001',
          type: 'in',
          description: 'Входящая транзакция 00001',
          timestamp: 1,
          value: 10000,
        },
        {
          transactionId: '00002',
          type: 'in',
          description: 'Входящая транзакция 00002',
          timestamp: 2,
          value: 7800,
        },
        {
          transactionId: '00003',
          type: 'out',
          description: 'Исходящая транзакция 00003',
          timestamp: 3,
          value: 5200,
        },
      ],
    },
  ],
}
