const crud = require('../../crud/indexC.js');

async function searchPblshComps(){
    return await crud.get('pblsh_companies')
};

async function searchPblshCompsId(id){
    return await crud.getById('pblsh_companies', id);
};

async function create(name, idPblshComp){
    if(idPblshComp){
        await crud.save('pblsh_companies', idPblshComp, { name });
    }else{
        await crud.save('pblsh_companies', null, { name });
    }
    return searchPblshComps();
};

async function remove(id){
    await crud.remove('pblsh_companies', id);
    return searchPblshComps();
};

module.exports = {
    searchPblshComps,
    searchPblshCompsId,
    create,
    remove
}