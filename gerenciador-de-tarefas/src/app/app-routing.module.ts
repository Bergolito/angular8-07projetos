import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas';
import { AutorRoutes } from './autores';
import { EditoraRoutes } from './editoras/editoras-routing.module';
import { LivroRoutes } from './livros';

export const routes: Routes = [
	// { 
	// 	path: '', 
	// 	redirectTo: '/tarefas/listar', 
	// 	pathMatch: 'full' 
	// },
	...TarefaRoutes,
	...AutorRoutes,
	...EditoraRoutes,
	...LivroRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
