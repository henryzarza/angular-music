import { AngularMusicPage } from './app.po';

describe('angular-music App', () => {
  let page: AngularMusicPage;

  beforeEach(() => {
    page = new AngularMusicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
