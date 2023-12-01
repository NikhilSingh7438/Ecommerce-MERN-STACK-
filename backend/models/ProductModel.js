import mongoose from "mongoose";
 
const MERNProduct = mongoose.Schema({
    prodName:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    }
});
 
export default mongoose.model('MERNProducts', MERNProduct);