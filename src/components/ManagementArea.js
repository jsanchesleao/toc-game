import React from 'react'
import './App.css'

const OrderList = () => (
  <ul>
    <li>5x  (3a, 2x): 10t</li>
    <li>10x (2b, 1d): 15t</li>
  </ul>
)

export default (props) => (
  <div>
    <h2>Finance</h2>
    <table className="finance-table">
      <tbody>
        <tr>
          <td className="label-cell">gain:</td>
          <td className="value-cell">$355</td>
        </tr>
        <tr>
          <td className="label-cell">cost:</td>
          <td className="value-cell">$215</td>
        </tr>
        <tr>
          <td className="label-cell">bal:</td>
          <td className="value-cell">$140</td>
        </tr>
        <tr>
          <td className="label-cell">cash:</td>
          <td className="value-cell">$3350</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <h2>Orders</h2>
    <OrderList />
  </div>
)