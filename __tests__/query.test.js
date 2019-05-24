import React from "react";

import GQLComponent, { PersonCard, PERSON } from '../src/components/list/person-card'

import Adapter from "enzyme-adapter-react-16";
import { configure } from 'enzyme';

import { ApolloProvider } from 'react-apollo';
import { mount, shallow } from 'enzyme'
import { spy } from 'sinon';

import configureStore from 'redux-mock-store';
import clientMock from '../__mocks__/client-mock';

const initialState = {};

const mockStore = configureStore(); 
let wrapper;
let store;



configure({ adapter: new Adapter() });

describe("GQL Component", () => {
  beforeEach(() => {
    //creates the store with any initial state or middleware needed  
    store = mockStore(initialState)
   });

  it("expects true to be true", () => {
    expect(true).toBe(true);
  });
  it("calls the query method on Apollo Client", () => {
    spy(clientMock, "query");
    const wrapper = mount(
      // <Provider store={store}>
        <ApolloProvider client={clientMock}>
          <PersonCard name="Hannah"/>
        </ApolloProvider>
      // </Provider>
    );
    let button = wrapper.find("#gql-button");
    console.log("button", button);
    button.simulate("click");
    expect(clientMock.query.calledOnce).toEqual(true);

    expect(clientMock.query.getCall(0).args[0].query).toEqual(PERSON);
  });
  it("renders correctly after query method on apoolo client executed", () => {});
});