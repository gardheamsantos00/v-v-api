import { Component } from '@angular/core';
import { PessoaService } from './../pessoa/pessoa.service';
import  { Pessoa } from './../pessoa/pessoa';


@Component({
  selector: 'app-listpessoa',
  templateUrl: './listpessoa.component.html',
  styleUrls: ['./listpessoa.component.css']
})
export class ListpessoaComponent  {
	pessoas:Pessoa[] = [];

  constructor( private pessoaService:PessoaService) {
  	this.pessoaService.getAllPessoas()
        .subscribe(
            data => { this.pessoas = data },
            error => console.log(error));
  } 

  

}
