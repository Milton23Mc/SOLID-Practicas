//Example 1
class Pajaro {
    volar() {
        console.log("El pájaro vuela en el cielo");
    }
}
class Pinguino extends Pajaro {
    volar(){
        throw new Error("Los pingüinos no pueden volar");
    }
}