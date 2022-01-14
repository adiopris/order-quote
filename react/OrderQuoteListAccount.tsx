import React, { Fragment, FC } from 'react'
import { Route } from 'vtex.my-account-commons/Router'

import QuoteList from './QuoteList'

const OrderQuoteListAccountWrapper: FC = (props: any) => {
  return <QuoteList {...props} />
}

const OrderQuoteListAccount = () => (
  <Fragment>
    <Route exact path="/order-quote" component={OrderQuoteListAccountWrapper} />
  </Fragment>
)

export default OrderQuoteListAccount
