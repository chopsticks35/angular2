angular.module('thirdPage', []);

angular.module('thirdPage').controller('thirdPage-controller', ['$scope', function($scope) {
    
    $scope.hidden = [true, false]
    
    $scope.triggerPopUp = function() {
        $scope.hidden = [false, true];
    }
    
    $scope.closePopUp = function() {
        $scope.hidden = [true, false];
    }
    
}]);