import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
	component: () => <div>Select a blog post</div>,
});
