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

const eliminated = [
  "arleane_marcelo",
];

const wrapper_1 = document.querySelector(".wrapper_1");
const wrapper_2 = document.querySelector(".wrapper_2");

const loading = document.querySelector(".loading");

duplas.forEach((dupla, idx) => {
  const isEliminted = eliminated.includes(dupla);
  if (idx < 6) {
    wrapper_1.innerHTML += `
    <div class="row ${isEliminted ? 'eliminated':''}" onchange='checkPages()'>
        <img class="avatar" src="resource/${dupla}.png" alt="avatar"/>
        <div class="icons">
    
            <label>
                <input id="planta" type="radio" name="${dupla}" value="planta">
                <span  class="custom-radio"></span>
            </label>
            <label>
                <input id="vomito" type="radio" name="${dupla}" value="vomito">
                <span class="custom-radio"></span>
            </label>
            <label>
                <input id="coracao_quebrado" type="radio" name="${dupla}" value="coração quebrado">
                <span class="custom-radio"></span>
            </label>
            <label>
                <input id="coracao" type="radio" name="${dupla}" value="coração">
                <span class="custom-radio"></span>
            </label>
            <label>
                <input id="cobra" type="radio" name="${dupla}" value="cobra">
                <span class="custom-radio"></span>
            </label>
        </div>
    </div>`;
    if (idx == 5) {
      wrapper_1.innerHTML += `
    <div class="row" style='justify-content:end'>
        <button id='btnNextPage' type="button" class='custom-button' onclick='next_page()' disabled>
        </button>
    </div>
        `;
    }
  } else {
    wrapper_2.innerHTML += `
    
        <div class="row"  onchange='checkPages()'>
            <img class="avatar" src="resource/${dupla}.png" alt="avatar">
            <div class="icons">
                <label>
                    <input id="planta" type="radio" name="${dupla}" value="planta">
                    <span  class="custom-radio"></span>
                </label>
                <label>
                    <input id="vomito" type="radio" name="${dupla}" value="vomito">
                    <span class="custom-radio"></span>
                </label>
                <label>
                    <input id="coracao_quebrado" type="radio" name="${dupla}" value="coração quebrado">
                    <span class="custom-radio"></span>
                </label>
                <label>
                    <input id="coracao" type="radio" name="${dupla}" value="coração">
                    <span class="custom-radio"></span>
                </label>
                <label>
                    <input id="cobra" type="radio" name="${dupla}" value="cobra">
                    <span class="custom-radio"></span>
                </label>
            </div>
        </div>`;
    if (idx == 11) {
      wrapper_2.innerHTML += `
        <div class="row" style='justify-content:end;'>
            <button id='btnSubmit' type="submit" class='custom-button' disabled>
            </button>
        </div>
        `;
    }
  }
});

const scriptGoogle =
  "https://script.google.com/macros/s/AKfycbwR_2mGGgIQnPlu6DzGPIFsTmU6DY8VOSty4alVEtFnSd_ruz6-OhWKHYcE9GRkgcM/exec";
const form = document.forms["form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loading.classList.remove("hidden");
  fetch(scriptGoogle, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      showToast();
      prev_page();
    })
    .catch((error) => {
      console.error("Erro no Envio dos dados!", error);
    })
    .finally(() => {
      console.log("Dados enviados com sucesso!");
      loading.classList.add("hidden");
      reset();
    });
});

function next_page() {
  const wrapper_1 = document.querySelector(".wrapper_1");
  wrapper_1.style.marginLeft = "-1080px";
}

function prev_page() {
  const wrapper_1 = document.querySelector(".wrapper_1");
  wrapper_1.style.marginLeft = "0";
}

function checkPages() {
  const group1 = [
    "aline_vinicius",
    "arleane_marcelo",
    "camilla_thamiris",
    "diego_daniele",
    "diogo_vilma",
    "edilberto_raissa",
  ];
  const group2 = [
    "eva_renata",
    "gabriel_maike",
    "gracyanne_giovanna",
    "joaogabriel_joaopedro",
    "mateus_vitoria",
    "guilherme_joselma",
  ];

  const allSelected = group1.every((dupla) => {
    return document.querySelector(`.wrapper_1 input[name="${dupla}"]:checked`) || eliminated.includes(dupla);
  });

  if (allSelected) {
    document.getElementById("btnNextPage").disabled = false;
  }

  const allSelected2 = group2.every((dupla) => {
    return document.querySelector(`.wrapper_2 input[name="${dupla}"]:checked`) || eliminated.includes(dupla);
  });

  if (allSelected2) {
    document.getElementById("btnSubmit").disabled = false;
  }
}

function reset() {
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.checked = false;
  });
  // Redefinir o estado dos botões
  document.getElementById("btnNextPage").disabled = true;
  document.getElementById("btnSubmit").disabled = true;
  checkPages();
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.remove("hid");
  toast.classList.add("vis");

  // Oculta o toast automaticamente após 3 segundos
  setTimeout(() => {
    toast.classList.remove("vis");
    toast.classList.add("hid");
  }, 3000);
}
