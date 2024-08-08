import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRouteWithContext()({
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
							Posts
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