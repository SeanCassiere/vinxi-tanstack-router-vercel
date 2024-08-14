import {
	ApolloClient,
	InMemoryCache,
	createQueryPreloader,
} from "@apollo/client";

export const apolloClient = new ApolloClient({
	uri: "/apollo-graphql",
	cache: new InMemoryCache(),
});

export const apolloPreloadQuery = createQueryPreloader(apolloClient);
