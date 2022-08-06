const crud = require('../../crud/indexC.js');

async function searchBooks(){
    return await crud.get('books');
};

async function searchBooksId(id){
    return await crud.getById('books', id);
};

async function create(title, amount, idPblshComp, authors, idBook) {   
    let pblsh_comp = await crud.getById('pblsh_companies', idPblshComp);
    pblsh_comp = pblsh_comp.name;

    if(pblsh_comp == "Error"){
        return {
            message: "The publisher company doesnt exist"
        }
    }else{
        if(idBook){
            if(idPblshComp){
                await crud.save('books', idBook, {title, amount, pblsh_comp});
                for(let i =0; i< authors.length; i++){
                    await crud.save('books_authors', null, {
                        idLivro: livro.id,
                        idAutor: authors[i]
                    });
                };
            }else{
                return {
                    message: "A publish company need to be informed!"
                }
            }
        }else{
            if(idPblshComp){
                await crud.save('books', idBook, {title, amount, pblsh_comp});
                for(let i =0; i< authors.length; i++){
                    let author = await crud.getById('authors', authors[i]);
                    author = author.name;
                    console.log("author: ", author);
                    await crud.save('books_authors', null, {
                        livro: title,
                        autor: author
                    });
                };
            }else{
                return {
                    message: "A publish company need to be informed!"
                }
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