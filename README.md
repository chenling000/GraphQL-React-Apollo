# GraphQL Crash Course Tutorial

A tutorial for using GraphQL with Apollo by **Laith Harb**, and completed by Chen.

_tutorial video:_ https://www.youtube.com/watch?v=CFrKTrMJIBY&list=PLQPqfRFsmYBaL-kJ7mR-ssdASjhudwv6k&index=3&t=32s

---

## **Server Side**

---

manual for setting server environment

_Git Bash_

> cd server

- **setting up a new package json file for server**
  > _npm_ init -y
  - and then rewrite the json file
- **install nodemon at global scope**
  > _npm_ install nodemon -g
- **nodemon the top-level file of server**
  > nodemon index.js
- **starting server**
  > _npm_ run start
  - 'start' in here is the script name
- **install packages**
  > _npm_ install apollo-server graphql

---

## using boilerplate of Apollo Doc

_Apollo Doc:_ https://www.apollographql.com/docs/apollo-server/getting-started/

---

## **Client Side**

---

manual for setting client environment

> cd client

- **install packages**

  > _npm_ install @apollo/client graphql

- **setting up apollo client**
  > App.js

```js
// import modules
import { ApolloClient, InMemoryCache, ApolloPeovider } from '@apollo/client'

// create our client
const client = new ApolloClient({
  uri:"the URL of the server which our client wants to connect",
  cache: new InMemoryCache()
});

// wrapping all components within ApolloProvider
return (
  <ApolloProvider client={client}>
  ...
  components
  ...
  <ApolloProvider>
)
```

- **making query and fetching data**
  > MainHero.js

```js
// import modules
import { useQuery, gql } from "@apollo/client";

// making query
// capital letter style is the common convention for query variable
const MY_QUERY = gql`
  {
    ...
    your query syntax
    ...
  }
`;

// fetching data
const { loading, error, data } = useQuery(MY_QUERY);

// dealing with response
if (loading) return <div>loading...</div>;

if (error) return <div>ERROR</div>;

console.log("data", data);
```
