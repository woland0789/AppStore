app.controller("goodsCardController", function ($scope, $rootScope, catalogService, $window, $routeParams) {
    $scope.Title = "Новый продукт";
    $scope.ErrorMessages = [];

    if ($routeParams.id) {
        $rootScope.loading = true;

        catalogService.GetGoods($routeParams.id).then((res) => {
            if (res.status === 200) {
                $scope.Title = res.data.Name;
                $scope.Id = res.data.Id;
                $scope.Name = res.data.Name;
                $scope.Price = res.data.Price;
                $scope.Amount = res.data.Amount;
                $scope.Description = res.data.Description;
            } else {
                $scope.ErrorMessages.push(res.data.Message);
            }
            $rootScope.loading = false;
        });
    }

    $scope.SaveGoods = function() {
        $rootScope.loading = true;
        $scope.ErrorMessages = [];

        var goods = {
            Id: $scope.Id,
            Name: $scope.Name,
            Price: $scope.Price,
            Amount: $scope.Amount,
            Description: $scope.Description
        }

        if (goods.Id) {
            catalogService.EditGoods(goods).then((res) => {
                if (res.status === 204) {
                    $window.location.href = "#!catalog";
                } else {
                    $scope.ErrorMessages.push(res.data.Message);
                }

                $rootScope.loading = false;
            });
        } else {
            catalogService.AddGoods(goods).then((res) => {
                if (res.status === 201) {
                    $window.location.href = "#!catalog";
                } else {
                    $scope.ErrorMessages.push(res.data.Message);
                }

                $rootScope.loading = false;
            });
        }
    }
});