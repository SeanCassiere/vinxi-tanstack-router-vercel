import { GraphQLError } from "graphql";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateH3Handler } from "@as-integrations/h3";

import { ITEMS as BLOGS, sleep } from "./common";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type BlogPostSummary {
    id: ID
    title: String
  }
	
  type BlogPost {
    id: ID
    title: String
		content: String
  }

	# The "Query" type is special: it lists all of the available queries that
	# clients can execute, along with the return type for each.
	type Query {
		blogs: [BlogPostSummary]
		blogById(blogId: ID!): BlogPost!
	}
`;

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
	Query: {
		blogs: async () => {
			await sleep(750);

			const blogs = BLOGS.map((invoice) => ({
				id: invoice.id,
				title: invoice.title.replace("--item--", "Blog"),
			}));

			return blogs;
		},
		blogById: async (_: any, { blogId }: { blogId: string }) => {
			await sleep(250);

			const blog = BLOGS.find((p) => p.id === blogId);
			if (!blog) {
				throw new GraphQLError(
					`A blog with an ID of "${blogId}" was not found.`
				);
			}

			blog.title = blog.title.replace("--item--", "Blog");

			return blog;
		},
	},
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

export default startServerAndCreateH3Handler(server, {
	// Optional: Specify context
	context: async (_) => {
		return {};
	},
});
