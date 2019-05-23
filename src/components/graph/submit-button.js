import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

// import nateObj from './nate-obj'

const POST_MUTATION = gql`
  mutation PostMutation($individual: IndividualInputType!) {
    addIndividual(individual: $individual) {
      id
      email
      name
    }
  }
`

class SubmitButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      individual: {
        name: 'BEARD',
        competencyScore: 100,
        currentLevel: 20,
        pointsToNext: 3,
      },
    }
  }
  render() {
    const { individual } = this.state
    return (
      <Mutation mutation={POST_MUTATION} variables={{ individual }}>
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

/******************************************************************/
// const POST_MUTATION = gql`
//   mutation PostMutation($name: String!) {
//     createCategory(name: $name) {
//       _id
//       name
//     }
//   }
// `
//
// class SubmitButton extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'AMAAAAZING',
//     }
//   }
//   render() {
//     return (
//       <Mutation mutation={POST_MUTATION} variables={{ name: this.state.name }}>
//         {PostMutation => (
//           <button
//             onClick={e => {
//               PostMutation(e)
//               e.preventDefault()
//             }}
//           >
//             Submit
//           </button>
//         )}
//       </Mutation>
//     )
//   }
// }
//
// export default SubmitButton
