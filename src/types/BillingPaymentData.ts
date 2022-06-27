export default interface BillingPaymentData {
  id: number;
  name: string;
  status: "status" | "menunggu pembayaran" | "selesai";
}
