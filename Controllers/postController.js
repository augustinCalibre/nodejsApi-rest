const { postModel } = require('../models/postmodel');
const ObjectId = require('mongoose').Types.ObjectId;


// Methode pour recuperer tous les Posts

const getAllPosts = (req, res) => {

    postModel.find((err, docs) => {
        if (!err) res.send(docs)
        else res.send(err)

    });
}

// Methote pour crée de Nouveau Posts
const createPost = (req, res) => {

    const newRecord = new postModel({
        auteur: req.body.auteur,
        message: req.body.message
    });

    newRecord
        .save(newRecord)
        .then(data => {
            res.send(data)

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message + 'erreur'
            })
        })

}


const updatePost = (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).send('Error ' + req.params.id)
    }

    const { auteur, message } = req.body



    postModel.findByIdAndUpdate(
        id,
        { auteur, message },

        { new: true, useFindAndModify: false },
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log(err)

        },
    )




}

const deletePost = (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).send('Error ' + req.params.id)
    }


    postModel.findByIdAndRemove(
        id,
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log(err)

        })
}




exports.getAllPosts = getAllPosts;
exports.createPost = createPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost