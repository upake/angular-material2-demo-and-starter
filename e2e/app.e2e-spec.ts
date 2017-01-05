import { FppPage } from './app.po';

describe('fpp App', function() {
  let page: FppPage;

  beforeEach(() => {
    page = new FppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
