import { GlacierUiPage } from './app.po';

describe('glacier-ui App', () => {
  let page: GlacierUiPage;

  beforeEach(() => {
    page = new GlacierUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
