const {CityService} =require("../services/index");
/*
create using POST method
data --> req.body

*/
const cityService= new CityService();


const create=async (req,res)=>{
    try{
        const city= await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create city",
            err:error,

        });

    }

}

// Delete req --> /city/:id

const destroy=async (req,res)=>{
    try{
        const response= await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted a city",
            err:{},
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete city",
            err:error,

        });

    }
    
}
// patch req --> /city/:id  -->req.body(data)

const update=async (req,res)=>{
    try{
        const response= await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully updated a city",
            err:{},
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            err:error,

        })


    }
    
}


// Get-> /city/:id
const get=async(req,res)=>{
    try{
        const response= await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched a city",
            err:{},
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch the city",
            err:error,

        });


    }
    
}


module.exports={
    create,destroy,get,update
}