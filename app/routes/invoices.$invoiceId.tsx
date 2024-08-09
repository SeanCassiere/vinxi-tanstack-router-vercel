import {
	createFileRoute,
	type ErrorComponentProps,
} from "@tanstack/react-router";

export const Route = createFileRoute("/invoices/$invoiceId")({
	loader: ({ context: { trpc }, params }) => {
		return trpc.getInvoiceById.query(params.invoiceId);
	},
	errorComponent: ErrorComponent,
	component: Post,
});

function Post() {
	const post = Route.useLoaderData();

	return (
		<div>
			<h3 className='text-xl mb-2'>{post.title}</h3>
			<p>{post.content}</p>
		</div>
	);
}

function ErrorComponent({ error }: ErrorComponentProps) {
	return (
		<div className='grid gap-2 w-full'>
			<h3 className='text-2xl mb-2'>Invoice not found</h3>
			<p>This is the error message.</p>
			<p className='p-2 border border-rounded border-red-500 break-all font-mono'>
				{error.message}
			</p>
		</div>
	);
}
