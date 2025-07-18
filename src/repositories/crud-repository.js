const {Logger} = require('../config')

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data){
        try{
          const response = await this.model.create(data);
          return response;
        }catch(error){
        Logger.error('Something went wrong in the CRUD Repo: create');
        }
    }

    async destroy(data){
        try{
          const response = await this.model.destroy({
            where:{
                id: data
            }
          });
          return response;
        }catch(error){
        Logger.error('Something went wrong in the CRUD Repo: create');
        }
    }


    async get(data){
        try{
          const response = await this.model.findByPk(data);
          return response;
        }catch(error){
        Logger.error('Something went wrong in the CRUD Repo: create');
        }
    }


     async getAll(data){
        try{
          const response = await this.model.findAll();
          return response;
        }catch(error){
        Logger.error('Something went wrong in the CRUD Repo: create');
        }
    }


     async update(id,data){  //  data -> object
        try{
          const response = await this.model.update(data,{
            where: {
                id: id
            }
          });
          return response;
        }catch(error){
        Logger.error('Something went wrong in the CRUD Repo: create');
        }
    }
}

module.exports = CrudRepository;