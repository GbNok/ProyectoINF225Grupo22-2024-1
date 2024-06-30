import Quotes from "../models/Quotes.js";

export default class QuotController {
    async getAll(req,res){
        const quotes = await Quotes.findAll();
        res.send(quotes);
    }

    async get(req, res) {
        const quotes = await Quotes.findByPk(req.params.quoteId);
        res.send(quotes);
    }

    async create(req, res) {
        const quotes = await Quotes.create({
            valor_cuota: req.body.valor_cuota,
            plazo: req.body.plazo,
            total: req.body.total,
            user_id: req.body.user_id,
        });
        res.send(quotes);
    }

    async delete(req, res) {
        await Quotes.destroy({where: {id: req.params.quoteId}});
        res.send({status: "ok"});
    }


};