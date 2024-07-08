//Es 84(funzione asincrona):

/* const promessa = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promessa risolta dopo 2,5 secondi");
        }, 2500);
    });
};

const funzioneAsinc = async () => {
    const messaggio = await promessa();
    console.log(messaggio);
};

funzioneAsinc();

//Es 85(funzione asincrona con try e catch):

const promessaDue = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promessa risolta dopo 2 secondi");
        }, 2000);
    });
};

const funzioneAsincrona = async () => {
    try {
        const messaggio = await promessaDue();
        console.log(messaggio);
    } catch (error) {
        console.error("Errore:", error);
    }
};

funzioneAsincrona();*/

//Es 86(funzione asincrona in serie):

const fun1 = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a ==="number"){
                 resolve(a);
                 console.log("A è un numero");
            } else {
                 reject("A non è un numero");
            }  
        }, 1000);
    });
};

const fun2 = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if(num < 50) {
              resolve("il numero è minore di 50");  
            } else {
              resolve("il numero è maggiore o uguale a 50");  
            }
        }, 2000);
    });
};

const funRichiamo = async (a) => {
    try {
        const result = await fun2(await fun1(a));
        console.log(result);
    } catch(error) {
        console.error(error);
    }
};

funRichiamo(30);
funRichiamo("a");
funRichiamo(51);