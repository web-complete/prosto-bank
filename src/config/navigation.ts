import PageMain from 'components/app/page/Main'
import PageNewPayment from 'components/app/page/NewPayment'
import PageProcessPayments from 'components/app/page/ProcessPayments'
import PageSummary from 'components/app/page/Summary'

const nav: INavItem[] = [
  {
    code: 'main',
    title: 'Главная',
    path: '/main',
    component: PageMain,
    default: true,
  },
  {
    code: 'new-payment',
    title: 'Новый платеж',
    path: '/new-payment',
    component: PageNewPayment,
  },
  {
    code: 'process-payments',
    title: 'Платежи в работе',
    path: '/process-payments',
    component: PageProcessPayments,
  },
  {
    code: 'summary',
    title: 'Выписка',
    path: '/summary',
    component: PageSummary,
  },
]

export default nav
