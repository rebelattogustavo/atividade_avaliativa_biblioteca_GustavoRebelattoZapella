const crud = require('../../crud/indexC.js')

async function searchBooks(){
    return await crud.get('books');
};

async function searchBooksId(id){
    return await crud.getById('books', id);
};

async function create(title, amount, pblsh_comp, idBook) {
    if(idBook){
        if(pblsh_comp){
            await crud.save('books', idBook, {title, amount, pblsh_comp});
        }else{
            return {
                message: "A publish company need to be informed!"
            }
        }
    }else{
        if(pblsh_comp){
            await crud.save('books', null, {title, amount, pblsh_comp});
        }else{
            return {
                message: "A publish company need to be informed!"
            }
        }
    }
    return searchBooks();
}

async function remove(id){
    await crud.remove('books', id);
    return searchBooks();
};

module.exports = {
    searchBooks,
    searchBooksId,
    create,
    remove
}