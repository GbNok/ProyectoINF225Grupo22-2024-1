import Request from "../models/Request.js";

export default class RequestController {
    async getAll(req, res) {
       const request = await Request.findAll();
       res.send(request);
   }

   async getBynombre(req, res) {
       const request = await Request.findAll({
           where: {
               nombre: req.params.nombre
           }
       });
       res.send(request);
   }

//    async getByEx(req, res) {
//     const request = await Request.findAll({
//         where: {
//             id_ejecutivo: parseInt(req.params.requestId)
//         }
//     });
//     res.send(request);
//    }

   async get(req, res) {
       const request = await Request.findByPk(req.params.requestId);
       res.send(request);
   }

   async create(req, res) {
       const request = await Request.create({
           nombre: req.body.nombre,
           rut: req.body.rut,
           estado: req.body.estado,
           valor_credito: req.body.valor_credito,
           tasa: req.body.tasa, 
           plazo: req.body.plazo,
           id_ejecutivo: req.body.id_ejecutivo,
       });
       res.send(request);
   }

   async update(req, res) {
       const request = await Request.findByPk(req.params.requestId);
       request.update({estado: req.body.estado});
       res.send(request);
   }

   async delete(req, res) {
       await Request.destroy({where: {id: req.params.requestId}});
       res.send({status: "ok"});
   }
};