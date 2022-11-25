$(document).ready(function(){

    //Scroll para header

    let scrollInicial = 0;

    $(window).scroll(function(){

        let scrollActual = $(window).scrollTop();

        if (scrollActual > scrollInicial){
            $("header").addClass("activo");
            $(".nokoforza").addClass("activo");
            $(".intro").addClass("activo");
        }
        else{
            $("header").removeClass("activo");
            $(".nokoforza").removeClass("activo");
            $(".intro").removeClass("activo");
        }
        scrollInicial = scrollActual;
    });

    //Click para hamburguesa header

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $("header .wrapper").toggleClass("activo");
        $("body").toggleClass("activo");
    });
    
    //Animaciones Fade en index (seccion "madein")

    $('.madein__titulo').each(function(){
        $(this).waypoint(()=>{
            $(this).addClass('animate__animated animate__fadeIn');
        }, {offset: '75%'});
    });

    $('.madein__contenido__caja').each(function(){
        $(this).waypoint(()=>{
            $(this).addClass('animate__animated animate__fadeInRight');
        }, {offset: '75%'});
    });

    //Animaciones Fade en index (seccion "ready")

    $('.ready h3').each(function(){
        $(this).waypoint(()=>{
            $(this).addClass('animate__animated animate__fadeInLeft');
        }, {offset: '75%'});
    });

    $('.ready__interior__texto').each(function(){
        $(this).waypoint(()=>{
            $(this).addClass('animate__animated animate__fadeInUp');
        }, {offset: '75%'});
    });
    
    //Flashes botones tallas seccion

    $(".size__s").click(function(){
        $(".size__m").removeClass("activo");
        $(".size__l").removeClass("activo");
        $(this).toggleClass("activo");
        $(this).toggleClass("animate__animated animate__flash");
    });
    $(".size__m").click(function(){
        $(".size__s").removeClass("activo");
        $(".size__l").removeClass("activo");
        $(this).toggleClass("activo");
        $(this).toggleClass("animate__animated animate__flash");
    });
    $(".size__l").click(function(){
        $(".size__s").removeClass("activo");
        $(".size__m").removeClass("activo");
        $(this).toggleClass("activo");
        $(this).toggleClass("animate__animated animate__flash");
    });
    
    //Click cambio de colores seccion

    $(".color__b").click(function(){
        $(this).toggleClass("activo");
        $(".color__g").removeClass("activo");
        $(".color__o").removeClass("activo");
        $(".nokoforza__fotos__negra").addClass("muestra");
        $(".nokoforza__fotos__verde").removeClass("muestra");
        $(".nokoforza__fotos__naranja").removeClass("muestra");
    });
    $(".color__g").click(function(){
        $(this).toggleClass("activo");
        $(".color__b").removeClass("activo");
        $(".color__o").removeClass("activo");
        $(".nokoforza__fotos__verde").addClass("muestra");
        $(".nokoforza__fotos__negra").removeClass("muestra");
        $(".nokoforza__fotos__naranja").removeClass("muestra");
    });
    $(".color__o").click(function(){
        $(this).toggleClass("activo");
        $(".color__b").removeClass("activo");
        $(".color__g").removeClass("activo");
        $(".nokoforza__fotos__naranja").addClass("muestra");
        $(".nokoforza__fotos__verde").removeClass("muestra");
        $(".nokoforza__fotos__negra").removeClass("muestra");
    });
    
    //Click tipo de manillar seccion

    $(".handle__f").click(function(){
        $(this).toggleClass("activo");
        $(".handle__r").removeClass("activo");
    });
    $(".handle__r").click(function(){
        $(this).toggleClass("activo");
        $(".handle__f").removeClass("activo");
    });

    //Click ruedas seccion y precio

    $(".wheels__a").click(function(){
        $(this).toggleClass("activo");
        $(".wheels__c").removeClass("activo");
        $(".price span:last-child").removeClass("activo");
        $(".price span:nth-child(2)").addClass("activo");
    });
    $(".wheels__c").click(function(){
        $(this).toggleClass("activo");
        $(".wheels__a").removeClass("activo");
        $(".price span:last-child").addClass("activo");
        $(".price span:nth-child(2)").removeClass("activo");
    });

    //Desplegable en seccion, el segundo para el más/menos

    $(".desplegable__titulo").click(function(){
        $(this).siblings(".desplegable__contenido").slideToggle("activo");
        $(this).children(".plus").toggleClass("activo");
    });

    //Click para cada foto se muestre en cuadro grande

    $(".nokoforza__fotos__negra img").click(function(){

        let imgActiva = $(this).attr("src");
        console.log(imgActiva);

        $(".nokoforza__fotos__negra > img").attr("src", imgActiva);
    });
    $(".nokoforza__fotos__verde img").click(function(){

        let imgActiva = $(this).attr("src");
        console.log(imgActiva);

        $(".nokoforza__fotos__verde > img").attr("src", imgActiva);
    });
    $(".nokoforza__fotos__naranja img").click(function(){

        let imgActiva = $(this).attr("src");
        console.log(imgActiva);

        $(".nokoforza__fotos__naranja > img").attr("src", imgActiva);
    });
    
});