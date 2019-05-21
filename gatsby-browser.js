import React /*, { Component } */ from 'react'
import { Provider } from 'react-redux'
// import If from 'react-ifs'

import store from './src/store/'
// import { silentAuth } from './src/utils/auth'

// class SessionCheck extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: true }
//   }
//   handleCheckSession = () => {
//     this.setState({ loading: false })
//     console.log('Loading:', this.state.loading)
//   }
//   componentDidMount() {
//     silentAuth(this.handleCheckSession)
//   }
//   render() {
//     return (
//       <If condition={!this.state.loading}>
//         <React.Fragment>{this.props.children}</React.Fragment>
//       </If>
//     )
//   }
// }

// Wrap: Provider -> SessionCheck -> element

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element} </Provider>
)
