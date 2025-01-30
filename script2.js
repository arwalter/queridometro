const brothers = [
    "aline",
    "camilla",
    "daniele",
    "diego",
    "diogo",
    "eva",
    "gabriel",
    "giovanna",
    "gracyanne",
    "guilherme",
    "joaogabriel",
    "joaopedro",
    "joselma",
    "maike",
    "mateus",
    "renata",
    "thamiris",
    "vilma",
    "vinicius",
    "vitoria",
];

const eliminated = [
];

const wrapper_1 = document.querySelector(".wrapper_1");
const wrapper_2 = document.querySelector(".wrapper_2");
const wrapper_3 = document.querySelector(".wrapper_3");
const wrapper_4 = document.querySelector(".wrapper_4");

const loading = document.querySelector(".loading");

brothers.forEach((brother, idx) => {
  const isEliminted = eliminated.includes(brother);
  if (idx < 5) {
    wrapper_1.innerHTML += `
    <div class="row ${isEliminted ? 'eliminated':''}" onchange='checkPages()'>
        <img class="avatar" src="resource/${brother}.png" alt="avatar"/>
        <div class="icons">
    
            <label>
                <input id="planta" type="radio" name="${brother}" value="planta">
                <span  class="custom-radio"></span>
            </label>
            <label>
                <input id="vomito" type="radio" name="${brother}" value="vomito">
                <span class="custom-radio"></span>
            </label>
            <label>
                <input id="coracao_quebrado" type="radio" name="${brother}" value="coração quebrado">
                <span class="custom-radio"></span>
            </label>
            <label>
                <input id="coracao" type="radio" name="${brother}" value="coração">
                <span class="custom-radio"></span>
            </label>
            <label>
                <input id="cobra" type="radio" name="${brother}" value="cobra">
                <span class="custom-radio"></span>
            </label>
        </div>
    </div>`;
    if (idx == 4) {
      wrapper_1.innerHTML += `
      <div class="row" style='justify-content:end'>
          <button id='btnNextPage' type="button" class='custom-button' onclick="next_page('-1050px')" disabled>
          </button>
      </div>
        `;
    }
  }
  if (idx >= 5 && idx < 10){
    wrapper_2.innerHTML += `
      <div class="row ${isEliminted ? 'eliminated':''}" onchange='checkPages()'>
          <img class="avatar" src="resource/${brother}.png" alt="avatar">
          <div class="icons">
              <label>
                  <input id="planta" type="radio" name="${brother}" value="planta">
                  <span  class="custom-radio"></span>
              </label>
              <label>
                  <input id="vomito" type="radio" name="${brother}" value="vomito">
                  <span class="custom-radio"></span>
              </label>
              <label>
                  <input id="coracao_quebrado" type="radio" name="${brother}" value="coração quebrado">
                  <span class="custom-radio"></span>
              </label>
              <label>
                  <input id="coracao" type="radio" name="${brother}" value="coração">
                  <span class="custom-radio"></span>
              </label>
              <label>
                  <input id="cobra" type="radio" name="${brother}" value="cobra">
                  <span class="custom-radio"></span>
              </label>
          </div>
      </div>`;
    if (idx == 9) {
      wrapper_2.innerHTML += `
        <div class="row" style='justify-content:end'>
          <button id='btnNextPage1' type="button" class='custom-button' onclick="next_page('-2110px')" disabled>
          </button>
        </div>
        `;
    }
  }
  if (idx >= 10 && idx < 15){
    wrapper_3.innerHTML += `
      <div class="row ${isEliminted ? 'eliminated':''}" onchange='checkPages()'>
          <img class="avatar" src="resource/${brother}.png" alt="avatar">
          <div class="icons">
              <label>
                  <input id="planta" type="radio" name="${brother}" value="planta">
                  <span  class="custom-radio"></span>
              </label>
              <label>
                  <input id="vomito" type="radio" name="${brother}" value="vomito">
                  <span class="custom-radio"></span>
              </label>
              <label>
                  <input id="coracao_quebrado" type="radio" name="${brother}" value="coração quebrado">
                  <span class="custom-radio"></span>
              </label>
              <label>
                  <input id="coracao" type="radio" name="${brother}" value="coração">
                  <span class="custom-radio"></span>
              </label>
              <label>
                  <input id="cobra" type="radio" name="${brother}" value="cobra">
                  <span class="custom-radio"></span>
              </label>
          </div>
      </div>`;
    if (idx == 14) {
      wrapper_3.innerHTML += `
        <div class="row" style='justify-content:end'>
          <button id='btnNextPage2' type="button" class='custom-button' onclick="next_page('-3220px')" disabled >
          </button>
        </div>
        `;
    }
  } if(idx >= 15 ) {
    wrapper_4.innerHTML += `
      <div class="row ${isEliminted ? 'eliminated':''}" onchange='checkPages()'>
          <img class="avatar" src="resource/${brother}.png" alt="avatar">
          <div class="icons">
              <label>
                  <input id="planta" type="radio" name="${brother}" value="planta">
                  <span  class="custom-radio"></span>
              </label>
              <label>
                  <input id="vomito" type="radio" name="${brother}" value="vomito">
                  <span class="custom-radio"></span>
              </label>
              <label>
                  <input id="coracao_quebrado" type="radio" name="${brother}" value="coração quebrado">
                  <span class="custom-radio"></span>
              </label>
              <label>
                  <input id="coracao" type="radio" name="${brother}" value="coração">
                  <span class="custom-radio"></span>
              </label>
              <label>
                  <input id="cobra" type="radio" name="${brother}" value="cobra">
                  <span class="custom-radio"></span>
              </label>
          </div>
      </div>`;
    if (idx == 19) {
      wrapper_4.innerHTML += `
        <div class="row" style='justify-content:end;'>
            <button id='btnSubmit' type="submit" class='custom-button' disabled>
            </button>
        </div>
        `;
    }
  }
});

const scriptGoogle =
  "https://script.google.com/macros/s/AKfycbx5zpT5-yB61F6KSI8fplNZW2LzdyGoBEvGLXb1jqp0MNsR7s4Icjg5pWnVj-yI7m4/exec";
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
      console.log(response);
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

function next_page(pos) {
  const wrapper_1 = document.querySelector(".wrapper_1");
  wrapper_1.style.marginLeft = pos;
}

function prev_page() {
  const wrapper_1 = document.querySelector(".wrapper_1");
  wrapper_1.style.marginLeft = "0";
}

function checkPages() {
  const group1 = [
    "aline",
    "camilla",
    "daniele",
    "diego",
    "diogo",
  ];
  const group2 = [
    "eva",
    "gabriel",
    "giovanna",
    "gracyanne",
    "guilherme",
  ];
  const group3 = [
    "joaogabriel",
    "joaopedro",
    "joselma",
    "maike",
    "mateus",
    
  ];
  const group4 = [
    "renata",
    "thamiris",
    "vilma",
    "vinicius",
    "vitoria",
  ];

  const allSelected = group1.every((brother) => {
    return document.querySelector(`.wrapper_1 input[name="${brother}"]:checked`) || eliminated.includes(brother);
  });

  if (allSelected) {
    document.getElementById("btnNextPage").disabled = false;
  }

  const allSelected2 = group2.every((brother) => {
    return document.querySelector(`.wrapper_2 input[name="${brother}"]:checked`) || eliminated.includes(brother);
  });

  if (allSelected2) {
    document.getElementById("btnNextPage1").disabled = false;
  }

  const allSelected3 = group3.every((brother) => {
    return document.querySelector(`.wrapper_3 input[name="${brother}"]:checked`) || eliminated.includes(brother);
  });

  if (allSelected3) {
    document.getElementById("btnNextPage2").disabled = false;
  }

  const allSelected4 = group4.every((brother) => {
    return document.querySelector(`.wrapper_4 input[name="${brother}"]:checked`) || eliminated.includes(brother);
  });

  if (allSelected4) {
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
