import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

function Loading () {
  return <div>Loading Orders...</div>
}

const style = {
  order: {
    color: "blue",
    backgroundColor: "yellow"
  }
}

class Orders extends React.Component {
  render () {
    return (
      <div className="orders">
        {this.props.orders.map((order, i) => (
          <div className="order" style={style.order} key={i}>{order.postcode}</div>
        ))}
      </div>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { orders: null, loading: true }
    var that = this
    axios.get('/orders').then(function (orders) {
      console.log(orders)
      that.setState({
        orders: orders.data,
        loading: false
      })
    })
  }

  render () {
    return (
      <div className="content-wrapper" >
        {this.state.orders ?  <Orders orders={this.state.orders} /> : <Loading/>}
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
	document.getElementById('mount')
)
