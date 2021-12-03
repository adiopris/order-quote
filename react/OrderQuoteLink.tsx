import { FunctionComponent, ReactElement } from 'react'

const OrderQuoteLink: FunctionComponent<Props> = ({ render }) => {

  return render([
    {
      name: 'Order Quote',
      path: `/order-quote`,
    },
  ])
}

type Props = {
  render: (links: Array<{ name: string; path: string }>) => ReactElement
  intl: any
}

export default OrderQuoteLink
