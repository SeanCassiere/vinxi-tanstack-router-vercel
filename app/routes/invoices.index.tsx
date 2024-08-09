import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/invoices/")({
	component: () => <div>Select an invoice</div>,
});
