const fetchPokemon = async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    conexion = await fetch(url);
    if ((conexion.status = "200")) {
      dato = await conexion.json();
  
      console.log(dato);
      let imagen = dato.sprites.front_default;
      let name = dato.forms[0].name;
      let type = dato.types[0].type.name;
      let stats = dato.stats;
    let mov1 = dato.abilities[0].ability.name;
      let mov2 = dato.abilities[1].ability.name;
  
      console.log(mov1);
      pokeImg(imagen, name, type, stats, mov1,mov2);
    } else {
      console.log(conexion.status());
    }
  };
  const pokeImg = (URL, name, type, stats, mov1,mov2) => {
    const pokeimg = document.getElementById("pokeImg");
    const info_nombre = document.getElementById("Nombre-p");
    const movimiento1 = document.querySelector(".h1");
    const movimiento2 = document.querySelector(".h2")
    const info_tipo = document.getElementById("info-tipo");
    const stadisticas = document.getElementById("stadisticas")
  
    // cambia la imagen del pokedex
    pokeimg.src = URL;
  
    // crea nombre   del pokemon
    info_nombre.innerText = name;
    // crear Tipo del Pokemon
    info_tipo.className = "tipo";
    info_tipo.innerText = type;
    // crea los movimientos
  
    movimiento1.innerText = mov1;
    movimiento2.innerText= mov2;
  
  
  console.log(stats)
  
    //crea las estadisticas del pokemon
    stadisticas.innerHTML=''
     stats.forEach(element => {
  
  
          let p = document.createElement("p")
          p.innerText=element.base_stat;
          stadisticas.appendChild(p)
  
     });
  };
  
  const imprimir = () => {
    const pokename = document.getElementById("pokename");
    const pokemon = pokename.value;
  
    fetchPokemon(pokemon);
  };
  
  
  
  const prender = () => {
  
  }