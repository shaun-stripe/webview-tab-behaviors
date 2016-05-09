# WebView Tab Behaviors

Mobile platforms have browsers like Safari, Chrome, Firefox.  But there are
also _WebViews_, which allow Apps to display pages in some limited/controlled
manner.  They have varying levels of support for Tabs, which we track here.

You can paste [test.js](test.js) into a DevTools console to test this behavior
in WebViews below.

## iOS

### Safari View Controller

- _New Tab_ - page is redirected

### WKWebView

- _New Tab_ - no action is performed by default, though [it can be configured to redirect](http://stackoverflow.com/a/25853806).

### UIWebView

- _New Tab_ - page is redirected

## Android

### Chrome Custom Tabs

- _New Tab_ - page creates and displays new tab
- _Displaying Tabs_ - only current tab is visible
- _Navigating Tabs_ - paging back from new tab with empty history stack closes tab, and navigates back to previous tab

### Android WebView

- _New Tab_ - page is redirected

