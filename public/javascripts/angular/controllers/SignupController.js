function SignupController($scope, $rootScope){
    $scope.account={};
    $scope.notification={};

    $scope.showNotification=false;
    $scope.hideNotification = function(){
        $scope.showNotification=false;
    }

    $scope.signup = function(){
        // todo create service for signup
        signupMock($scope.account,function(data){
                $scope.notification=data;
                $scope.showNotification=true;
        });
    }

    // Simple mock for signup
    // For a valid account use two different strings for email and password
    function signupMock(account,callback){
        var ret={};
        if(account.email==account.password){
            ret.status="error";
            ret.message="EXISTINGACCOUNT";
        } else {
            ret.status="success";
            ret.message="ACCOUNTCREATED";
        }
        callback(ret);
    }
}