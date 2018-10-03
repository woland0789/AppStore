app.controller("registrationController", function ($scope, $rootScope, accountService, $window) {
    $scope.Title = "Регистрация";

    $scope.Registration = function () {
        $rootScope.loading = true;
        $scope.ErrorMessages = [];

        accountService.Registration($scope.Email, $scope.Password, $scope.ConfirmPassword).then(
            (res) => {
                if (res.status !== 200) {
                    for (var key in res.data.ModelState) {
                        if (res.data.ModelState.hasOwnProperty(key)) {
                            $scope.ErrorMessages.push(res.data.ModelState[key]);
                        }
                    }
                    $rootScope.loading = false;
                } else {
                    $window.location.href = "/";
                }
            }
        );
    };
});