const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a product name'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Please add a product category'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Please add a product price'],
      min: [0, 'Price cannot be negative'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please add a product quantity'],
      min: [0, 'Quantity cannot be negative'],
    },
    minStock: {
      type: Number,
      required: [true, 'Please add a minimum stock threshold'],
      default: 10,
      min: [0, 'Minimum stock cannot be negative'],
    },
  },
  {
    timestamps: true, // Automatically creates createdAt and updatedAt
  }
);

module.exports = mongoose.model('Product', productSchema);
