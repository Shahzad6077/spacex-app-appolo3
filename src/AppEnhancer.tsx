import { FC, useEffect, useState } from "react";
import setupAppolo from "./Services/Graphql";
import { ApolloProvider } from "@apollo/client";
import App from "./App";

const AppEnhancer = () => {
  const [client, setClient] = useState<any>(undefined);

  useEffect(() => {
    setupAppolo().then((client) => {
      setClient(client);
    });
  }, []);

  if (client === undefined) return <div>Loading...</div>;
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};
export default AppEnhancer;
