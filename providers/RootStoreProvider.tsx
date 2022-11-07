import { enableStaticRendering } from "mobx-react-lite";
import React, { createContext, ReactNode, useContext } from "react";
import { RootStore } from "../stores/RootStore";

enableStaticRendering(typeof window === "undefined");

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = "StoreContext";

export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}

export function useBasketStore() {
  const { basketStore } = useRootStore();
  return basketStore;
}


export function RootStoreProvider({
  children,
}: {
  children: ReactNode;
}) {
  const store = initializeStore();

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

function initializeStore(): RootStore {
  const _store = store ?? new RootStore();

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}