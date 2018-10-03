app.controller('basketController', function ($scope, $rootScope, basketService) {
    $scope.Title = "Корзина";
    $rootScope.loading = true;

    $scope.GoodsInBasket = [];

    $scope.Get = function() {
        basketService.GetAll().then(function (d) {
            if (d.status === 200) {
                $scope.GoodsInBasket = d.data;
            } else {
                alert(d.data.Message);
            }

            $rootScope.loading = false;
        });
    }
    
    $scope.Remove = function(id) {
        basketService.Remove(id).then((res) => {
            console.log(res);

            if (res.status === 200 ) {
                $scope.Get();
                $rootScope.$broadcast("basket:removeItem", id);
            }
        });
    }

    $scope.GoodsInBasketSumAmount = function() {
        var amounts = !$scope.GoodsInBasket.length ? [0] : $scope.GoodsInBasket.map((x) => { return x.Amount; });
        return amounts.reduce((calculation, current) => {
            return calculation + current;
        });
    }

    $scope.TotalPrice = function() {
        var items = !$scope.GoodsInBasket.length ? [0] : $scope.GoodsInBasket.map((x) => { return x.Amount * x.Goods.Price; });
        return items.reduce((calculation, current) => {
            return calculation + current;
        });
    }
    $scope.Get();

    
});