import React, { Component } from 'react'
import './add-user.scss'

//const POST_MUTATION = gql`
//  mutation PostMutation($individual: IndividualInputType!) {
//    addIndividual(individual: $individual) {
//      id
//      name
//    }
//  }
//`

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    console.log(this.state)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default AddUser
//import React, { Component } from 'react'
//import gql from 'graphql-tag'
//import { Mutation } from 'react-apollo'
//
//
//class SubmitButton extends Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//      individual: {
//      },
//    }
//  }
//  render() {
//    const { individual } = this.state
//    return (
//      <Mutation mutation={POST_MUTATION} variables={{ individual }}>
//        {PostMutation => (
//          <button
//            onClick={e => {
//              PostMutation(e)
//              e.preventDefault()
//            }}
//          >
//            Submit
//          </button>
//        )}
//      </Mutation>
//    )
//  }
//}
//
//export default SubmitButton
//
///******************************************************************/
//// const POST_MUTATION = gql`
////   mutation PostMutation($name: String!) {
////     createCategory(name: $name) {
////       _id
////       name
////     }
////   }
//// `
////
//// class SubmitButton extends Component {
////   constructor(props) {
////     super(props)
////     this.state = {
////       name: 'AMAAAAZING',
////     }
////   }
////   render() {
////     return (
////       <Mutation mutation={POST_MUTATION} variables={{ name: this.state.name }}>
////         {PostMutation => (
////           <button
////             onClick={e => {
////               PostMutation(e)
////               e.preventDefault()
////             }}
////           >
////             Submit
////           </button>
////         )}
////       </Mutation>
////     )
////   }
//// }
////
//// export default SubmitButton
