import { Component,Input } from '@angular/core';
import { Pessoa } from './pessoa';
import { PessoaService} from './pessoa.service';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})

export class PessoaComponent  {
	@Input() pessoa:Pessoa;

	pessoaRescue:Pessoa = null;
	constructor( private pessoaService:PessoaService) { }

   deletePessoa(pessoa:Pessoa){
  		this.pessoaService.deletePessoa(pessoa)
        .subscribe(
            error => console.log(error)
        );
  }
 updatePessoa(pessoa:Pessoa){
  	this.pessoaService.updatePessoa(pessoa)
  	.subscribe(error => console.log(error));
  }

  editPessoa(pessoa) {
        this.pessoaService.recuperaPessoa(pessoa)
        .subscribe(data => { this.pessoaRescue = data});
        console.log(this.pessoaRescue);
    }
    cancelPessoa() {
        this.pessoaRescue = null;
    }

}
