import * as React from 'react';

interface LiqPayCheckoutOptions {
  version?: '3' | '2' | '1'
  publicKey: string
  privateKey: string
  action: 'pay' | 'subscribe' | 'hold' | 'paydonate'
  amount: number | string
  currency: 'UAH' | 'USD' | 'EUR'
  description: string
  product_category?: string
  product_description?: string
  product_name?: string
  product_url?: string
  order_id: string
  rro_info?: string
  expired_date?: string
  language?: 'uk' | 'en'
  paytypes?: 'apay' | 'gpay' | 'card' | 'liqpay' | 'moment_part' | 'paypart' | 'cash' | 'invoice' | 'qr'
  result_url?: string
  server_url?: string
  extra?: React.ReactElement
}

type LiqPayPayProps = Omit<LiqPayCheckoutOptions, 'order_id'> & {
  title: string
  order_id: number
  style?: React.CSSProperties
  disabled?: boolean
}

type LiqPaySubscribeProps = Omit<LiqPayCheckoutOptions, 'order_id'> & {
  title: string
  subscribePeriodicity: string
  order_id: number
  style?: React.CSSProperties
  disabled?: boolean
}

type LiqPayPay = React.FC<LiqPayPayProps>
type LiqPaySubscribe = React.FC<LiqPaySubscribeProps>

declare module './index.js' {
  const LiqPayPay: LiqPayPay
  const LiqPaySubscribe: LiqPaySubscribe
}
