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

angular.module('secondPage')
        .directive('ngConfirmClick', [
            function(){
                return {
                    link: function (scope, element, attr) {
                        var msg = attr.ngConfirmClick || "Are you sure?";
                        var clickAction = attr.confirmedClick;
                        element.bind('click',function (event) {
                            if ( window.confirm(msg) ) {
                                scope.$eval(clickAction)
                        }
                    
                    });
                }
            };
    }])
