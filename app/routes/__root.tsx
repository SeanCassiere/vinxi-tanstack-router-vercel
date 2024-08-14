import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import type { trpc } from "../trpc.config";
import type { apolloPreloadQuery } from "../apollo.config";

export const Route = createRootRouteWithContext<{
	trpc: typeof trpc;
	apolloPreloadQuery: typeof apolloPreloadQuery;
}>()({
	component: () => (
		<>
			<nav className='p-4 grid gap-2'>
				<h1 className='text-2xl mb-2 lg:text-4xl font-bold'>
					Using{" "}
					<a
						href='https://vinxi.vercel.app/'
						className='underline decoration-wavy decoration-pink-500 decoration-2 underline-offset-8 hover:text-pink-500 focus:text-pink-500 transition-colors'
						target='_blank'
					>
						Vinxi
					</a>
				</h1>
				<ul className='flex gap-4 [&>li]:min-w-max overflow-y-auto'>
					<li>
						<Link
							to='/'
							className='data-[status=active]:font-bold focus:underline hover:underline'
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
							className='data-[status=active]:font-bold focus:underline hover:underline'
						>
							Posts (fetch)
						</Link>
					</li>
					<li>
						<Link
							to='/invoices'
							className='data-[status=active]:font-bold focus:underline hover:underline'
						>
							Invoices (tRPC)
						</Link>
					</li>
					<li>
						<Link
							to='/blog'
							className='data-[status=active]:font-bold focus:underline hover:underline'
						>
							Blog (apollo graphql)
						</Link>
					</li>
					<li>
						<a
							className='focus:underline hover:underline'
							href='https://github.com/seancassiere/vinxi-tanstack-router-vercel'
							target='_blank'
						>
							GitHub
						</a>
					</li>
				</ul>
			</nav>
			<hr />
			<Outlet />
			<TanStackRouterDevtools position='bottom-right' />
		</>
	),
});
