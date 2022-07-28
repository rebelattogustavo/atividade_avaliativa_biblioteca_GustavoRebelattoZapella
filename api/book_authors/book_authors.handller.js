const crud = require('../../crud/indexC.js');

async function searchBookAuthor(){
    return await crud.get('books_authors');
};

async function searchBooksAuthorsId(id){
    return await crud.getById('books_authors', id);
};

async function create(idAuthor, idBook, idAuthorBook) {
    if(idAuthorBook){
        await crud.save('books_authors', idAuthorBook, {idAuthor, idBook });
    }else{
        await crud.save('books_authors', null, {idAuthor, idBook });
    }
    return searchBookAuthor();
}

async function remove(idAuthorBook){
    await crud.remove('books_authors', idAuthorBook);
    return searchBookAuthor();
}

module.exports= {
    searchBookAuthor,
    searchBooksAuthorsId,
    create,
    remove
}
