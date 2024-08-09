import { createApp } from "vinxi";
import reactRefresh from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default createApp({
	server: {
		preset: "vercel",
		experimental: {
			asyncContext: true,
		},
	},
	routers: [
		{
			type: "static",
			name: "public",
			dir: "./public",
		},
		{
			type: "http",
			name: "api",
			base: "/api",
			handler: "./handler.api.ts",
			target: "server",
			plugins: () => [reactRefresh()],
		},
		{
			type: "spa",
			name: "client",
			handler: "./index.html",
			target: "browser",
			plugins: () => [
				TanStackRouterVite({
					routesDirectory: "./app/routes",
					generatedRouteTree: "./app/routeTree.gen.ts",
					disableManifestGeneration: true,
					experimental: {
						enableCodeSplitting: true,
					},
				}),
				reactRefresh(),
			],
		},
	],
});
