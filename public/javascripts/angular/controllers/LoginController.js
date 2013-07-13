function LoginController($scope,$rootScope){
 $scope.showNotification=false;
 $scope.notification={};
 $scope.credentials;
   $scope.hideNotification = function(){
       $scope.showNotification=false;
   }

   $scope.login = function(){
       // todo create service for autentication
       authenticationMock($scope.credentials,function(data){
          if(data.status!='error'){
              $rootScope.setRoute('home');
              $rootScope.user=$scope.credentials;
          } else {
              $scope.notification=data;
              $scope.showNotification=true;
          }
       });
   }

   // Simple mock for user authentication
   // For a valid user use two different strings for username and password
   function authenticationMock(credentials,callback){
       var ret={};
       if(credentials.username==credentials.password){
           ret.status="error";
           ret.message="WRONGUSERNAME";
      } else {
           ret.status="success";
           ret.message="AUTHENTICATIONSUCCESS";
       }
       callback(ret);
   }
}