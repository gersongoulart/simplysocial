'use strict';

/* Filter to apply linkyFilter and generate #hashtag and @mention urls. */

module.exports = /*@ngInject*/
  function linksFilter(linkyFilter) {
    var LINKY_URL_REGEXP = /([#@][A-Za-z0-9]+)\S*[^\s.;,(){}<>!?"”’]/;
    var USER_REGEXP = /@[A-Za-z0-9]+/;
    var HTTP_REGEXP = />(http|https):\/\//gi;

    return function(text, target) {
      if (!text) return text;
      var match;
      var raw = linkyFilter(text, '_blank').replace(HTTP_REGEXP, '>');
      var html = [];
      var url;
      var i;
      while ((match = raw.match(LINKY_URL_REGEXP))) {
        // We can not end in these as they are sometimes found at the end of the sentence
        url = match[0];
        i = match.index;
        addText(raw.substr(0, i));
        addLink('#', url);
        raw = raw.substring(i + match[0].length);
      }
      addText(raw);
      return html.join('');

      function addText(text) {
        if (!text) {
          return;
        }
        html.push(text);
      }

      function addLink(url, text) {
        html.push('<a ');
        if (angular.isDefined(target)) {
          html.push('target="', target, '" ');
        }
        html.push('href="', url.replace(/"/g, '&quot;'), '">');
        addText(text);
        html.push('</a>');
      }
  };
};
