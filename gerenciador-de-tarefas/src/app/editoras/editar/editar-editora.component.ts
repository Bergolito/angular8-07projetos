import { Component, OnInit, ViewChild } from '@angular/core';
import { Editora, EditoraService } from '../shared';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-editora',
  templateUrl: './editar-editora.component.html',
  styleUrls: ['./editar-editora.component.css']
})
export class EditarEditoraComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  editora: Editora;

  constructor(
    private editoraService: EditoraService,
  	private route: ActivatedRoute,
  	private router: Router) {}

  ngOnInit() {
  	const id = +this.route.snapshot.params['id'];
	this.editora = this.editoraService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
	    this.editoraService.atualizar(this.editora);
	    this.router.navigate(['/editoras']);
    }
  }

  
}
