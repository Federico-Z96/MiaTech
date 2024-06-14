//Es 21(funzioni annidate):
/*function outerFunction(x) {
    function innerFunction(y) {
        let sum = x + y;
        return sum;
    }
    return innerFunction;
};

console.log(outerFunction()(3, 5));*/

//Es 22 modifica outerFunction:

function outerFunction(initialValue) {
  let result = initialValue;
  function innerFunction(y) {
    result += y;
    return result;
  }
  return innerFunction;
}
console.log(outerFunction(5)(4));

//Es 23(counter):
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
  };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

//Es 24:

const student = {
  name: "franco",
  age: 17,
  grade: "superiori",
  school: "scuola media",
};

console.log(Object.keys(student));

//Es 25:

console.log(Object.values(student));

//Es 26:

console.log(Object.entries(student));

//Es 27(forEach e .map):

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  //forEach va a creare un iterazione di tutti gli elementi di numers, andandoli a moltiplicare per 2 prima di vederli rappresentati in console
  console.log(number * 2);
});

/*for(let i = 0; i <= numbers.length; i++){
    console.log(numbers[i] * 2)
};*/

const squaredNumbers = numbers.map((number) => number * number); // map va ad attribuire gli elementi di numbers al quadrato al nuovo array creato(squaredNumbers)

console.log(squaredNumbers);

//Es 28(filter & find):

const students = [
  {
    nome: "filippo",
    grade: 76,
  },
  {
    nome: "maria",
    grade: 50,
  },
  {
    nome: "giuseppe",
    grade: 60,
  },
  {
    nome: "alessia",
    grade: 59,
  },
];

console.log(students);

const passedStudents = students.filter((students) => students.grade >= 60);

console.log(passedStudents);

const studentLowGrade = students.find((student) => student.grade < 60);

console.log(studentLowGrade);

//Es 29(reduce & sort):

const exponses = [5, 15, 12, 7, 9];

const exponsesSum = exponses.reduce((i, z) => i + z);

console.log(exponsesSum);

const parole = ["cereali", "banane", "cioccolato", "fagioli", "spinaci"];

const paroleOrdinate = parole.sort();

console.log(paroleOrdinate);

//Es 30(class):
//Es 31(add proprety):

class Automobile {
  _marca;
  _modello;
  _anno;
  _chilometraggio;
  _contatoreChiamate = 0;

  constructor(marca, modello, anno, chilometraggio, contatoreChiamate) {
    this._marca = marca;
    this._modello = modello;
    this._anno = anno;
    this._chilometraggio = chilometraggio;
    this._contatoreChiamate = contatoreChiamate;
  }

  descrizione() {
    return `L'automobile è di questa marca: ${this._marca}`;
  }
  aggiungiChilometri(km) {
    this._chilometraggio += km;
  }

  mostraChilometraggio() {
    return this._chilometraggio;
  }

  //Es 34(metodo privato):

  #calcolaEta() {
    let anni = new Date().getFullYear();
    return anni - this._anno;
  }

  mostraEta() {
    return `L'automobile ha ${this.#calcolaEta()} anni.`;
  }

 //Es 34(metodo statico): 
  static confrontaChilometraggio(auto1, auto2) {
    if(auto1._chilometraggio > auto2._chilometraggio) {
        return `l'auto con più km è ${auto1._modello}`   
    } else if(auto1._chilometraggio < auto2._chilometraggio) {
         return `l'auto con più km è ${auto2._modello}`
    } else {
        return `Le AUTO HANNO GLI STESSI KM`
    }
  }
 //Es 36(contatore):
 
  #incrementaContatore() {
    this._contatoreChiamate++
  }
  //Es 37:
  aggiungiChilometri(km) {
    this.#incrementaContatore(); 
    this._chilometraggio += km;
    return this;
  }
  //Es38
  mostraContatoreChiamate() {
    return `Il metodo aggiungiChilometri è stato chiamato ${this._contatoreChiamate} volte.`;
}
}

const auto = new Automobile("bnw", "x5", 2010, 25);

auto.aggiungiChilometri(255);

console.log(auto.mostraChilometraggio());

//Es 32(sottoclasse automobile):

class Elettrica extends Automobile {
  _autonomia;

  constructor(marca, modello, anno, chilometraggio, autonomia) {
    super(marca, modello, anno, chilometraggio);
    this._autonomia = autonomia;
  }

  descrizione() {
    return `${super.descrizione()} ed ha un'autonomia di: ${this._autonomia}`;
  }

  ricarica(km) {
    this._autonomia += km;
  }
}

const autoElettrica = new Elettrica("tesla", "model s", 2020, 120000, 30);
autoElettrica.ricarica(100);
console.log(autoElettrica.descrizione());

//Es 33(prototype chain automobile):
Automobile.prototype.saluta = function () {
  console.log(
    `Salve, la marca dell'auto è ${this._marca} e il modello è ${this._modello}`
  );
};

console.log(autoElettrica.saluta());
console.log(auto.saluta());

//Es 34(metodo privato):

console.log(auto.mostraEta());
console.log(autoElettrica.mostraEta());

//Es 35(metodo protetto):

Automobile.prototype._controllaChilometri = function () {
  if (this._chilometraggio > 100000) {
    return "Avviso: Il chilometraggio dell'automobile supera i 100,000 km!";
  } else {
    return "Il chilometraggio dell'automobile è sotto i 100,000 km.";
  }
};

const autoElettrica2 = new Elettrica("tesla", "model s", 2020, 1200, 30);

console.log(autoElettrica._controllaChilometri());
console.log(autoElettrica2._controllaChilometri());

//Es 36(confronta km):

const automobile = new Automobile("audi", "modello", 2000, 12000, 0);

console.log(Automobile.confrontaChilometraggio(auto, automobile));

//Es 37:
console.log(automobile.aggiungiChilometri(5000));
console.log(automobile.mostraContatoreChiamate());
