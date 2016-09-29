import React from 'react'
import Order from '../components/order'
import renderer from 'react-test-renderer'
import order from '../test-data/order-object'

const component = renderer.create(
  <Order order={order}></Order>
)

it('renders correctly', () => {
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree.children.length).toBe(3)
})

it('responds to a click correctly', () => {
  let tree = component.toJSON()
  expect(tree.props.onClick).toBeTruthy()
  tree.props.onClick()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree.children.length).toBe(3)
})

it('demonstrates toggle behavior', () => {
  let tree = component.toJSON()
  tree.props.onClick()
  tree = component.toJSON()
  tree.props.onClick()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
