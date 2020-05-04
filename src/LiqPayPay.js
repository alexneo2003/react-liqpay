import React from 'react'
import crypto from 'crypto'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// eslint-disable-next-line camelcase
import { utf8_to_b64 } from './utils'

import styleFile from './styles.css'

const LiqPayPay = ({
  publicKey,
  privateKey,
  amount,
  currency,
  description = 'test',
  orderId = Math.floor(1 + Math.random() * 900000000),
  title = 'Payment',
  style,
  disabled,
  extra,
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
      {extra || (
        <button className={classNames(styleFile.buttonSubmit)} disabled={disabled}>
          <img
            src='https://static.liqpay.ua/buttons/logo-small.png' name='btn_text'
          />
          <span>{title} {amount} {currency}</span>
        </button>
      )}
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
  title: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  extra: PropTypes.object
}

export default LiqPayPay
