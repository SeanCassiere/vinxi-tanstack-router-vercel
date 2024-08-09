import {
	createFileRoute,
	Link,
	MatchRoute,
	Outlet,
} from "@tanstack/react-router";

import { Spinner } from "./-components/spinner";

export const Route = createFileRoute("/invoices")({
	loader: ({ context: { trpc } }) => trpc.getInvoices.query(),
	component: Invoices,
});

function Invoices() {
	const invoices = Route.useLoaderData();

	return (
		<div className='p-4 grid gap-2'>
			<h2 className='text-xl font-bold'>Invoices</h2>
			<p>
				These invoices are fetched from <strong>/trpc/...</strong> using{" "}
				<a
					href='https://trpc.io'
					target='_blank'
					className='underline decoration-wavy decoration-blue-500 underline-offset-4 hover:text-blue-500 focus:text-blue-500 transition-colors'
				>
					tRPC
				</a>
				.
			</p>
			<hr />
			<div className='grid gap-4 divide-y lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-12'>
				<ul className='grid lg:col-span-4 py-4 gap-2'>
					{[...invoices, { id: "i-dont-exist", title: "A 404 invoice" }].map(
						(invoice) => (
							<li key={invoice.id}>
								<Link
									to='/invoices/$invoiceId'
									params={{ invoiceId: invoice.id }}
									className='focus:underline data-[status=active]:font-bold font-mono tracking-wider'
								>
									<pre>
										#{invoice.id} - {invoice.title}{" "}
										<MatchRoute
											to='/invoices/$invoiceId'
											params={{
												invoiceId: invoice.id,
											}}
											pending
										>
											<Spinner />
										</MatchRoute>
									</pre>
								</Link>
							</li>
						)
					)}
				</ul>
				<div className='py-4 lg:pl-4 lg:col-span-8'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
