import { BidderPage } from './app.po';

describe('bidder App', () => {
  let page: BidderPage;

  beforeEach(() => {
    page = new BidderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
