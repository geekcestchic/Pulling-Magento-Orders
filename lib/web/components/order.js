import React from 'react'
import style from '../styles/style'

function ExtraData (props) {
  const order = props.order
  const weight = parseInt(order.weight, 10)
  return (
    <div>
      <div className="modale-background" style={style.modal}/>
      <div className="detail-modal" style={style.detail}>
        <div className="close" style={style.close}>X</div>
        <div>Updated At: {order.updated_at}</div>
        <div>Customer Email: {order.customer_email}</div>
        <div>Order ID: {order.order_id}</div>
        <div>Postcode: {order.postcode}</div>
        <div>Weight: {weight}</div>
      </div>
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
    const total = order.total_paid ? 'Paid ' + parseInt(order.total_paid, 10) + ' ' + order.order_currency_code : 'Not paid'
    return (
      <div style={style.order} className="order" onClick={this.expand.bind(this)}>
        <div>Order For - {fullName}</div>
        <div>Payment Status: {total}</div>
        {this.state.expanded ? <ExtraData order={this.props.order}/> : <button>Click to Expand</button> }
      </div>
    )
  }
}

export default Order
