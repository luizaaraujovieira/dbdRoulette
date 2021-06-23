const killerForm = document.getElementById('form')
const killerButtom = document.getElementById('killerButtom')
const perks = ["Barbecue & Chilli", "Hex: Ruin", "Tinkerer", "Pop Goes The Weasel", "Corrupt Intervention", "Discordance", "Starstruck", "A Nurse's Calling", "Thrilling Tremors", "Save The Best For Last", "Hex: Devour Hope", "Infectious Fright", "Hex: Undying", "Lethal Pursuer", "Make Your Choice", "Sloppy Butcher", "Surveillance", "Hex: No One Escapes Death", "Bamboozle", "Monitor & Abuse", "Surge", "I'm All Ears", "Hex: Haunted Ground", "Whispers", "Enduring", "Thanatophobia", "Brutal Strength", "Hex: Crowd Control", "Eruption", "Oppression", "Bitter Murmur", "Blood Warden", "Dragon's Grip", "Stridor", "Trail of Torment", "Spirit Fury", "Rancor", "Lightborn", "Remember Me", "Hex: Retribution", "Shadowborn", "No Way Out", "Play With Your Food", "Dark Devotion", "Spies From The Shadows", "Forced Penance", "Franklin's Demise", "Distressing", "Hysteria", "Hex: Thrill of the Hunt", "Nemesis", "Hex: The Third Seal", "Iron Maiden", "Agitation", "Deathbound", "Overcharge", "Hex: Huntress Lullaby", "Dying Light", "Fire Up", "Knock Out", "Coup de Grâce", "Dead Man's Switch", "Blood Echo", "Unnerving Presence", "Coulrophobia", "Hex: Blood Favour", "Mindbreaker", "Mad Grit", "Hangman's Trick", "Iron Grasp", "Deerstalker", "Hoarder", "Zanshin Tactics", "Bloodhound", "Unrelenting", "Predator", "Cruel Limits", "Gearhead", "Furtive Chase", "Beast Of Prey", "Insidious", "Territorial Imperative", "Overwhelming Presence", "Monstrous Shrine"]
const killers = ['Trapper','Wraith','Hillbilly','Nurse','Huntress','Shape','Hag','Doctor','Cannibal','Nightmare','Pig','Clown','Spirit','Legion','Plague','GhostFace','Demogorgon','Oni','Deathslinger','Executioner','Blight','Twins','Trickster','Nemesis']
const freeKillers = ['Trapper','Wraith','Hillbilly','Nurse', 'Huntress']
const resultContainer = document.getElementById('resultContainer')
let chosenKillers = []

killerButtom.addEventListener('click', ()=>{
    document.getElementById('logo').innerHTML = ''
    resultContainer.innerHTML = ''
    
    let content = '<h5>Choose your killers</h5>'
    
    killers.forEach(killer => {
        if (freeKillers.includes(killer) === true){
        content += "<label id="+killer+"><input type='checkbox' checked='checked' class='killerCheckbox' id="+killer+"><span>"+killer+"</span></label><br>"
        }
        else{
            content += "<label id="+killer+"><input type='checkbox' class='killerCheckbox' id="+killer+"><span>"+killer+"</span></label><br>"
        }
    });
    killerForm.innerHTML = content+"<br> <a class='waves-effect waves-red btn red darken-4' id='chosenKillersButtom'>Random a killer!</a>"

    chosenKillersButtom.addEventListener('click', ()=>{
        chosenKillers = []

        Object.keys(killerForm.elements).forEach(killer => {
            if (killerForm[killer].checked === true){
                chosenKillers.push(killerForm[killer].id)
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