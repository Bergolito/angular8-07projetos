import { Component, OnInit, ViewChild } from '@angular/core';
import { Editora, EditoraService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-editora',
  templateUrl: './cadastrar-editora.component.html',
  styleUrls: ['./cadastrar-editora.component.css']
})
export class CadastrarEditoraComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  editora: Editora;

  constructor(
    private autorService: EditoraService,
  	private router: Router) { }

  ngOnInit() {
  	this.editora = new Editora();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
  	  this.autorService.cadastrar(this.editora);
  	  this.router.navigate(["/editoras"]);
    }
  }

  
}
