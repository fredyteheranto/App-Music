angular.module('asideApp', ['ui.bootstrap', 'ngAside'])
    .controller('MainCtrl', function($scope, $aside) {
         $scope.listadoAudio = {
                        canciones: [{
                            nombre: "Fernando Herrera",
                            genero: "zamba",
                            url: "PEE"
                        },
                        {
                            nombre: "Melissa Flores",
                            genero: "zamba",
                            url: "link"
                        },
                        {
                            nombre: "Juan Carlos",
                            genero: "zamba",
                            url: "M110"
                        }]
                    }
        $scope.asideState = {
            open: false
        };
         // Abres el panel inicial 1
        $scope.openAside = function(position, backdrop) {
            $scope.asideState = {
                open: true,
                position: position
            };
            function postClose() {
                $scope.asideState.open = false;
            }
             // cuando esta abierto ejecutas dentro de open todo
            $aside.open({
                templateUrl: 'aside.html',
                placement: position,
                size: 'sm',
                backdrop: backdrop,
                controller: function($scope, $modalInstance) {
                    // datos del usuario
                    $scope.usuario = usuaRioData;
                    // datos json
                    // 
                    $scope.listadoGenero = ["Fernando Herrera", "Melissa Flores", "Juan Carlos Pineda", "Maria Perez"];

                    //editmos el usuario
                    $scope.editando = {};
                    //mostrar y editar guardar sus datos
                    $scope.MforeditarUsuario = false;
                    $scope.EditarUsuario = function(){
                        angular.copy( $scope.usuario, $scope.editando );
                        $scope.MforeditarUsuario= true;   
                    }
                    $scope.GuardarCambios = function(){
                        angular.copy( $scope.editando, $scope.usuario );
                        $scope.MforeditarUsuario = false;
                    }
                    $scope.CancelarCambios = function(){
                         $scope.editando = {};
                         $scope.MforeditarUsuario = false;
                    }
                    //organizar su playlist

                    //botones ok y cancel 
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

        // Reproductor de musica del usuario
        $scope.abrir2Aside = function(position, backdrop) {
            $scope.asideState = {
                open: true,
                position: position
            };

            function postClose() {
                $scope.asideState.open = false;
            }
            $aside.open({
                templateUrl: 'aside2.html',
                placement: position,
                size: 'sm',
                backdrop: backdrop,
                controller: function($scope, $modalInstance) {
                    // seteamos el audio mp3 u video 
                
                    $scope.audio = audioData;
                    $scope.ok = function(e) {
                        $modalInstance.close();
                        e.stopPropagation();
                    };
                    $scope.link = function(e) {
                        //$location.path == 'http://example.com/foo';
                        console.log('Listo a buscar el video');
                        //window.location.assign("http://www.w3schools.com")
                        //e.path();
                    };
                    $scope.cancel = function(e) {
                        $modalInstance.dismiss();
                        e.stopPropagation();
                    };
                }
            }).result.then(postClose, postClose);
        }
    });

var audioData = {
    // Datos de la cancion
    nombre: "Selfie ",
    genero: "Deep House",
    cover: "http://www.boosharticles.com/wp-content/uploads/2012/01/Avatar-huset_Johan_lores.114209.jpg"
}
var usuaRioData = {
    // Datos del usuario
    nombre: "Fredy teheran",
    MusicaFavorita: "Deep House",
    edad: 47,
    edad: 47,
    edad: 47,
    foto: "http://www.boosharticles.com/wp-content/uploads/2012/01/Avatar-huset_Johan_lores.114209.jpg"
}