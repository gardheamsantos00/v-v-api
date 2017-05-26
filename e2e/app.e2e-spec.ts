import { PessoaPage } from './app.po';

describe('pessoa App', () => {
  let page: PessoaPage;

  beforeEach(() => {
    page = new PessoaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
