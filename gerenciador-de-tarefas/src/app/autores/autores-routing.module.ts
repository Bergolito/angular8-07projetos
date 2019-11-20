import { Routes } from "@angular/router";
import { ListarAutorComponent } from "./listar/listar-autor.component";
import { CadastrarAutorComponent } from "./cadastrar/cadastrar-autor.component";
import { EditarAutorComponent } from "./editar/editar-autor.component";

export const AutorRoutes: Routes = [
	{ 
		path: 'autores', 
		redirectTo: 'autores/listar' 
	},
	{ 
		path: 'autores/listar', 
		component: ListarAutorComponent
	}, 
	{ 
		path: 'autores/cadastrar', 
		component: CadastrarAutorComponent
	},
	{ 
		path: 'autores/editar/:id', 
		component: EditarAutorComponent
	}
];
