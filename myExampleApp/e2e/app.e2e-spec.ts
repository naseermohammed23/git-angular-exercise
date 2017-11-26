import { MyExampleAppPage } from './app.po';

describe('my-example-app App', () => {
  let page: MyExampleAppPage;

  beforeEach(() => {
    page = new MyExampleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
