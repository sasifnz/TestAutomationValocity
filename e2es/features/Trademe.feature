Feature: Trademe page
    @smoke2
    Scenario: Verify  software subcategory under under Computers category
        Given I navigate to home page and Select Browse
        When I select view category directory
        Then I click Computer category
        Then I should see the software as Sub-category under Computer category
        And  I select software sub category to view listing page
        And I should see the software category on listing page
        And I should see the main and sub category software on listing page



    Scenario: list item under software category & verify item listed under listing page
        Given I navigate to home page
        When I search the item listed under software category
        Then I should see the listing on search page
        And I save the searched category to favourites
        Then I login to my account
        And I navigate to favourites and confirm search category added


    @smoke2
    Scenario: Add the listed item to member watchlist
        Given I navigate to home page
        When I search the item listed under software category
        Then I should see the listing on search page
        Then I select Listing and navigate to listing page
        And I confirm the listing page is displayed
        And I should see the software category on listing page
        And I add the listing to my watchlist
        Then I login to my account
        And I confirm the listing is added to watchlist
        And I remove the listing from watchlist

