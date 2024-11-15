import mongoose, { Document } from "mongoose";
import { PushSubscription } from "web-push";

interface SubscriptionDocument extends Document, PushSubscription {}

const subscriptionSchema = new mongoose.Schema<SubscriptionDocument>({
  endpoint: { type: String, required: true },
  expirationTime: { type: Number, default: null },
  keys: {
    p256dh: { type: String, required: true },
    auth: { type: String, required: true },
  },
});

const SubscriptionModel = mongoose.model<SubscriptionDocument>(
  "Subscription",
  subscriptionSchema
);
export default SubscriptionModel;
