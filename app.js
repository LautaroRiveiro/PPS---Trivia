var app = angular.module('miApp', []);

app.controller('miController', function($scope){
	$scope.saludo = "HOLA; MUNDO";
    
    $scope.opciones = ['Azul y Amarillo', 'Rojo y Blanco', 'Verde'];
    $scope.nombres = ['Juanma', 'Facu', 'Lautaro'];
    
    $scope.preguntas = {
        opciones : {numero: 1, opciones: ['Azul y Amarillo', 'Rojo y Blanco', 'Verde']},
        nombres : {numero: 2, opciones: ['Juanma', 'Facu', 'Lautaro']}
    };
    
    $scope.respuesta = {};
    
    $scope.Enviar = function(){
        alert($scope.respuesta.r);
    }
});