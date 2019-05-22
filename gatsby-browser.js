import React from "react"
import { Provider } from "react-redux"

import fetch from 'node-fetch'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

import store from "./src/store/"

// const client = new ApolloClient({
//   link: createHttpLink({
//     uri: 'https://graphql.org/swapi-graphql/',
//     fetch: fetch,
//     fetchOptions:{mode:'no-cors'}
//   }),
//   cache: new InMemoryCache(),
// })

const URL = "https://graphql-wrap-rest.herokuapp.com/";

const httpLink = new HttpLink({
  uri: URL,
});

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

const link = ApolloLink.from([errorLink, httpLink]);
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache,
  // fetchOptions:{mode:'no-cors'}
});


export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
  <Provider store={store}>{element}</Provider>
  </ApolloProvider>
)

