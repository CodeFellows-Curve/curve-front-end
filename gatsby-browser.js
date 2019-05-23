import React from 'react'
import { Provider } from 'react-redux'
import fetch from 'node-fetch'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink} from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

import store from './src/store/'

// const URL = 'https://bazaarapi.herokuapp.com/graphql'
const URL = "https://cfcurve.azurewebsites.net/graphql";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: createHttpLink({
    uri: URL,
    fetch,
  }),
  errorLink,
  cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <Provider store={store}>{element}</Provider>
  </ApolloProvider>
)
