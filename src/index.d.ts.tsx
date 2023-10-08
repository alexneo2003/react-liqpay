import React from 'react'
// export LiqPayPay from './LiqPayPay'
// export LiqPaySubscribe from './LiqPaySubscribe'

type LiqPayCheckoutOptions = {
  version?: '3' | '2' | '1'
  publicKey: 'string'
  privateKey: 'string'
  action: 'pay' | 'subscribe' | 'hold' | 'paydonate'
  amount: number
  currency: 'UAH' | 'USD' | 'EUR'
  description: 'string'
  order_id: 'string'
  rro_info?: 'string'
  expired_date?: 'string' // UTC 2016-04-24 00:00:00
  language?: 'uk' | 'en'
  paytypes?: 'apay' | 'gpay' | 'card' | 'liqpay' | 'moment_part' | 'paypart' | 'cash' | 'invoice' | 'qr'
  result_url?: 'string'
  server_url?: 'string'
}

// https://www.liqpay.ua/en/documentation/api/aquiring/checkout/doc
type LiqPayPayProps = Exclude<LiqPayCheckoutOptions, 'orderId'> & {
  title: 'string'
  orderId?: 'string'
  style?: React.CSSProperties
  disabled?: boolean
}

type LiqPaySubscribeProps = Exclude<LiqPayCheckoutOptions, 'orderId'> & {
  title: 'string'
  subscribePeriodicity: 'string'
  orderId?: any
  style?: React.CSSProperties
  disabled?: boolean
}

export const LiqPayPay = (props: LiqPayPayProps) => React.Element

export const LiqPaySubscribe = (props: LiqPaySubscribeProps) => React.Element
