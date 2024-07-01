
//Es 67(try and catch):


const tryCatch = (minore, maggiore) => {
    try {
        if (typeof minore !== 'number' || typeof maggiore !== 'number') {          
            throw new TypeError("Entrambi i valori devono essere numeri.");       //TypeError perché si stà verificando se i valori passati sono del tipo corretto (numeri).
        }

        if (minore < maggiore) {
            console.log(`Il numero ${minore} è minore di ${maggiore}`);
        } else if (minore === maggiore) {
            throw new Error("Riprova!! I due numeri sono uguali");                //errori generici
        } else {
            throw new Error("Riprova! Il numero minore è maggiore!!");
        }
    } catch (error) {
        console.error(error.message);
    }
}


tryCatch("", 10);

//Es 68(try & catch with finally):

const finallyTest = (alpha, beta) => {
    try{
        if(typeof alpha !== "number" || typeof beta !== "number") {
            throw new Error("dato inserito non valido");
        }else {
            if(alpha < beta || alpha === beta) {
               throw new Error("operazione non valida : alpha è minore o uguale a beta"); 
            }
            
        }
    } catch (error) {
        console.error(error.message);
    } finally{
        alert("Errore  Errore  Errore");
    }
};

finallyTest(4, 5);