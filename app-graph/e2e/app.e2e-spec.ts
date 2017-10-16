import { AppGraphPage } from './app.po';

describe('app-graph App', function() {
  let page: AppGraphPage;

  beforeEach(() => {
    page = new AppGraphPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
