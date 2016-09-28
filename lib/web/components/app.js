import React from 'react'
import axios from 'axios'
import Orders from './orders'

function Loading () {
  return <div>Loading Orders...</div>
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { orders: null, loading: true }
    this.fetchOrders()
  }

  fetchOrders () {
    var that = this
    axios.get('/orders')
    .then((orders) => {
      that.setState({
        orders: orders.data,
        loading: false
      })
    })
  }

  render () {
    return (
      <div className="content-wrapper">
        {this.state.orders ?  <Orders orders={this.state.orders}/> : <Loading/>}
      </div>
    )
  }
}

export default App
