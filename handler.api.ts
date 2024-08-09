import { createApp, createRouter, defineEventHandler } from "vinxi/http";

const POSTS = [
	{ id: "1", title: "First post" },
	{ id: "2", title: "Second post" },
	{ id: "3", title: "Third post" },
	{ id: "4", title: "Fourth post" },
	{ id: "5", title: "Fifth post" },
	{ id: "6", title: "Sixth post" },
	{ id: "7", title: "Seventh post" },
	{ id: "8", title: "Eighth post" },
	{ id: "9", title: "Ninth post" },
	{ id: "10", title: "Tenth post" },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const app = createApp();

const postsRouter = createRouter();
postsRouter.get(
	"/posts",
	defineEventHandler(async () => {
		await sleep(750);

		return new Response(JSON.stringify(POSTS), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	})
);

const postIdRouter = createRouter();
postIdRouter.get(
	"/posts/:id",
	defineEventHandler(async (event) => {
		await sleep(250);

		const postId = event.context.params.id;

		const post = POSTS.find((p) => p.id === postId);
		if (!post) {
			return new Response(`Post not found with an ID of "${postId}".`, {
				status: 404,
			});
		}

		return new Response(JSON.stringify(post), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	})
);

app.use(postsRouter);
app.use(postIdRouter);

export default app.handler;
