const crud = require('../../crud/indexC.js')

async function searchReservations(){
    return await crud.get('reservations');
};

async function searchReservationsId(id){
    return await crud.getById('reservations', id);
};

async function create(idLivros, idClient, idReservation) {
    const reservas = searchReservations();
    if(idReservation){
            await crud.save('reservations', idReservation, {idLivros, idClient});
    }else{
        console.log("aaaaaaaaaaaaaa")
        for(let i = 0; i< reservas.length; i++){
            if(reservas.idClient == idClient){
                return {
                    message: "The client cant reserve! He already has a reservation"
                }
            }else{
                for(let i =0; i< idLivros.length; i++){
                    await crud.save('reservations', null, {
                        idLivro: idLivros[i],
                        idClient: idClient
                    });
                };            
            }
        }
    }
    return searchReservations();
}

async function remove(id){
    await crud.remove('reservations', id);
    return searchReservations();
};

module.exports = {
    searchReservations,
    searchReservationsId,
    create,
    remove
}