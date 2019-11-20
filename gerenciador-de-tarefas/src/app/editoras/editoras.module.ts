import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarEditoraComponent } from './cadastrar/cadastrar-editora.component';
import { EditarEditoraComponent } from './editar/editar-editora.component';
import { ListarEditoraComponent } from './listar/listar-editora.component';
import { EditoraService } from './shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    CadastrarEditoraComponent, 
    EditarEditoraComponent, 
    ListarEditoraComponent
  ],
  providers: [
    EditoraService
  ]
})
export class EditorasModule { }
