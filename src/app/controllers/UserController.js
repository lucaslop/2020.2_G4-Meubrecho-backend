import CadastrarUsuarioService from "../services/CadastrarUsuarioService";
class UserController {
  async cadastrarUsuario(req, res) {
    const { nome, email, senha, cpf, whatsapp } = req.body;
    const user = await CadastrarUsuarioService.run(
      nome,
      email,
      senha,
      cpf,
      whatsapp
    );
    return res.json(user);
  }
  // código de teste para verificar a autenticação
  async teste(req, res) {
   
    return res.json({"teste":"ola"});
  }
}

export default new UserController();
