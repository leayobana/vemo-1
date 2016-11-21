app
// =========================================================================
// Show View and Delete motor
// =========================================================================
    .controller("MotorCtrl", function($scope, $state, $stateParams, catalogoService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'marca';
    var params = {};
    $scope.lista = [];
    $scope.motor = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        catalogoService.Motor.query(params, function(r) {
            $scope.lista = r;
            $scope.options = r.options;
            $scope.isLoading = false;
        }, function(err) {
            $log.log("Error in list:" + JSON.stringify(err));
            toastr.error(err.data.results.detail, err.status + ' ' + err.statusText);
        });
    };
    $scope.list(params);

    $scope.buscar = function() {
        params.page = 1;
        params.fields = $scope.fields;
        params.query = $scope.query;
        $scope.list(params);
    };

    $scope.onReorder = function(order) { //TODO
        $log.log('Order: ' + order);
    };

    $scope.delete = function(d) {
        if ($window.confirm("Seguro?")) {
            catalogoService.Motor.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó motor:" + JSON.stringify(d));
                toastr.success('Se eliminó motor ' + d.marca, 'Motor');
                $scope.list(params);
            }, function(err) {
                $log.log("Error al eliminar:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Motor
// =========================================================================
.controller("MotorSaveCtrl", function($scope, $state, $stateParams, catalogoService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.motor = {};

    $scope.sel = function() {
        catalogoService.Motor.get({ id: $stateParams.id }, function(r) {
            $scope.motor = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.motor.id) {
            catalogoService.Motor.update({ id: $scope.motor.id }, $scope.motor, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó Motor ' + r.marca, 'Motor');
                $state.go('catalogo.catalogo.motores');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            catalogoService.Motor.save($scope.motor, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó motor ' + r.marca, 'Motor');
                $state.go('catalogo.catalogo.motores');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('catalogo.catalogo.motores');


        
    };
});
