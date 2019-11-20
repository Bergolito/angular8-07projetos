import { Component, OnInit } from '@angular/core';
import { Livro, LivroService } from '../shared';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {

  livros: Livro[];

  constructor(private livroService: LivroService) {}

  ngOnInit() {
  	this.livros = this.listarTodos();
  }

  listarTodos(): Livro[] {
  	return this.livroService.listarTodos();
  }

  remover($event: any, livro: Livro): void {
    $event.preventDefault();
    if (confirm('Deseja remover o livro "' + livro.titulo + '"?')) {
      this.livroService.remover(livro.id);
      this.livros = this.listarTodos();
    }
  }

}
