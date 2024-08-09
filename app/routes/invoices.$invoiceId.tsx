import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/invoices/$invoiceId")({
	loader: ({ context: { trpc }, params }) =>
		trpc.getInvoiceById.query(params.invoiceId),
	errorComponent: ({ error }) => (
		<div className='grid gap-2'>
			<h3 className='text-2xl mb-2'>Invoice not found</h3>
			<p>This is the error message.</p>
			<pre className='p-2 border border-rounded border-red-500'>
				{error.message}
			</pre>
		</div>
	),
	component: Invoice,
});

function Invoice() {
	const invoice = Route.useLoaderData();

	return (
		<div>
			<h3 className='text-xl mb-2'>{invoice.title}</h3>
		</div>
	);
}
