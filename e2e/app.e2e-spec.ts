import { Angular2Ng2ReduxPage } from './app.po';

describe('angular2-ng2-redux App', function() {
  let page: Angular2Ng2ReduxPage;

  beforeEach(() => {
    page = new Angular2Ng2ReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
