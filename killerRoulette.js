const killerForm = document.getElementById('form')
const killerButtom = document.getElementById('killerButtom')
const resultContainer = document.getElementById('resultContainer')
let chosenKillers = []

killerButtom.addEventListener('click', ()=>{
    document.getElementById('logo').innerHTML = ''
    resultContainer.innerHTML = ''
    
    let content = '<h5>Choose your killers</h5>'
    
    killersObject.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
                if (key === 'id'){
                content += "<label id="+value+"><input type='checkbox' class='killerCheckbox' id="+value+">"
                }
                if (key === 'name'){
                content += "<span>"+value+"</span></label><br>"
                }
        });
    })
    killerForm.innerHTML = content+"<br> <a class='waves-effect waves-red btn red darken-4' id='chosenKillersButtom'>Random a killer!</a>"

    chosenKillersButtom.addEventListener('click', ()=>{
        chosenKillers = []

        Object.keys(killerForm.elements).forEach(killer => {
            if (killerForm[killer].checked === true){
                chosenKillers.push(killersObject[killerForm[killer].id].name)
            }
        });

        ownedKiller = chosenKillers[Math.floor(Math.random() * chosenKillers.length)]

        ownedKillerName = document.createElement('h3')
        ownedKillerName.textContent = ownedKiller
     
        ownedKillerImg = document.createElement('img')
        ownedKillerImg.setAttribute('src','imgs/killers/'+ownedKiller+'.webp')
        
        resultContainer.appendChild(ownedKillerName)
        resultContainer.appendChild(ownedKillerImg)

        killerForm.innerHTML = ""
    })

    
})
