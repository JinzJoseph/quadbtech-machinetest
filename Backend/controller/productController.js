import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "successfully fetched products",
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `an error occured due to ${error.message}`,
      success: false,
    });
  }
};
export const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ _id: id });
    if (!product) {
      return res.status(401).json({
        message: "There is no data about your id ,please check again",
        success: false,
      });
    }
    res.status(200).json({
      message: "suucessfully fetched data",
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `An error occured du to ${error.message}`,
      success: false,
    });
  }
};
export const addProducts = async (req, res) => {
  if (req.user.isAdmin === false) {
    return res.status(400).json({
      message: "you are not allowed to add product ",
      success: false,
    });
  }
  try {
    console.log(req.body);
    if (
      !req.body.productName ||
      !req.body.category ||
      !req.body.productImage ||
      !req.body.description ||
      !req.body.price ||
      !req.body.sellingPrice
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const uploadProduct = new Product({
      productName: req.body.productName,
      category: req.body.category,
      productImage: req.body.productImage,
      description: req.body.description,
      price: req.body.price,
      sellingPrice: req.body.sellingPrice,
    });
    await uploadProduct.save();
    res.status(200).json({
      message: "Successfully product added",
      success: false,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `an Error ocuured due to ${error.message}`,
      success: false,
    });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (req.user.isAdmin === false) {
    return res.status(400).json({
      message: "Your are not allowed to do these action",
      success: false,
    });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: id },
      {
        productName: req.body.productName,

        category: req.body.category,
        productImage: req.body.productImage,
        description: req.body.description,
        price: req.body.price,
        sellingPrice: req.body.sellingPrice,
      },
      { new: true }
    );
    return res.status(200).json({
      message: "Suceessfully updated product details",
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: `An error occured due to ${error.message}`,
      success: false,
    });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (req.user.isAdmin === false) {
    return res.status(401).json({
      message: "You are not allowed to take these action",
      success: false,
    });
  }
  try {
    await Product.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: "successfully deleted product",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong !",
      success: false,
    });
  }
};
