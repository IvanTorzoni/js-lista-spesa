// Stampare la lista di spesa in pagina utilizzando ciclo while.
// Stampare poi i singloli elementi nella pagina HTML

// Creo l' array con i prodotti da comprare (lista della spesa)
const shoppingList = ["latte", "biscotti", "pasta", "formaggio", "panna", "caffe"];

// Cerco la lista nel file HTML
let listElem = document.querySelector(".shopping-list");

// Imposto il valore di partenza
let i = 0

// Creo il ciclo While. Il ciclo continua fino al massimo della lunghezza della "lista della spesa" e per ogni elemento viene creato il suo apposito tag "li" di appoggio. Tutti gli elementi vengono poi inseriti nella lista "shopping-list" creata ad HTML.
while (i < shoppingList.length) {
    const shoppingItems = (shoppingList[i]);
    i++

    const listItemElem = document.createElement("li"); // object
    listItemElem.innerHTML = shoppingItems;
    console.log(listItemElem);
    
    listElem.append(listItemElem);
}

