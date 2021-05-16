const I = actor();

module.exports = {
  locators: {
    browseButton: '#BrowseDropDown',
    softwarePageHeading: '#PageHeading',
    viewCategoryDirectory: '.category-directory',
    computerCategory: 'a[href=#Computers]',
    mainAndSubCategory: '.breadCrumbs',
    softwareCategoryInSearchBox: '.drop-label',
  },

  goto() {
    I.amOnPage('https://www.tmsandbox.co.nz/');
    I.wait(5);
  },

  browseCategory() {
    I.click(this.locators.browseButton);
  },

  clickViewBrowserCategory() {
    I.click(
      locate('a')
        .withAttr({ href: '/browse' })
        .withText('View category directory'),
    );
  },

  clickComputerCategory() {
    I.click(locate('a').withAttr({ href: '#Computers' }).withText('Computers'));
  },

  softwaresubCategory() {
    I.waitForClickable(
      locate('a').withAttr({ href: '/computers/software?' })(2),
    );
  },

  clicksoftwareCategory() {
    I.click(locate('a').withAttr({ href: '/computers/software?' }));
  },

  softwareCategoryListing() {
    //    I.see(this.locators.softwarePageHeading);
    I.waitForVisible(
      locate('a').withAttr({ href: '/computers/software/v-gallery' }),
    );
  },

  mainAndSoftwareSubCategory() {
    I.see('Computers', this.locators.mainAndSubCategory);
    I.see('Software', this.locators.mainAndSubCategory);
    I.see('software', this.locators.softwareCategoryInSearchBox);
  },
};
