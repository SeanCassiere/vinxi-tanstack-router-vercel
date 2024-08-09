import { defineEventHandler, toWebRequest } from "vinxi/http";
import { initTRPC, TRPCError } from "@trpc/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { ITEMS as INVOICES, sleep } from "./common";

const t = initTRPC.create();

const appRouter = t.router({
	getInvoices: t.procedure.query(async () => {
		await sleep(750);

		return INVOICES.map((invoice) => ({
			id: invoice.id,
			title: invoice.title.replace("--item--", "Invoice"),
		}));
	}),
	getInvoiceById: t.procedure.input(String).query(async (req) => {
		await new Promise((resolve) => setTimeout(resolve, 500));

		const invoice = INVOICES.find((p) => p.id === req.input);

		if (!invoice) {
			throw new TRPCError({
				code: "NOT_FOUND",
				message: `An invoice with an ID of "${req.input}" was not found.`,
			});
		}

		invoice.title = invoice.title.replace("--item--", "Invoice");

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
