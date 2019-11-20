import React from 'react'
import btoa from 'btoa'
import crypto from 'crypto'
import PropTypes from 'prop-types'

export default ({ text }) => {
  const PUBLIC_KEY = 'sandbox_i27170002628'
  const PRIVATE_KEY = 'sandbox_Qel4xD2o5yi1Tpt9K9n9xJKFXyJdc4mUnjXPawj5'

  const jsonString = {
    public_key: PUBLIC_KEY,
    version: '3',
    action: 'subscribe',
    subscribe_date_start: Date.now(),
    subscribe_periodicity: 'month',
    amount: '3',
    currency: 'UAH',
    description: 'test',
    order_id: Math.floor(1 + Math.random() * 900000000)
  }

  const data = btoa(JSON.stringify(jsonString))
  const signString = PRIVATE_KEY + data + PRIVATE_KEY

  const sha1 = crypto.createHash('sha1')
  sha1.update(signString)
  const signature = sha1.digest('base64')

  console.log('jsonString', JSON.stringify(jsonString))
  console.log('data', data)
  console.log('signString', signString)
  console.log('signature', signature)
  return (
    <form
      method='POST' action='https://www.liqpay.ua/api/3/checkout'
      acceptCharset='utf-8'
    >
      <input
        type='hidden' name='data' value={data}
      />
      <input type='hidden' name='signature' value={signature} />
      <input
        type='image'
        src='//static.liqpay.ua/buttons/p1ru.radius.png'
      />
    </form>
  )
}
