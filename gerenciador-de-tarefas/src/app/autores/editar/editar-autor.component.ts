import { Component, OnInit, ViewChild } from '@angular/core';
import { Autor, AutorService } from '../shared';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.css']
})
export class EditarAutorComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  autor: Autor;

  constructor(
    private tarefaService: AutorService,
  	private route: ActivatedRoute,
  	private router: Router) {}

  ngOnInit() {
  	const id = +this.route.snapshot.params['id'];
	this.autor = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
	    this.tarefaService.atualizar(this.autor);
	    this.router.navigate(['/autores']);
    }
  }

}
