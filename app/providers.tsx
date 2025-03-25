"use client"; // Required for using Redux in Next.js App Router

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
