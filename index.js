'use strict';

 exports.get = function(event, context) {

     var stringify = JSON.stringify(event, null, "\t");
     context.succeed({
         statusCode: 200,
         body: stringify
   });
 };
