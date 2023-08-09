const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserSchema = mongoose.Schema(
  {
    UserName: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    Role: {
      type: String,
      required: true,
      default: 0,
    },
    Mail: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
const ProductData = mongoose.model("Product", productSchema);
const Users = mongoose.model('Users',UserSchema)

module.exports = {ProductData,Users};
