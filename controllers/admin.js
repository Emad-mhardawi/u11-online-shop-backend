const Product = require("../modules/product");


//////// add product to the data base ///////////

exports.postAddProduct =  (async(req, res, next) => {
  try {
    const productName = req.body.productName;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;

    const newProduct = await new Product({
      productName: productName,
      imageUrl: imageUrl,
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
 

//////// delete product from the data base ///////////

exports.postDeleteProduct = async(req, res, next)=>{
    try{
        const prodId = req.body.productId;
        const removedProduct = await Product.findByIdAndRemove(prodId);
        res.send(removedProduct.productName + " successfuly removed");

    }catch(err){
        throw err,
        res.json('something went wrong can not delete product');
    }
} ;




exports.postEditProduct = async (req, res, next) => {
  try {
    const prodId = req.body.productId;
    const updatedProductName = req.body.productName;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    const updatedPrice = req.body.price;

    const productToUpdate = await Product.findById(prodId);
    productToUpdate.productName = updatedProductName;
    productToUpdate.imageUrl = updatedImageUrl;
    productToUpdate.description = updatedDesc;
     productToUpdate.price = updatedPrice;
    const updatedProduct = await productToUpdate.save();
    res.send(updatedProduct);
  } catch (err) {
    res.send("cant edit the product");
  }
};


  