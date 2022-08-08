const crud = require('../../crud/indexC.js')

async function searchReservations() {
    return await crud.get('reservations');
};

async function searchReservationsId(id) {
    return await crud.getById('reservations', id);
};

async function create(idBooks, idClient, idReservation) {
    let repeated = false;

    let client = await crud.getById('clients', idClient);
    client = client.name;
    const reserve = await searchReservations();
    
    let booksNames = [];
    
    for (let i = 0; i < idBooks.length; i++) {
        let book = await crud.getById('books', idBooks[i]);
        book.title = book.title;
        booksNames.push(book.title);
    };


    for (let i = 0; i < reserve.length; i++) {
        for(let y = 0; y < reserve[i].booksNames.length; y++) {
            for(let j=0; j<booksNames.length; j++){
                if(reserve[i].booksNames[y] == booksNames[j]){
                    console.log("aaaaa");
                    repeated = true;
                    return {
                        message: "The client cant reserve! The book is already reserved"
                    }
                }
            }
        }
    }

    
    if (idReservation) {
        await crud.save('reservations', idReservation, { book, client });
    } else {
        if (reserve.length > 0) {
            for (let i = 0; i < reserve.length; i++) {
                if (reserve[i].client == client) {
                    repeated = true;
                    return {
                        message: "The client cant reserve! He already has a reservation"
                    }
                }
            }
            if (repeated == false) {
                await crud.save('reservations', null, { 
                    booksNames: booksNames, client });
            }
        } else {
            await crud.save('reservations', null, { booksNames: booksNames, client });
        }
    }
    return searchReservations();
}

async function remove(id) {
    await crud.remove('reservations', id);
    return searchReservations();
};

module.exports = {
    searchReservations,
    searchReservationsId,
    create,
    remove
}