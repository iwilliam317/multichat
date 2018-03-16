module.exports.iniciaChat = function(application, req, res){

	var dadosForm = req.body;

	req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
	req.assert('apelido', 'Nome ou apelido deve conter entre 2 e 12 caracteres').len(2, 15);
	req.assert('senha', 'Senha é obrigatório').notEmpty();
	req.assert('senha', 'Senha deve conter ao menos 6 caracteres').len(6, 15);

	var erros = req.validationErrors();

	if(erros){
		res.render('index', {erros : erros})
		return;
	}

	req.session.autorizado = true;

	var io = application.get('io');
	io.emit('mensagemParaCliente', {apelido : dadosForm.apelido, mensagem: 'acabou de entrar'});

	res.render('chat', {apelido : dadosForm.apelido});
}