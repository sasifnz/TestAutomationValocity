const I = actor();

module.exports = {
  locators: {
    loginButton: '#LoginLink',
    userName: '#page_email',
    password: '#page_password',
    loginPageButton: '#LoginPageButton',
    searchItem: '#searchString',
    searchButton: 'button[type="submit"]',
    generalItem: '.SiteHeader_SiteTabs_sellGeneralItem',
    filterSearch: '#SearchType',
    computerCategory: 'a[href=#Computers]',
    categoryTitle: '.TopLevelCategory1',
    softwareCategoryOnResultPage: '#SearchNavigators',
    listingDisplayed: '.title',
    selectListing: '.supergrid-bucket a',
    selectListing1: 'data-listingid="2149275122"',
    titleOnListingPage: '#ListingTitleBox_TitleText',
    saveSearchButton: '.new-save-favourite',
    favouriteConfirm: '#saved',
    favouriteButton: '#FavouritesToggle a',
    savedfavCategory: '.listing-card',
    savedFavCat: '.categoryDetailsSpan',
    viewFavourites: '#favouritesDropDownLink',
    favouritesItems: '#favourites',
  },

  loginAsRegisteredUser() {
    I.fillField(this.locators.userName, process.env.TESTUSERNAME);
    I.fillField(this.locators.password, process.env.TESTPASSWORD);
    I.click(this.locators.loginPageButton);
  },

  selectSearchCategory() {
    I.fillField(this.locators.searchItem, 'TestListing');
    I.click(this.locators.filterSearch);
    I.selectOption(this.locators.filterSearch, 'Computers');
    I.click(this.locators.searchButton);
  },

  searchedResult() {
    I.wait(2);
    I.waitForElement(this.locators.softwareCategoryOnResultPage);
    I.see('Software', this.locators.softwareCategoryOnResultPage);
    I.see('TestListing', this.locators.listingDisplayed);
  },

  navigateToListing() {
    I.click(locate('div').withAttr({ 'data-ga-identifier': '1' }));
  },

  listingPage() {
    I.see('TestListing', this.locators.titleOnListingPage);
  },

  addSearchToFavourites() {
    I.click(this.locators.saveSearchButton);
  },

  navigateToFavourites() {
    I.click(this.locators.favouriteButton);
    I.see('TestListing', this.locators.savedfavCategory);
    I.click(this.locators.viewFavourites);
    I.see('TestListing', this.locators.favourites);
  },
};
