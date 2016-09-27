import React from 'react'
import Order from '../components/order'
import renderer from 'react-test-renderer'
import order from '../test-data/order-object'

it('renders correctly', () => {
  const component = renderer.create(
    <Order order={order}></Order>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree.children.length).toBe(3)
})

it('responds to a click correctly', () => {
  const component = renderer.create(
    <Order order={order}></Order>
  )
  let tree = component.toJSON()
  console.log(component)
  tree.props.onClick()
  expect(tree).toMatchSnapshot()
  expect(tree.children.length).toBe(3)
})

it('demonstrates toggle behavior', () => {
  const component = renderer.create(
    <Order order={order}></Order>
  )
  let tree = component.toJSON()
  tree.props.onClick()
  tree.props.onClick()
  expect(tree).toMatchSnapshot()
})
