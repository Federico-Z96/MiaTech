//Es 84(funzione asincrona):

const promessa = () => {
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

funzioneAsincrona();

