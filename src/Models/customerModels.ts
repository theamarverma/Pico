import mongoose, { Schema, Document, Model } from "mongoose"; // Import

export interface ICustomer extends Document {
  name: string;
  bookingId: string;
  email: string;
  phone: string;
  dateTime: Date;
  seats: number;
}

const customerSchema: Schema<ICustomer> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bookingId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
});

// "If mongoose.models.Customer is null or undefined, then create a new model; otherwise, use the existing one."
const Customer: Model<ICustomer> =
  mongoose.models.Customer ??
  mongoose.model<ICustomer>("Customer", customerSchema);

export default Customer;
