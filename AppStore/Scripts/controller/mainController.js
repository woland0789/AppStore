app.controller("mainController", function ($scope, $rootScope, $location, basketService, accountService, $window) {
    $scope.Title = "Интернет магазин";

    $scope.isLoged = sessionStorage.getItem("token:Key") || false ? true : false;
    $scope.LoginName = sessionStorage.getItem("token:UserName") || "";
    $rootScope.isAdmin = sessionStorage.getItem("token:IsAdmin") || false;

    $scope.isActive = function(path) {
        return $location.path().substr(0, path.length) === path;
    }

    $scope.basketAmount = 0;

    var setBasketAmount = function(res) {
        $scope.basketAmount = res.data;
    }
    $scope.$on("basket:addItem", function (event, data) {
        basketService.GetCount().then(setBasketAmount);
    });
    $scope.$on("basket:removeItem", function (event, data) {
        basketService.GetCount().then(setBasketAmount);
    });

    $scope.$on("login:login", function (event, data) {
        $scope.LoginName = data.name;
        $scope.isLoged = true;
        sessionStorage.setItem("token:Key", data.token);
        sessionStorage.setItem("token:UserName", data.name);

        accountService.CheckAdmin().then((res) => {
            if (res.status === 200) {
                sessionStorage.setItem("token:IsAdmin", res.data);
                $rootScope.isAdmin = res.data;
            } else {
                console.error(res.data.Message);
            }
        });
    });

    $scope.$on("login:logout", function (event, data) {
        $scope.LoginName = "";
        $scope.isLoged = false;
        $rootScope.isAdmin = false;
        sessionStorage.removeItem("token:Key");
        sessionStorage.removeItem("token:UserName");
        sessionStorage.removeItem("token:IsAdmin");
    });

    $scope.Logout = function () {
        $rootScope.loading = true;

        accountService.Logout().then((res) => {
            if (res.status === 200) {
                $rootScope.$broadcast("login:logout", null);
                $window.location.href = "/";
            } else {
                console.log(res.data.Message);
            }
            $rootScope.loading = false;
        });
    }
});