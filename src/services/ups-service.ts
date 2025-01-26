import { UPSClient } from "ups-api-sdk";

export class UPSService {
  private client: UPSClient;

  constructor() {
    this.client = new UPSClient({
      accessKey: process.env.UPS_ACCESS_KEY,
      username: process.env.UPS_USERNAME,
      password: process.env.UPS_PASSWORD,
      environment:
        process.env.NODE_ENV === "production" ? "production" : "test",
    });
  }

  async fileShippingClaim(claimData: {
    trackingNumber: string;
    reason: string;
    orderDetails: any;
  }) {
    try {
      const response = await this.client.claims.create({
        TrackingNumber: claimData.trackingNumber,
        ClaimReason: claimData.reason,
        // Additional claim details
      });
      return response;
    } catch (error) {
      console.error("UPS Claim Error:", error);
      throw error;
    }
  }
}
