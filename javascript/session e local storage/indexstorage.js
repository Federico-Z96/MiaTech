//Es 96(session e local storage):

const salvaStorageButton = document.getElementById("salva-storage");
const recuperaStorageButton = document.getElementById("recupera-storage");
const rimuoviStorageButton = document.getElementById("rimuovi-storage");
const localStoragePara = document.getElementById("local-storage");
const sessionStoragePara = document.getElementById("session-storage");


salvaStorageButton.addEventListener("click", salvaValori);
recuperaStorageButton.addEventListener("click", recuperaValori);
rimuoviStorageButton.addEventListener("click", rimuoviValori);

function salvaValori() {
    const valoreLocal = prompt("Inserisci un valore per il localStorage:", "valore localStorage");
    const valoreSession = prompt("Inserisci un valore per il sessionStorage:", "valore sessionStorage");

    if (valoreLocal) {
        localStorage.setItem("local_storage_value", valoreLocal);
        console.log(`Salvato nel localStorage: ${valoreLocal}`);
    }if (valoreSession) {
        sessionStorage.setItem("session_storage_value", valoreSession);
        console.log(`Salvato nel sessionStorage: ${valoreSession}`);
    }

    aggiornaParagrafi();
}

function recuperaValori() {
    const valoreLocal = localStorage.getItem("local_storage_value") || "Nessun valore nel localStorage";
    const valoreSession = sessionStorage.getItem("session_storage_value") || "Nessun valore nel sessionStorage";

    console.log(`Recuperato dal localStorage: ${valoreLocal}`);
    console.log(`Recuperato dal sessionStorage: ${valoreSession}`);

    aggiornaParagrafi();
}

function rimuoviValori() {
    localStorage.removeItem("local_storage_value");
    sessionStorage.removeItem("session_storage_value");

    console.log("Valore rimosso dal localStorage");
    console.log("Valore rimosso dal sessionStorage");

    aggiornaParagrafi();
}

function aggiornaParagrafi() {
    const valoreLocal = localStorage.getItem("local_storage_value") || "Nessun valore nel localStorage";
    const valoreSession = sessionStorage.getItem("session_storage_value") || "Nessun valore nel sessionStorage";

    localStoragePara.innerText = `localStorage: ${valoreLocal}`;
    sessionStoragePara.innerText = `sessionStorage: ${valoreSession}`;
}

aggiornaParagrafi();