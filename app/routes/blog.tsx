import {
	createFileRoute,
	Link,
	MatchRoute,
	Outlet,
} from "@tanstack/react-router";

import { Spinner } from "./-components/spinner";
import { gql, useReadQuery } from "@apollo/client";

const GET_BLOGS = gql`
	query GetBlogs {
		blogs {
			id
			title
		}
	}
`;

type GqlResponse = {
	blogs: Array<{ id: string; title: string }>;
};

export const Route = createFileRoute("/blog")({
	loader: async ({ context: { apolloPreloadQuery } }) => {
		const blogsQueryRef =
			await apolloPreloadQuery<GqlResponse>(GET_BLOGS).toPromise();

		return { blogsQueryRef };
	},
	component: Blogs,
});

function Blogs() {
	const { blogsQueryRef } = Route.useLoaderData();

	const query = useReadQuery(blogsQueryRef);

	const blogs = query.data.blogs || [];

	return (
		<div className='p-4 grid gap-2'>
			<h2 className='text-xl font-bold'>Blog posts</h2>
			<p>
				These blog posts are fetched from <strong>/apollo-graphql</strong> using
				a combination of{" "}
				<a
					href='https://www.apollographql.com/docs/'
					target='_blank'
					className='underline decoration-wavy decoration-pink-500 underline-offset-4 hover:text-pink-500 focus:text-pink-500 transition-colors'
				>
					Apollo Server + Apollo Client (graphql)
				</a>
				.
			</p>
			<hr />
			<div className='grid gap-4 divide-y lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-12'>
				<ul className='grid lg:col-span-4 py-4 gap-2'>
					{[...blogs, { id: "i-dont-exist", title: "A 404 blog" }].map(
						(blog) => (
							<li key={blog.id}>
								<Link
									to='/blog/$blogId'
									params={{ blogId: blog.id }}
									className='focus:underline data-[status=active]:font-bold font-mono tracking-wider'
								>
									#{blog.id} - {blog.title}{" "}
									<MatchRoute
										to='/blog/$blogId'
										params={{
											blogId: blog.id,
										}}
										pending
									>
										<Spinner />
									</MatchRoute>
								</Link>
							</li>
						)
					)}
				</ul>
				<div className='py-4 lg:pl-4 lg:col-span-8'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
