import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/invoices")({
	loader: ({ context: { trpc } }) => trpc.getInvoices.query(),
	component: Invoices,
});

function Invoices() {
	const invoices = Route.useLoaderData();

	return (
		<div className='p-4 grid gap-2'>
			<h2 className='text-xl'>Invoices</h2>
			<p>
				These invoices are fetched from{" "}
				<a href='/trpc' target='_blank' className='text-blue-500'>
					/trpc/...
				</a>
				.
			</p>
			<p>
				All data on this page is retrieved using{" "}
				<a href='https://trpc.io' target='_blank' className='text-blue-500'>
					tRPC
				</a>
				.
			</p>
			<hr />
			<div className='lg:grid lg:grid-cols-12'>
				<ul className='grid gap-2 lg:col-span-4'>
					{[...invoices, { id: "i-dont-exist", title: "Not found" }].map(
						(invoice, idx) => (
							<li key={invoice.id}>
								<Link
									to='/invoices/$invoiceId'
									params={{ invoiceId: invoice.id }}
									className='data-[status=active]:underline'
								>
									{idx + 1} - {invoice.title}
								</Link>
							</li>
						)
					)}
				</ul>
				<div className='lg:col-span-8'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
