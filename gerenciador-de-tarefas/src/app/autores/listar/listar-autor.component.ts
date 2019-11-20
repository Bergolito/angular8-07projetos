import { Component, OnInit } from '@angular/core';
import { Autor, AutorService } from '../shared';

@Component({
  selector: 'app-listar-autor',
  templateUrl: './listar-autor.component.html',
})
export class ListarAutorComponent implements OnInit {

  autores: Autor[];

  constructor(private autorService: AutorService) {}

  ngOnInit() {
  	this.autores = this.listarTodos();
  }

  listarTodos(): Autor[] {
  	return this.autorService.listarTodos();
  }

  remover($event: any, autor: Autor): void {
    $event.preventDefault();
    if (confirm('Deseja remover o autor "' + autor.nome + '"?')) {
      this.autorService.remover(autor.id);
      this.autores = this.listarTodos();
    }
  }

}
