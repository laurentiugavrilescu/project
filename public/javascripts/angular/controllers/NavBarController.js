function NavBarController($scope,$rootScope,$location){

    // Global function used for setting current route
    $rootScope.setRoute = function(route){
       $location.path(route);
    }

    $scope.locales=[{'title':'Română','code':'ro'},
                    {'title':'English','code':'en'}];

    $scope.currentLocale= $scope.locales[0];

    $scope.changeLocale = function(locale){
        $scope.currentLocale=locale;
     // todo implement function
    }
}