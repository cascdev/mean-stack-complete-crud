import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contato.service';
import { Contato } from '../contato.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector:'contato-add',
    templateUrl: 'contato-add.component.html'
})
export class ContatoAddComponent implements OnInit{

contato: Contato;
submitted = false;
id: string;

constructor (
  public contatosService: ContatosService,
  public route: ActivatedRoute,
  public location: Location
  ){}

  ngOnInit(): void {
    this.contato = new Contato ('','','');
  }


  addContato(){
    this.submitted = true;
    this.save();
    this.location.back();
  }
  private save(): void {
    this.contatosService.addContato(this.contato)
        .subscribe();
  }


  goBack(): void {
    this.location.back();
  }
}
