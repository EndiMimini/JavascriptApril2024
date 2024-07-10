const ExamController = require('../controllers/exam.controller');
 
module.exports = app => {
    app.get('/api/posts', ExamController.findAll);
    app.get('/api/posts/drafts', ExamController.findDrafts);
    app.get('/api/posts/posted', ExamController.findPosted);
    app.get('/api/posts/archived', ExamController.findArchive);
    app.get('/api/posts/:id', ExamController.findOneSingle);
    app.patch('/api/posts/:id/posted', ExamController.changeToPosted);
    app.patch('/api/posts/:id/archived', ExamController.changeToArchive);
    // app.patch('/api/pirates/:id', ExamController.updateExisting);
    app.post('/api/posts', ExamController.createNew);
    app.delete('/api/posts/:id', ExamController.deleteAnExisting);
}