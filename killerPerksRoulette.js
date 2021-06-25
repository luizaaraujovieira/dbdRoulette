const killerPerksButtom = document.getElementById('killerPerksButtom')
let chosenKillerPerks = []

killerPerksButtom.addEventListener('click', ()=>{
    document.getElementById('logo').innerHTML = ''
    resultContainer.innerHTML = ''
    
    let content = "<h5>Choose your killer's perks</h5>"
    
    killerPerksObject.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
                if (key === 'id'){
                content += "<label id="+value+"><input type='checkbox' class='killerPerkCheckbox' id="+value+">"
                }
                if (key === 'name'){
                content += "<span>"+value+"</span></label><br>"
                }
        });
    })
    killerForm.innerHTML = content+"<br> <a class='waves-effect waves-red btn red darken-4' id='chosenKillerPerksButtom'>Random a perk!</a>"

    chosenKillerPerksButtom.addEventListener('click', ()=>{
        chosenKillerPerks = []

        Object.keys(killerForm.elements).forEach(perk => {
            if (killerForm[perk].checked === true){
                chosenKillerPerks.push(killerPerksObject[killerForm[perk].id].name)
            }
        });

        ownedPerk = getRandomSubarray(chosenKillerPerks,4)
        ownedPerkName = document.createElement('h3')
        ownedPerkName.textContent = ownedPerk.map(function(perk) {return ' '+perk})
        resultContainer.appendChild(ownedPerkName)

        ownedPerk.forEach(perk => {
            ownedPerkImg = document.createElement('img')
            ownedPerkImg.setAttribute('src','imgs/killerPerks/'+perk+'.webp')
            resultContainer.appendChild(ownedPerkImg)
        })


        killerForm.innerHTML = ""
    })

    
})