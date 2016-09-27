import axios from 'axios'
import Orders from '../components/orders'
import renderer from 'react-test-renderer'
import order from '../test-data/order-object'
import React from 'react'

let orders = [order, order, order, order]

it('renders correctly', () => {
  const component = renderer.create(
    <Orders orders={orders}/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree.children.length).toBe(4 + 1) // The title!
})
