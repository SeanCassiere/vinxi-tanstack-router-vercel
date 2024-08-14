import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import { trpc } from "./trpc.config";

import "./client-base.css";
import { ApolloProvider } from "@apollo/client";
import { apolloClient, apolloPreloadQuery } from "./apollo.config";

// Create a new router instance
const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	context: {
		trpc,
		apolloPreloadQuery,
	},
	Wrap({ children }) {
		return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
	},
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export default function App() {
	return <RouterProvider router={router} />;
}
