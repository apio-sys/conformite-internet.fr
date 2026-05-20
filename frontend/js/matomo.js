var _paq = _paq || [];

function matomoGeneratedCode(disableCookies) {
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  var d=$("#matomo-subdomain-tracking").text();
  if ("" != d) {
    _paq.push(["setCookieDomain", d]);
  }
  if (disableCookies) {
    _paq.push(['disableCookies']);
  }
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u=$("#matomo-url").text();
    var siteid=$("#matomo-siteid").text();
    if ("" != u) {
      _paq.push(['setTrackerUrl', u+'piwik.php']);
      _paq.push(['setSiteId', siteid]);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
    }
  })();
}

if ("" != $("#matomo-siteid").text()) {
  /* Always cookieless — no cookie banner needed */
  matomoGeneratedCode(true);
}
