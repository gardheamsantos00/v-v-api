import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';
import { ListpessoaComponent } from './listpessoa/listpessoa.component';
import { PessoaService } from './pessoa/pessoa.service';



@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaEditComponent,
    ListpessoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ PessoaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
