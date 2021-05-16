const I = actor();

module.exports = {
  locators: {
    addWatchListButton: ".button-text",
    addWatchListButton1: "#Watchlist_SaveToWatchlistButton",
    addWatchListAfterLogin: "#AddToWatchlistButton",
    watchingButton: ".button-text",
    deleteWatchList: "#Watchlist_UnWatchItemButton",
    softwareCategory: ".breadCrumbs",
  },

  addToWatchlist() {
    I.see("Add to Watchlist", this.locators.addWatchListButton);
    I.click(this.locators.addWatchListButton1);
  },

  listingAdded() {
    I.click(this.locators.addWatchListAfterLogin);
    I.see("Watching", this.locators.watchingButton);
  },

  removeWatchList() {
    I.click(this.locators.deleteWatchList);
  },

  softwareCategoryListingPage() {
    I.see("Software", this.locators.softwareCategory);
  },
};
