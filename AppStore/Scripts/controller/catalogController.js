app.controller("catalogController", function ($scope, $rootScope, catalogService, basketService) {
    $scope.Title = "Каталог";
    
    $scope.Goods = [];
    $scope.CurrentPage = 1;
    $scope.MaxPage = 3;
    $scope.PageCollection = [1, 2, 3, 4];

    $scope.GetGoods = function (page) {
        $rootScope.loading = true;
        $scope.PageCollection = [];

        catalogService.GetAll(page).then(function (d) {
            if (d.status === 200) {
                d.data.Data.forEach((e) => {
                    e.BuyAmount = 1;
                });
                $scope.Goods = d.data.Data;

                $scope.CurrentPage = page;

                $scope.MaxPage = Math.ceil(d.data.Total / 10);
                for (var i = 1; i <= $scope.MaxPage; i++) {
                    $scope.PageCollection.push(i);
                }
            } else {
                alert(d.data.Message);
            }
            $rootScope.loading = false;
        });
    }
    
    $scope.GetGoods($scope.CurrentPage);

    $scope.AddInBasket = function(goodsId, amount) {
        basketService.Insert(amount, goodsId).then((response) => {
            if (response) {
                console.log("Добавлен в корзину");
                $rootScope.$broadcast("basket:addItem", response);
            }
        });
    }

    $scope.RemoveGoods = function(id) {
        $rootScope.loading = true;

        catalogService.RemoveGoods(id).then((res) => {
            if (res.status === 200) {
                $scope.GetGoods();
            } else {
                alert(res.data.Message);
            }
            $rootScope.loading = false;
        });
    }
});