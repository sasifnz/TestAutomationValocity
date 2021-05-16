const { I, trademePages } = inject();

Before(() => {
  I.wait(1);
});

Given('I navigate to home page and Select Browse', () => {
  trademePages.goto();
  trademePages.browseCategory();
});

When('I select view category directory', () => {
  I.say('not executing');
  trademePages.clickViewBrowserCategory();
});

Then('I click Computer category', () => {
  I.wait(2);
  trademePages.clickComputerCategory();
});

Then(
  'I should see the software as Sub-category under Computer category',
  () => {
    trademePages.softwaresubCategory();
  },
);

Then('I select software sub category to view listing page', () => {
  trademePages.clicksoftwareCategory();
});

Then('I should see the software category on listing page', () => {
  trademePages.softwareCategoryListing();
});

Then('I should see the main and sub category software on listing page', () => {
  trademePages.mainAndSoftwareSubCategory();
});
