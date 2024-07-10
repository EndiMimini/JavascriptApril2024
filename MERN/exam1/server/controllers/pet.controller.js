const Pet = require('../models/pet.model');
 
module.exports.findAllPets = (req, res) => {
    Pet.find({}).sort({type: 'asc'})
        .then((response) => {
            res.json({ pets: response })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSinglePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(one => {
            res.json({ pet: one })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.findOneSinglePetByName = (req, res) => {
    Pet.findOne({ name: req.params.name })
        .then(one => {
            res.json({ pet: one })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newInfo => {
            res.json({ pet: newInfo })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedObject => {
            res.json({ pet: updatedObject })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
