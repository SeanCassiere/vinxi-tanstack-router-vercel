import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
	component: () => <div>Select a post</div>,
});
