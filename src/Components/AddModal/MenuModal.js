const {model, Schema} = require('mongoose');

const menuSchema = new Schema({
    name:{
        type:String,
        required:[true,'El campo de nombre es obligatorio'],
        trim:true
    },
    status:{
        type:Boolean,
        default:true
    },
    price:{
        type:Number,
        min:[0,'No puede ser número negativo'],
        required:true
    },
    detail:{
        type:String,
        required:[true,'Los detalles son obligatorios'],
        trim:true
    },
    category:{
        type:String,
        required:[true,'La categoria es obligatoria'],
        trim:true
    },
},{
    versionKey:false,
    timestamps:true
    })

module.exports = model('menu',menuSchema);