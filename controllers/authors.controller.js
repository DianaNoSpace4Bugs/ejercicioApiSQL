const modelsAutores = require('../models/authors.model'); // Importar el modelo de la BBDD

//getAuthors
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
//lo vamos a engachar a una ruta que si hay mail busca por correo, si no hay mail busca todo. 
const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await modelsAutores.getAuthorsByEmail(req.query.email);//esto accede a entries.models y llama a esa funcion allí 
    }
    else {
        authors = await modelsAutores.getAllAuthors();//esto accede a entries.models y llama a esa funcion allí
    }
    res.status(200).json(authors); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear author de 0
const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {name,surname,email,image}
    const response = await modelsAutores.createAuthor(newAuthor);//esto accede a authors.models y llama a esa funcion allí
    res.status(201).json({
        "items_created": response,
        data: newAuthor
    });
}

const updateAuthor = async (req, res) => {
    const changeAuthor = req.body; // {name,surname,email,image}
    const response = await modelsAutores.updateAuthor(changeAuthor);//esto accede a authors.models y llama a esa funcion allí
    res.status(201).json({
        "items_changed": response,
        data: changeAuthor
    });
}
const deleteAuthor = async (req, res) => {
    const deleteAuthorInjection = req.body; // {name,surname,email,image}
    const response = await modelsAutores.deleteAuthor(deleteAuthorInjection);//esto accede a authors.models y llama a esa funcion allí
    res.status(201).json({
        "items_deleted": response,
        data: deleteAuthorInjection
    });
}

module.exports = {
    getAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor
}