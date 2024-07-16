document.addEventListener('DOMContentLoaded', function() {
    // Declaración de constantes
    const carrito = document.getElementById('carrito');
    const elementos1 = document.getElementById('lista-1');
    const lista = document.querySelector('#carrito tbody');
    const vaciarCarritoBtn = document.getElementById('vaciarCarrito');

    // Funcionalidad de carrito de compras

    // Función de los eventos del carrito (compra, eliminar y vaciar)
    cargarEventListeners();

    function cargarEventListeners() {
        elementos1.addEventListener('click', comprarElemento);
        carrito.addEventListener('click', eliminarElemento);
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }

    // Función de comprar elementos
    function comprarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const elemento = e.target.parentElement.parentElement;
            leerDatosElemento(elemento);
        }
    }

    // Función de leer elementos
    function leerDatosElemento(elemento) {
        const infoElemento = {
            imagen: elemento.querySelector('img').src,
            titulo: elemento.querySelector('h3').textContent,
            precio: elemento.querySelector('.precio').textContent,
            id: elemento.querySelector('a').getAttribute('data-id')
        };
        insertarCarrito(infoElemento);
    }

    // Función de insertar carrito
    function insertarCarrito(elemento) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><img src="${elemento.imagen}" width="100" /></td>
            <td>${elemento.titulo}</td>
            <td>${elemento.precio}</td>
            <td><a href="#" class="borrar" data-id="${elemento.id}">X</a></td>
        `;

        lista.appendChild(row);
    }

    // Función de eliminar elementos
    function eliminarElemento(e) {
        e.preventDefault();
        let elemento, elementoId;
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.parentElement.remove();
            elemento = e.target.parentElement.parentElement;
            elementoId = elemento.querySelector('a').getAttribute('data-id');
        }
    }

    // Función de vaciar carrito
    function vaciarCarrito() {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        return false;
    }
});



//Funcionalidad para cambiar de idioma 

//Español a Ingles 
const texto={
    //ingles
   in:{
    //controlador del titulo del browser
    browser:"Project One (Ecommerce)",
    //controlador del contenido de la navegación
    navbarInicio:"Star",
    navbarServicios:"Services",
    navbarProductos:"Productos",
    navbarContacto:"Contact",
    //controlador del contenido del carrito
    carritoImagen:"Image",
    carritoNombre:"Name",
    carritoPrecio:"Price",
    vaciarCarrito:"Empy cart",
    //controlador del contenido medio
    titulo:"Actual Trends",
    slogan:"Release elegance and style with our garments.",
    //controlador para las ofertas 
    tituloOfert1:"Men's accessories",
    tituloOfert2:"Footwear",
    tituloOfert3:"Accessories for women",
    botonOfert1:"information",
    botonOfert2:"information",
    botonOfert3:"information",
    //controlador del apartado de los productos
    tituloProducts:"products",
    //Element producto item
    tituloProductUno:"Black Oxford Shirt",
    parrafoProductUno:"Premium quality",
    botonProductUno:"Add to cart",
    //Element producto item
    tituloProductDos:"black windbreaker jacket",
    parrafoProductDos:"Premium quality",
    botonProductDos:"Add to cart",
    //Element producto item
    tituloProductTres:"Black Coat",
    parrafoProductTres:"Premium quality",
    botonProductTres:"Add to cart",
    //Element producto item
    tituloProductCuatro:"Blue Oxford Shirt",
    parrafoProductCuatro:"Premium quality",
    botonProductCuatro:"Add to cart",
    //Element producto item
    tituloProductCinco:"Classic Oxford Shirt",
    parrafoProductCinco:"Premium quality",
    botonProductCinco:"Add to cart",
    //Element producto item
    tituloProductSeis:"Sheep Coat For Women",
    parrafoProductSeis:"Premium quality",
    botonProductSeis:"Add to cart",
    //controlador de los servicios
    serviciosUno:'Personal style advice',
    serviciosDos:'Free shipping and returns',
    serviciosTres:'Loyalty and unique discounts',
    //controlador de los blogs 
    tituloBlogUno: 'HOW TO CREATE A CAPSULE WARDROBE',
    tituloBlogDos: 'STYLE GUIDE FOR DIFFERENT OCCASIONS',
    tituloBlogTres: 'FASHION TRENDS FOR THE SEASON',
    
    parrafoBlogUno: 'Discover the magic of a capsule wardrobe and learn to simplify your life with style. In this article, we will guide you step by step to build a collection of versatile and timeless pieces that complement each other.',
    parrafoBlogDos: 'Have you ever found yourself standing in front of your closet unsure of what to wear? This style guide is your perfect solution. Here, we present practical tips for choosing the ideal outfit for every occasion, whether it’s a wedding, a formal dinner, a work meeting, or a casual day with friends.',
    parrafoBlogTres: 'Discover the latest trends that are setting the tone this season and transform your wardrobe with the most current in fashion. From vibrant colors to innovative cuts, this article will guide you through the essential pieces that must be in your collection.'

   },
   es:{
    //controlador del titulo del browser
    browser: "Proyecto Uno (Ecommerce)",
    //controlador del contenido de la navegación
    navbarInicio: "Inicio",
    navbarServicios: "Servicios",
    navbarProductos: "Productos",
    navbarContacto: "Contacto",
    //controlador del contenido del carrito
    carritoImagen: "Imagen",
    carritoNombre: "Nombre",
    carritoPrecio: "Precio",
    vaciarCarrito: "Vaciar carrito",
    //controlador del contenido medio
    titulo: "Tendencias Actuales",
    slogan: "Libera elegancia y estilo con nuestras prendas.",
    //controlador para las ofertas 
    tituloOfert1: "Accesorios para hombres",
    tituloOfert2: "Calzado",
    tituloOfert3: "Accesorios para mujeres",
    botonOfert1: "Información",
    botonOfert2: "Información",
    botonOfert3: "Información",
    //controlador del apartado de los productos
    tituloProducts: "Productos",
    //Element producto item
    tituloProductUno: "Camisa Oxford Negra",
    parrafoProductUno: "Calidad premium",
    botonProductUno: "Agregar al carrito",
    //Element producto item
    tituloProductDos: "Chaqueta cortaviento negra",
    parrafoProductDos: "Calidad premium",
    botonProductDos: "Agregar al carrito",
    //Element producto item
    tituloProductTres: "Abrigo Negro",
    parrafoProductTres: "Calidad premium",
    botonProductTres: "Agregar al carrito",
    //Element producto item
    tituloProductCuatro: "Camisa Oxford Azul",
    parrafoProductCuatro: "Calidad premium",
    botonProductCuatro: "Agregar al carrito",
    //Element producto item
    tituloProductCinco: "Camisa Oxford Clásica",
    parrafoProductCinco: "Calidad premium",
    botonProductCinco: "Agregar al carrito",
    //Element producto item
    tituloProductSeis: "Abrigo de Lana para Mujeres",
    parrafoProductSeis: "Calidad premium",
    botonProductSeis: "Agregar al carrito",
    //controlador de los servicios
    serviciosUno:'Asesoría de estilo personal',
    serviciosDos:'Envío y devoluciones gratis',
    serviciosTres:'Lealtad y descuentos unícos',
    //controlador de blogs 
    tituloBlogUno:'CÓMO CREAR UN ARMARIO CAPSULE',
    tituloBlogDos:'GUÍA DE ESTILO PARA DIFERENTES OCASIONES',
    tituloBlogTres:'TENDENCIAS DE MODA PARA LA TEMPORADA',
    
    parrafoBlogUno:'Descubre la magia de un armario cápsula y aprende a simplificar tu vida con estilo. En este artículo, te guiaremos paso a paso para construir una colección de prendas versátiles y atemporales que se complementen entre sí.',
    parrafoBlogDos:'¿Te has encontrado alguna vez frente a tu armario sin saber qué ponerte? Esta guía de estilo es tu solución perfecta. Aquí te presentamos consejos prácticos para elegir el outfit ideal para cada ocasión, ya sea una boda, una cena formal, una reunión de trabajo o un día casual con amigos.',
    parrafoBlogTres:'Descubre las últimas tendencias que están marcando la pauta esta temporada y transforma tu armario con lo más actual en moda. Desde colores vibrantes hasta cortes innovadores, este artículo te guiará a través de las prendas esenciales que no pueden faltar en tu colección.'


   }
   //añadir más idiomas si es necesario

};
//funcionalidade cambio de idioma
function cambiarIdioma(idioma){
    //controlador del titulo del browser
    document.getElementById('browser').textContent=texto[idioma].browser;
    //controlador dle contenido de la navegación
    document.getElementById('navbarInicio').textContent=texto[idioma].navbarInicio;
    document.getElementById('navbarServicios').textContent=texto[idioma].navbarServicios;
    document.getElementById('navbarProductos').textContent=texto[idioma].navbarProductos;
    document.getElementById('navbarContacto').textContent=texto[idioma].navbarContacto;
    //controlador del contenido del carrito
    document.getElementById('carritoImagen').textContent=texto[idioma].carritoImagen;
    document.getElementById('carritoNombre').textContent=texto[idioma].carritoNombre;
    document.getElementById('carritoPrecio').textContent=texto[idioma].carritoPrecio;
    document.getElementById('vaciarCarrito').textContent=texto[idioma].vaciarCarrito;
    //controlador del contenido medio
    document.getElementById('titulo').textContent=texto[idioma].titulo;
    document.getElementById('slogan').textContent=texto[idioma].slogan;
    //controlador de las ofertas
    document.getElementById('tituloOfert1').textContent=texto[idioma].tituloOfert1;
    document.getElementById('tituloOfert2').textContent=texto[idioma].tituloOfert2;
    document.getElementById('tituloOfert3').textContent=texto[idioma].tituloOfert3;
    document.getElementById('botonOfert1').textContent=texto[idioma].botonOfert1;
    document.getElementById('botonOfert2').textContent=texto[idioma].botonOfert1;
    document.getElementById('botonOfert3').textContent=texto[idioma].botonOfert1;
    //Controlador de productos
    document.getElementById('tituloProducts').textContent=texto[idioma].tituloProducts;
    document.getElementById('tituloProductUno').textContent=texto[idioma].tituloProductUno;
    document.getElementById('parrafoProductUno').textContent=texto[idioma].parrafoProductUno;
    document.getElementById('botonProductUno').textContent=texto[idioma].botonProductUno;
    //Element producto item
    document.getElementById('tituloProductDos').textContent=texto[idioma].tituloProductDos;
    document.getElementById('parrafoProductDos').textContent=texto[idioma].parrafoProductDos;
    document.getElementById('botonProductDos').textContent=texto[idioma].botonProductDos;
    //Element producto item
    document.getElementById('tituloProductTres').textContent=texto[idioma].tituloProductTres;
    document.getElementById('parrafoProductTres').textContent=texto[idioma].parrafoProductTres;
    document.getElementById('botonProductTres').textContent=texto[idioma].botonProductTres;
    //Element producto item
    document.getElementById('tituloProductCuatro').textContent=texto[idioma].tituloProductCuatro;
    document.getElementById('parrafoProductCuatro').textContent=texto[idioma].parrafoProductCuatro;
    document.getElementById('botonProductCuatro').textContent=texto[idioma].botonProductCuatro;
    //Element producto item
    document.getElementById('tituloProductCinco').textContent=texto[idioma].tituloProductCinco;
    document.getElementById('parrafoProductCinco').textContent=texto[idioma].parrafoProductCinco;
    document.getElementById('botonProductCinco').textContent=texto[idioma].botonProductCinco;
    //Element producto item
    document.getElementById('tituloProductSeis').textContent=texto[idioma].tituloProductSeis;
    document.getElementById('parrafoProductSeis').textContent=texto[idioma].parrafoProductSeis;
    document.getElementById('botonProductSeis').textContent=texto[idioma].botonProductSeis;
    //controlador de servicios
    document.getElementById('serviciosUno').textContent=texto[idioma].serviciosUno;    
    document.getElementById('serviciosDos').textContent=texto[idioma].serviciosDos;
    document.getElementById('serviciosTres').textContent=texto[idioma].serviciosTres;
    //controloador de los blogs 
    document.getElementById('tituloBlogUno').textContent=texto[idioma].tituloBlogUno;    
    document.getElementById('tituloBlogDos').textContent=texto[idioma].tituloBlogDos;    
    document.getElementById('tituloBlogTres').textContent=texto[idioma].tituloBlogTres;
    document.getElementById('parrafoBlogUno').textContent=texto[idioma].parrafoBlogUno;    
    document.getElementById('parrafoBlogDos').textContent=texto[idioma].parrafoBlogDos;
    document.getElementById('parrafoBlogTres').textContent=texto[idioma].parrafoBlogTres;
}