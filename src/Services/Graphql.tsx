import { ApolloClient, InMemoryCache } from "@apollo/client";

import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist";

const SCHEMA_VERSION = "1"; // Must be a string.
const SCHEMA_VERSION_KEY = "apollo-schema-version";

async function setupApollo() {
  const cache = new InMemoryCache();

  const persistor = new CachePersistor({
    cache,
    storage: new LocalStorageWrapper(window.localStorage),
  });

  // Read the current schema version from AsyncStorage.
  const currentVersion = await window.localStorage.getItem(SCHEMA_VERSION_KEY);

  if (currentVersion === SCHEMA_VERSION) {
    // If the current version matches the latest version,
    // we're good to go and can restore the cache.
    await persistor.restore();
  } else {
    // Otherwise, we'll want to purge the outdated persisted cache
    // and mark ourselves as having updated to the latest version.
    await persistor.purge();
    await window.localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
  }

  // Continue setting up Apollo as usual.

  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: cache,
  });

  return client;
}

export default setupApollo;
