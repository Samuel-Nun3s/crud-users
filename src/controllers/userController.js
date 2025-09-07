import { User } from "../models/User.js";
import logger from "../logger.js";

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({ message: `Usuario criado com sucesso!` });
    logger.info(`Rota POST /users acessada com sucesso!`);
  } catch (err) {
    res.status(500).json({ error: `Erro ao criar o usuario. Erro: ${err}` });
    logger.error(`Erro na rota POST /users Erro: ${err}`);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({ message: `Usuarios encontrados com sucesso!`, items: users });
    logger.info(`Rota GET /users acessada corretamente!`);
  } catch (err) {
    res.status(500).json({ error: `Erro ao buscar os usuarios. Erro: ${err}` });
    logger.error(`Erro na rota GET /users Erro: ${err}`);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(201).json({ message: `Usuario coletado com sucesso!`, user: user });
    logger.info(`Rota GET /users/:id acessada corretamente! ${user}`);
  } catch (err) {
    res.status(500).json({ error: `Erro ao buscar o usuario. Erro: ${err}` });
    logger.error(`Erro na rota GET /users/:id Erro: ${err}`);
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );

    res.status(201).json({ message: `Usuario atualizado com sucesso!`, user: updatedUser });
    logger.info(`Rota PUT /users/:id acessada corretamente!`);
  } catch (err) {
    res.status(500).json({ error: `Erro ao editar o usuario. Erro: ${err}` });
    logger.error(`Erro na rota PUT /users/:id Erro: ${err}`);
  };
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });

    res.status(201).json({ message: `Usuario deletado com sucesso!`, user: deletedUser });
    logger.info(`Rota DELETE /users/:id acessada corretamente!`);
  } catch (err) {
    res.status(500).json({ error: `Erro ao deletar o usuario. Erro: ${err}` });
    logger.error(`Erro na rota DELETE /users/:id Erro: ${err}`);
  }
};
