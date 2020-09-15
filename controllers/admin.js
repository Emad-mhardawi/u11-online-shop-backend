const Product = require("../modules/product");


//////// add product to the data base ///////////

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
 


exports.postDeleteProduct = async(req, res, next)=>{
    try{
        const prodId = req.body.productId;
        const removedProduct = await Product.findByIdAndRemove(prodId);
        res.send(removedProduct.productName + " successfuly removed");

    }catch(err){
        throw err,
        res.json('something went wrong can not delete product');
    }
} 