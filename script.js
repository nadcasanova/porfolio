var i = 0;
var txt = '¡Hola! Soy Nadia Casanova, peluquera canina con más de 2 años de experiencia en el cuidado y estilismo de nuestras mascotas. Desde temprana edad, siempre he sentido una profunda conexión con los animales, lo que me llevó a seguir una carrera donde puedo combinar mi amor por ellos con mi creatividad y habilidades.';
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("about_me").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()