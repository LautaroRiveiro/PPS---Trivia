var app = angular.module('miApp', []);

app.controller('miController', function($scope){
	$scope.saludo = "HOLA; MUNDO";
    
    $scope.opciones = ['Azul y Amarillo', 'Rojo y Blanco', 'Verde'];
    $scope.nombres = ['Juanma', 'Facu', 'Lautaro'];
    
    $scope.respuesta = {r1: "", r2:""};
    
    $scope.Enviar = function(){
        alert($scope.respuesta.r);
    }
});