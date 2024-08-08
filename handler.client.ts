import { eventHandler } from "vinxi/http";
import dedent from "dedent";

const indexTemplate = dedent`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body class="bg-neutral-50 dark:bg-neutral-900 text-neutral-950 dark:text-neutral-100">
    <div id="root"></div>
    <script src="./app/entry-client.tsx" type="module"></script>
  </body>
</html>
`;

export default eventHandler((event) => {
	return new Response(indexTemplate, {
		status: 200,
		headers: {
			"Content-Type": "text/html",
		},
	});
});
