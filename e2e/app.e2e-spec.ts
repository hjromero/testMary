import { MaryTestPage } from './app.po';

describe('mary-test App', () => {
  let page: MaryTestPage;

  beforeEach(() => {
    page = new MaryTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
