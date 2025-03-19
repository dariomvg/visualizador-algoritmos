import { ContentTypes } from "../types/utils.types";

export const content: ContentTypes[] = [
  {
    "id": 0,
    "name": "busqueda-binaria",
    "description": "La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista ordenada. Divide repetidamente el rango de búsqueda a la mitad hasta que encuentre el valor deseado o determine que no está presente.",
    "steps": [
      {
        "id": 1,
        "details": "Para comenzar, establecemos los límites del área donde realizaremos la búsqueda. Definimos dos variables: 'izquierda' (inicio del array) y 'derecha' (final del array). La variable 'izquierda' se inicializa con el índice 0, mientras que 'derecha' toma el valor del último índice del array. Esto nos permite abarcar toda la lista como punto de partida, asegurándonos de que ningún elemento quede fuera del análisis.",
        "code": `const arr = [1, 3, 5, 7, 9, 11, 13, 15]
let izquierda = 0;  // Inicio del array 
let derecha = arr.length - 1;  // Fin del array`
      },
      {
        "id": 2,
        "details": "El algoritmo emplea un bucle 'while' para continuar buscando mientras el rango de búsqueda tenga elementos por revisar. Este bucle se ejecuta siempre que 'izquierda' sea menor o igual a 'derecha'. Si en algún momento 'izquierda' supera a 'derecha', significa que el elemento no se encuentra en el array, ya que hemos agotado todas las posibles posiciones sin encontrarlo.",
        "code": `while (izquierda <= derecha) {}`
      },
      {
        "id": 3,
        "details": "Dentro del bucle, en cada iteración calculamos el punto medio del rango actual. Esto se hace sumando 'izquierda' y 'derecha' y dividiendo entre dos. Dado que los índices deben ser enteros, usamos 'Math.floor()' para redondear hacia abajo. El índice resultante representa la posición donde realizaremos la siguiente comparación.",
        "code": `let medio = Math.floor((izquierda + derecha) / 2);`
      },
      {
        "id": 4,
        "details": "El siguiente paso es comparar el valor ubicado en el índice medio con el número que estamos buscando (objetivo). Si ambos valores coinciden, hemos encontrado el elemento en el array, por lo que devolvemos su índice como resultado y finalizamos la búsqueda.",
        "code": `if (arr[medio] === objetivo) {
 return medio;
}`
      },
      {
        "id": 5,
        "details": "Si el valor en la posición media no es el que buscamos, determinamos en qué mitad del array podría encontrarse el objetivo. Si el número en el medio es menor que el objetivo, significa que el valor buscado está en la parte derecha del array. En este caso, movemos el límite izquierdo hacia 'medio + 1' para descartar la mitad izquierda. Por otro lado, si el número en el medio es mayor que el objetivo, significa que debemos seguir buscando en la parte izquierda del array, por lo que ajustamos 'derecha' a 'medio - 1'. De esta manera, reducimos progresivamente el rango de búsqueda, descartando la mitad innecesaria en cada iteración.",
        "code": `if (arr[medio] < objetivo) {
  izquierda = medio + 1;
}else {
  derecha = medio - 1;
}`
      },
      {
        "id": 6,
        "details": "Si el bucle termina y no hemos encontrado el objetivo, significa que el número no está en el array. En este caso, devolvemos '-1' para indicar que la búsqueda fue infructuosa. Esta es la señal estándar en algoritmos de búsqueda para indicar un valor no encontrado.",
        "code": `return -1;`
      },
      {
        "id": 7,
        "details": "Este es el código completo del algoritmo de búsqueda binaria. Primero inicializamos los límites de búsqueda y entramos en el bucle 'while', donde se calcula el punto medio y se comparan los valores para reducir progresivamente el rango de búsqueda. Si encontramos el número, devolvemos su índice; de lo contrario, al finalizar la ejecución, retornamos '-1' indicando que el valor no está presente en la lista.",
        "code": `function busquedaBinaria(arr, objetivo) {
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

console.log(resultado);`
      }
    ]
},

{
  "id": 1,
  "name": "ordenamiento-por-seleccion",
  "description": "El algoritmo de ordenamiento por selección (Selection Sort) es un método de ordenación simple que organiza una lista identificando repetidamente el valor mínimo en la parte no ordenada del array y colocándolo en su posición correcta mediante intercambios sucesivos.",
  "steps": [
    {
      "id": 1,
      "details": "El algoritmo recorre cada elemento del array, comenzando desde el índice 0 hasta el penúltimo índice. En cada iteración, consideramos el elemento actual como el más pequeño y buscamos en el resto del array si existe un elemento menor. La variable 'i' representa el índice actual y define el inicio de la parte no ordenada del array.",
      "code": "for (let i = 0; i < n - 1; i++) {}"
    },
    {
      "id": 2,
      "details": "Inicialmente, asumimos que el elemento en la posición 'i' es el más pequeño en la parte no ordenada del array. Para almacenar este supuesto, declaramos la variable 'indiceMin', la cual se actualizará en caso de encontrar un elemento menor en el resto del array.",
      "code": "let indiceMin = i;"
    },
    {
      "id": 3,
      "details": "Exploramos la parte no ordenada del array, desde 'i + 1' hasta el final, para encontrar el elemento más pequeño. Si hallamos un valor menor que 'arr[indiceMin]', actualizamos 'indiceMin' con el índice de este nuevo mínimo. Este proceso garantiza que al final del bucle interno, 'indiceMin' almacene la posición del elemento más pequeño encontrado.",
      "code": "for (let j = i + 1; j < n; j++) {\n  if (arr[j] < arr[indiceMin]) {\n    indiceMin = j;\n  }\n}"
    },
    {
      "id": 4,
      "details": "Si 'indiceMin' cambió y no es igual a 'i', significa que encontramos un valor menor en el resto del array. En este caso, intercambiamos el elemento en la posición 'i' con el nuevo mínimo ubicado en 'indiceMin'. Usamos una variable temporal 'temp' para realizar el intercambio de manera segura.",
      "code": "if (indiceMin !== i) {\n  let temp = arr[i];\n  arr[i] = arr[indiceMin];\n  arr[indiceMin] = temp;\n}"
    },
    {
      "id": 5,
      "details": "El ciclo externo avanza al siguiente índice y repite el proceso hasta que todos los elementos han sido ordenados. Al finalizar, el array estará completamente ordenado en orden ascendente, ya que cada iteración coloca el siguiente elemento mínimo en su posición correcta.",
      "code": "return arr;"
    },
    {
      "id": 6,
      "details": "Código completo del algoritmo de ordenamiento por selección. Se inicializa la variable 'n' con la longitud del array. Luego, el bucle externo recorre cada posición en el array, mientras que el bucle interno busca el elemento más pequeño en la parte no ordenada. Cuando se encuentra, se intercambia con la posición actual, y el proceso se repite hasta completar el ordenamiento.",
      "code": "function ordenamientoPorSeleccion(arr) {\n  let n = arr.length;\n\n  for (let i = 0; i < n - 1; i++) {\n    let indiceMin = i;\n\n    for (let j = i + 1; j < n; j++) {\n      if (arr[j] < arr[indiceMin]) {\n        indiceMin = j;\n      }\n    }\n\n    if (indiceMin !== i) {\n      let temp = arr[i];\n      arr[i] = arr[indiceMin];\n      arr[indiceMin] = temp;\n    }\n  }\n\n  return arr;\n}\n\nconst arr = [64, 25, 12, 22, 11];\nconst arrOrdenado = ordenamientoPorSeleccion(arr);\n\nconsole.log(arrOrdenado);  // Salida: [11, 12, 22, 25, 64]"
    }
  ]
},

{
  "id": 2,
  "name": "ordenamiento-por-insercion",
  "description": "El algoritmo de ordenamiento por inserción (Insertion Sort) es un método de ordenación que construye la lista ordenada de forma incremental. En cada iteración, se toma un elemento de la parte no ordenada y se inserta en la posición correcta dentro de la parte ordenada, desplazando los elementos si es necesario.",
  "steps": [
    {
      "id": 1,
      "details": "El algoritmo comienza recorriendo el array desde el segundo elemento (índice 1), ya que el primer elemento se considera ordenado por sí mismo. En cada iteración, el índice 'i' representa el elemento que queremos insertar en la parte ordenada.",
      "code": "for (let i = 1; i < n; i++) {}"
    },
    {
      "id": 2,
      "details": "Se almacena el elemento actual en una variable llamada 'valorActual'. Esto es necesario porque vamos a desplazar otros elementos en el array y necesitamos conservar su valor antes de realizar modificaciones.",
      "code": "let valorActual = arr[i];"
    },
    {
      "id": 3,
      "details": "Se compara 'valorActual' con los elementos de la parte ordenada del array (los elementos a la izquierda de 'i'). Si un elemento es mayor que 'valorActual', se desplaza una posición a la derecha para dejar espacio para la inserción. El índice 'j' comienza en 'i - 1' y se reduce mientras el valor sea mayor que 'valorActual'.",
      "code": "let j = i - 1;\nwhile (j >= 0 && arr[j] > valorActual) {\n  arr[j + 1] = arr[j];\n  j--;\n}"
    },
    {
      "id": 4,
      "details": "Cuando encontramos la posición correcta para insertar 'valorActual' (cuando 'arr[j]' ya no es mayor), lo colocamos en 'arr[j + 1]'. Esto asegura que el subarray hasta el índice 'i' se mantenga ordenado después de cada iteración.",
      "code": "arr[j + 1] = valorActual;"
    },
    {
      "id": 5,
      "details": "El ciclo se repite para cada elemento en la parte no ordenada hasta que todos los elementos han sido insertados en sus posiciones correctas. Finalmente, el array estará completamente ordenado y se devuelve como resultado.",
      "code": "return arr;"
    },
    {
      "id": 6,
      "details": "Código completo del algoritmo de ordenamiento por inserción. Se recorre el array desde el segundo elemento, desplazando valores mayores y colocando cada elemento en su posición correcta. Al finalizar, el array estará ordenado en orden ascendente.",
      "code": "function ordenamientoPorInsercion(arr) {\n  let n = arr.length;\n\n  for (let i = 1; i < n; i++) {\n    let valorActual = arr[i];\n    let j = i - 1;\n\n    while (j >= 0 && arr[j] > valorActual) {\n      arr[j + 1] = arr[j];\n      j--;\n    }\n\n    arr[j + 1] = valorActual;\n  }\n\n  return arr;\n}\n\nconst arr = [12, 11, 13, 5, 6];\nconst arrOrdenado = ordenamientoPorInsercion(arr);\n\nconsole.log(arrOrdenado);  // Salida: [5, 6, 11, 12, 13]"
    }
  ]
},

{
  "id": 3,
  "name": "ordenamiento-por-mezcla",
  "description": "El algoritmo de ordenamiento por mezcla (Merge Sort) es un método eficiente basado en el paradigma 'divide y vencerás'. Divide el array en mitades hasta obtener subarrays de un solo elemento y luego los combina de manera ordenada para reconstruir el array original en orden ascendente.",

  "steps": [
    {
      "id": 1,
      "details": "Si el array tiene un solo elemento o está vacío, ya está ordenado, por lo que lo devolvemos directamente. Este es el caso base de la recursión.",
      "code": "if (arr.length <= 1) {\n  return arr;\n}"
    },
    {
      "id": 2,
      "details": "Dividimos el array en dos mitades. Calculamos el índice medio y usamos slice para crear dos subarrays: la mitad izquierda y la mitad derecha.",
      "code": "const medio = Math.floor(arr.length / 2);\nconst izquierda = arr.slice(0, medio);\nconst derecha = arr.slice(medio);"
    },
    {
      "id": 3,
      "details": "Aplicamos recursión a ambas mitades llamando a ordenamientoPorMezcla en cada una. Esto continúa hasta que obtenemos subarrays de un solo elemento, que están ordenados por sí mismos.",
      "code": "const izquierdaOrdenada = ordenamientoPorMezcla(izquierda);\nconst derechaOrdenada = ordenamientoPorMezcla(derecha);"
    },
    {
      "id": 4,
      "details": "Después de dividir el array en subarrays de un solo elemento, los combinamos ordenadamente con la función 'mezclar', que une dos listas ordenadas en una sola.",
      "code": "return mezclar(izquierdaOrdenada, derechaOrdenada);"
    },
    {
      "id": 5,
      "details": "La función 'mezclar' fusiona dos arrays ordenados en uno solo, comparando sus elementos y agregando el más pequeño al nuevo array. Se recorren ambas mitades con dos índices (i y j), seleccionando el menor de los elementos disponibles en cada iteración.",
      "code": "function mezclar(izquierda, derecha) {\n  let resultado = [];\n  let i = 0, j = 0;\n\n  while (i < izquierda.length && j < derecha.length) {\n    if (izquierda[i] < derecha[j]) {\n      resultado.push(izquierda[i]);\n      i++;\n    } else {\n      resultado.push(derecha[j]);\n      j++;\n    }\n  }\n\n  return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));\n}"
    },
    {
      "id": 6,
      "details": "Código completo del algoritmo Merge Sort. Se divide el array hasta obtener elementos individuales y luego se mezclan de manera ordenada para obtener el array final ordenado.",
      "code": "function ordenamientoPorMezcla(arr) {\n  if (arr.length <= 1) {\n    return arr;\n  }\n\n  const medio = Math.floor(arr.length / 2);\n  const izquierdaOrdenada = ordenamientoPorMezcla(arr.slice(0, medio));\n  const derechaOrdenada = ordenamientoPorMezcla(arr.slice(medio));\n\n  return mezclar(izquierdaOrdenada, derechaOrdenada);\n}\n\nfunction mezclar(izquierda, derecha) {\n  let resultado = [];\n  let i = 0, j = 0;\n\n  while (i < izquierda.length && j < derecha.length) {\n    if (izquierda[i] < derecha[j]) {\n      resultado.push(izquierda[i]);\n      i++;\n    } else {\n      resultado.push(derecha[j]);\n      j++;\n    }\n  }\n\n  return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));\n}\n\nconst arr = [38, 27, 43, 3, 9, 82, 10];\nconst arrOrdenado = ordenamientoPorMezcla(arr);\nconsole.log(arrOrdenado);  // Salida: [3, 9, 10, 27, 38, 43, 82]"
    }
  ]
},

{
  "id": 4,
  "name": "ordenamiento-rapido",
  "description": "El algoritmo de ordenamiento rápido (Quick Sort) es un algoritmo eficiente que sigue el enfoque 'divide y vencerás'. Elige un elemento como pivote y divide el array de modo que todos los elementos menores al pivote quedan a la izquierda y los mayores a la derecha. Luego, aplica el mismo proceso recursivamente a las sublistas resultantes.",

  "steps": [
    {
      "id": 1,
      "details": "El algoritmo es recursivo. El caso base es cuando el array tiene uno o cero elementos, lo que significa que ya está ordenado. Si el array tiene un solo elemento o está vacío, simplemente lo devolvemos.",
      "code": "if (arr.length <= 1) {\n  return arr;\n}"
    },
    {
      "id": 2,
      "details": "Seleccionamos un pivote, que es el elemento con el que dividiremos el array. En este caso, usamos el último elemento del array como pivote. Sin embargo, se podrían usar otros métodos para seleccionar el pivote.",
      "code": "const pivote = arr[arr.length - 1];"
    },
    {
      "id": 3,
      "details": "Recorremos el array y clasificamos los elementos: los menores que el pivote van a un array 'izquierda' y los mayores o iguales van a un array 'derecha'. Usamos un ciclo for para recorrer el array, excepto el pivote.",
      "code": "const izquierda = [];\nconst derecha = [];\n\nfor (let i = 0; i < arr.length - 1; i++) {\n  if (arr[i] < pivote) {\n    izquierda.push(arr[i]);\n  } else {\n    derecha.push(arr[i]);\n  }\n}"
    },
    {
      "id": 4,
      "details": "Aplicamos recursivamente el ordenamiento rápido a las sublistas izquierda y derecha. Al final, usamos el operador de propagación (...) para combinar el array ordenado de la izquierda, el pivote y el array ordenado de la derecha en un solo array ordenado.",
      "code": "return [...ordenamientoRapido(izquierda), pivote, ...ordenamientoRapido(derecha)];"
    },
    {
      "id": 5,
      "details": "Código completo del algoritmo de ordenamiento rápido. La función divide el array en sublistas recursivamente, organiza los elementos alrededor del pivote y finalmente los combina para obtener el array ordenado.",
      "code": "function ordenamientoRapido(arr) {\n  if (arr.length <= 1) {\n    return arr;\n  }\n\n  const pivote = arr[arr.length - 1];\n  const izquierda = [];\n  const derecha = [];\n\n  for (let i = 0; i < arr.length - 1; i++) {\n    if (arr[i] < pivote) {\n      izquierda.push(arr[i]);\n    } else {\n      derecha.push(arr[i]);\n    }\n  }\n\n  return [...ordenamientoRapido(izquierda), pivote, ...ordenamientoRapido(derecha)];\n}\n\nconst arr = [10, 7, 8, 9, 1, 5];\nconst arrOrdenado = ordenamientoRapido(arr);\nconsole.log(arrOrdenado);  // Salida: [1, 5, 7, 8, 9, 10]"
    }
  ]
},

{
  "id": 5,
  "name": "busqueda-en-anchura",
  "description": "El algoritmo de búsqueda en anchura (Breadth-First Search o BFS) es un algoritmo de búsqueda para grafos o árboles. Explora todos los vértices de un grafo en orden de proximidad, visitando primero todos los nodos de un nivel antes de pasar al siguiente.",

  "steps": [
    {
      "id": 1,
      "details": "Comenzamos con el nodo inicial y lo agregamos a la cola. También mantenemos un conjunto de visitados para evitar volver a visitar los mismos nodos. La cola actúa como una fila, garantizando que procesemos los nodos en el orden en que fueron agregados.",
      "code": "let visitados = new Set();\nlet cola = [nodoInicial];"
    },
    {
      "id": 2,
      "details": "Mientras haya nodos en la cola, sacamos el primer nodo (shift()) y lo procesamos. Esto garantiza que procesemos los nodos en el orden en que fueron agregados, respetando el principio de BFS. El nodo actual es el nodo que estamos visitando, y lo eliminamos de la cola para procesarlo.",
      "code": "let nodoActual = cola.shift(); // Saca el primer nodo de la cola"
    },
    {
      "id": 3,
      "details": "Si el nodo no ha sido visitado previamente, lo marcamos como visitado añadiéndolo al conjunto de visitados. Posteriormente, lo procesamos (en este caso, lo imprimimos). Usamos visitados.has() para verificar si ya hemos visitado el nodo.",
      "code": "if (!visitados.has(nodoActual)) {\n  console.log(nodoActual); // Visita el nodo\n  visitados.add(nodoActual); // Marca como visitado\n}"
    },
    {
      "id": 4,
      "details": "Después de procesar el nodo actual, tomamos todos sus nodos vecinos (adyacentes) y los agregamos a la cola si aún no han sido visitados. Los vecinos son los nodos conectados directamente al nodo actual. El ciclo continúa hasta que no haya más nodos en la cola.",
      "code": "let vecinos = grafo[nodoActual];\nfor (let vecino of vecinos) {\n  if (!visitados.has(vecino)) {\n    cola.push(vecino);\n  }\n}"
    },
    {
      "id": 5,
      "details": "Código completo del algoritmo BFS. La función recorre el grafo en anchura, visitando primero los nodos más cercanos al nodo inicial y luego avanzando hacia los nodos más lejanos.",
      "code": "function busquedaEnAnchura(grafo, nodoInicial) {\n  let visitados = new Set();\n  let cola = [nodoInicial];\n\n  while (cola.length > 0) {\n    let nodoActual = cola.shift(); // Saca el primer nodo de la cola\n\n    if (!visitados.has(nodoActual)) {\n      console.log(nodoActual); // Visita el nodo\n      visitados.add(nodoActual); // Marca como visitado\n\n      // Agrega los nodos vecinos no visitados a la cola\n      let vecinos = grafo[nodoActual];\n      for (let vecino of vecinos) {\n        if (!visitados.has(vecino)) {\n          cola.push(vecino);\n        }\n      }\n    }\n  }\n}\n\nconst grafo = {\n  A: ['B', 'C'],\n  B: ['A', 'D', 'E'],\n  C: ['A', 'F'],\n  D: ['B'],\n  E: ['B', 'F'],\n  F: ['C', 'E']\n};\n\nbusquedaEnAnchura(grafo, 'A');\n\n// A\n// B\n// C\n// D\n// E\n// F"
    }
  ]
},
{
  "id": 6,
  "name": "torres-de-hanoi",
  "description": "El problema de las Torres de Hanoi es un clásico problema de recursión. Consiste en mover una pila de discos de una torre a otra, respetando que: Solo se puede mover un disco a la vez, un disco solo puede ser colocado encima de otro más grande y solo se puede usar una torre auxiliar además de la inicial y la final.",

  "steps": [
    {
      "id": 1,
      "details": "Si hay solo un disco (n === 1), simplemente lo movemos de la torre de origen a la torre de destino. Este es el caso base de la recursión: si tenemos un solo disco, lo movemos directamente.",
      "code": "if (n === 1) {\n  console.log(\"Mover disco 1 de\", origen, \"a\", destino);\n  return;\n}"
    },
    {
      "id": 2,
      "details": "Antes de mover el disco más grande (disco n), primero necesitamos mover los n-1 discos más pequeños de la torre de origen a la torre auxiliar usando la torre destino como auxiliar. Este es un paso recursivo. Aquí movemos todos los discos menos el más grande de la torre de origen a la torre auxiliar.",
      "code": "torresDeHanoi(n - 1, origen, auxiliar, destino);"
    },
    {
      "id": 3,
      "details": "Una vez que los n-1 discos pequeños están en la torre auxiliar, movemos el disco más grande (n) de la torre de origen a la torre de destino. Este es el movimiento clave donde el disco más grande se mueve a su destino.",
      "code": "console.log(\"Mover disco \", n, \" de \", origen, \" a \", destino);"
    },
    {
      "id": 4,
      "details": "Finalmente, movemos los n-1 discos que habíamos movido a la torre auxiliar a la torre de destino, utilizando la torre de origen como auxiliar. Este es otro paso recursivo donde completamos la solución moviendo los discos restantes.",
      "code": "torresDeHanoi(n - 1, auxiliar, destino, origen);"
    },
    {
      "id": 5,
      "details": "Código completo del algoritmo de Torres de Hanoi. Esta función recursiva resuelve el problema moviendo los discos desde la torre de origen a la torre de destino.",
      "code": "function torresDeHanoi(n, origen, destino, auxiliar) {\n  if (n === 1) {\n    console.log(\"Mover disco 1 de \", origen, \"a\", destino);\n    return;\n  }\n\n  // Mover n-1 discos de la torre origen a la torre auxiliar\n  torresDeHanoi(n - 1, origen, auxiliar, destino);\n\n  // Mover el disco n de la torre origen a la torre destino\n  console.log(\"Mover disco \", n, \" de \", origen, \" a \", destino);\n\n  // Mover los n-1 discos de la torre auxiliar a la torre destino\n  torresDeHanoi(n - 1, auxiliar, destino, origen);\n}\n\nconst numeroDeDiscos = 3;\ntorresDeHanoi(numeroDeDiscos, 'A', 'C', 'B');\n\n// Salida esperada:\n// Mover disco 1 de A a C\n// Mover disco 2 de A a B\n// Mover disco 1 de C a B\n// Mover disco 3 de A a C\n// Mover disco 1 de B a A\n// Mover disco 2 de B a C\n// Mover disco 1 de A a C"
    }
  ]
}

  
];
