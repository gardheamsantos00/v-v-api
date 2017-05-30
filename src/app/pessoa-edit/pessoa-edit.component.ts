import { Component } from '@angular/core';
import { Pessoa } from './../pessoa/pessoa';
import { PessoaService } from './../pessoa/pessoa.service';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent  {
  //idPessoa:number;
  id:number;
  funcao:string = "";
  nome:string = "";


  funcaoPessoa:String[] = [ "DIRETOR" ,"ATOR"];



  constructor(private pessoaService: PessoaService) { }

  createPessoa(){

      this.pessoaService.createPessoa(new Pessoa(this.id, this.nome, this.funcao))
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );

  }
}
