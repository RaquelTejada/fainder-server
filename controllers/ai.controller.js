const router = require("express").Router()
const { response } = require("express")
const Ai = require('../models/Ai.model')
const User = require('../models/User.model')

const getAllAi = (req, res, next) => {

    Ai
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editAi = (req, res, next) => {

    const { ai_id } = req.params

    const { image, name, category, votes } = req.body

    Ai
        .findByIdAndUpdate(ai_id, { image, name, category, votes }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteAi = (req, res, next) => {

    const { ai_id } = req.params

    Ai
        .findByIdAndDelete(ai_id)
        .then(() => res.status(200).json({ message: "OK" }))
        .catch(err => next(err))
}

const saveAi = (req, res, next) => {

    const { image, name, category, votes } = req.body
    const { _id: owner } = req.payload

    Ai
        .create({ image, name, category, votes, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneAi = (req, res, next) => {

    const { ai_id } = req.params

    Ai
        .findById(ai_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const filteredAi = (req, res, next) => {

    const { name } = req.query

    Ai
        .find({ 'name': { $regex: `(?i)${name}` } })
        .then(response => { res.json(response) })
        .catch(err => next(err))
}

const getFindCategory = (req, res, next) => {

    const { category } = req.params

    Ai
        .find({ category })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getAiSorted = (req, res, next) => {

    const { votes, name } = req.query;

    const filter = [];

    // if (votes) {
    //     filter.push(['votes', votes])
    // }

    if (name) {
        filter.push(['name', name])
    }

    Ai
        .find()
        .sort(filter)
        .then(response => res.json(response))
        .catch(err => next(err))
}


module.exports = {
    getAllAi,
    editAi,
    deleteAi,
    saveAi,
    getOneAi,
    filteredAi,
    getFindCategory,
    getAiSorted,
}