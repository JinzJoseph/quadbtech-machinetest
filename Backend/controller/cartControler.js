import Cart from "../models/cartmodel.js";

export const getUserCart = async (req, res) => {
  try {
    if (req.user === false) {
      return res.status(401).json({
        message: "Please Login",
        success: false,
      });
    }
    const result = await Cart.find({ userId: req.user._id }).populate(
      "productId"
    );
    //console.log(result);
    if (!result) {
      return res.status(402).json({
        message: "No product in cart",
        success: false,
      });
    }
    res.status(200).json({
      message: "Successfully fetched data",
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `An Error occured ${error.message}`,
      success: false,
    });
  }
};
export const addItemToCart = async (req, res) => {
  try {
    const { productId, userId } = req.body;

    const isThatProductInDataBase = await Cart.findOne({ productId });

    if (isThatProductInDataBase) {
      return res.status(401).json({
        message: "Product Already in the cart",
        success: false,
      });
    }

    const uploadToCart = new Cart({
      userId,
      productId,
      Qty: 1,
    });

    await uploadToCart.save();

    res.status(200).json({
      message: "Successfully data added",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `An Error occurred due to ${error.message}`,
      success: false,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await Cart.findByIdAndDelete(id);
    res.status(200).json({
      message: "successfully deleted",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

