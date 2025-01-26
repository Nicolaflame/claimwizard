import { FedEx } from "fedex-api-wrapper";

export class FedExService {
  private client: FedEx;

  constructor() {
    this.client = new FedEx({
      key: process.env.FEDEX_KEY,
      password: process.env.FEDEX_PASSWORD,
      account_number: process.env.FEDEX_ACCOUNT,
      meter_number: process.env.FEDEX_METER,
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
        tracking_number: claimData.trackingNumber,
        claim_reason: claimData.reason,
        // Additional claim details
      });
      return response;
    } catch (error) {
      console.error("FedEx Claim Error:", error);
      throw error;
    }
  }
}
