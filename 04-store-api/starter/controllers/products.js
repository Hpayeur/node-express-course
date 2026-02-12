const getAllProductsStatic = async (req, res) => {
  res.satus(200).json({ msg: "Products Testing This Route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Testing Products Route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
