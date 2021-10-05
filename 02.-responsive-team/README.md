# Ejercicio práctico 2

## Temática

Principios del diseño responsivo

## Objetivos

Afianzar los conceptos del ejercicio anterior con un ejemplo más realista de lo que sería un diseño que podemos
encontrar en cualquier web actual.

## Descripción

Para ello vamos a elaborar una especie de artículo periodístico. La página tendrá una cabecera sencilla, compuesta
por el título y los metadatos (autor y fecha de publicación, que pueden ser aleatorios o fake). A continuación
el cuerpo del artículo que para facilidad, podrá ser un texto autogenerado, como el que se puede encontrar en la
página de [lorem ipsum generator](https://www.lipsum.com/).

En cuanto a los *breakpoints*, usaremos los mismos valores de corte del ejercicio anterior, pero añadiremos uno
nuevo, que se corresponderá con `extra-large`, `xlarge` o `large-desktop`, que se activará para anchuras superiores
a 1200px. De este modo, el breakpoint anterior de desktop, pasará a estar comprendido entre 992px y 1199px.

Para la entrada del artículo, utilizaremos una de las imágenes facilitadas, de modo que deberá estar en consonancia
con el breakpoint activo. Para el propio contenido del artículo, deberá mostrarse a una única columna en los dos
tamaños más pequeños, mientras que si pasamos a versión escritorio (a partir de 992px), el contenido pasará a estar
en doble columna.

## Ampliación

Como trabajo complementario se puede:
- Centrar el contenido con una anchura máxima de 1200px para *large-desktop*
- Incrementar el tamaño de la fuente, de manera proporcional en 2px para una mejor lectura en tamaños superiores
a 992px (es decir, para *desktop* y *large-desktop*)
