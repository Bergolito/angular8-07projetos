import { Routes } from "@angular/router";
import { ListarLivroComponent } from "./listar/listar-livro.component";
import { CadastrarLivroComponent } from "./cadastrar/cadastrar-livro.component";
import { EditarLivroComponent } from "./editar/editar-livro.component";

export const LivroRoutes: Routes = [
	{ 
		path: 'livros', 
		redirectTo: 'livros/listar' 
	},
	{ 
		path: 'livros/listar', 
		component: ListarLivroComponent
	}, 
	{ 
		path: 'livros/cadastrar', 
		component: CadastrarLivroComponent
	},
	{ 
		path: 'livros/editar/:id', 
		component: EditarLivroComponent
	}
];
