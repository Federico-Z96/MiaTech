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

//Es 87(fetch):
fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
   .then(response => {
      return response.json();
   })
   .then(data => {
      // Estrae e stampa i nomi dei cocktail
      const cocktailNames = data.drinks.map(drink => drink.strDrink);
      console.log(cocktailNames);

      const cocktailList = document.querySelector("span");
      cocktailList.textContent = cocktailNames.join(", ")
   })
   .catch(error => console.log("Si è verificato un errore!", error));

   //Es 88(fetch richiesta post):

   const funPost = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail", {
        method : "POST",
        body : JSON.stringify({
            nome : "Giovanni",
            cognome : "giussani"
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Errore:', error));
   }

   funPost();

   //Es 89(fetch con gestione errori):
 
   const fetchFun = async () => {
    try {
        const api = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
        if(!api.ok) {
            throw new Error(`ERRORE!!! ${api.status}`);
        }

        const data = await api.json();
        console.log('Dati ricevuti:', data);
    }catch (error) {
        console.error('Si è verificato un errore durante la richiesta:', error.message);
    }
   };

   fetchFun();

   //Es 90(CORS):

   const fetchData = async () => {
    try {
        const response = await fetch('https://api.github.com/users/octocat');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Dati ricevuti:', data);
    } catch (error) {
        console.error('Si è verificato un errore durante la richiesta:', error.message);
    }
};

fetchData();

// Es 91(bypassare i CORS):

const fetchData2 = async () => {
        const apiProxy = "https://cors-anywhere.herokuapp.com/";
        const response = "https://api.github.com/users/octocat";
    try {
        
        const responses = await fetch(apiProxy + response);

        if (!responses.ok) {
            throw new Error(`HTTP error! status: ${responses.status}`);
        }
    
        const data = await responses.json();
        console.log('Dati ricevuti:', data);
    } catch (error) {
        console.error('Si è verificato un errore durante la richiesta:', error.message);
    }
};

fetchData2();

//Es 92 (API che supporta CORS):

const fetchData3 = async () => {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Dati ricevuti:', data);
    } catch (error) {
        console.error('Si è verificato un errore durante la richiesta:', error.message);
    }
};

fetchData3();