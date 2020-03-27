import React from 'react'

import { LiqPayPay, LiqPaySubscribe } from 'react-liqpay'

export default () => {
  return (
    <div style={{ display: 'flex' }}>
      <LiqPayPay
        publicKey={process.env.REACT_APP_PUBLIC_KEY}
        privateKey={process.env.REACT_APP_PRIVATE_KEY}
        amount='3'
        description='Payment for product'
        currency='UAH'
        orderId={Math.floor(1 + Math.random() * 900000000)}
        result_url='http://domen.com/user/account'
        server_url='http://server.domen.com/liqpay'
        product_description='Online courses'
        style={{ padding: '8px' }}
      />
      <LiqPaySubscribe
        publicKey={process.env.REACT_APP_PUBLIC_KEY}
        privateKey={process.env.REACT_APP_PRIVATE_KEY}
        amount='3'
        subscribePeriodicity='month'
        description='Payment for subscription'
        currency='USD'
        orderId={Math.floor(1 + Math.random() * 900000000)}
        result_url='http://domen.com/user/account'
        server_url='http://server.domen.com/liqpay'
        product_description='Online courses'
        style={{ padding: '8px' }}
      />
    </div>
  )
}
