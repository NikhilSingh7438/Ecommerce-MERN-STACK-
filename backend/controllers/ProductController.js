import MERNProduct from "../models/ProductModel.js";
 
export const getProduct = async (req, res) => {
    try {
        const products = await MERNProduct.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getProductById = async (req, res) => {
    try {
        const product = await MERNProduct.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const saveProduct = async (req, res) => {
    const product = new MERNProduct(req.body);
    try {
        const insertedProduct = await product.save();
        res.status(201).json({
            message: "Product added successfully",
            product: insertedProduct,
        });
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await MERNProduct.deleteOne({_id:req.params.id});
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}