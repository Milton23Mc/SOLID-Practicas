//Example 1
interface DispositivoMultimedia {
    reproducirMusica(): void;
    reproducirVideo(): void;
    leerEbook(): void;
}

class Smartphone implements DispositivoMultimedia {
    reproducirMusica() {
        console.log("Reproduciendo música en el smartphone");
    }
    reproducirVideo() {
        console.log("Reproduciendo video en el smartphone");
    }
    leerEbook() {
        console.log("Leyendo eBook en el smartphone");
    }
}


class ReproductorMP3 implements DispositivoMultimedia {
    reproducirMusica() {
        console.log("Reproduciendo música en el reproductor MP3");
    }
    reproducirVideo() {
        throw new Error("Esta funcionalidad no está soportada");
    }
    leerEbook() {
        throw new Error("Esta funcionalidad no está soportada");
    }
}