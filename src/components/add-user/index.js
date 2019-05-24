import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import './add-user.scss'

const POST_MUTATION = gql`
  mutation PostMutation($individual: IndividualInputType!) {
    addIndividual(individual: $individual) {
      id
      name
    }
  }
`

const SubmitButton = ({ name, email }) => {
  const individual = {
    individual: {
      name,
      email,
      competencyScore: 1,
      currentLevel: 1,
      pointsToNext: 10,
    },
  }
  return (
    <Mutation mutation={POST_MUTATION} variables={individual}>
      {PostMutation => (
        <button
          id="submit"
          onClick={e => {
            PostMutation(e)
            console.log('going')
            e.preventDefault()
          }}
        >
          Submit
        </button>
      )}
    </Mutation>
  )
}

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    console.log(this.state)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { name, email } = this.state
    return (
      <form id="add">
        <div>
          <h1>Add a New User</h1>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <SubmitButton name={name} email={email} />
        </div>
      </form>
    )
  }
}

export default AddUser
