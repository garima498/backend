import mongoose from "mongoose";
import BestSeller from "../../frontend/src/components/BestSeller";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    discription: { type: String, required: true },
    price: { type: Number, required:true },
    category: { type: String, required:true },
    subCategory: { type: String, required:true },
    sizes: { type: Array, required:true },
    bestseller: {type:Boolean},
    date: {type:Number, required:true}
    


})

const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel