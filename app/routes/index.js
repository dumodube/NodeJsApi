const notesRoutes = require('./note_routes')

module.exports = function(app,db){
    notesRoutes(app,db);
}