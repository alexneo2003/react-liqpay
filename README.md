# react-liqpay

> React component for LiqPay payment system

[![NPM](https://img.shields.io/npm/v/react-liqpay.svg)](https://www.npmjs.com/package/react-liqpay) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-liqpay
```

or

```bash
npm install --save react-liqpay
```

## Usage

```jsx
import React, { Component } from "react";

import { LiqPayPay, LiqPaySubscribe } from "react-liqpay";

class Example extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <LiqPayPay
          publicKey={process.env.REACT_APP_PUBLIC_KEY}
          privateKey={process.env.REACT_APP_PRIVATE_KEY}
          amount="3"
          description="Payment for product"
          currency="UAH"
          orderId={Math.floor(1 + Math.random() * 900000000)}
          result_url="http://domen.com/user/account"
          server_url="http://server.domen.com/liqpay"
          product_description="Online courses"
          style={{ padding: "8px" }}
        />
        <LiqPaySubscribe
          publicKey={process.env.REACT_APP_PUBLIC_KEY}
          privateKey={process.env.REACT_APP_PRIVATE_KEY}
          amount="3"
          subscribePeriodicity="month"
          description="Payment for subscription"
          currency="USD"
          orderId={Math.floor(1 + Math.random() * 900000000)}
          result_url="http://domen.com/user/account"
          server_url="http://server.domen.com/liqpay"
          product_description="Online courses"
          style={{ padding: "8px" }}
        />
      </div>
    );
  }
}
```

![buttons example](react-liqpay.png)

## CHANGELOG

- v1.0.0
  - initial commit
  - functional buttons with two payment actions:
    - 'pay'
    - 'subscribe'
  - example
- v1.1.0
  - example to readme
  - component picture
  - additional props in component - can pass 'style', 'result_url', 'server_url', 'product_description' etc...
  - change base64 function - support cyrillic characters
  - costume title for button
- v1.2.0
  - packages upgrade

## License

MIT © [alexneo2003](https://github.com/alexneo2003)
