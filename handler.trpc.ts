import { defineEventHandler, toWebRequest } from "vinxi/http";
import { initTRPC, TRPCError } from "@trpc/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const t = initTRPC.create();

const INVOICES: Array<{ id: string; title: string }> = [
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

const appRouter = t.router({
	getInvoices: t.procedure.query(async () => {
		await sleep(750);

		return INVOICES;
	}),
	getInvoiceById: t.procedure.input(String).query(async (req) => {
		await new Promise((resolve) => setTimeout(resolve, 500));

		const invoice = INVOICES.find((p) => p.id === req.input);

		if (!invoice) {
			throw new TRPCError({
				code: "NOT_FOUND",
				message: `Invoice not found with an ID of "${req.input}".`,
			});
		}

		return invoice;
	}),
});

export type AppRouter = typeof appRouter;

export default defineEventHandler((event) => {
	const request = toWebRequest(event);

	return fetchRequestHandler({
		endpoint: "/trpc",
		req: request,
		router: appRouter,
		createContext() {
			return {};
		},
	});
});
