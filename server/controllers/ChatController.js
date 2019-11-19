const { validationResult } = require('express-validator');
   
   const ChatController = {

        validator(request, response, next){
            const errors = validationResult(request);

            
            console.log(request);

            if (!errors.isEmpty()) {
                response.render("index",{validacao : errors.errors});
                return;
              }

            //   io.emit('msgParaCliente');

              next();
        },
        initChat(request, response, next){            
            var dadosForm = request.body;
            response.render('chat');
        }
    }

    module.exports = ChatController;