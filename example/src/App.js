import React from 'react'

import { LiqPayPay, LiqPaySubscribe } from 'react-liqpay'

export default () => {
  return (
    <>
      <LiqPayPay
        publicKey={process.env.REACT_APP_PUBLIC_KEY}
        privateKey={process.env.REACT_APP_PRIVATE_KEY}
        amount='3'
        description='test payment'
        currency='UAH'
        orderId={Math.floor(1 + Math.random() * 900000000)}
      />
      <LiqPaySubscribe
        publicKey={process.env.REACT_APP_PUBLIC_KEY}
        privateKey={process.env.REACT_APP_PRIVATE_KEY}
        amount='3'
        subscribePeriodicity='month'
        description='test payment'
        currency='USD'
        orderId={Math.floor(1 + Math.random() * 900000000)}
      />
    </>
  )
}
