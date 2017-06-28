import { AngularTourOfHerosPage } from './app.po';

describe('angular-tour-of-heros App', () => {
  let page: AngularTourOfHerosPage;

  beforeEach(() => {
    page = new AngularTourOfHerosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
