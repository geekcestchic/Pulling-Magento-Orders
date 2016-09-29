import React from 'react'
import style from '../styles/style'
import Order from './order'

class Orders extends React.Component {
  render () {
    return (
      <div className="orders" style={style.orders}>
        <h1 className="orders-title" style={style.title}>Orders Dashboard</h1>
        {this.props.orders.map((order, i) => (
          <Order key={i} order={order}>{this.props.children}</Order>
        ))}
      </div>
    )
  }
}

Orders.propTypes = {
  orders: React.PropTypes.array.isRequired
}

export default Orders
