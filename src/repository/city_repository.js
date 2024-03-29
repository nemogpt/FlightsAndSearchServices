const {City} =require('../models/index');


class CityRepository{


   async createCity({name}){ // destructuring the obj
    try{
        const city = await City.create({
            name:name //LHS->model property name 
            //RHS THE ACTUYAL NAME THAT HAS BEEN PASSED
            
        })
        return city;

    }
    catch(error){
        console.log("Something went wrong in repository layer");
        throw {error};
 
    }

   }

   async deleteCity(cityId){
    try{
        await City.destroy({
            where:{
                id:cityId
            }
        });
        return true;

    }
    catch(error){
        console.log("Something went wrong in repository layer");
        throw {error};
        
    }

   }
   async updateCity(cityId,data){
    try{
        const city= await City.update(data,{
            where:{
                id:cityId
            }
        });
        return city;

    }
    catch(error){
        console.log("Something went wrong in repository layer");
        throw {error};
        
    }

   }

   async getCity(cityId){
    try{
        const city=await City.findByPk({
            where:{
                id:cityId
            }
        });
          console.log(city)
        return city;

    }
    catch(error){
        console.log("Something went wrong in repository layer");
        throw {error};
        
    }

   }
}



module.exports=CityRepository;