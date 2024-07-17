import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
        {
          (username) => {
            return <div>Hello {username}</div>
            }
        }
        </UserConsumer>
    )
  }
}

export default ComponentF

// Context
// 1. Create a context
// 2. Provide a context value
// 3. Consume the context value