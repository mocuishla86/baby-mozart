# baby-mozart
Objetivo:
En el juego van apareciendo notas de forma aleatoria, tanto por su valor (de Do a Si), como su posición en x (en cualquier sitio desde izq a dcha). 
El usuario debe usar las teclas de flechas de izq y dcha para colocar la nota en la tecla del piano correspondiente.
Si el usuario ya está seguro, puede pulsar la tecla flecha abajo para que la nota vaya directamente a la tecla encima de la que está puesta.
Cuando la nota llega a la tecla, pueden pasar dos cosas:
1. Que acierte, en cuya caso se suman 1 punto.
2. Que falle, en cuyo caso se resta una vida.

Descripción de los niveles:
1. Easy. las notas disponen de tres características: Color, nombre y sonido. El color de la nota coincide con el color de su tecla correspondiente, así que es fácil acertar. Es simplemente hacer un match visual.
2. Medium. Al alcanzar los 10 puntos, el nivel cambia a Medium. En este nivel las notas ya no disponen de color, solo su nombre y su sonido correspondiente. Así hasta superar los 20 puntos, en el que habrá de nuevo un cambio de nivel.
3. Hard. Es el último nivel, donde las notas solo disponen de su sonido. El jugador dispone en todo momento del juego el piano de abajo como apoyo.

Disposición del juego:
A la izquierda, tendremos lo siguiente:
1. un selector de nivel con las dificultades “Easy”, chequeada por defecto, “Medium” y “Hard”.
2. boton de Start.

Debajo de la pantalla de juego está el piano. Las teclas asociadas a las notas son las siguientes:

Do → Z
Re → X
Mi → C
Fa → V
Sol → B
La → N
Si → M
