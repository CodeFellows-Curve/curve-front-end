import React from "react"
import { Provider } from 'react-redux'
import renderer from "react-test-renderer"
import Footer from "../src/components/layout/footer.js"
import configureStore from 'redux-mock-store'
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const initialState = {}; 

const mockStore = configureStore();
let wrapper;
let store;

configure({ adapter: new Adapter() });

describe("Footer", () => {
    beforeEach(() => {
        //creates the store with any initial state or middleware needed  
        store = mockStore(initialState)
        wrapper = mount(<Provider store={store}><Footer /></Provider>)
    })

  it("Footer renders correctly", () => {
    const tree = renderer
      .create(<Footer store={store}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})