import create from "zustand";
import localforage from "localforage";
import { devtools } from "zustand/middleware";

let createStore;

if (process.env.NODE_ENV === "development") {
	// Import devtools only in development

	createStore = devtools(create);
} else {
	// Use create without devtools in production
	createStore = create;
}

const useZuStore = createStore((set) => ({
	auth: {
		token: null,
	},
	preferences: {
		theme: "light",
	},
	user: {
		name: null,
	},

	// Actions

	login: async (token) => {
		set({ auth: { token } });
		await localforage.setItem("auth", { token });
	},

	logout: async () => {
		set({ auth: { token: null } });
		await localforage.setItem("auth", { token: null });
	},

	setTheme: async (theme) => {
		if (!["light", "dark"].includes(theme)) {
			return;
		}

		set({ preferences: { theme } });
		await localforage.setItem("preferences", { theme });
	},

	setUser: (name) => set({ user: { name } }),

	setState: async (persistedState) => {
		set(persistedState);

		const { auth, preferences } = persistedState;

		await Promise.all([
			localforage.setItem("auth", auth),
			localforage.setItem("preferences", preferences),
		]);
	},
}));

const hydrateStore = async () => {
	const [auth, preferences] = await Promise.all([
		localforage.getItem("auth"),
		localforage.getItem("preferences"),
	]);

	useZuStore.setState({ auth, preferences });
};

hydrateStore().then((r) => {
	if (process.env.NODE_ENV === "development") {
		console.info("State hydrated from local storage");
		console.table(
			Object.entries(useZuStore.getState()).map(([key, value]) => ({
				key,
				value,
			})),
		);
	}
});

export default useZuStore;
