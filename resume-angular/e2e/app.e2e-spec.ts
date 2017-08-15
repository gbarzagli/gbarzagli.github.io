import { ResumeAngularPage } from './app.po';

describe('resume-angular App', () => {
  let page: ResumeAngularPage;

  beforeEach(() => {
    page = new ResumeAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
