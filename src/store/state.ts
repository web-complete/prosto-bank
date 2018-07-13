export interface IState {
  account: {
    items: IAccountItem[],
  },
}

export const initialState: IState = {
  account: {
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
}
