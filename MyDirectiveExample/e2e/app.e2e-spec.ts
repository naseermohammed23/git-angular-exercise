import { MyDirectiveExamplePage } from './app.po';

describe('my-directive-example App', () => {
  let page: MyDirectiveExamplePage;

  beforeEach(() => {
    page = new MyDirectiveExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
