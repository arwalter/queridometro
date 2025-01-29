const duplas = [
  "aline_vinicius",
  "arleane_marcelo",
  "camilla_thamiris",
  "diego_daniele",
  "diogo_vilma",
  "edilberto_raissa",
  "eva_renata",
  "gabriel_maike",
  "gracyanne_giovanna",
  "joaogabriel_joaopedro",
  "mateus_vitoria",
  "guilherme_joselma",
];

const eliminated = ["arleane_marcelo","edilberto_raissa"];

const baseURL =
  "https://docs.google.com/spreadsheets/d/1C95jkSpXLyDHeoXXmnUKPVkxJY7OCcMlYBmB21pUFbk/gviz/tq?tqx=out:csv&sheet=data";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 2000,
});

instance.get().then((response) => {
  const countVotes = csvToObj(response.data);
  const wrapper = document.querySelector(".wrapper");

  duplas.forEach((dupla) => {
    const isEliminted = eliminated.includes(dupla);
    wrapper.innerHTML += `
    <div class="row ${isEliminted ? "eliminated" : ""}"'>
        <img class="avatar" src="resource/${dupla}.png" alt="avatar"/>
        <div class="icons">
            <div id='planta' class='icon'>
              <div class='bullet'>${countVotes[getName(dupla)]["planta"]}</div>
            </div>
            <div id='vomito' class='icon'>
              <div class='bullet'>${countVotes[getName(dupla)]["vomito"]}</div>
            </div>
            <div id='coracao_quebrado' class='icon'>
              <div class='bullet'>${countVotes[getName(dupla)]["coração quebrado"]}</div>
            </div>
            <div id='coracao' class='icon'>
              <div class='bullet'>${countVotes[getName(dupla)]["coração"]}</div>
            </div>
            <div id='cobra' class='icon'>
              <div class='bullet'>${countVotes[getName(dupla)]["cobra"]}</div>
            </div>
    </div>`;
  });
});

function csvToObj(csvString) {
  // Dividir o CSV em linhas, ignorando linhas vazias
  const rows = csvString.split("\n").filter((row) => row.trim() !== "");

  // A primeira linha contém os cabeçalhos (nomes das pessoas), removendo as aspas
  const headers = rows[0]
    .split(",")
    .slice(0, 12)
    .map((header) =>
      header.replace(/"/g, "").trim().toLowerCase().replace(" e ", "_")
    );

  // Criar o objeto inicial para armazenar votos
  const countedVotes = headers.reduce((acc, key) => {
    acc[key] = {
      planta: 0,
      vomito: 0,
      "coração quebrado": 0,
      coração: 0,
      cobra: 0,
    };
    return acc;
  }, {});

  // Iterar pelas linhas (pulando o cabeçalho)
  rows.slice(1).forEach((row) => {
    const votes = row
      .split(",")
      .slice(0, 12)
      .map((vote) => vote.replace(/"/g, "").trim());

    votes.forEach((vote, index) => {
      if (vote && countedVotes[headers[index]]) {
        // Verifica se o voto é válido e incrementa
        if (countedVotes[headers[index]][vote] !== undefined) {
          countedVotes[headers[index]][vote] += 1;
        }
      }
    });
  });

  return countedVotes;
}

const getName = (dupla) => {
  if (dupla == "joaogabriel_joaopedro") {
    return "joão gabriel_joão pedro";
  } else if (dupla == "mateus_vitoria") {
    return "mateus_vitória";
  } else {
    return dupla;
  }
};
