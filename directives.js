angular.module('app.directives', [])
  .directive('swf', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div></div>',
      link: function postLink(scope, element, attrs) {
        var tOptions = parseOptions(attrs, scope.options);
        theatre.crews.swf.playURL(attrs.src, element[0], tOptions);
      }
    };
  });

function parseOptions(pAttrs, pOverride) {
  var k, tOptions = {};

  for (k in pAttrs) {
    if (k === 'src') {
      continue;
    } else if (k === 'scaleMode') {
      tOptions[k] = pAttrs[k];
    } else if (k === 'width' || k === 'height') {
      tOptions[k] = parseInt(pAttrs[k]);
    }
  }

  for (k in pOverride) {
    tOptions[k] = pOverride[k];
  }

  return tOptions;
}
