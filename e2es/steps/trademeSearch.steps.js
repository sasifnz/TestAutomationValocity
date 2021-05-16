const { I, trademeSearchItemPages, trademePages } = inject();

Before(() => {
  I.wait(1);
});

Given('I navigate to home page', () => {
  trademePages.goto();
});

Then('I login to my account', () => {
  trademeSearchItemPages.loginAsRegisteredUser();
});

Then('I search the item listed under software category', () => {
  trademeSearchItemPages.selectSearchCategory();
});

Then('I should see the listing on search page', () => {
  trademeSearchItemPages.searchedResult();
});

Then('I select Listing and navigate to listing page', () => {
  trademeSearchItemPages.navigateToListing();
});

Then('I confirm the listing page is displayed', () => {
  trademeSearchItemPages.listingPage();
});

Then('I save the searched category to favourites', () => {
  trademeSearchItemPages.addSearchToFavourites();
});

Then('I navigate to favourites and confirm search category added', () => {
  trademeSearchItemPages.navigateToFavourites();
});
