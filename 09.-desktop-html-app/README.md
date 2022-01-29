# Desktop WebApp utilizando JavaScript

## Temática
En este ejemplo veremos cómo, gracias a JavaScript, podremos crear una "carcasa" para
emular -o simular- que es una aplicación de escritorio.

## Objetivos

Entender que gracias a la gran expansión del lenguaje de JavaScript, podemos reutilizar conocimientos
y construir también una aplicación de estorio, dando la sensación de ser nativa del sistema operativo,
como pudieran ser otras del estilo: Microsoft Word, Explorador de archivos, etc.

## Descripción

[ElectronJS](https://www.electronjs.org/) es una librería que permite envolver el HTML que especifiquemos (puede ser un HTML nuestro, un fichero local, o puede ser incluso una dirección web remota de Internet) dentro de una carcasa para dar la sensación de ser una aplicación de escritorio.

Nos permite ocultar la barra de direcciones, por lo que ocurre igual que los WebViews en los dispositivos móviles, que dan la sensación de aplicación nativa.

Este ejemplo sólo se centra en la estructura básica, ya que una vez especificado qué HTML debe renderizarse, el resto del esfuerzo de desarrollo recae sobre la parte web.

Electron además permite gran integración con la plataforma (Sistema Operativo) donde está siendo ejecutado, como por ejemplo:

- Modo light/dark
- Notificaciones
- Tray icon
- Detección de conexión a Internet
- ...

Por último, en el ejemplo se muestra cómo podemos hacer para abrir automáticamente las DevTools e inspeccionar el
código HTML más cómodamente. Si nuestro código no requiere de nada especial del Sistema Operativo, puede ser más cómodo utilizando el propio navegador, ya que, al fin y al cabo, es una web, pero que será "paquetizada" y distribuida como
aplicación en lugar de como web a través de una URL. Por ello, se puede desarrollar de manera independiente.


## Ampliación

Una vez finalizado el desarrollo (o al menos, el de la parte de Electron), comenzaría la fase de construcción y publicación/distribución (documentación [aquí](https://www.electronjs.org/docs/latest/development/build-instructions-gn)).

Con ello podremo conseguir:
- Un fichero *Electron.app* para macOS
- Un fichero *electron* para Linux
- Un fichero *electron.exe* para Windows
