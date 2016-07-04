import { Ng2Material2PrimengModalDebugPage } from './app.po';

describe('ng2-material2-primeng-modal-debug App', function() {
  let page: Ng2Material2PrimengModalDebugPage;

  beforeEach(() => {
    page = new Ng2Material2PrimengModalDebugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
