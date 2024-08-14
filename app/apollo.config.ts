import {
	ApolloClient,
	InMemoryCache,
	createQueryPreloader,
} from "@apollo/client";

export const apolloClient = new ApolloClient({
	uri: "http://localhost:3000/apollo-graphql",
	cache: new InMemoryCache(),
});

export const apolloPreloadQuery = createQueryPreloader(apolloClient);
