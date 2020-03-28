const connection = require("../database/connection");

module.exports = {
    async index(request,response) {
        const ong_id = request.headers.Auth;
        try{
            console.log(`dentro do try ${ong_id}`);
            const incidents = await connection("incidents").where("ong_id",ong_id).select("*");
        return response.json(incidents);
    }catch(err){
        //return response.status('').json(err);
        //'cors'
        return response.json(err);
    }
        
    }

}