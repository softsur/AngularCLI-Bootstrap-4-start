import { InicioAngularPage } from './app.po';

describe('inicio-angular App', () => {
  let page: InicioAngularPage;

  beforeEach(() => {
    page = new InicioAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
