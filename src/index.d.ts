import * as React from 'react'

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

export module ReactLiqPay {
  export type LiqPayPay = (props: LiqPayPayProps) => React.ElementType
  export type LiqPaySubscribe = (props: LiqPaySubscribeProps) => React.ElementType
}
