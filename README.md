# WebView Tab Behaviors

Mobile platforms have browsers like Safari, Chrome, Firefox.  But there are
also _WebViews_, which allow Apps to display pages in some limited/controlled
manner.  They have varying levels of support for Tabs, which we track here.

You can paste [test.js](test.js) into a DevTools console to test this behavior
in WebViews below.

## iOS

### Safari View Controller

- __New Tab__ - when a page tries creating a new tab, the page is simply redirected

### WKWebView

- __New Tab__ - when a page tries creating a new tab, no action is performed by default, though [it can be configured to redirect](http://stackoverflow.com/a/25853806).

### UIWebView

- __New Tab__ - when a page tries creating a new tab, the page is simply redirected

## Android

### Chrome Custom Tabs

- __New Tab__ - a page can create a new tab
- __Displaying Tabs__ - only the current tab is visible
- __Navigating Tabs__ - paging back from a new tab with an empty history stack will close the tab, and navigate back to the previous tab

### Android WebView

- __New Tab__ - when a page tries creating a new tab, the page is simply redirected

