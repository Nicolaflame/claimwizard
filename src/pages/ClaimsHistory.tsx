import React, { useState } from "react";
import {
  Page,
  Card,
  Filters,
  DataTable,
  Button,
  ResourceList,
  ResourceItem,
  TextStyle,
} from "@shopify/polaris";

export function ClaimsHistory() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedCarrier, setSelectedCarrier] = useState(null);

  const filters = [
    {
      key: "status",
      label: "Status",
      filter: (
        <Filters
          queryValue={selectedStatus}
          filters={[
            {
              label: "Pending",
              value: "pending",
            },
            {
              label: "Approved",
              value: "approved",
            },
            {
              label: "Denied",
              value: "denied",
            },
          ]}
          onQueryChange={setSelectedStatus}
        />
      ),
    },
    {
      key: "carrier",
      label: "Carrier",
      filter: (
        <Filters
          queryValue={selectedCarrier}
          filters={[
            {
              label: "UPS",
              value: "ups",
            },
            {
              label: "FedEx",
              value: "fedex",
            },
          ]}
          onQueryChange={setSelectedCarrier}
        />
      ),
    },
  ];

  const claims = [
    {
      id: "1234",
      carrier: "UPS",
      tracking: "1Z999AA1234567890",
      status: "Pending",
      reason: "Lost Package",
      date: "2024-02-20",
    },
    // Add more claims as needed
  ];

  return (
    <Page title="Claims History">
      <Card>
        <ResourceList
          resourceName={{ singular: "claim", plural: "claims" }}
          filterControl={
            <Filters
              queryValue=""
              filters={filters}
              appliedFilters={[]}
              onQueryChange={() => {}}
              onQueryClear={() => {}}
            />
          }
          items={claims}
          renderItem={(item) => (
            <ResourceItem id={item.id}>
              <h3>
                <TextStyle variation="strong">Claim #{item.id}</TextStyle>
              </h3>
              <div>Carrier: {item.carrier}</div>
              <div>Tracking: {item.tracking}</div>
              <div>Status: {item.status}</div>
              <div>Reason: {item.reason}</div>
              <div>Date: {item.date}</div>
            </ResourceItem>
          )}
        />
      </Card>
    </Page>
  );
}
