import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import type { trpc } from "../trpc.config";

export const Route = createRootRouteWithContext<{
	trpc: typeof trpc;
}>()({
	component: () => (
		<>
			<nav className='p-4 grid gap-2'>
				<h1 className='text-2xl lg:text-4xl font-bold'>
					Vinxi + TanStack Router
				</h1>
				<ul className='flex gap-4'>
					<li>
						<Link
							to='/'
							className='font-medium data-[status=active]:font-bold'
							activeOptions={{
								exact: true,
								includeSearch: false,
								includeHash: false,
							}}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/posts'
							className='font-medium data-[status=active]:font-bold'
						>
							Posts (fetch)
						</Link>
					</li>
					<li>
						<Link
							to='/invoices'
							className='font-medium data-[status=active]:font-bold'
						>
							Invoices (tRPC)
						</Link>
					</li>
				</ul>
			</nav>
			<hr />
			<Outlet />
			<TanStackRouterDevtools position='bottom-right' />
		</>
	),
});
