angular.module('asideApp', ['ui.bootstrap', 'ngAside'])
    .controller('MainCtrl', function($scope, $aside) {
        $scope.asideState = {
            open: false
        };

        $scope.openAside = function(position, backdrop) {
            $scope.asideState = {
                open: true,
                position: position
            };

            function postClose() {
                $scope.asideState.open = false;
            }

            $aside.open({
                templateUrl: 'aside.html',
                placement: position,
                size: 'sm',
                backdrop: backdrop,
                controller: function($scope, $modalInstance) {
                    $scope.ok = function(e) {
                        $modalInstance.close();
                        e.stopPropagation();
                    };
                    $scope.cancel = function(e) {
                        $modalInstance.dismiss();
                        e.stopPropagation();
                    };
                }
            }).result.then(postClose, postClose);
        }
    });
