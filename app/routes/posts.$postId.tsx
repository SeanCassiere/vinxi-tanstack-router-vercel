import {
	createFileRoute,
	type ErrorComponentProps,
} from "@tanstack/react-router";

async function fetchPost(
	postId: string
): Promise<{ id: string; title: string; content: string }> {
	const res = await fetch("/api/posts/" + postId);

	if (res.status === 404) {
		const text = await res.text();
		throw new Error(text);
	}

	return await res.json();
}

export const Route = createFileRoute("/posts/$postId")({
	loader: ({ params }) => fetchPost(params.postId),
	errorComponent: ErrorComponent,
	component: Post,
});

function Post() {
	const post = Route.useLoaderData();

	return (
		<div>
			<h3 className='text-xl mb-2'>{post.title}</h3>
			<p>{post.content}</p>
		</div>
	);
}

function ErrorComponent({ error }: ErrorComponentProps) {
	return (
		<div className='grid gap-2 w-full'>
			<h3 className='text-2xl mb-2'>Post not found</h3>
			<p>This is the error message.</p>
			<p className='p-2 border border-rounded border-red-500 break-all font-mono'>
				{error.message}
			</p>
		</div>
	);
}
