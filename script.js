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

const container = document.querySelector(".container");
const loading = document.querySelector(".loading");

duplas.forEach((dupla, idx) => {
  if (idx < 6) {
    container.innerHTML += `
    <div class="row">
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
      container.innerHTML += `
        <div class="row" style='justify-content:end'>
            <button type="button" class='custom-button' onclick='next_page()'>
            </button>
        </div>
        `;
    }
  } else {
    container.innerHTML += `
        <div class="row hidden">
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
        container.innerHTML += `
        <div class="row hidden" style='justify-content:end'>
            <button type="submit" class='custom-button'>
            </button>
        </div>
        `;
    }
  }
});

const scriptGoogle = 'https://script.google.com/macros/s/AKfycbwR_2mGGgIQnPlu6DzGPIFsTmU6DY8VOSty4alVEtFnSd_ruz6-OhWKHYcE9GRkgcM/exec'
const form = document.forms['form'];

form.addEventListener('submit', (e) => {
    loading = document.querySelector(".loading").classList.remove("hidden");
    e.preventDefault()
    fetch(scriptGoogle, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response =>{
        alert('Dados enviados com sucesso!',response)
        form.reset();
        next_page(); 
    })
    .catch(error=>{
        console.error('Erro no Envio dos dados!',error)
    })
    .finally(() => {
        loading = document.querySelector(".loading").classList.add("hidden");
    })  
})

function next_page(){
    const elements = document.querySelectorAll(".row");
    elements.forEach((element) => {
        element.classList.toggle("hidden");
    })   

}
