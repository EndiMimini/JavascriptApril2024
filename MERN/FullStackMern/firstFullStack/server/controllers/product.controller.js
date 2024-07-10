const Product = require('../models/product.model');
 
module.exports.findAll = (req, res) => {
    Product.find()
        .then((response) => {
            res.json({ products: response })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSingle = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(one => {
            res.json({ product: one })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

 
module.exports.createNew = (req, res) => {
    Product.create(req.body)
        .then(newInfo => {
            res.json({ product: newInfo })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExisting = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedObject => {
            res.json({ product: updatedObject })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}


module.exports.like = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { likes: 1 } },
        { new: true, runValidators: true }
    )
        .then(updatedObject => {
            res.json({ product: updatedObject })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.addView = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { views: 1 } },
        { new: true, runValidators: true }
    )
        .then(updatedObject => {
            res.json({ product: updatedObject })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExisting = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

// module.exports.like = (req, res) => {
//     Product.findOneAndUpdate(
//         { _id: req.params.id },
//         { $inc: { likes: 1 } },
//         { new: true, runValidators: true  }
//     )
//         .then(updatedObject => {
//             res.json({ product: updatedObject })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}