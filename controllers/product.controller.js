const Product = require('../models/Products.js')



//Get Product
const getProducts = async (req, res) =>{

  try {
    const product = await Product.find({})
    res.status(200).json(product)


} catch (error) {
res.status(500).json({
message: error.message
})
}

}


//get product by id
const getProduct = async (req, res) =>{
try {

  const {id} = req.params;
  const product = await Product.findById(id)
  res.status(200).json(product)
  
} catch (error) {
  res.status(500).json({
    message: error.message
  })
}

}

//Post Product

const createProducts = async (req, res)=>{

  try {
          const product = await Product.create(req.body)
          res.status(200).json(product)

    
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
 
}

//Editing and Updating Products
const updateProducts = async (req, res)=>{
  try {
    
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body)
    if(!product){
     return res.status(404).json({message: "Product not found!, did you forget your glasses today"})

    }

    const updatedProduct = await Product.findById(id)

    res.status(200).json(updatedProduct)

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}


//Deleting Products

const deleteProducts = async (req, res)=>{
  try {

    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id)
    if(!product){
     return res.status(404).json({message: "Product not found!, did you forget your glasses today"})

    }

    res.status(200).json({message: "Product deeleted successfully"})
    
  } catch (error) {
      res.status(500).json({
      message: error.message
    })
  }
}






module.exports = {
  getProducts,
  getProduct,
  createProducts,
  updateProducts,
  deleteProducts
}