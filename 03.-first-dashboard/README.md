# Ejercicio práctico 3

## Temática

Principios del diseño responsivo

## Objetivos

Entender cómo otros elementos de la interfaz pueden actuar para complementar un diseño responsive. En este caso
nos referimos a la cabecera, y al típico icono de hamburguesa, que suele aparecer en tamaños pequeños. Además,
mostraremos cómo poder construir un pequeño dashboard para varios módulos de información.

## Descripción

En las aplicaciones actuales, un factor muy importante es la capacidad de poder ser accedida desde cualquier
dispositivo para abarcar un mayor número de usuarios. Esto implica que la web deba adaptarse con cierta
inteligencia a las características del mismo (o al menos, en la anchura), que determinará cuánta información
"cabe" en pantalla.

Para ello vamos a simular la construcción de un dashboard muy simple, que tendrá su cabecera, su contenido
principal y su pie de página. En la cabecera, al estar en *mobile* y *tablet* se mostrará el icono del menú
(el icono de hamburguesa), aunque no se llegará a implementar para no complicar en exceso. En el contenido,
mostraremos la estructura de 6 módulos que representarían diversos indicadores. Idealmente, dentro de cada
caja se mostraría el KPI con su mejor representación: numérica, mapa, gráfica, etc. y se deja como ampliación.

## Ampliación

Como trabajo complementario se pueden trabajar las siguientes funcionalidades:
- Implementar un menú lateral (tanto en tamaños pequeños -que aparecerá desde un lateral- como en tamaños
superiores -que siempre será visible en el lateral-)
- Añadir contenido estático/ficticio para simular/mockear los diferentes KPIs, pudiendo generar valores aleatorios
para emular un dashboard más realista, donde los valores son completamente dinámicos en tiempo real
