// app/routes/students.js
module.exports = function(router) {
  'use strict';
  // This will handle the url calls for /students/:studnent_id
  router.route('/:studentId')
    .get(function(req, res, next) {
          req.app.pool.getConnection(function(err,connection) {
            if (err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
            }   
            connection.query("SELECT * FROM student WHERE student_id = ?", [req.params.studentId] ,function(err,rows){
                connection.release();
                if(!err) {
                    res.json(rows);
                }           
            });

            connection.on('error', function(err) {      
                  res.json({"code" : 100, "status" : "Error in connection database"});
                  return;     
            });
        });

    }) 
    .put(function(req, res, next) {
      // Update user
      
    })
    .patch(function(req, res,next) {
      // Patch
    })
    .delete(function(req, res, next) {
      // Delete record
    });

  router.route('/')
    .get(function(req, res, next) {
      // Logic for GET /students routes
    }).post(function(req, res, next) {
      // Create new user
    });
};
