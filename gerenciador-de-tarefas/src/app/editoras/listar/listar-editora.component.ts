import { Component, OnInit } from '@angular/core';
import { Editora, EditoraService } from '../shared';

@Component({
  selector: 'app-listar-editora',
  templateUrl: './listar-editora.component.html',
  styleUrls: ['./listar-editora.component.css']
})
export class ListarEditoraComponent implements OnInit {

  editoras: Editora[];

  constructor(private autorService: EditoraService) {}

  ngOnInit() {
  	this.editoras = this.listarTodos();
  }

  listarTodos(): Editora[] {
  	return this.autorService.listarTodos();
  }

  remover($event: any, autor: Editora): void {
    $event.preventDefault();
    if (confirm('Deseja remover a editora "' + autor.nome + '"?')) {
      this.autorService.remover(autor.id);
      this.editoras = this.listarTodos();
    }
  }


}
