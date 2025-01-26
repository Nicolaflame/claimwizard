import React, { useState } from "react";
import { Button, Select, TextField, Banner } from "@shopify/polaris";

export function ClaimForm() {
  const [carrier, setCarrier] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/claims", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carrier,
          trackingNumber,
          reason,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to submit claim");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {success && (
        <Banner status="success">Claim submitted successfully!</Banner>
      )}
      {error && <Banner status="critical">{error}</Banner>}

      <Select
        label="Carrier"
        options={[
          { label: "UPS", value: "UPS" },
          { label: "FedEx", value: "FEDEX" },
        ]}
        value={carrier}
        onChange={setCarrier}
      />

      <TextField
        label="Tracking Number"
        value={trackingNumber}
        onChange={setTrackingNumber}
      />

      <TextField
        label="Claim Reason"
        value={reason}
        onChange={setReason}
        multiline={4}
      />

      <Button primary loading={loading} onClick={handleSubmit}>
        Submit Claim
      </Button>
    </div>
  );
}
