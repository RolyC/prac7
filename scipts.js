var app = angular.module('ProductApp', []);
app.controller('ProductControllerr', ($scope)=>{
    $scope.product={};
    $scope.products=new Array();

    $scope.addProdcut = () => {
        $scope.products.push({
            name: $scope.product.productname,
            Price: parseInt($scope.product.Price),
            Quanty: parseInt($scope.product.Quanty),
            Description: $scope.product.Description
        })

        
    }
    $scope.deleteProduct=(i) =>{
        $scope.product.splice(i, 1);
    }
})