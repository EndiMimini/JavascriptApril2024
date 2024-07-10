const ProductController = require('../controllers/product.controller');
 
module.exports = app => {
    app.get('/api/products', ProductController.findAll);
    app.get('/api/products/:id', ProductController.findOneSingle);
    app.patch('/api/products/:id', ProductController.updateExisting);
    app.post('/api/products', ProductController.createNew);
    app.delete('/api/products/:id', ProductController.deleteAnExisting);
    app.patch('/api/products/like/:id', ProductController.like);
    app.patch('/api/products/view/:id', ProductController.addView);

}