import { MyServiceExamplePage } from './app.po';

describe('my-service-example App', () => {
  let page: MyServiceExamplePage;

  beforeEach(() => {
    page = new MyServiceExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
