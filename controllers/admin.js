const Product = require("../modules/product");

exports.postAddProduct =  (async(req, res, next) => {
  try {
    const productName = req.body.productName;
    const imgeUrl = req.body.imgeUrl;
    const description = req.body.description;
    const price = req.body.price;

    const newProduct = await new Product({
      productName: productName,
      imgeUrl: imgeUrl,
      description: description,
      price: price,
    });
    const savedNewProduct = await newProduct.save();
    if(savedNewProduct){
        res.send('new product has been added succesfully');
    }
  } catch (err) {
    res.send("something went wrong" + err);
  }
});
