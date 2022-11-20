const Data = [
  {
    id: 1,
    title: "Ley del offside",
    description:
      "Es complejo de explicar en pocas lineas, pero allá vamos. El campo de juego (cesped) esta formado por lineas verticales, por ejemplo, las lineas del corner y el arco y la linea de mitad de cancha. Ahora, usa tu poder de imaginacion y traza esas mismas lineas verticales pero en todo el el campo. Ya lo imaginaste? Bien! Ahora solo hace falta ubicar a los jugadores de futbol, pero PRINCIPALMENTE a los defensores. La 'linea imaginaria' que traza algun defensor es esa que no debe ser traspasada y, en caso de que ocurra, la jugada (o el gol, si hay) se anulará por posicion adelantada del jugador del equipo contrario. En resumen, la ley del offside se utiliza para que ningun jugador que ataque saque ventaja de su posicion y los jugadores que defienden no se vean perjudicados por la ubicacion del atacante contrario.",
    img1: "https://i.ytimg.com/vi/e2uz1VgaUmc/maxresdefault.jpg",
    img2: "https://topsoccerblog.com/wp-content/uploads/2022/10/images-2022-10-20T182457.399.jpeg",
    video1: "https://www.youtube.com/embed/x81siBBSPrs",
    video2: "https://www.youtube.com/embed/ipef6d1yuLw",
    wikipedia: "https://es.wikipedia.org/wiki/Fuera_de_juego",
  },
  {
    id: 2,
    title: "Falta o foul / Tiro libre",
    description:
      "Una falta puede ocurrir por diferentes acciones: golpear a un adversario (con o sin intencion), estar en offside, tocar la pelota con la mano sin ser el arquero*, simular una falta (por ejemplo, tirandose sin haber recibido un golpe), tomar a un jugador del equipo contrario evitando que siga corriendo con la pelota. Toda falta pitada por el arbitro deriva en un tiro libre a favor del equipo que recibio el foul. NO ES FALTA CUANDO UN JUGADOR SE TIRA AL SUELO Y LE QUITA LA PELOTA DE MANERA LIMPIA, POR MAS QUE DESPUES EL JUGADOR CONTRARIO SE CAIGA. ",
    img1: "https://www.abc.com.py/resizer/Zg3e1kEdogxDu9fY7dB-h2YJXrM=/fit-in/770x495/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/abccolor/2HDQLTYFYBCQ3OPUUHHCHOLL5E.jpg",
    img2: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt84f09058a5aa0a20/6297d0d2878a04390ef3b21b/GettyImages-1400481507.jpg?quality=80&format=pjpg&auto=webp&width=1000",
    video1: "https://www.youtube.com/embed/JXbBwRrOwAU",
    video2: "https://www.youtube.com/embed/58gxkXoWPng",
    wikipedia: "https://es.wikipedia.org/wiki/Falta_(f%C3%BAtbol)",
  },
  {
    id: 3,
    title: "Tarjetas",
    description:
      "Aunque existan reglas, a veces el arbitro no las sigue y elige el color de la tarjeta segun su optica, el futbol es asi. Existen dos tarjetas. La AMARILLA se mostrara cuando haya una falta que no sea grave, por ejemplo, un agarron de camiseta o un golpe leve sin lastimar al contrario, tambien por 'repeticion de faltas' de un mismo jugador, por insultar a otro jugador o a la hinchada contraria, o por quitarse la camiseta en un festejo de gol. La tarjeta ROJA se mostrará en el caso de que un jugador reciba dos tarjetas amarillas, cuando incurra en una falta grave, por ejemplo un golpe de puño o una patada al suelo desde atras o pisada lastimando al jugador contrario, por insultar al arbitro o por agarrarse a golpes con otro jugador.",
    img1: "https://media.primicias.ec/2020/08/30074536/Messi-tarjeta-amarilla-UEFA-eliminaci%C3%B3n.jpeg",
    img2: "https://imagenes.elpais.com/resizer/sOGzOYm_fCxI4_6oLveNBoKzmis=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/4CRCM5AWHYQCP5N7Q36OEWAXHM.jpg",
    video1: "https://www.youtube.com/embed/7KKjeZb0r84",
    video2: "https://www.youtube.com/embed/HiqF1YBlkA4",
    wikipedia:
      "https://es.wikipedia.org/wiki/Tarjeta_penal#Tarjetas_penales_usadas_frecuentemente",
  },
  {
    id: 4,
    title: "VAR",
    description:
      "Lo ultimo de la tecnologia. El VAR, en teoria, sirve de ayuda para el arbitro en caso de duda o si no pudo ver una jugada. Las jugadas que analiza el VAR son las de OFFSIDE en caso de que hayan metido gol, de TARJETA ROJA si hubo un golpe que el arbitro no vió, de ANULAR UN GOL si el arbitro asi lo contempla (posible mano o falta antes de que el equipo haga el gol). Tambien el VAR puede revisar jugadas de PENAL: si la falta fue adentro del area o afuera (si es afuera es tiro libre, no penal) y si el arquero se adelantó de la linea blanca en el momento que pateaban el penal.",
    img1: "https://digitalhub.fifa.com/m/1e7b3ff4eaee9893/original/171879_vor_rus_rs.JPG",
    img2: "https://media.tycsports.com/files/2018/11/14/31107/cunha_862x485.jpg?v=1",
    video1: "https://www.youtube.com/embed/ng3scgt3PTE",
    video2: "https://www.youtube.com/embed/OlTHA9ddXo4",
    wikipedia: "https://es.wikipedia.org/wiki/%C3%81rbitro_asistente_de_video",
  },
  {
    id: 5,
    title: "Penal",
    description:
      "Para que el arbitro o el VAR decidan que hay un penal, el jugador tuvo que haber recibido una falta (golpe, agarron de camiseta, empujon, patada sin intencion de lastimar pero golpeando al jugador) adentro del area o, al menos, pisando la linea blanca. Asi de fino. Otra jugada de penal es si hay mano de algun jugador que este defendiendo su arco. Ahora, ¿que se entiende por MANO? La mano tiene que se intencional (que evite que una pelota entre en el arco o que la mueva con intencion de correr la pelota) o el brazo tiene que estar abierto (se juzga como 'extension del cuerpo', si decis esto ultimo quedas mas pro que Juan Pablo Varsky). Hay jugadas que no se contemplan como penal, por ejemplo, dos jugadores que fueron a cabecear la pelota y se chocaron entre si.",
    img1: "https://vivenciasderadio.com.ar/images/noticias/353091.jpg",
    img2: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/10/30233804/RIVER-VAR-GREMIO-2.jpg",
    video1: "https://www.youtube.com/embed/obOaoEyt8_A",
    video2: "https://www.youtube.com/embed/uKdKNtANMew",
    wikipedia: "https://es.wikipedia.org/wiki/Tiro_penal_(f%C3%BAtbol)",
  },
  {
    id: 6,
    title: "Tiempo extra y penales",
    description:
      "Terminaron el primer tiempo y el segundo y los dos equipos siguen empatando, ninguno se saca ventaja. ¿Hay penales? NO!!! Vamos a explicarlo: si hay empate despues de los '90 minutos' NO HAY PENALES, cada equipo suma un punto como resultado del empate. Ahora si este mismo resultado pasa en octavos, cuartos, semifinales o final (o partido por el tercer puesto) SI HAY PENALES!!!! Que emocion!! Excitante siempre y cuando no sea tu propio pais.",
    img1: "https://cdn.resfu.com/media/img_news/captura-de-la-seleccion-de-japon-celebrando-un-gol-durante-un-partido-del-mundial-sub-20-femenino--disputado-en-agosto-de-2022--captura-fifa.png?size=1000x&lossy=1&ext=jpeg",
    img2: "https://i.ytimg.com/vi/TCkc4UpcOp4/maxresdefault.jpg",
    video1: "https://www.youtube.com/embed/1_6g0dw6aSg",
    video2: "https://www.youtube.com/embed/ERBq0vm1Wqg",
    wikipedia:
      "https://es.wikipedia.org/wiki/Pr%C3%B3rroga_(deporte)#F%C3%BAtbol",
  },
  {
    id: 7,
    title: "Tiempo adicional",
    description:
      "Este es facil pero puede volverse RAROOOO. El arbitro tiene la facultad de añadir minutos si entiende que se perdieron por cosas del juego, como, por ejemplo, cambios, tiros libres, faltas, etc. Ahora, con la llegada del VAR se pierde MUCHO tiempo y entonces es normal que el arbitro añada al final del tiempo muchos minutos mas. Caos. Para tener en cuenta: normalmente despues del primer tiempo el abritro suele 'agregar' uno o dos minutos, mientras que cuando termina el segundo tiempo puede 'añadir' como minimo tres minutos, de ahi, lo que su consciencia diga.",
    img1: "https://media.infocielo.com/p/4489e4ea0ef016f2d5c0e5291d50c1b4/adjuntos/299/imagenes/000/627/0000627038/1200x675/smart/3e5dce9c175c8581fe8f1cd4f92cf3eb03024463jpg.jpg",
    img2: "https://cdn.resfu.com/media/img_news/el-colegiado-del-catar-argelia-anadio-20-minutos-al-partido-de-la-copa-arabe--captura-fifatv.jpg?size=1000x&lossy=1",
    video1: "https://www.youtube.com/embed/7ZxV9hw_F_c",
    video2: "https://www.youtube.com/embed/v_Hx9TgnZas",
    wikipedia:
      "https://es.wikipedia.org/wiki/Reglas_del_f%C3%BAtbol#Tiempo_de_duraci%C3%B3n_del_partido",
  },
  {
    id: 8,
    title: "Puntos de equipos en el grupo",
    description:
      "Creo que este es muy facil de entender. Si un equipo gana, automaticamente se le reconocen tres puntos, si empata se reparten un punto cada equipo, y si una seleccion pierde, se lleva cero puntos. Los dos equipos que mas puntos saquen, avanzan a la siguiente fase de la copa. Dato de vital importancia: si algunas de las selecciones del mismo grupo tienen el mismo puntaje, se define por otros factores, como los goles que convirtieron a lo largo de esos tres primero partidos (llamese 'goles a favor').",
    img1: "https://canaltrece.com.co/uploads/ck-uploads/2018/05/30/MUNDIAL-RUSIA-2018-SIMULADOR-FIFA-1.JPG",
    img2: "https://www.clarin.com/img/2018/06/28/ryYydjfMm_720x0__1.jpg",
    video1: "https://www.youtube.com/embed/7HXwBz5qeDM",
    video2: "https://www.youtube.com/embed/7HXwBz5qeDM",
    wikipedia:
      "https://es.wikipedia.org/wiki/Anexo:Tabla_estad%C3%ADstica_de_la_Copa_Mundial_de_F%C3%BAtbol",
  },
  {
    id: 9,
    title: "Alineaciones",
    description:
      "Aqui volvemos a citar a vuestra imaginacion. Al campo de juego salen 11 jugadores, un arquero y diez jugadores de campo, bien. A traves del tiempo se armaron distintas 'posiciones' para mejorar la tactica/estrategia. Las mas comunes son 4-4-2, 4-3-3, 3-4-3, 5-3-2, entre muchas otras variaciones y combinaciones. En este punto es imaginar y ubicar a los jugadores desde defensa hasta ataque. Por ejemplo el 4-4-2 seria asi: cuatro defensores, cuatro mediocampistas y dos delanteros. Al arquero no se lo cuenta porque su posicion es fija, o sea, el tipo esta en el arco.",
    img1: "https://pbs.twimg.com/media/DiJ5OwRXUAAZyqP.jpg",
    img2: "https://pbs.twimg.com/media/Dg8Yyd4X0AAsfdY.jpg",
    video1: "https://www.youtube.com/embed/wS_qTf9o_yA",
    video2: "https://www.youtube.com/embed/g59Wcph-Als",
    wikipedia: "https://es.wikipedia.org/wiki/Posiciones_del_f%C3%BAtbol",
  },
  {
    id: 10,
    title: "Numeros de camisetas",
    description:
      "Bueno, esto es simple, cada jugador tiene el numero de camiseta que, o pidieron o se los pusieron desde el cuerpo tecnico. Antes se ponian los numeros respecto al lugar que ocupaban en el campo de juego y se usaban del 1 al 11, pero actualmente eso ya no es tan asi. Esto ultimo explica porque a veces un fanatico del futbol hable del 'dos' refiriendose al defensor o del 'nueve' cuando el delantero goleador tenga la pelota.",
    img1: "https://pbs.twimg.com/media/Fhmfy4rXoAIPQ3t?format=jpg&name=900x900",
    img2: "https://media.ambito.com/p/4e55df16d4619fc97a52bb12357b3d18/adjuntos/239/imagenes/040/293/0040293625/argentina-arabia-qatar-2jpg.jpg",
    video1: "https://www.youtube.com/embed/XBUFqlIsP6Y",
    video2: "https://www.youtube.com/embed/SBFgjDCatM4",
    wikipedia:
      "https://es.wikipedia.org/wiki/Dorsal_(f%C3%BAtbol)#:~:text=Los%20dorsales%20o%20n%C3%BAmeros%20de,cada%20jugador%20por%20dicha%20posici%C3%B3n.",
  },
  {
    id: 11,
    title: "Tiro libre indirecto dentro del area",
    description:
      "Ocurre muy pocas veces, esto parece dificil pero solo hay que prestar atencion. El arquero es el unico que puede agarrar la pelota con la mano, pero si despues de tener la pelota en sus manos, puso el balon en el suelo, tiene PROHIBIDO volver a agarrarla. En caso de que lo haga y este dentro del area, se cobra un tiro libre INDIRECTO; es indirecto porque el equipo contrario no puede patear al arco, pero puede tocar la pelota previamente y despues patear al arco. DATAZO: el arquero TAMPOCO puede agarrar la pelota con la mano si un compañero le da la pelota con los pies intencionalmente, por eso es normal que el arquero saque pelotazos al recibir un pase.",
    img1: "https://depor.com/resizer/rD95Ryg67-0EZzRD3viJ19XqPEY=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/P4WMPOKEPFEORPUK4AP5HXEGAI.jpg",
    img2: "https://calciodangolo.com/wp-content/uploads/2020/11/Gol-punizione-Maradona-Napoli-Juventus-1000x600.png.webp",
    video1: "https://www.youtube.com/embed/o-ArZqv479U",
    video2: "https://www.youtube.com/embed/qhByx9cDeCg",
    wikipedia:
      "https://es.wikipedia.org/wiki/Tiro_libre_(f%C3%BAtbol)#Tiro_libre_indirecto",
  },
  {
    id: 12,
    title: "Cambios de jugadores",
    description:
      "Desde la pandemia, la FIFA dispuso que los cambios por partido pueden ser de hasta cinco jugadores. ¿Donde esta lo complejo? Ahora vamos a eso. Se pueden hacer cinco cambios pero en tres ventanas...??!!! Esto quiere decir que si el Director Tecnico quiere meter cinco jugadores puede hacerlo asi: dos jugadores en un parate, otros dos jugadores mas tarde, y despues queda una ventana para el quinto jugador. Tambien puede hacer cambios en el ENTRETIEMPO y, espero se entienda, esto no se considera como una ventana de cambio. Otro dato: si el partido se extiende al tiempo extra, se puede hacer un cambio mas en ese lapso.",
    img1: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0508%2Fr696758_1296x729_16%2D9.jpg",
    img2: "https://ichef.bbci.co.uk/news/624/amz/worldservice/live/assets/images/2014/08/05/140805164808_sustituciones_futbol_624x351_getty_nocredit.jpg",
    video1: "https://www.youtube.com/embed/IXwYyTUfthQ",
    video2: "https://www.youtube.com/embed/Xz6NwRy2mX8",
    wikipedia:
      "https://www.ole.com.ar/futbol-internacional/oficial-cambios-reglamento-futbol_0_X9xm4Qh5Gz.html",
  },
];

export default Data;
