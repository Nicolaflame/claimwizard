import { Navigation } from "@shopify/app-bridge/actions";
import { useAppBridge, NavigationMenu } from "@shopify/app-bridge-react";
import { useLocation } from "react-router-dom";

export function AppNavigationMenu() {
  const app = useAppBridge();
  const location = useLocation();

  const navigationMenu = Navigation.create(app);

  navigationMenu.set({
    items: [
      {
        label: "Dashboard",
        destination: "/",
        selected: location.pathname === "/",
      },
      {
        label: "New Claim",
        destination: "/new-claim",
        selected: location.pathname === "/new-claim",
      },
      {
        label: "Claims History",
        destination: "/claims-history",
        selected: location.pathname === "/claims-history",
      },
    ],
  });

  return null;
}
