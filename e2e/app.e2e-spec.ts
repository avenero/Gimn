import { GIMNPage } from './app.po';

describe('gimn App', function() {
  let page: GIMNPage;

  beforeEach(() => {
    page = new GIMNPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
