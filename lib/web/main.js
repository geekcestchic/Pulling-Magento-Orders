import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Orders from './components/orders'

function Loading () {
  return <div>Loading Orders...</div>
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { orders: null, loading: true }
    var that = this
    axios.get('/orders')
    .then((orders) => {
      console.log(orders)
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

ReactDOM.render(
  <App/>,
	document.getElementById('mount')
)
