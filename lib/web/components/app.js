import React from 'react'
import getOrders from '../queries/getOrders'
import Orders from './orders'

function Loading () {
  return <div>Loading Orders...</div>
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { orders: null, loading: true }
  }

  componentDidMount() {
    getOrders()
    .then(({data}) => {
      this.setState({
        orders: data,
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
