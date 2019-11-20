import { Component, OnInit, ViewChild } from '@angular/core';
import { Autor, AutorService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-autor',
  templateUrl: './cadastrar-autor.component.html',
  styleUrls: ['./cadastrar-autor.component.css']
})
export class CadastrarAutorComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  autor: Autor;

  constructor(
    private autorService: AutorService,
  	private router: Router) { }

  ngOnInit() {
  	this.autor = new Autor();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
  	  this.autorService.cadastrar(this.autor);
  	  this.router.navigate(["/autores"]);
    }
  }

  
}
