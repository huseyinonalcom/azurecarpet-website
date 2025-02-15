import { HttpLink, InMemoryCache, ApolloClient, gql } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { setContext } from "@apollo/client/link/context";

export const { getClient } = registerApolloClient(async () => {
  const clientNoAuth = new ApolloClient({
    link: new HttpLink({ uri: "https://dfa.huseyinonal.com/api/graphql" }),
    cache: new InMemoryCache(),
  });

  const user = process.env.API_USER;
  const pass = process.env.API_PASS;

  let token = "";

  await clientNoAuth
    .mutate({
      mutation: gql`
        mutation Mutation($email: String!, $password: String!) {
          authenticateUserWithPassword(email: $email, password: $password) {
            ... on UserAuthenticationWithPasswordSuccess {
              sessionToken
              item {
                id
                email
                role
              }
            }
          }
        }
      `,
      variables: {
        email: user,
        password: pass,
      },
    })
    .then((res) => {
      token = res.data.authenticateUserWithPassword.sessionToken;
    });

  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token && `Bearer ${token}`,
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(new HttpLink({ uri: "https://dfa.huseyinonal.com/api/graphql" })),
    cache: new InMemoryCache(),
  });
});
