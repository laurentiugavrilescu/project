function FormController($scope, $http, $location) {
    $scope.status;
    $scope.message;
    $scope.showNotification;
    $scope.users;
    $scope.pager={};  // totalCount,startPage,nrElement

    $scope.pager.startPage=0;
    $scope.pager.noOfItems=3;
    $scope.pages=[];

    //req.query.totalCount
    //req.query.startPage
    //req.query.noOfItems
    $scope.postToServer = function (startPage) {
        $scope.pager.startPage=startPage;
        var reqUrl="/processData?startPage="+startPage+"&noOfItems="+$scope.pager.noOfItems;
        console.log(reqUrl);
        $http.get(reqUrl).
            success(function (data, status) {
                $scope.users=data.payload.list;
                $scope.status = data.status;
                $scope.message = data.message;
                $scope.showNotification = true;
                $scope.pages=new Array();
                console.log(data);
                console.log($scope.pager.noOfItems);
                var limit=parseInt(data.payload.totalCount/$scope.pager.noOfItems);
                console.log(limit);
                for(var i=0;i<limit;i++){
                    var obj={selected: (startPage == (i+1)) ? "active" : ""};
                    $scope.pages.push(obj);
                }
                console.log($scope.pages);
            })
            .
            error(function (data, status) {
                if (status == "404") {
                    $location.path('home');
                }
            });
    };

    $scope.hideNotification = function () {
        $scope.showNotification = false;
    }




}