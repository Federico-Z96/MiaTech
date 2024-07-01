
//Es 67(try and catch):


const tryCatch = (minore, maggiore) => {
    try {
        if (typeof minore !== 'number' || typeof maggiore !== 'number') {          
            throw new TypeError("Entrambi i valori devono essere numeri.");       //TypeError perché stiamo verificando se i valori passati sono del tipo corretto (numeri).
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