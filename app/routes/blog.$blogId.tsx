import { gql, useReadQuery } from "@apollo/client";
import {
	createFileRoute,
	type ErrorComponentProps,
} from "@tanstack/react-router";

const GET_BLOG = gql`
	query GetBlog($blogId: ID!) {
		blogById(blogId: $blogId) {
			id
			title
			content
		}
	}
`;

type GqlResponse = {
	blogById: { id: string; title: string; content: string };
};
type GqlVariables = { blogId: string };

export const Route = createFileRoute("/blog/$blogId")({
	loader: async ({ context: { apolloPreloadQuery }, params }) => {
		const blogRef = await apolloPreloadQuery<GqlResponse, GqlVariables>(
			GET_BLOG,
			{ variables: { blogId: params.blogId } }
		).toPromise();

		return { blogRef };
	},
	errorComponent: ErrorComponent,
	component: Blog,
});

function Blog() {
	const { blogRef } = Route.useLoaderData();

	const query = useReadQuery(blogRef);

	const blog = query.data.blogById;

	return (
		<div>
			<h3 className='text-xl mb-2'>{blog.title}</h3>
			<p>{blog.content}</p>
		</div>
	);
}

function ErrorComponent({ error }: ErrorComponentProps) {
	return (
		<div className='grid gap-2 w-full'>
			<h3 className='text-2xl mb-2'>Blog not found</h3>
			<p>This is the error message.</p>
			<p className='p-2 border border-rounded border-red-500 break-all font-mono'>
				{error.message}
			</p>
		</div>
	);
}
