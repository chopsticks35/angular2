angular.module('secondPage', []);

angular.module('secondPage')
    .controller('myController', ['$scope', 
        function($scope){ 
            $scope.pinkPar = {
                "color" : "pink"
        }
            
        $scope.turnPink = function(elem) {
        elem.color = "color: pink";
        console.log(elem);
    }
        $scope.turnBlack = function() {
        $scope.color = "color: black";
    }
    }]);