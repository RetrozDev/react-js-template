import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";

import "./reset.css"; // Optional: Reset browser styles
// import "./index.css"; // Optional: Your global styles

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			// Add more routes here
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
