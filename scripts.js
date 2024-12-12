$(document).ready(function () {
    // Suavizar scroll para los enlaces
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($.attr(this, 'href')).offset().top,
            },
            500
        );
    });
});

$(document).ready(function () {
    // Mostrar/Ocultar descripción
    $('.toggle-description').on('click', function () {
        const description = $(this).siblings('.short-description');
        description.slideToggle(300); // Efecto de despliegue suave

        // Cambiar el texto del botón
        const btnText = description.is(':visible') ? 'Ver descripción' : 'Ocultar descripción';
        $(this).text(btnText);
    });
});

function cargarDescripcion(descripcion) {
    // Asignamos la descripción al contenido del modal
    document.getElementById('descripcionTexto').innerText = descripcion;
}





$(document).ready(function () {
    // Mostrar el botón al hacer scroll hacia abajo
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('#btnTop').fadeIn();
        } else {
            $('#btnTop').fadeOut();
        }
    });

    // Volver al inicio al hacer clic en el botón
    $('#btnTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});
