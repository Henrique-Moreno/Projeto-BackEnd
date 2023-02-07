import { Router } from "express";
import multer from "multer";

import { CriarUsuarioControle } from "./controllers/usuario/CriarUsuarioControle";
import { AutenticacaoControle } from "./controllers/usuario/AutenticacaoControle";
import { DetalhesControle } from "./controllers/usuario/DetalhesControle";

import { CriarCategoriaControle } from "./controllers/categoria/CriarCategoriaControle";
import { ListaCategoriaControle } from "./controllers/categoria/ListaCategoriaControle";

import { CriarProdutoControle } from "./controllers/produto/CriarProdutoControle";
import { ListaByCategoriaControle } from "./controllers/produto/ListaByCategoriaControle";
import { MostraTodosProdutoControle } from "./controllers/produto/MostraTodosProdutoControle";

import { RemoveProdutoControle } from "./controllers/produto/RemoveProdutoControle";
import { EditarPridutoControle } from "./controllers/produto/EditarPridutoControle";

import { estaAutenticado } from "./middlewares/estaAutenticado";

import uploadConfig from './config/multer'

const rotas = Router();

const upload = multer(uploadConfig.upload("./tmp"))


rotas.post('/usuarios', new CriarUsuarioControle().handle)

rotas.post('/sessao', new AutenticacaoControle().handle)

rotas.get('/buscausuario', estaAutenticado ,new DetalhesControle().handle)

// Rotas de categorias
rotas.post('/categoria', estaAutenticado, new CriarCategoriaControle().handle)

rotas.get('/categoria', new ListaCategoriaControle().handle)

// Rotas produtos
rotas.post('/produto', estaAutenticado, upload.single('file'),  new CriarProdutoControle().handle)

rotas.get('/categoria/produto',  new ListaByCategoriaControle().handle)

rotas.get('/categoria/produto/todos', new MostraTodosProdutoControle().handle)

rotas.delete('/produto/remove', estaAutenticado, new RemoveProdutoControle().handle)

rotas.patch('/produto/editar', estaAutenticado, new EditarPridutoControle().handle)


export {rotas};