# Librería de visualización de mapas

## Temática
En este ejemplo trataremos el uso de una librería de visualización de mapas en JavaScript: [leaflet](https://leafletjs.com/)

## Objetivos

Entender cómo poder embeber un mapa en la web utilizando HTML y JavaScript (*web mapping*).

## Descripción
En este ejemplo se ha creado la siguiente estructura para facilitar el aprendizaje:
1. *Scaffolding*
2. *Basic*
3. *Custom Markers*
4. *External actions*
5. *Syncing maps*

### Scaffolding
Este ejemplo contiene la estructura básica, mínima e imprescindible que puede ser utilizada para ejemplos más complejos.

Dispone de la librería leaflet, sus estilos, y unos estilos CSS propios del HTML donde está siendo embebido el mapa.

Además, permite seleccionar entre los proveedores de **OpenStreet** y **CARTO**, aunque se pueden añadir más si se desea.

También instancia el mapa y añade una capa para poder operar con ella después.

### Basic
Este ejemplo muestra las acciones básicas de un mapa, como añadir polígonos (círculo y polígono customizado), así como marcadores en unas posiciones determinadas y su correspondiente popup para mostrar información al clicar sobre el elemento.

Por otro lado, se ejemplifica cómo escuchar y capturar eventos personalizados que lanza el propio mapa/librería, como clicks, zoom, etc.

Por último, se muestra cómo añadir una librería externa (o plugin o extensión) de *leaftlet*, para ampliar la funcionalidad base. En este caso, se utiliza [EasyButton](https://github.com/CliffCloud/Leaflet.EasyButton), para añadir un botón como control del mapa.

### Custom Markers
Este ejemplo recibe un GeoJSON (fichero JSON con estructura determinada, usualmente generado por herramientas como QGIS), con el listado de una serie de monumentos históricos de Valencia. Este fichero es leído y procesado, y por cada monumento, se habilita un marcador en el mapa.

Los marcadores, en este caso, no serán los utilizados por defecto como se ve en el ejemplo anterior, sino que ahora utilizamos marcadores de distintos colores (utilizando una imagen de marcador distinto por cada color) para representar el año (o rango de años) de su construcción.

El HTML es modificado ligeramente para añadir una leyenda estática que refleja los colores de los marcadores.

Con la información recibida (título, descripción, autor, año de construcción, enlace a Wikipedia...) se construye también un popup completo que permite mostrar información acerca del elemento.

### External actions
Este ejemplo es muy parecido al anterior en cuanto al mapa se refiere. Sin embargo, la diferencia está en que utilizamos un método distinto a la hora de representar los marcadores. En este caso se utiliza el marcador por defecto, en lugar de diferenciado por colores. También se customiza el popup añadiendo lógica más específica para mostrar singular/plural en el campo `authors`. Los estilos artísticos (campo `styles`) también se simplifican y mejoran respecto al ejemplo anterior.

Esto es así para poder añadir, en la parte superior del HTML (fuera del mapa y de los límites de la librería) un selector HTML o desplegable, que contiene los rangos de años del ejemplo anterior. En base a la selección del rango que haga el usuario, la página interactúa con el mapa, de forma que le envía "la instrucción" necesaria para que el mapa responda a esa opción escogida, y filtre los monumentos en base al año de construcción.

De esta forma podemos ver un ejemplo de cómo interactuar con acciones personalizadas desde fuera, lo que permite una experiencia de usuario más rica y un desarrollo de funcionalidades mucho más potentes que complementen al propio mapa en sí.

### Syncing maps
Este ejemplo introduce una diferencia respecto a los anteriores: ahora, hay más de un mapa. Concretamente, dos en
paralelo, uno al lado de otro, que están, además, sincronizados en sus acciones (zoom, mover mapa, añadir un marcador...),
de modo que las acciones de uno se reflejan en el otro.

Es posible realizar toda esta sincronización de forma programática, es decir, manualmente a través de nuestro propio
código. Sin embargo, tal y como se ve durante la sesión, existen algunas librerías desrrolladas por la comunidad de
developers que evitan repetir la misma lógica. Para ello, la librería escogida es
[LeafletSync](https://github.com/jieter/Leaflet.Sync), y en el ejemplo se muestra cómo poder utilizarla, y añadir
nuestra propia funcionalidad.

## Ampliación
Este punto es uno de los más abiertos, ya que la propia librería en sí permite miles de posibilidades, y que la limitación, casi, será la propia imaginación.

Otras ampliaciones posibles podrían ser:
- Recibir un stream de datos (en tiempo real), e ir actualizando convenientemente los datos
- Sincronizar dos mapas, y que las acciones de movimiento sobre uno, se reflejen en el otro
