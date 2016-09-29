import React from 'react'
import App from '../components/app'
import renderer from 'react-test-renderer'
import getOrders from '../queries/getOrders'
const component = renderer.create(<App/>)

it('renders correctly', () => {
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('initially says Loading when component mounts', () => {
  let tree = component.toJSON()
  var supposedlyTheLoadingComponent = tree.children[0].children[0]
  expect(supposedlyTheLoadingComponent).toMatch('Loading Orders...')
})

it('makes a call to the API fine', () => {
  getOrders()
  .then(({ data }) => {
    expect(data).toBeTruthy()
  })
})
