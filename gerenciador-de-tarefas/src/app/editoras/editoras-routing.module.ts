import { Routes } from "@angular/router";
import { ListarEditoraComponent } from "./listar/listar-editora.component";
import { CadastrarEditoraComponent } from "./cadastrar/cadastrar-editora.component";
import { EditarEditoraComponent } from "./editar/editar-editora.component";

export const EditoraRoutes: Routes = [
	{ 
		path: 'editoras', 
		redirectTo: 'editoras/listar' 
	},
	{ 
		path: 'editoras/listar', 
		component: ListarEditoraComponent
	}, 
	{ 
		path: 'editoras/cadastrar', 
		component: CadastrarEditoraComponent
	},
	{ 
		path: 'editoras/editar/:id', 
		component: EditarEditoraComponent
	}
];
