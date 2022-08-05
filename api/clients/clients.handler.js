const crud = require("../../crud/indexC.js");

async function searchClients(){
    return await crud.get('clients');
};

async function searchClientsId(id){
    return await crud.getById('clients', id);
};

async function create(name, lastName, age, email, cellphone, idClient) {
    if(idClient){
        await crud.save('clients', idClient, { name, lastName, age, email, cellphone });
    }else{
        await crud.save('clients', null, {name, lastName, age, email, cellphone });
    }
    return searchClients();
}

async function remove(id){
    await crud.remove('clients', id);
    return searchClients();
};

module.exports = {
    searchClients,
    searchClientsId,
    create,
    remove
};