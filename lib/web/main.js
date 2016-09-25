import React from 'react'
import ReactDOM from 'react-dom'
import MagentoAPI from 'magento-api'

const magento = new MagentoAPI({
  host: '52.59.3.117',
  port: 80,
  path: '/en/api/xmlrpc/',
  login: 'unu-challenge',
  pass: 'unu-challenge'
})

magento.login(function(err, sessId) {
  if (err) {
    // deal with error
    return
  }

  // use magento
  console.log(sessId)
})

class App extends React.Component {
  render () {
    return (
      <div className="content-wrapper">
        TEST
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
	document.getElementById('mount')
)
