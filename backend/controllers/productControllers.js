 const ProductModel = require('../models/productModel')
 
 //Get products Api -/api/v1/products
 exports.getProducts = async(req, res, next)  => {
  const query = req.query.keyword?{  name:{
  $regex: req.query.keyword,
  $options:'i'
}}:{}

  const products =  await ProductModel.find(query);
  res.json({
    success:true,
    products
  })
  
 }


//get single products api - /api/v1/product/:id
 exports.getSingleProduct= async(req, res, next)  =>
    { 
      try{
        const products = await ProductModel.findById(req.params.id);
        res.json({
          success : true,
          products
        })

      }catch(error){ 
        res.status(404).json({
          success:false,
          message: error.message
        })

      }
    
  
    }