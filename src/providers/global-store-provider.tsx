"use client";

import { createContext, type ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

import {
	createGlobalStore,
	defaultGlobalState,
	type GlobalStore,
} from "@/stores/global";

export type GlobalStoreApi = ReturnType<typeof createGlobalStore>;

export const GlobalStoreContext = createContext<GlobalStoreApi | undefined>(
	undefined
);

export interface GlobalStoreProviderProps {
	children: ReactNode;
}

const InitDataComponent = ({ children }: { children: ReactNode }) => {
	return <>{children}</>;
};

export const GlobalStoreProvider = ({ children }: GlobalStoreProviderProps) => {
	const storeRef = useRef<GlobalStoreApi | null>(null);

	if (!storeRef.current) {
		storeRef.current = createGlobalStore(defaultGlobalState);
	}

	return (
		<GlobalStoreContext.Provider value={storeRef.current!}>
			<InitDataComponent>{children}</InitDataComponent>
		</GlobalStoreContext.Provider>
	);
};

export const useGlobalStore = <T,>(selector: (store: GlobalStore) => T): T => {
	const globalStoreContext = useContext(GlobalStoreContext);

	if (!globalStoreContext) {
		throw new Error(`useGlobalStore must be used within GlobalStoreProvider`);
	}

	return useStore(globalStoreContext, selector);
};
