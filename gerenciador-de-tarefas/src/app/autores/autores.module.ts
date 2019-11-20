import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarAutorComponent } from './cadastrar/cadastrar-autor.component';
import { ListarAutorComponent } from './listar/listar-autor.component';
import { EditarAutorComponent } from './editar/editar-autor.component';
import { AutorService } from './shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    CadastrarAutorComponent, ListarAutorComponent, EditarAutorComponent
  ],
  providers: [
    AutorService
  ]
})
export class AutoresModule { }
