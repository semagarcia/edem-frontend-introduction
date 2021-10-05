# Ejercicio práctico 1

## Temática

Principios del diseño responsivo

## Objetivos

Entender el funcionamiento de las media-queries como base del diseño responsivo.

## Descripción

El uso de media-queries es una conocida técnica para poder adaptar la estructura visual de una página o
contenido HTML de forma sencilla. Nos permite, según unas reglas (como tamaño u orientación del dispositivo),
definir cómo se comportarán los elementos en la pantalla, pudiendo actuar sobre su posición, tamaño, color...
e incluso visibilidad.

![img](https://www.w3schools.com/css/mqcap.JPG)

Para ello, se pide:
1. Calcular cuál es la anchura del dispositivo sobre el que se está visualizando la página HTML
2. Pintar en pantalla (no importa el estilo), dicho valor actual de anchura
3. Actualizar dinámicamente el valor de la anchura según se redimensione el tamaño de la página HTML
4. Dibujar una caja DIV (o puede ser incluso el propio body de la página), y cambiar el color de fondo según
el breakpoint, siguiendo la siguiente regla:
  - Para *mobile*, cualquier anchura inferior a 600px
  - Para *tablet*, cualquier anchura entre 600px y 991px (ambos inclusive)
  - Para *desktop*, cualquier anchura mayor de 992px

## Ampliación

Como trabajo complementario se pueden trabajar las siguientes funcionalidades

### Media queries

Se puede ampliar este ejercicio añadiendo otras condiciones a la media-query, como por ejemplo:
- Orientación
- Resolución
- La relación de aspecto

### Ocultar o mostrar elementos

Podemos mostrar u ocultar elementos de forma dinámica y sólo con estilos (CSS), sin necesidad de JavaScript,
de modo que cuando estemos en dispositivos pequeños (como un móvil), podamos ocultar (o mover) el contenido
menos relevante hacia el final de la página o, incluso, hacerlo invisible.