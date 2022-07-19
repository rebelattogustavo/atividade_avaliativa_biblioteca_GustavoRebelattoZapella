const crud = require("../../crud/indexC.js");

async function searchAuthors(){
    return await crud.get('authors');
};

async function searchAuthorsId(id){
    return await crud.getById('authors', id);
};

async function create(name, lastName, age, idAuthor) {
    if(idAuthor){
        await crud.save('authors', idAuthor, { name, lastName, age });
    }else{
        await crud.save('authors', null, {name, lastName, age });
    }
    return searchAuthors();
}

async function remove(id){
    await crud.remove('authors', id);
    return searchAuthors();
};

module.exports = {
    searchAuthors,
    searchAuthorsId,
    create,
    remove
};