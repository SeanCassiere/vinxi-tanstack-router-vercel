import {
	createFileRoute,
	Link,
	MatchRoute,
	Outlet,
} from "@tanstack/react-router";

import { Spinner } from "./-components/spinner";

async function fetchPosts(): Promise<Array<{ id: string; title: string }>> {
	const res = await fetch("/api/posts");
	return await res.json();
}

export const Route = createFileRoute("/posts")({
	loader: () => fetchPosts(),
	component: Posts,
});

function Posts() {
	const posts = Route.useLoaderData();
	return (
		<div className='p-4 grid gap-2'>
			<h2 className='text-xl font-bold'>Posts</h2>
			<p>
				These posts are fetched from <strong>/api/...</strong> using the{" "}
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'
					target='_blank'
					className='underline decoration-wavy decoration-pink-500 underline-offset-4 hover:text-pink-500 focus:text-pink-500 transition-colors'
				>
					Fetch API
				</a>
			</p>
			<hr />
			<div className='grid gap-4 divide-y lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-12'>
				<ul className='grid lg:col-span-4 py-4 gap-2'>
					{[...posts, { id: "i-dont-exist", title: "A 404 post" }].map(
						(post) => (
							<li key={post.id}>
								<Link
									to='/posts/$postId'
									params={{ postId: post.id }}
									className='focus:underline data-[status=active]:font-bold font-mono tracking-wider'
								>
									#{post.id} - {post.title}{" "}
									<MatchRoute
										to='/posts/$postId'
										params={{
											postId: post.id,
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
