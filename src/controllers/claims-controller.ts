import { Request, Response } from "express";
import { UPSService } from "../services/ups-service";
import { FedExService } from "../services/fedex-service";

export class ClaimsController {
  private upsService: UPSService;
  private fedexService: FedExService;

  constructor() {
    this.upsService = new UPSService();
    this.fedexService = new FedExService();
  }

  async submitClaim(req: Request, res: Response) {
    try {
      const { carrier, trackingNumber, reason, orderDetails } = req.body;

      let response;
      if (carrier === "UPS") {
        response = await this.upsService.fileShippingClaim({
          trackingNumber,
          reason,
          orderDetails,
        });
      } else if (carrier === "FEDEX") {
        response = await this.fedexService.fileShippingClaim({
          trackingNumber,
          reason,
          orderDetails,
        });
      } else {
        throw new Error("Unsupported carrier");
      }

      res.json({
        success: true,
        claimId: response.claimId,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
}
