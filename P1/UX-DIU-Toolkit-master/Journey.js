/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Ricky Mendoza",
                Photo: "hombre.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere preparar un viaje con sus amigos para visitar nuevos sitios y relajarse del trabajo",
                touch1: "calendario",
                feel1: "4",
                con1: "ver cuantos días puede tener libres para organizar el viaje",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca informacion en internet para organizar su viaje",
                touch2: "Ordenador",
                feel2: "3",
                con2: "Esta confuso porque hay mucha información y pierde mucho tiempo, no hay precios que se ajusten a su presupuesto",
                ima2: "cartoon-PChard.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar alojamiento en granada para poder visitar la alhambra",
                touch3: "ordenador",
                feel3: "2",
                con3: "Hay muchas opciones y demasiada informacion por lo que no puede decidirse entre tantas",
                ima3: "cartoon-why.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Los amigos le recomiendan una página para escoger alojamientos",
                touch4: "ordenador",
                feel4: "4",
                con4: "Encuentra alojamiento en la zona que quería y además por un precio asequible",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Habla con sus amigos para poder hacer la reserva en el alojamiento encontrado",
                touch5: "móvil (whatsapp)",
                feel5: "2",
                con5: "Habla con sus amigos y estos tardan en responder y organizarse para poder hacer los planes de la reserva",
                ima5: "cartoon-phoningangry.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue realizar la reserva en el alojamiento que deseaba",
                touch6: "ordenador",
                feel6: "5",
                con6: "Sus amigos tambien están muy decididos y con ganas de el viaje",
                ima6: "cartoon-happy.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Beatrice Jacobs",
                Photo: "mujer.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje a España con su familia para poder descansar de la rutina",
                touch1: "calendario",
                feel1: "5",
                con1: "Tiene cuadrarlo con las vacaciones de su marido",
                ima1: "cartoon-phone-sitting.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide buscar en distintas páginas",
                touch2: "movil",
                feel2: "2",
                con2: "Algunas paginas no tienen de idioma el ingles y no entiende nada",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Habla con su marido para buscar juntos una pagina de informacion y finalmente la encuentra",
                touch3: "Móvil",
                feel3: "4",
                con3: "Ha necesitado estar mucho tiempo buscando",
                ima3: "cartoon-shaking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Compara distintas opciones que ha encontrado en la pagina",
                touch4: "Móvil",
                feel4: "3",
                con4: "No termina de decidirse entre un par de opciones que tiene, los precios estan bien",
                ima4: "cartoon-why.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Intenta reservar a traves de la pagina",
                touch5: "Móvil",
                feel5: "2",
                con5: "No termina de entender como funciona la pagina y no se dejan claras las medidas del covid por lo que no sabe si podran ir",
                ima5: "cartoon-phoningangry.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente se rinde y acaba buscando unas vacaciones en su pais",
                touch6: "movil",
                feel6: "1",
                con6: "Quería visitar un lugar nuevo y al final tiene que quedarse en su pais",
                ima6: "cartoon-PCcrying.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



