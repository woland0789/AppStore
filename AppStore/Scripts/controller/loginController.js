app.controller("loginController", function($scope, $rootScope, accountService, $window) {
    $scope.Title = "Вход";

    $scope.Login = function () {
        $rootScope.loading = true;
        $scope.ErrorMessages = [];

        accountService.Login($scope.Email, $scope.Password).then(
            (res) => {
                if (res.status === 200) {
                    console.log(res.data.access_token);
                    $rootScope.$broadcast("login:login", { token: res.data.access_token, name: res.data.userName });
                    $window.location.href = "#!home";
                } else {
                    $scope.ErrorMessages.push(res.data.error_description);
                }
                
                $rootScope.loading = false;
            }
        );
    };
});