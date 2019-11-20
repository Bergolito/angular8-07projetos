import { Component, OnInit, ViewChild } from '@angular/core';
import { Livro, LivroService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.css']
})
export class CadastrarLivroComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  livro: Livro;

  constructor(
    private livroService: LivroService,
  	private router: Router) { }

  ngOnInit() {
  	this.livro = new Livro();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
  	  this.livroService.cadastrar(this.livro);
  	  this.router.navigate(["/livros"]);
    }
  }

}
