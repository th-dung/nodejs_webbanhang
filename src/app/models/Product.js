const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProductSchema = new Schema(
  {
    //_id: {type: Number,},
    name: { type: String, require: true },
    image_avt: { type: String, require: true },
    image_1: { type: String },
    image_2: { type: String },
    describe: { type: String, require: true },
    price: { type: String, require: true },
    quantity: { type: String, require: true },
    phone: { type: String, require: true },
    shopee: { type: String },
    lazada: { type: String },
    category: {type: String, require: true},
    slug: { type: String, slug: 'name', unique: true }
  },
  {
    _id: true,
    timestamps: true,
  }
);

// add plugins
mongoose.plugin(slug);
//ProductSchema.plugin(AutoIncrement);
ProductSchema.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true,
});

module.exports = mongoose.model('Product', ProductSchema);
