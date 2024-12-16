import { ApolloClient, ApolloProvider, createHttpLink, gql, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getLocale } from "next-intl/server";
import "./globals.css";

const getToken = (client: ApolloClient<NormalizedCacheObject>) => {
  client.mutate({
    mutation: gql`
      mutation Mutation($email: String!, $password: String!) {
        authenticateUserWithPassword(email: $email, password: $password) {
          ... on UserAuthenticationWithPasswordSuccess {
            sessionToken
          }
        }
      }
    `,
    variables: {
      email: process.env.USER,
      password: process.env.PASS,
    },
  });
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className="antialiased flex flex-col items-center">{children}</body>
    </html>
  );
}
