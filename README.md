
## Running the app

Clone the repo and install all the dependencies with

`npm install`

Run the start script

`npm start`

Then install the expo app on your phone and scan the QR code that is displayed.
The app should appear after it builds.


This may not be applicable to everyone but I needed to install watchman on the machine for the expo system to work.

`brew install watchman`


## Description

What we have is a main screen that lets you choose from 3 different sources to search.

To search:

1. Enter a query in the search bar
2. Make sure the source you want is selected (tapping the icon of the source you want will change it)
3. Tap the search icon or hit enter/done on the keyboard while entering something into the search bar.

This will bring up another screen that will have the query executed in the chosen source.

In this screen there will be a header bar with 3 things:

1. Presearch icon - Clicking this will make the results screen disappear and take you back to the main screen.
2. Back button - This will light up and be clickable if you perform another search from this screen. It will let you go back a step like a browser back button.
3. Search bar - This will let you perform further searches from this screen using the same source that you selected earlier.
