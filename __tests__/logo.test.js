import React from "react"
import { Provider } from 'react-redux'
import renderer from "react-test-renderer"
import Logo from "../src/components/layout/logo.js"
import configureStore from 'redux-mock-store'
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";


configure({ adapter: new Adapter() });

describe("Logo", () => {

  it("Logo renders correctly", () => {
    const tree = renderer
      .create(<Logo />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})