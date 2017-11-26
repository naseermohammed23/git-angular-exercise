import { CmpDatabindingPage } from './app.po';

describe('cmp-databinding App', () => {
  let page: CmpDatabindingPage;

  beforeEach(() => {
    page = new CmpDatabindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
