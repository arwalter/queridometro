const duplas = ['aline_vinicius','arleane_marcelo','camilla_thamiris','diego_daniele','diogo_vilma','edilberto_raissa']

const container = document.querySelector('.container')

duplas.forEach(dupla => {
    container.innerHTML +=`
    <div class="row">
        <img class="avatar" src="/resource/${dupla}.png" alt="avatar">
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
    </div>`
})










// const scriptGoogle = 'https://script.google.com/macros/s/AKfycbwR_2mGGgIQnPlu6DzGPIFsTmU6DY8VOSty4alVEtFnSd_ruz6-OhWKHYcE9GRkgcM/exec'
// const form = document.forms['form'];

// form.addEventListener('submit', (e) => {
    
//     e.preventDefault()

//     fetch(scriptGoogle, {
//         method: 'POST',
//         body: new FormData(form)
//     })
//     .then(response =>{
//         alert('Dados enviados com sucesso!',response)
//         form.reset();
//     })
//     .catch(error=>{
//         console.error('Erro no Envio dos dados!',error)
//     })
// })


