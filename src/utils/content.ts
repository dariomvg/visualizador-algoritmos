import { ContentTypes } from "../types/utils.types";

export const content: ContentTypes[] = [
  {
    id: 0,
    name: "busqueda-binaria",
    description:
      "La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista ordenada. Divide repetidamente el rango de búsqueda a la mitad hasta que encuentre el valor deseado o determine que no está presente.",
    steps: [
      {
        id: 1,
        details:
          "Inicializamos dos variables que representan los límites del rango donde se buscará: izquierda (el inicio del array) y derecha (el final del array), izquierda comienza en el índice 0 y derecha en el último índice del array. Esto significa que inicialmente el rango de búsqueda cubre todo el array.",
        code: `const arr = [1, 3, 5, 7, 9, 11, 13, 15]
let izquierda = 0;  // Inicio del array 
let derecha = arr.length - 1;  // Fin del array
`,
      },
      {
        id: 2,
        details:
          "Utilizamos un bucle while que sigue iterando mientras izquierda sea menor o igual a derecha. Esto asegura que seguimos buscando mientras haya elementos entre los límites. Si izquierda supera a derecha, significa que hemos reducido el rango de búsqueda a cero y el valor no está presente en el array.",
        code: `while (izquierda <= derecha) {}`,
      },
      {
        id: 3,
        details:
          "En cada iteración, calculamos el índice medio del rango actual. Esto se hace sumando izquierda y derecha, y dividiéndolo entre dos (usando Math.floor para redondear hacia abajo). El índice medio nos indica el elemento que vamos a comparar con el valor objetivo.",
        code: `let medio = Math.floor((izquierda + derecha) / 2);`,
      },
      {
        id: 4,
        details:
          "Si el valor en el índice medio coincide con el valor que estamos buscando, hemos encontrado el objetivo, por lo que devolvemos el índice del elemento. Si el valor en el medio es exactamente el objetivo, devolvemos el índice donde se encuentra el objetivo.",
        code: `if (arr[medio] === objetivo) {
 return medio;
}`,
      },
      {
        id: 5,
        details:
          "Si el valor en el punto medio es menor que el objetivo, entonces el valor objetivo debe estar en la mitad derecha del array. Por lo tanto, actualizamos el límite izquierdo (izquierda = medio + 1). Si el valor en el punto medio es mayor que el objetivo, significa que el objetivo está en la mitad izquierda del array. Actualizamos el límite derecho (derecha = medio - 1). Así, reducimos el rango de búsqueda eliminando la mitad que ya hemos descartado.",
        code: `if (arr[medio] < objetivo) {
  izquierda = medio + 1;
}else {
  derecha = medio - 1;
}`,
      },
      {
        id: 6,
        details:
          "Si el bucle termina sin encontrar el objetivo (porque izquierda supera a derecha), devolvemos -1 para indicar que el valor no está presente en el array.",
        code: `return -1;`,
      },
      {
        id: 7,
        details: "Código completo",
        code: `function busquedaBinaria(arr, objetivo) {
  let izquierda = 0;
  let derecha = arr.length - 1;

  while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2);

    if (arr[medio] === objetivo) {
      return medio;
    } else if (arr[medio] < objetivo) {
      izquierda = medio + 1;
    } else {
      derecha = medio - 1;
    }
  }

  return -1; // No encontrado
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const objetivo = 7;
const resultado = busquedaBinaria(arr, objetivo);

console.log(resultado); 

`,
      },
    ],
  },
  {
    id: 1,
    name: "ordenamiento-por-seleccion",
    description:
      "El algoritmo de ordenamiento por selección (Selection Sort) es un algoritmo simple que organiza una lista encontrando repetidamente el valor mínimo (o máximo) de la parte no ordenada del array y colocándolo en su posición correcta",
    steps: [
      {
        id: 1,
        details:
          "El algoritmo recorre cada elemento del array, comenzando en el índice 0 hasta el penúltimo índice. Para cada iteración, considera el elemento actual como el mínimo y busca en el resto del array si hay un elemento más pequeño. i es el índice que marca el comienzo de la parte no ordenada del array",
        code: `for (let i = 0; i < n - 1; i++) {}`,
      },
      {
        id: 2,
        details:
          "Inicialmente, asumimos que el elemento en el índice i es el más pequeño en la porción no ordenada del array. Guardamos este índice en la variable indiceMin. Esto significa que comenzamos suponiendo que el valor en i es el menor valor del resto del array",
        code: `let indiceMin = i;`,
      },
      {
        id: 3,
        details:
          "Recorremos el resto del array (desde i + 1 hasta el final) para buscar un elemento más pequeño que el valor en indiceMin. Si encontramos un valor más pequeño, actualizamos indiceMin con el nuevo índice. j recorre todos los elementos después de i. Si arr[j] es más pequeño que arr[indiceMin], actualizamos indiceMin con j, lo que indica que hemos encontrado un nuevo valor mínimo.",
        code: `for (let j = i + 1; j < n; j++) {
  if (arr[j] < arr[indiceMin]) {
    indiceMin = j;
  }
}
`,
      },
      {
        id: 4,
        details:
          "Si indiceMin no es igual a i, significa que encontramos un valor más pequeño en el resto del array. En este caso, intercambiamos el valor en i con el valor en indiceMin. Aquí usamos una variable temporal temp para hacer el intercambio entre el valor en i y el valor en indiceMin.",
        code: `if (indiceMin !== i) {
  let temp = arr[i];
  arr[i] = arr[indiceMin];
  arr[indiceMin] = temp;
}
`,
      },
      {
        id: 5,
        details:
          "El ciclo externo avanza al siguiente índice y repite el proceso hasta que todos los elementos estén ordenados. Una vez que el array está ordenado, lo devolvemos. El algoritmo ha colocado los elementos en orden ascendente intercambiando los mínimos encontrados en cada iteración.",
        code: `return arr;`,
      },
      {
        id: 6,
        details: "Código completo",
        code: `function ordenamientoPorSeleccion(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let indiceMin = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[indiceMin]) {
        indiceMin = j;
      }
    }

    if (indiceMin !== i) {
      let temp = arr[i];
      arr[i] = arr[indiceMin];
      arr[indiceMin] = temp;
    }
  }

  return arr;
}

const arr = [64, 25, 12, 22, 11];
const arrOrdenado = ordenamientoPorSeleccion(arr);

console.log(arrOrdenado);  // Salida: [11, 12, 22, 25, 64]

`,
      },
    ],
  },
  {
    id: 2,
    name: "ordenamiento-por-insercion",
    description:
      "El algoritmo de ordenamiento por inserción (Insertion Sort) es un algoritmo simple que construye la lista ordenada uno a uno. En cada iteración, toma un elemento de la lista no ordenada y lo coloca en la posición correcta dentro de la parte ordenada.",
    steps: [
      {
        id: 1,
        details:
          "Comenzamos desde el segundo elemento (i = 1), ya que el primer elemento (en i = 0) se considera que está ordenado por sí mismo. Repetimos el proceso para todos los elementos restantes del array. i es el índice que recorre los elementos no ordenados, comenzando desde el segundo elemento (índice 1)",
        code: `for (let i = 1; i < n; i++) {}`,
      },
      {
        id: 2,
        details:
          "Al comienzo de cada iteración, tomamos el valor actual en el índice i y lo guardamos en una variable temporal (valorActual). Este valor es el que vamos a colocar en la parte ordenada del array. Aquí estamos almacenando arr[i] en valorActual, ya que en el siguiente paso moveremos elementos del array y necesitamos preservar el valor actual.",
        code: `let valorActual = arr[i];`,
      },
      {
        id: 3,
        details:
          "Luego, comparamos el valorActual con los elementos de la parte ordenada del array (a la izquierda de i). Si un elemento en la parte ordenada es mayor que valorActual, lo desplazamos una posición hacia la derecha. j comienza en i - 1, que es el índice del último elemento de la parte ordenada. Comparamos arr[j] con valorActual. Si arr[j] es mayor, lo movemos a arr[j + 1] y seguimos retrocediendo (j--) hasta que encontramos la posición correcta para insertar el valorActual.",
        code: `let j = i - 1;
while (j >= 0 && arr[j] > valorActual) {
  arr[j + 1] = arr[j];
  j--;
}
`,
      },
      {
        id: 4,
        details:
          "Cuando hemos desplazado todos los elementos mayores, insertamos el valorActual en la posición adecuada, que es el índice j + 1. Esto asegura que el valorActual se coloca en su posición correcta dentro de la parte ordenada del array.",
        code: `arr[j + 1] = valorActual;`,
      },
      {
        id: 5,
        details:
          "El ciclo se repite hasta que hemos procesado todos los elementos del array, y cada uno se coloca en su posición correcta dentro de la parte ordenada. Una vez que el algoritmo ha completado la ordenación, devolvemos el array.",
        code: `return arr;`,
      },
      {
        id: 6,
        details: "Código completo",
        code: `function ordenamientoPorInsercion(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let valorActual = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > valorActual) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = valorActual;
  }

  return arr;
}

const arr = [12, 11, 13, 5, 6];
const arrOrdenado = ordenamientoPorInsercion(arr);

console.log(arrOrdenado);  // Salida: [5, 6, 11, 12, 13]

`,
      },
    ],
  },
  {
    id: 4,
    name: "ordenamiento-por-mezcla",
    description:
      "El algoritmo de ordenamiento por mezcla (Merge Sort) es un algoritmo de ordenamiento eficiente que sigue el paradigma de divide y vencerás. Divide el array en mitades más pequeñas hasta que cada subarray tiene un solo elemento, y luego combina (o mezcla) estas mitades de forma ordenada.",

    steps: [
      {
        id: 1,
        details:
          "El primer paso en Merge Sort es dividir el array en mitades hasta que cada subarray tenga solo un elemento. Si el array tiene un solo elemento o está vacío, ya está ordenado, por lo que lo devolvemos. Aquí verificamos si el array tiene un solo elemento (arr.length <= 1), en cuyo caso lo devolvemos directamente.",
        code: `if (arr.length <= 1) {
  return arr;
}
`,
      },
      {
        id: 2,
        details:
          "Si el array tiene más de un elemento, lo dividimos en dos mitades. Calculamos el índice medio y usamos slice para crear dos subarrays: uno que contiene la primera mitad y otro que contiene la segunda mitad. medio es el punto medio del array, y arr.slice(0, medio) toma la mitad izquierda, mientras que arr.slice(medio) toma la mitad derecha. ",
        code: `const medio = Math.floor(arr.length / 2);
const izquierda = ordenamientoPorMezcla(arr.slice(0, medio));
const derecha = ordenamientoPorMezcla(arr.slice(medio));
`,
      },
      {
        id: 3,
        details:
          "Una vez que hemos dividido el array en dos mitades, aplicamos el algoritmo recursivamente a cada mitad llamando a ordenamientoPorMezcla en ambas partes. Al continuar dividiendo las mitades hasta que tengamos arrays de un solo elemento, alcanzamos el caso base (arrays con un solo elemento están ordenados).",
        code: ``,
      },
      {
        id: 4,
        details:
          "Una vez que las dos mitades han sido ordenadas recursivamente, las combinamos utilizando la función mezclar, que une las dos mitades en un solo array ordenado.",
        code: `return mezclar(izquierda, derecha);`,
      },
      {
        id: 5,
        details:
          "La función mezclar toma dos arrays ordenados (izquierda y derecha) y los une en un nuevo array resultado, eligiendo los elementos más pequeños de las dos mitades en cada iteración. Usamos dos índices i y j para recorrer los arrays izquierda y derecha. Compararemos los elementos de ambas mitades y añadiremos el más pequeño al array resultado. Una vez que hemos agotado los elementos en una de las mitades, agregamos el resto de la otra mitad al resultado. Después de combinar todas las mitades ordenadas, el array resultante estará completamente ordenado.",
        code: `function mezclar(izquierda, derecha) {
  let resultado = [];
  let i = 0, j = 0;

  while (i < izquierda.length && j < derecha.length) {
    if (izquierda[i] < derecha[j]) {
      resultado.push(izquierda[i]);
      i++;
    } else {
      resultado.push(derecha[j]);
      j++;
    }
  }

  return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));
}
`,
      },
      {
        id: 6,
        details: "Código completo",
        code: `function ordenamientoPorMezcla(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const medio = Math.floor(arr.length / 2);
  const izquierda = ordenamientoPorMezcla(arr.slice(0, medio));
  const derecha = ordenamientoPorMezcla(arr.slice(medio));

  return mezclar(izquierda, derecha);
}

function mezclar(izquierda, derecha) {
  let resultado = [];
  let i = 0, j = 0;

  while (i < izquierda.length && j < derecha.length) {
    if (izquierda[i] < derecha[j]) {
      resultado.push(izquierda[i]);
      i++;
    } else {
      resultado.push(derecha[j]);
      j++;
    }
  }

  return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));
}

const arr = [38, 27, 43, 3, 9, 82, 10];
const arrOrdenado = ordenamientoPorMezcla(arr);

console.log(arrOrdenado);  // Salida: [3, 9, 10, 27, 38, 43, 82]

`,
      },
    ],
  },
  {
    id: 5,
    name: "ordenamiento-rapido",
    description:
      "El algoritmo de ordenamiento rápido (Quick Sort) es un algoritmo de ordenamiento eficiente que sigue el enfoque de divide y vencerás. Se basa en elegir un elemento como pivote y luego reordenar el array de tal manera que todos los elementos menores que el pivote queden a la izquierda y los mayores a la derecha. Posteriormente, se aplica recursivamente el mismo proceso a las sublistas (izquierda y derecha) resultantes.",

    steps: [
      {
        id: 1,
        details:
          "Quick Sort es recursivo, y el caso base es cuando el array tiene uno o cero elementos, lo que significa que ya está ordenado. Si arr.length <= 1, devolvemos el array tal como está. Si el array tiene un solo elemento o está vacío, lo consideramos ordenado.",
        code: `if (arr.length <= 1) {
  return arr;
}
`,
      },
      {
        id: 2,
        details:
          "El pivote es el elemento que usamos para dividir el array en dos subarrays. En este caso, elegimos el último elemento del array como pivote, pero podríamos elegirlo de otras formas (como el primer elemento o uno aleatorio). Aquí, el pivote es el último elemento del array (arr[arr.length - 1]).",
        code: `const pivote = arr[arr.length - 1];`,
      },
      {
        id: 3,
        details:
          "Recorreremos el array y colocaremos los elementos menores que el pivote en el array izquierda, y los mayores o iguales al pivote en el array derecha. Usamos un ciclo for para recorrer los elementos hasta el penúltimo, ya que el último es el pivote. Si un elemento es menor que el pivote, lo añadimos a izquierda; de lo contrario, lo añadimos a derecha.",
        code: `const izquierda = [];
const derecha = [];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < pivote) {
    izquierda.push(arr[i]);
  } else {
    derecha.push(arr[i]);
  }
}
`,
      },
      {
        id: 4,
        details:
          "Llamamos a ordenamientoRapido recursivamente en las sublistas izquierda y derecha. Esto divide cada sublista en otras más pequeñas hasta que cada sublista tenga solo un elemento o esté vacía. Usamos el operador de propagación (...) para combinar el array ordenado de la izquierda, el pivote, y el array ordenado de la derecha. El algoritmo devuelve un array ordenado, que es el resultado de unir los arrays ordenados de la izquierda y la derecha con el pivote en el centro.",
        code: `return [...ordenamientoRapido(izquierda), pivote, ...ordenamientoRapido(derecha)];
`,
      },
      {
        id: 5,
        details: "Código completo",
        code: `function ordenamientoRapido(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivote = arr[arr.length - 1];
  const izquierda = [];
  const derecha = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivote) {
      izquierda.push(arr[i]);
    } else {
      derecha.push(arr[i]);
    }
  }

  return [...ordenamientoRapido(izquierda), pivote, ...ordenamientoRapido(derecha)];


}  

const arr = [10, 7, 8, 9, 1, 5];
const arrOrdenado = ordenamientoRapido(arr);
console.log(arrOrdenado);  // Salida: [1, 5, 7, 8, 9, 10]
`,
      },
    ],
  },
  {
    id: 6,
    name: "busqueda-en-anchura",
    description:
      "El algoritmo de búsqueda en anchura (Breadth-First Search o BFS) es un algoritmo de búsqueda para grafos o árboles. Explora todos los vértices de un grafo en orden de proximidad, visitando primero todos los nodos de un nivel antes de pasar al siguiente.",

    steps: [
      {
        id: 1,
        details:
          "Se comienza con el nodo inicial y se agrega a la cola. También se mantiene un conjunto de visitados para evitar visitar el mismo nodo más de una vez. Aquí visitados es un conjunto que rastrea los nodos que ya hemos visitado, y cola es un array que actúa como una fila para manejar el orden en el que los nodos serán visitados.",
        code: `let visitados = new Set();
let cola = [nodoInicial];`,
      },
      {
        id: 2,
        details:
          "Mientras haya nodos en la cola, sacamos el primer nodo (shift()) y lo procesamos. Esto asegura que procesamos los nodos en el orden en que fueron agregados, respetando la estructura de BFS. nodoActual es el nodo que estamos visitando. Se elimina de la cola para procesarlo.",
        code: `let nodoActual = cola.shift(); // Saca el primer nodo de la cola`,
      },
      {
        id: 3,
        details:
          "Si el nodo no ha sido visitado, lo marcamos como visitado añadiéndolo al conjunto visitados, y luego lo procesamos (en este caso, lo imprimimos). Aquí usamos visitados.has() para verificar si ya hemos visitado el nodo. Si no ha sido visitado, lo añadimos al conjunto de visitados y lo mostramos.",
        code: `if (!visitados.has(nodoActual)) {
  console.log(nodoActual); // Visita el nodo
  visitados.add(nodoActual);
}`,
      },
      {
        id: 4,
        details:
          "Después de procesar el nodo actual, tomamos todos sus vecinos (nodos adyacentes) del grafo y los agregamos a la cola si aún no han sido visitados. vecinos es un array de nodos conectados al nodoActual. Para cada vecino, si no ha sido visitado, lo añadimos a la cola. El ciclo while continúa hasta que no haya más nodos en la cola, lo que significa que hemos visitado todos los nodos accesibles desde el nodo inicial.",
        code: `let vecinos = grafo[nodoActual];
for (let vecino of vecinos) {
  if (!visitados.has(vecino)) {
    cola.push(vecino);
  }
}
`,
      },
      {
        id: 5,
        details: "Código completo",
        code: `function busquedaEnAnchura(grafo, nodoInicial) {
  let visitados = new Set();
  let cola = [nodoInicial];

  while (cola.length > 0) {
    let nodoActual = cola.shift(); // Saca el primer nodo de la cola

    if (!visitados.has(nodoActual)) {
      console.log(nodoActual); // Visita el nodo
      visitados.add(nodoActual);

      // Agrega los nodos vecinos no visitados a la cola
      let vecinos = grafo[nodoActual];
      for (let vecino of vecinos) {
        if (!visitados.has(vecino)) {
          cola.push(vecino);
        }
      }
    }
  }
}

const grafo = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

busquedaEnAnchura(grafo, 'A');

// A
// B
// C
// D
// E
// F

`,
      },
    ],
  },
  {
    id: 7,
    name: "torres-de-hanoi",
    description:
      "El problema de las Torres de Hanoi es un clásico problema de recursión. Consiste en mover una pila de discos de una torre a otra, respetando que: Solo se puede mover un disco a la vez, un disco solo puede ser colocado encima de otro más grande y solo se puede usar una torre auxiliar además de la inicial y la final",

    steps: [
      {
        id: 1,
        details:
          "Si hay solo un disco (n === 1), simplemente lo movemos de la torre de origen a la torre de destino. Este es el caso base de la recursión: si tenemos un solo disco, lo movemos directamente.",
        code: `if (n === 1) {
  console.log("Mover disco 1 de",  origen, " a ", destino);
  return;
}
`,
      },
      {
        id: 2,
        details:
          "Antes de mover el disco más grande (disco n), primero necesitamos mover los n-1 discos más pequeños de la torre de origen a la torre auxiliar usando la torre destino como auxiliar. Este es un paso recursivo. Aquí movemos todos los discos menos el más grande de la torre de origen a la torre auxiliar.",
        code: `torresDeHanoi(n - 1, origen, auxiliar, destino);
`,
      },
      {
        id: 3,
        details:
          "Una vez que los n-1 discos pequeños están en la torre auxiliar, movemos el disco más grande (n) de la torre de origen a la torre de destino. Este es el movimiento clave donde el disco más grande se mueve a su destino.",
        code: `console.log("Mover disco ", n ," de ", origen ," a ", destino);
`,
      },
      {
        id: 4,
        details:
          "Finalmente, movemos los n-1 discos que habíamos movido a la torre auxiliar a la torre de destino, utilizando la torre de origen como auxiliar. Este es otro paso recursivo donde completamos la solución moviendo los discos restantes.",
        code: `torresDeHanoi(n - 1, auxiliar, destino, origen);`,
      },
      {
        id: 5,
        details: "Código completo",
        code: `function torresDeHanoi(n, origen, destino, auxiliar) {
  if (n === 1) {
    console.log("Mover disco 1 de ", origen1, " a ", destino);
    return;
  }

  // Mover n-1 discos de la torre origen a la torre auxiliar
  torresDeHanoi(n - 1, origen, auxiliar, destino);

  // Mover el disco n de la torre origen a la torre destino
  console.log("Mover disco ", n ," de ", origen}, " a ", destino);

  // Mover los n-1 discos de la torre auxiliar a la torre destino
  torresDeHanoi(n - 1, auxiliar, destino, origen);
}
  const numeroDeDiscos = 3;
torresDeHanoi(numeroDeDiscos, 'A', 'C', 'B');

// Mover disco 1 de A a C
// Mover disco 2 de A a B
// Mover disco 1 de C a B
// Mover disco 3 de A a C
// Mover disco 1 de B a A
// Mover disco 2 de B a C
// Mover disco 1 de A a C
`,
      },
    ],
  },
];
