import { useMemo, PropsWithChildren } from "react";
import { Provider } from "@shopify/app-bridge-react";
import { Location } from "history";
import { useLocation, useNavigate } from "react-router-dom";

export function AppBridgeProvider({ children }: PropsWithChildren) {
  const location = useLocation();
  const navigate = useNavigate();

  const history = useMemo(
    () => ({
      replace: (path: string) => {
        navigate(path, { replace: true });
      },
    }),
    [navigate]
  );

  const config = {
    apiKey: process.env.SHOPIFY_API_KEY || "",
    host: new URLSearchParams(location.search).get("host") || "",
    forceRedirect: true,
  };

  return (
    <Provider config={config} router={{ history, location }}>
      {children}
    </Provider>
  );
}
