import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
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

const Customer =
  mongoose.models.customers || mongoose.model("customers", customerSchema);

export default Customer;
