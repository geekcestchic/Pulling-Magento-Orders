import React from 'react'

const style = {
  order: {
    width: "40%",
    margin: "2%",
    borderRadius: 10,
    border: '1px solid black',
    padding: 20,
    height: 50,
    cursor: "pointer",
    textAlign: "center",
    display: "inline-block"
  },
  detail: {
    position: "fixed",
    width: 400,
    height: 200,
    left: "50%",
    top: "50%",
    margin: "-100px 0 0 -200px",
    background: "white",
    border: "2px solid black",
    textAlign: "left",
    padding: 30
  },
  close: {
    position: "absolute",
    right: 0,
    width: 40,
    height: 40
  }
}

function ExtraData (props) {
  let weight
  try {
    weight = parseInt(props.order.weight, 10)
  } catch (e) {
    weigth = 0
  }
  const order = props.order
  return (
    <div className="detail-modal" style={style.detail}>
      <div className="modale-background"/>
      <div className="close" style={style.close}>X</div>
      <div>Updated At: {order.updated_at}</div>
      <div>Customer Email: {order.customer_email}</div>
      <div>Order ID: {order.order_id}</div>
      <div>Postcode: {order.postcode}</div>
      <div>Weight: {weight}</div>
    </div>
  )
}

class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
  }
  expand () {
    if (this.state.expanded === false) {
      this.setState({
        expanded: true
      })
    } else if (this.state.expanded === true) {
      this.setState({
        expanded: false
      })
    }

  }
  render () {
    const {order} = this.props
    const fullName = (order.firstname || '') + ' ' + (order.lastname || '')
    const total = order.total_qty_ordered + ' ' + order.order_currency_code

    return (
      <div style={style.order} className="order" onClick={this.expand.bind(this)}>
        <div>Order For - {fullName}</div>
        <div>Total: {total}</div>
        {this.state.expanded ? <ExtraData order={this.props.order}/> : <button>Click to Expand</button> }
      </div>
    )
  }
}

class Orders extends React.Component {
  render () {
    return (
      <div className="orders">
        <h1 className="orders-title">Orders</h1>
        {this.props.orders.map((order, i) => (
          <Order key={i} order={order}>{this.props.children}</Order>
        ))}
      </div>
    )
  }
}

export default Orders
