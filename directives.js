angular.module('app.directives', [])
  .directive('swf', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div></div>',
      link: function postLink(scope, element, attrs) {
        theatre.crews.swf.playURL(attrs.src, element[0], scope.options);
      }
    };
  });
