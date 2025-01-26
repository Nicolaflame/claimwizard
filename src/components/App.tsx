import React from "react";
import {
  NavigationMenu,
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./providers";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

export function App() {
  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            <NavigationMenu />
            <Routes />
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
