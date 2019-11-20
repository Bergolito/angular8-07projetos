import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TarefasModule } from './tarefas';
import { AutoresModule } from './autores';
import { EditorasModule } from './editoras';
import { LivrosModule } from './livros';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TarefasModule,
    AutoresModule,
    EditorasModule,
    LivrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
