import { createTRPCClient, httpBatchLink } from "@trpc/client";

import type { AppRouter } from "../handler.trpc";

export const trpc = createTRPCClient<AppRouter>({
	links: [httpBatchLink({ url: "/trpc" })],
});
