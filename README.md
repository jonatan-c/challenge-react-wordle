
## Challenge Frontend - WORDLE

## Descripcion

- Clon de diseño de figma (solo desktop) y logica entregada para simular el juego WORDLE

- [x] 1 Maquetado figma
- [x] 2 Primera vez que ingresa mostrar instrucciones
- [x] 3 Seleccion automatica de palabra
- [x] 4 Tecleo/click muestra en caja
- [x] 5 Logica del juego
- [x] 6 Logica si acierta contabiliza punto
- [x] 7 Logica si falla contabiliza punto
- [x] 8 Cada 5 min se seleccionara otra palabra automaticamente, cuando termina los turnos se muestra la palabra que era
- [x] 9 Modal Info
- [x] 10 Modal estadistica, con cronometro y que al llegar a cero se reinicie
- [x] 11 Modo light
- [x] 12 Modo dark

## DEMO 

[DEMO](https://challenge-react-wordle.vercel.app/)


## Tecnologias

- React
- Typescript
- Redux Toolkit
- TailwindCSS
- Eslint
- Prettier
- localstorage

## Instalacion y ejecucion

```
yarn install
yarn run dev
```


## Consideraciones:

En un ambito real y de trabajo en equipo me reuniria con el equipo de ui/ux para comentar lo siguiente:
- En el diseño figma las reglas de como jugar tienen otro color, por ejemplo el background en blanco y en la vista del juego no es blanco. 
- Los colores de correcto , presente , incorrecto cambiaban entre cada vista, no se notaba pero el hex era distinto. Por eso no utilize variables de tailwind para los colores.