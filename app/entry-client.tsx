/// <reference types="vinxi/types/client" />
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./client-base";

// @ts-expect-error
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
