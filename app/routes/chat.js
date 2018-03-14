module.exports = function(application){
  application.post('/chat', function(req, res){
    application.app.controllers.chat.iniciaChat(application, req, res);
  });

  application.get('/chat', function(req, res){
    if (req.session.autorizado==true){
      application.app.controllers.chat.iniciaChat(application, req, res);

    }
    else{
      res.redirect("/")
    }
  });

  application.get("/sair", function(req, res){
    req.session.destroy();
    res.redirect("/")
  })
}