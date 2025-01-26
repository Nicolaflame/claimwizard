import React from "react";
import {
  Page,
  Layout,
  Card,
  DataTable,
  Button,
  TextStyle,
} from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  const recentClaims = [
    ["#1234", "UPS", "1Z999AA1234567890", "Pending", "Lost Package"],
    ["#1235", "FedEx", "794644543973", "Approved", "Damaged Package"],
  ];

  return (
    <Page
      title="Shipping Claims Dashboard"
      primaryAction={
        <Button primary onClick={() => navigate("/new-claim")}>
          New Claim
        </Button>
      }
    >
      <Layout>
        <Layout.Section>
          <Card title="Recent Claims">
            <DataTable
              columnContentTypes={["text", "text", "text", "text", "text"]}
              headings={[
                "Claim ID",
                "Carrier",
                "Tracking #",
                "Status",
                "Reason",
              ]}
              rows={recentClaims}
            />
          </Card>
        </Layout.Section>

        <Layout.Section secondary>
          <Card title="Quick Stats">
            <Card.Section>
              <TextStyle variation="strong">Total Claims: 25</TextStyle>
            </Card.Section>
            <Card.Section>
              <TextStyle variation="strong">Pending Claims: 8</TextStyle>
            </Card.Section>
            <Card.Section>
              <TextStyle variation="strong">Approved Claims: 15</TextStyle>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
