var filters = angular.module('app.filters', []);

filters.filter('i18n', ['currentLocale', function (locale) {
    return function (key, p) {
        if (typeof locale[key] != 'undefined' && locale[key] != '') {
            return (typeof p === "undefined") ? locale[key] : locale[key].replace('@{}@', p);
        }
    }
}]);