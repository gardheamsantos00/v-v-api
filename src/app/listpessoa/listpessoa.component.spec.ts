import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpessoaComponent } from './listpessoa.component';

describe('ListpessoaComponent', () => {
  let component: ListpessoaComponent;
  let fixture: ComponentFixture<ListpessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
