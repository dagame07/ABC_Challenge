
document.addEventListener("DOMContentLoaded", () => {
    const colores = ['green', 'blue', 'red'];
    function colorAleatorio () {
        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        return colores[indiceAleatorio];
    }
    const elementosH5 = document.querySelectorAll('h5');
5
    elementosH5.forEach(h5 => {
        h5.addEventListener('click', () => {
            h5.style.color = colorAleatorio();
        });
    });

});
