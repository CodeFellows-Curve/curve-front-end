import React from "react"
import { Provider } from 'react-redux'
import renderer from "react-test-renderer"
import Login from "../src/components/login.js"
import configureStore from 'redux-mock-store'
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const initialState = {}; 

const mockStore = configureStore();
let wrapper;
let store;

configure({ adapter: new Adapter() });

describe("Login", () => {
    beforeEach(() => {
        //creates the store with any initial state or middleware needed  
        store = mockStore(initialState)
        wrapper = mount(<Provider store={store}><Login /></Provider>)
    })

  it("Login renders correctly", () => {
    const tree = renderer
      .create(<Login store={store}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})