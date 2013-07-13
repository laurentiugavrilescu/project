angular.module('app',['app.filters','app.localeTranslation'])
.config(function ($routeProvider){
        $routeProvider.
        when('/home', {templateUrl: 'partials/home.html', controller: HomeController}).
        when('/about', {templateUrl: 'partials/home.html', controller: AboutController}).
        when('/form', {templateUrl: 'partials/form.html', controller: FormController}).
        when('/login', {templateUrl: 'partials/login.html', controller: LoginController}).
        when('/signup', {templateUrl: 'partials/signup.html', controller: SignupController}).
        otherwise({redirectTo: '/home'});
    });