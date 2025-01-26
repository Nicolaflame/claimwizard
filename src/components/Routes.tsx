import React from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { ClaimForm } from "./ClaimForm";
import { ClaimsHistory } from "../pages/ClaimsHistory";
import { Settings } from "../pages/Settings";

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/new-claim" element={<ClaimForm />} />
      <Route path="/claims-history" element={<ClaimsHistory />} />
      <Route path="/settings" element={<Settings />} />
    </ReactRouterRoutes>
  );
}
