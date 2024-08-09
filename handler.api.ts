import { createApp, createRouter, defineEventHandler } from "vinxi/http";

import { ITEMS as POSTS, sleep } from "./common";

const app = createApp();

const postsRouter = createRouter();
postsRouter.get(
	"/posts",
	defineEventHandler(async () => {
		await sleep(750);

		const posts = POSTS.map((invoice) => ({
			id: invoice.id,
			title: invoice.title.replace("--item--", "Post"),
		}));

		return new Response(JSON.stringify(posts), {
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
			return new Response(`A post with an ID of "${postId}" was not found.`, {
				status: 404,
			});
		}

		post.title = post.title.replace("--item--", "Post");

		return new Response(JSON.stringify(post), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	})
);

app.use(postsRouter);
app.use(postIdRouter);

export default app.handler;
