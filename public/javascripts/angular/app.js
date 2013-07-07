angular.module('app',[])
.config(function ($routeProvider){
        $routeProvider.
        when('/home', {templateUrl: 'partials/home.html', controller: HomeController}).
        when('/about', {templateUrl: 'partials/home.html', controller: AboutController}).
        when('/form', {templateUrl: 'partials/form.html', controller: FormController}).
        otherwise({redirectTo: '/home'});
    });