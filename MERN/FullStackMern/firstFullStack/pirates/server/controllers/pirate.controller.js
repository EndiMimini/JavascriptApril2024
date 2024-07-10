const Pirate = require('../models/pirate.model');
 
module.exports.findAll = (req, res) => {
    Pirate.find()
        .then((response) => {
            res.json({ results: response })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSingle = (req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then(one => {
            res.json({ result: one })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

 
module.exports.createNew = (req, res) => {
    Pirate.create(req.body)
        .then(newInfo => {
            res.json({ result: newInfo })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExisting = (req, res) => {
    Pirate.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedObject => {
            res.json({ result: updatedObject })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}



 
module.exports.deleteAnExisting = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
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