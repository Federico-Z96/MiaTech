
//Es 67(try and catch):


/*const tryCatch = (minore, maggiore) => {
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


tryCatch("", 10);*/

//Es 68(try & catch with finally):

/*const finallyTest = (alpha, beta) => {
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

finallyTest(4, 5);*/

//Es 69(callback):
 const functionCallback = (a, b, callback) => {
    const result = a + b;

    console.log(`il risultato è ${result}`);
    callback(result); 
 };

 const callbackTest = (result) => {
    console.log("Callback eseguito con il risultato:", result);  
 };

 functionCallback(1, 2, callbackTest);

 //Es 70(callback con parametro):

 const functionSum = (callback) => {
    const result = 5 + 3;

    callback(`il risultato è ${result}`); 
 };

 const summ = (result) => {
    console.log(result);
 }

functionSum(summ);

//Es 71(calback annidate):

const callbackAnnidate = (a, b, callback) => {
    if(typeof a === "number" && typeof b ==="number"){
        callback(a, b, (result) => {
            console.log(result);
        });
    }
};

const verifica = (a, b, callback) => {
    const result = a + b;
    callback(`il risultato è ${result}`); 
};

callbackAnnidate(1, 5, verifica);

//Es 72(promises):

/*const promessaSemplice = () => {
    return new Promise((resolve, reject) => {
       setTimeout(() =>{
        resolve("promessa mantenuta dopo 2 secondi")}, 2000)
    })
};

promessaSemplice().then((message) => {
    console.log(message);
});*/

//Es 73(promise con catch):
/* 
const promessaSemplice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (false) {
        resolve("promessa mantenuta dopo 2 secondi")
        } else {
            reject("promessa non mantenuta ")
        } }, 2000)
    })
};

promessaSemplice().then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error)
})
//Es 74(promise with finally):
.finally(() => {
    console.log("azione eseguita indipendentemente dal risultato");
});*/

//Es 75 (catena di promise):

/*const functionNumber = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            numeroRandom =Math.floor(Math.random() * 100);
            resolve(numeroRandom); 
    }, 1000);
});
};

functionNumber()
.then((number) => {
    console.log(`numero iniziale: ${number}`);
    return number * 2;
})
.then((numberMoltiplicato) => {
    console.log(`il numero moltiplicato è: ${numberMoltiplicato}`);
    return numberMoltiplicato + 3;
})
.then((risultatoFinale) => {
    console.log(`il risultato finale è: ${risultatoFinale}`);
});*/

//Es 76 (catena di promise con condizioni): 

/*const functionNumber = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            numeroRandom = Math.floor(Math.random() * 100);
            resolve(numeroRandom); 
    }, 1000);
});
};

functionNumber()
.then((numero) => {
    console.log(`numero iniziale: ${numero}`);
    if(numero % 2 === 0) {
        return numero * 2;
    } else {
        return numero + 1;
    }
})
.then((numeroIdentificato) => {
    console.log(`il risultato è: ${numeroIdentificato}`);
});*/

//Es 77(catena di promises con gestione di errori):

/*const randomValue = () => {
    return new Promise((resolve, reject) => {
        let numero = Math.floor(Math.random() * 100);
        let numeroDue = parseInt(prompt("inserisci un numero: ")); 
        let arrNumber = [numero, numeroDue];
        if(!isNaN(numeroDue)) {
            console.log(`i numeri sono: ${numero} e ${numeroDue}`);
            resolve(arrNumber);
        } else {
            reject("il valore inserito non è un numero");
        }
    })
}

randomValue()
.then((risultato) => {
     let risultatoSomma = 0;
    for(i = 0; i < risultato.length; i++) {
        risultatoSomma += risultato[i];
    }
    console.log(`il risultato è : ${risultatoSomma}`);
    return(risultatoSomma);
})
.then((risultatob) => {
    let risultato = risultatob  * 2;
    console.log(risultato);
})
.catch((error) => {
    console.error(error);
}); */

//Es 78(gestione degli errori con catch):

const promessaError = () => {
    return new Promise((resolve, reject) => {
        let errore = Boolean(Math.random() * 2 >= 1);
        if (errore === true) {
            reject("Si è verificato un errore")
        } else {
            resolve("operazione completata con successo");
        }
    })
};

promessaError()
.then((errore) => {
    console.log(errore);
})
.catch((error) => {
    console.error(error);
});

//Es 79(gestione errori con then e catch):

const promessaBoolean = (valoreB) => {
    return new Promise((resolve, reject) => {
        if(valoreB) {
            resolve("il valore è true");
        }else {
            reject("il valore è falso!!")
        }
    })
};

promessaBoolean(true)
.then((value) => {
    console.log(`Ottimooo!!! ${value}`);
})
.catch((errore) => {
    console.error(`Errore!!! : ${errore}`);
});

//Es 80 (gestione errori in una catena di promesse):

const chainpromise = () =>{
    return new Promise((resolve, reject) => {
        let valore = Math.floor(Math.random() * 100)
        if(valore >= 0.5) {
            resolve(`il risultato è ${valore}`)
        }else {
            resolve(`riprova il risultato è falso`)
        }
    })
};

chainpromise()
.then((valore) => {
    console.log("successo!!!", valore);
    return chainpromise();
})
.then((valreRandom) => {
    console.log("successo nella seconda promessa!!!", valreRandom);
    return chainpromise();
})
.then((ultimoValore) => {
    console.log("successo nella terza promessa!!!", ultimoValore);
    return chainpromise();
})
.catch((errore) => {
    console.error("ERROREE!!!", errore);
});