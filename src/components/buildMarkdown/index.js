import { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    const { data, pullMarkdown } = this.props
    if (authService.isAuthenticated()) {
      // Add competencies markdown to Redux store on login
      pullMarkdown(data)
    }
  }
  render() {
    return
  }
}

const mapDispatchToProps = dispatch => ({
  pullMarkdown: data => dispatch(a.pullMarkdown(data)),
})

export default connect(
  null,
  mapDispatchToProps
)(App)