import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Pessoa } from "./pessoa";

@Injectable()
export class PessoaService {
    //static urlPessoa = "http://rest.learncode.academy/api/APIpessoa/pessoa/";
    private pessoaList:Pessoa[] = [];

    constructor(private http:Http) {}

    createPessoa(pessoa:Pessoa) {
        return this.http.post("http://localhost:8080/cadastrarPessoa", pessoa)
        .map((response:Response) => {
            let p = response.json();
            this.pessoaList.push(new Pessoa(p.id, p.nome, p.funcao));
            return p;
        })
        .catch((error: Response) => Observable.throw(error));
    }
    readPessoa(pessoa:Pessoa) {
        return this.http.get("http://localhost:8080/buscaPessoa")
        .map((response:Response) => response.json())
        .catch((error:Response) => Observable.throw(error));
    }

    recuperaPessoa(pessoa:Pessoa) {
      return this.http.get("http://localhost:8080/recuperaPessoa/"+pessoa.id)
        .map((response:Response) => response.json())
        .catch((error:Response) => Observable.throw(error));
    }

    updatePessoa(pessoa:Pessoa){
        return this.http.put("http://localhost:8080/alterarPessoa", pessoa)
        .map((response:Response) => {
            let pessoaAtualizada = response.json();
            for (let p of this.pessoaList)
                if (p.id == pessoaAtualizada.id) {
                    let i = this.pessoaList.indexOf(p);
                    this.pessoaList[i] = pessoaAtualizada;
                }
         })
        .catch((error: Response) => Observable.throw(error));
    }
    deletePessoa(pessoa:Pessoa) {
        return this.http.delete("http://localhost:8080/removerPessoa/"+pessoa.id)
        .map((response:Response) => {
            let i = this.pessoaList.indexOf(pessoa);
            this.pessoaList.splice(i, 1);
        })
        .catch((error:Response) => Observable.throw(error));
    }
    getAllPessoas(){
        return this.http.get("http://localhost:8080/buscaPessoa")
        .map((response:Response) => {
            let pessoas:Pessoa[] = [];
            for(let pessoa of response.json())
                pessoas.push(new Pessoa( pessoa.id ,pessoa.nome, pessoa.funcao));
            this.pessoaList = pessoas;
            return pessoas;
        })
        .catch((error:Response) => Observable.throw(error));
    }
}
