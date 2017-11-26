import { DataTablePage } from './app.po';

describe('data-table App', () => {
  let page: DataTablePage;

  beforeEach(() => {
    page = new DataTablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
