import { FunctionComponent, ReactElement } from 'react'
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  orderQuoteLinkText: {
    id: "store/orderquote.linkName",
  },
})

const OrderQuoteLink: FunctionComponent<Props> = ({ render }) => {
  const { formatMessage } = useIntl()

  return render([
    {
      name: formatMessage(messages.orderQuoteLinkText),
      path: `/order-quote`,
    },
  ])
}

type Props = {
  render: (links: Array<{ name: string; path: string }>) => ReactElement
  intl: any
}

export default OrderQuoteLink
