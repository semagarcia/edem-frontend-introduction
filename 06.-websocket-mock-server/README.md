# Ejercicio práctico 6

## Temática

Servidor HTTP, servidor API y servidor WebSocket (tiempo real)

## Objetivos

Entender cómo construir un pequeño servidor local donde exponer un API muy simplificado para que el frontend lo consuma.
Además, se añadirá un servidor de WebSocket para toda la comunicación en tiempo real, actualizando la información sin
necesidad de tener que recargar o hacer nuevas llamadas HTTP.

## Descripción

### Servidor HTTP

Un servidor HTTP (o servidor de estáticos) suele albergar ficheros HTML, CSS y JS que conforman una aplicación web. De
este modo, al ubicarlos allí, cuando cliente puede invocarlo y consumirlo de un modo visible o amigable para el usuario.
Es decir, renderizando el HTML y aplicando los estilos y comportamiento concreto.

Para ello haremos un contenido básico (HTML, JS y CSS) de modo que simulemos un pequeño dashboard de información, siendo
accesible a través de la dirección local (localhost:3000).

### Servidor API (servicios)

Un API HTTP son los servicios que expone normalmente un backend para que el lado cliente pueda interactuar con ellos,
recuperando o enviando información. Para ello, se propone desarrollar un pequeño servicio de prueba que envíe esa
información.

La información será un JSON que podrá tener cualquier contenido estático (cadenas, números, etc). Posteriormente
haremos que esa información vaya cambiando, y sea dinámica (o lo que es lo mismo, aleatoriamente generada) de modo
que el frontend sepa gestionarla (requests periódicas por ejemplo).

### Servidor WebSocket

Como evolución del paso anterior, se desarrollará de ejemplo un servidor de WebSockets. Este tipo de comunicación en
tiempo real permitirá entender cómo se tratan datos de esta naturaleza, y la diferencia respecto al API Rest visto
en la sección anterior. Se desarrollarán diversos mensajes con sus correspondientes acciones, como la de mostrar
usuarios conectados, actualización de la información, etc.

### Ejecución

Para poder arrancar el servidor (el cual levantará tanto el servidor HTTP, como de estáticos, como de WebSocket),
sólo será necesario instalar las dependencias si no están instaladas (`npm i` ó `npm install`), y levantar el
servidor (mediante `npm start`). Si todo fue correcto, al acceder a la dirección http://localhost:3000 deberá
verse el fichero index.html servido y renderizado. En caso de error se mostrará algún tipo de traza por consola.

## Ampliación

Este ejercicio práctico, dada su complejidad mayor, será una actividad guiada (si existe el tiempo suficiente) como
un desarrollo de *live coding*, pero respondiendo a todas las dudas que puedan ir surgiendo.

De este modo, los alumnos podrán entender las bases y posteriormente implementar sus propios desarrollos. En caso de
cualquier duda, pueden contactar, enviar código, solicitar una revisión para corrección o planteamientos de qué
se puede mejorar, refactorización y optimizaciones, etc.
