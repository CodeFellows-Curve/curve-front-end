import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

// import nateObj from './nate-obj'

const POST_MUTATION = gql`
  mutation PostMutation($name: String!) {
    createCategory(name: $name) {
      _id
      name
    }
  }
`

class SubmitButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'AWESOME',
    }
  }
  render() {
    return (
      <Mutation mutation={POST_MUTATION} variables={{ name: 'AWESOME' }}>
        {PostMutation => (
          <button
            onClick={e => {
              PostMutation(e)
              e.preventDefault()
            }}
          >
            Submit
          </button>
        )}
      </Mutation>
    )
  }
}

export default SubmitButton
