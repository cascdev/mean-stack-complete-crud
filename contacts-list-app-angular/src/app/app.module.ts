import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { ContatosListaComponent } from './contatos/contatos-lista.component';
import { ContatosService } from './contato.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContatoDetalheComponent } from './contatos/contato-detalhe.component';
import { ContatoAddComponent } from './contatos/contato-add.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  declarations: [
    AppComponent,
    ContatoDetalheComponent,
    ContatoAddComponent,
    ContatosListaComponent
  ],
  providers: [ContatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
