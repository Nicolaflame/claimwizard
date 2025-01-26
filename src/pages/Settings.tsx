import React, { useState } from "react";
import {
  Page,
  Layout,
  Card,
  Tabs,
  TextField,
  Select,
  Button,
  FormLayout,
  SettingToggle,
  TextStyle,
  Stack,
} from "@shopify/polaris";

export function Settings() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [upsEnabled, setUpsEnabled] = useState(true);
  const [fedexEnabled, setFedexEnabled] = useState(true);

  const tabs = [
    {
      id: "account",
      content: "Account",
      component: (
        <Card sectioned>
          <FormLayout>
            <TextField label="Company Name" value="Your Company" />
            <TextField label="Email" value="admin@company.com" />
            <TextField label="Phone" value="(555) 123-4567" />
            <Button primary>Save Changes</Button>
          </FormLayout>
        </Card>
      ),
    },
    {
      id: "carrier-config",
      content: "Carrier Configuration",
      component: (
        <Stack vertical>
          <Card sectioned>
            <SettingToggle
              action={{
                content: upsEnabled ? "Disable" : "Enable",
                onAction: () => setUpsEnabled(!upsEnabled),
              }}
              enabled={upsEnabled}
            >
              <Stack vertical spacing="tight">
                <TextStyle variation="strong">UPS Integration</TextStyle>
                <FormLayout>
                  <TextField label="API Key" value="**********************" />
                  <TextField label="Account Number" value="************" />
                  <Select
                    label="Environment"
                    options={[
                      { label: "Production", value: "production" },
                      { label: "Test", value: "test" },
                    ]}
                    value="production"
                  />
                </FormLayout>
              </Stack>
            </SettingToggle>
          </Card>

          <Card sectioned>
            <SettingToggle
              action={{
                content: fedexEnabled ? "Disable" : "Enable",
                onAction: () => setFedexEnabled(!fedexEnabled),
              }}
              enabled={fedexEnabled}
            >
              <Stack vertical spacing="tight">
                <TextStyle variation="strong">FedEx Integration</TextStyle>
                <FormLayout>
                  <TextField label="API Key" value="**********************" />
                  <TextField label="Meter Number" value="************" />
                  <Select
                    label="Environment"
                    options={[
                      { label: "Production", value: "production" },
                      { label: "Test", value: "test" },
                    ]}
                    value="production"
                  />
                </FormLayout>
              </Stack>
            </SettingToggle>
          </Card>
        </Stack>
      ),
    },
    {
      id: "preferences",
      content: "Preferences",
      component: (
        <Card sectioned>
          <FormLayout>
            <Select
              label="Default Carrier"
              options={[
                { label: "UPS", value: "ups" },
                { label: "FedEx", value: "fedex" },
              ]}
              value="ups"
            />
            <Select
              label="Default Time Period"
              options={[
                { label: "Last 7 Days", value: "7" },
                { label: "Last 30 Days", value: "30" },
                { label: "Last 90 Days", value: "90" },
              ]}
              value="30"
            />
            <TextField
              label="Claims Auto-refresh Interval (minutes)"
              type="number"
              value="5"
            />
            <Button primary>Save Preferences</Button>
          </FormLayout>
        </Card>
      ),
    },
    {
      id: "appearance",
      content: "Appearance",
      component: (
        <Card sectioned>
          <FormLayout>
            <Select
              label="Theme"
              options={[
                { label: "Light", value: "light" },
                { label: "Dark", value: "dark" },
                { label: "System Default", value: "system" },
              ]}
              value="light"
            />
            <Select
              label="Date Format"
              options={[
                { label: "MM/DD/YYYY", value: "mm/dd/yyyy" },
                { label: "DD/MM/YYYY", value: "dd/mm/yyyy" },
                { label: "YYYY-MM-DD", value: "yyyy-mm-dd" },
              ]}
              value="mm/dd/yyyy"
            />
            <Button primary>Save Appearance</Button>
          </FormLayout>
        </Card>
      ),
    },
    {
      id: "miscellaneous",
      content: "Miscellaneous",
      component: (
        <Card sectioned>
          <FormLayout>
            <SettingToggle
              action={{
                content: "Enable",
                onAction: () => {},
              }}
              enabled={true}
            >
              <TextStyle variation="strong">Email Notifications</TextStyle>
            </SettingToggle>
            <SettingToggle
              action={{
                content: "Enable",
                onAction: () => {},
              }}
              enabled={true}
            >
              <TextStyle variation="strong">Auto-save Claims Draft</TextStyle>
            </SettingToggle>
            <Button primary>Save Settings</Button>
          </FormLayout>
        </Card>
      ),
    },
  ];

  return (
    <Page title="Settings" breadcrumbs={[{ content: "Dashboard", url: "/" }]}>
      <Layout>
        <Layout.Section secondary>
          <Card>
            <Tabs
              tabs={tabs}
              selected={selectedTab}
              onSelect={setSelectedTab}
              vertical
            />
          </Card>
        </Layout.Section>
        <Layout.Section>{tabs[selectedTab].component}</Layout.Section>
      </Layout>
    </Page>
  );
}
