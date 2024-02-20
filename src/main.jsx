import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "@/index.css";
import "@store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "@pages/Page1.jsx";
import Page2 from "@pages/Page2.jsx";
import NotFound from "@pages/NotFound.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
	},
	{
		path: "/page1",
		element: <Page1 />,
	},
	{
		path: "/page2",
		element: <Page2 />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<QueryClientProvider client={queryClient}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</QueryClientProvider>,
);
