import { Injectable } from '@angular/core';
import { Editora } from './editora.model';

@Injectable()
export class EditoraService {

  constructor() { }

  listarTodos(): Editora[] {
    const editoras = localStorage['editoras'];
    return editoras ? JSON.parse(editoras) : [];
  }

  cadastrar(autor: Editora) {
     const editoras = this.listarTodos();
     autor.id = new Date().getTime();
     editoras.push(autor);
     localStorage['editoras'] = JSON.stringify(editoras);
  }

  buscarPorId(id:number): Editora {
    const editoras = this.listarTodos();
    return editoras.find(autor => autor.id === id);
  }

  atualizar(autor: Editora): void{
    const editoras = this.listarTodos();
    editoras.forEach((obj, index, objs) => {
      if(autor.id === obj.id ){
        objs[index] = autor;
      }
    });
    localStorage['editoras'] = JSON.stringify(editoras);
  }

  remover(id: number): void {
    let editoras: Editora[] = this.listarTodos();
    editoras = editoras.filter(autor => autor.id !== id);
    localStorage['editoras'] = JSON.stringify(editoras);
  }
  
}
