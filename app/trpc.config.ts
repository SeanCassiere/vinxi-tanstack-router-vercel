import { createTRPCClient, httpBatchLink, loggerLink } from "@trpc/client";

import type { AppRouter } from "../handler.trpc";

export const trpc = createTRPCClient<AppRouter>({
	links: [loggerLink(), httpBatchLink({ url: "/trpc" })],
});
