const PirateController = require('../controllers/pirate.controller');
 
module.exports = app => {
    app.get('/api/pirates', PirateController.findAll);
    app.get('/api/pirates/:id', PirateController.findOneSingle);
    app.patch('/api/pirates/:id', PirateController.updateExisting);
    app.post('/api/pirates', PirateController.createNew);
    app.delete('/api/pirates/:id', PirateController.deleteAnExisting);
}