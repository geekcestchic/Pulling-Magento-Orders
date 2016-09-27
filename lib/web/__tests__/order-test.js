import React from 'react'
import Order from '../components/order'
import renderer from 'react-test-renderer'
import order from './order-object'

it('responds to click events correctly', () => {
  const component = renderer.create(
    <Order order={order}></Order>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props.onClick()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // // manually trigger the callback
  // tree.props.onClick()
  // // re-rendering
  // tree = component.toJSON()
  // expect(tree).toMatchSnapshot()
})
