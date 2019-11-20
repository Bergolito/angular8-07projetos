import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarLivroComponent } from './cadastrar/cadastrar-livro.component';
import { EditarLivroComponent } from './editar/editar-livro.component';
import { ListarLivroComponent } from './listar/listar-livro.component';
import { LivroService } from './shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    CadastrarLivroComponent, EditarLivroComponent, ListarLivroComponent
  ],
  providers: [
    LivroService
  ]
})
export class LivrosModule { }
