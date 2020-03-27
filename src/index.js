import React from 'react'
import crypto from 'crypto'
import PropTypes from 'prop-types'

import styleFile from './styles.css'

function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)))
}

function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)))
}

const LiqPayPay = ({
  publicKey,
  privateKey,
  amount,
  currency = 'UAH',
  description = 'test',
  orderId = Math.floor(1 + Math.random() * 900000000),
  title = 'Payment',
  style,
  ...props
}) => {
  const jsonString = {
    public_key: publicKey,
    version: '3',
    action: 'pay',
    amount: amount,
    currency: currency,
    description: description,
    order_id: orderId,
    ...props
  }

  const data = utf8_to_b64(JSON.stringify(jsonString))
  const signString = privateKey + data + privateKey
  const sha1 = crypto.createHash('sha1')
  sha1.update(signString)
  const signature = sha1.digest('base64')

  return (
    <form
      method='POST' action='https://www.liqpay.ua/api/3/checkout'
      acceptCharset='utf-8'
      style={{ ...style }}
    >
      <input
        type='hidden' name='data' value={data}
      />
      <input type='hidden' name='signature' value={signature} />
      <button className={styleFile.buttonSubmit}>
        <img
          src='https://static.liqpay.ua/buttons/logo-small.png' name='btn_text'
        />
        <span>{title} {amount} {currency}</span>
      </button>
    </form>
  )
}

const LiqPaySubscribe = ({
  publicKey,
  privateKey,
  amount,
  subscribePeriodicity = 'month',
  currency = 'UAH',
  description = 'test',
  orderId = Math.floor(1 + Math.random() * 900000000),
  title = 'Subscribe',
  style,
  ...props
}) => {
  const jsonString = {
    public_key: publicKey,
    version: '3',
    action: 'subscribe',
    subscribe_date_start: Date.now(),
    subscribe_periodicity: subscribePeriodicity,
    amount: amount,
    currency: currency,
    description: description,
    order_id: orderId,
    ...props
  }

  const data = utf8_to_b64(JSON.stringify(jsonString))
  const signString = privateKey + data + privateKey

  const sha1 = crypto.createHash('sha1')
  sha1.update(signString)
  const signature = sha1.digest('base64')

  return (
    <form
      method='POST' action='https://www.liqpay.ua/api/3/checkout'
      acceptCharset='utf-8'
      style={{ ...style }}
    >
      <input
        type='hidden' name='data' value={data}
      />
      <input type='hidden' name='signature' value={signature} />
      <button className={styleFile.buttonSubmit}>
        <img
          src='https://static.liqpay.ua/buttons/logo-small.png' name='btn_text'
        />
        <span>{title} {amount} {currency}</span>
      </button>
    </form>
  )
}

LiqPayPay.propTypes = {
  publicKey: PropTypes.string.isRequired,
  privateKey: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  orderId: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.string
}

LiqPaySubscribe.propTypes = {
  publicKey: PropTypes.string.isRequired,
  privateKey: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  subscribePeriodicity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  orderId: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.string
}

export { LiqPayPay, LiqPaySubscribe }
