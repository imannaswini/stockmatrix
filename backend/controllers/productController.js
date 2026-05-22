const Product = require('../models/productModel');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).exec();
    return res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Public
const createProduct = async (req, res, next) => {
  try {
    const { name, category, price, quantity, minStock } = req.body;

    // Validation for empty fields handled by Mongoose, but doing manual check for clear response
    if (!name || !category || price === undefined || quantity === undefined) {
      res.status(400);
      throw new Error('Please add all required fields: name, category, price, quantity');
    }

    if (price < 0 || quantity < 0 || (minStock !== undefined && minStock < 0)) {
      res.status(400);
      throw new Error('Numeric values (price, quantity, minStock) cannot be negative');
    }

    const product = await Product.create({
      name,
      category,
      price,
      quantity,
      minStock: minStock !== undefined ? minStock : 10,
    });

    return res.status(201).json(product);
  } catch (error) {
    return next(error);
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Public
const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    const { price, quantity, minStock } = req.body;
    if ((price !== undefined && price < 0) || (quantity !== undefined && quantity < 0) || (minStock !== undefined && minStock < 0)) {
      res.status(400);
      throw new Error('Numeric values cannot be negative');
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).exec();

    return res.status(200).json(updatedProduct);
  } catch (error) {
    return next(error);
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Public
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    await product.deleteOne();

    return res.status(200).json({ id: req.params.id, success: true });
  } catch (error) {
    return next(error);
  }
};

// @desc    Get low stock products
// @route   GET /api/products/low-stock
// @access  Public
const getLowStockProducts = async (req, res, next) => {
  try {
    // using $expr to compare two fields in the document
    const lowStockProducts = await Product.find({
      $expr: { $lte: ["$quantity", "$minStock"] }
    }).sort({ quantity: 1 }).exec();
    
    return res.status(200).json(lowStockProducts);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getLowStockProducts,
};
