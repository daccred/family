"use client";
import { config, queryClient } from "@/config";
import { AlchemyClientState } from "@account-kit/core";
import { AlchemyAccountProvider } from "@account-kit/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { AppProvider } from "../context/AppContext";

export const Providers = (
  props: PropsWithChildren<{ initialState?: AlchemyClientState }>
) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AlchemyAccountProvider
        config={config}
        queryClient={queryClient}
        initialState={props.initialState}
      >
        <AppProvider>
          {props.children}
        </AppProvider>
      </AlchemyAccountProvider>
    </QueryClientProvider>
  );
};
