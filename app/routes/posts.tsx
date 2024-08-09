import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

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
			<h2 className='text-xl'>Posts</h2>
			<p>
				These posts are fetched from{" "}
				<a href='/api/posts' target='_blank' className='text-blue-500'>
					/api/posts
				</a>
				.
			</p>
			<p>
				All data on this page is retrieved using HTTP using the Javascript{" "}
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'
					target='_blank'
					className='text-blue-500'
				>
					Fetch API
				</a>
				.
			</p>
			<hr />
			<div className='lg:grid lg:grid-cols-12'>
				<ul className='grid gap-2 lg:col-span-4'>
					{[...posts, { id: "i-dont-exist", title: "Not found" }].map(
						(post, idx) => (
							<li key={post.id}>
								<Link
									to='/posts/$postId'
									params={{ postId: post.id }}
									className='data-[status=active]:underline'
								>
									{idx + 1} - {post.title}
								</Link>
							</li>
						)
					)}
				</ul>
				<div className='lg:col-span-8'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
