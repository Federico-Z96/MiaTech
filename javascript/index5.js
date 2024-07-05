//Es 84(funzione asincrona):

const promessa = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promessa risolta dopo 2 secondi");
        }, 2000);
    });
};

const funzioneAsincrona = async () => {
    try {
        const messaggio = await promessa();
        console.log(messaggio);
    } catch (error) {
        console.error("Errore:", error);
    }
};

funzioneAsincrona();