const { Shop } = require('../../app/models');

module.exports = {
    async store(req, res) {
        try {
            const { name, coffees } = req.body;

            const shop = await Shop.create({ name });

            return res.json(shop);
        } catch (error) {
            return res.json({ error });
        }
    },
    async index(req, res) {
        try {
            const shops = await Shop.findAll();

            return res.json(shops);
        } catch (error) {
            return res.json({ error });
        }
    },
    async update(req, res) {
        try {
            const { name, coffees } = req.body;
            const { id } = req.params;

            const shop = await Shop.findByPk(id);
            
            await shop.update({ name });

            return res.json(shop);
        } catch (error) {
            return res.status(500).json( {error} );
        }
    }
}