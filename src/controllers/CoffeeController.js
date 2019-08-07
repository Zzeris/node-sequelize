const { Coffee } = require('../../app/models');

module.exports = {
    async store(req, res) {
        try {
            const { name } = req.body;

            const coffee = await Coffee.create({ name });

            return res.json(coffee);
        } catch (error) {
            return res.json({ error });
        }
    },
    async index(req, res) {
        try {
            const coffees = await Coffee.findAll();

            return res.json(coffees);
        } catch (error) {
            return res.json({ error });
        }
    },
    async update(req, res) {
        try {
            const { name } = req.body;
            const { id } = req.params;

            const coffee = await Coffee.findByPk(id);
            
            await coffee.update({ name });

            return res.json(coffee);
        } catch (error) {
            return res.json({ error });
        }
    }
}