import { Injectable } from '@angular/core';
import { Autor } from './autor.model';

@Injectable()
export class AutorService {

  constructor() { }

  listarTodos(): Autor[] {
    const autores = localStorage['autores'];
    return autores ? JSON.parse(autores) : [];
  }

  cadastrar(autor: Autor) {
     const autores = this.listarTodos();
     autor.id = new Date().getTime();
     autores.push(autor);
     localStorage['autores'] = JSON.stringify(autores);
  }

  buscarPorId(id:number): Autor {
    const autores = this.listarTodos();
    return autores.find(autor => autor.id === id);
  }

  atualizar(autor: Autor): void{
    const autores = this.listarTodos();
    autores.forEach((obj, index, objs) => {
      if(autor.id === obj.id ){
        objs[index] = autor;
      }
    });
    localStorage['autores'] = JSON.stringify(autores);
  }

  remover(id: number): void {
    let autores: Autor[] = this.listarTodos();
    autores = autores.filter(autor => autor.id !== id);
    localStorage['autores'] = JSON.stringify(autores);
  }
}
