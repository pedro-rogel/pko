const requisicao = async () => {
  let idpk = parseInt(document.getElementById("idpokemon").value);
  let output = document.getElementById("output");
  let id = idpk ? idpk : 25;
  let url = "https://pokeapi.co/api/v2/pokemon-form/" + id;
  let api = await fetch(url, {
    method: "GET",
  });

  if (api.ok) {
    let resp = await api.json();
    console.log(resp.name);
    console.log(resp.id);
    output.innerHTML = `Nome do pokemon: ${resp.name} | Identidicação do Pokemon: ${resp.id}`;
  } else {
    let respErro = await api.json();
    console.log(respErro);
  }
  document.getElementById("clear").addEventListener("click", () => {
    output.innerHTML = "";
  });
};
