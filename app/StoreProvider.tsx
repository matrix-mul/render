"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store/store";
import { AppStore } from "./store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<any>(null);
  const presistStoreRef = useRef<any>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    presistStoreRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={presistStoreRef.current}>{children}</PersistGate>
    </Provider>
  );
}
