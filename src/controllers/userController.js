import { User } from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({ message: `Usuario criado com sucesso!` });
  } catch (err) {
    res.status(500).json({ error: `Erro ao criar o usuario. Erro: ${err}` });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({ message: `Usuarios encontrados com sucesso!`, items: users });
  } catch (err) {
    res.status(500).json({ error: `Erro ao buscar os usuarios. Erro: ${err}` });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(201).json({ message: `Usuario coletado com sucesso!`, user: user });
  } catch (err) {
    res.status(500).json({ error: `Erro ao buscar o usuario. Erro: ${err}` });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );

    res.status(201).json({ message: `Usuario atualizado com sucesso!`, user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: `Erro ao editar o usuario. Erro: ${err}` });
  };
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });

    res.status(201).json({ message: `Usuario deletado com sucesso!`, user: deletedUser });
  } catch (err) {
    res.status(500).json({ error: `Erro ao deletar o usuario. Erro: ${err}` });
  }
};
