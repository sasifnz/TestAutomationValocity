const { I, trademeSearchItemPages, trademePages, trademeWatchlListPages } =
  inject();

Before(() => {
  I.wait(1);
});

Then("I add the listing to my watchlist", () => {
  trademeWatchlListPages.addToWatchlist();
});

Then("I confirm the listing is added to watchlist", () => {
  trademeWatchlListPages.listingAdded();
});

Then("I remove the listing from watchlist", () => {
  trademeWatchlListPages.removeWatchList();
});

Then("I should see the software category on listing page", () => {
  trademeWatchlListPages.softwareCategoryListingPage();
});
