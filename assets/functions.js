/* 
Helping Functions
*/

// Getting a particular Thesis
async function fetchThesis(val) {
    await db.collection('thesis').doc(val).get().then((doc) => {
        if (doc.exists) {
            questionHeader.innerText = doc.data().title;
            questionText.innerText = doc.data().thesis;
            loading();
        } else {
            // doc.data() will be undefined in this case
            alert("Leider ist ein Fehler aufgetreten :-( ");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

// Getting the count of Thesis Array from Firestore
function count() {
    db.collection('thesis').get().then(snapshot => {
        questionCount.innerText = snapshot.size;
    });
}

// Adding the Sunflowers for Session
updateSunflowers = (category) => {
    sunflowers = sunflowers + parseInt(slider.value)
    output.innerHTML = sunflowers
    if (stats[`${category}`]) {
        var valueNew = parseInt(stats[`${category}`]['value']) + parseInt(slider.value);
        var valueMax = parseInt(stats[`${category}`]['max']) + 100
        stats[`${category}`]['value'] = valueNew
        stats[`${category}`]['max'] = valueMax
    } else {
        stats[`${category}`] = {
            'value': parseInt(slider.value),
            'max': 100
        }
    }
}

// Evaluate the Users Answers

function evaluateGreen() {
    console.log('Evaluate')
    Object.entries(stats).map(item => {
        var percent = (item[1].value / item[1].max) * 100
        if (item[1].value <= (item[1].max / 2)) {
            var resultLowContainer = document.createElement('div')
            resultLowContainer.classList.add('resultContainer')
            var lowCell = document.createElement('div')
            lowCell.classList.add('lowCell')
            lowCell.style.width = `${percent}%`
            var nameSpan = document.createElement('span')
            nameSpan.classList.add('nameSpan')
            nameSpan.innerHTML = `<h4>${item[0]}: ${percent.toFixed(0)}%</h4>`
            lowCell.appendChild(nameSpan)
            resultLowContainer.appendChild(lowCell)
            resultSection.appendChild(resultLowContainer)
        } else if (item[1].value < item[1].max && item[1].value >= (item[1].max / 2)) {
            var resultMidContainer = document.createElement('div')
            resultMidContainer.classList.add('resultContainer')
            var MidCell = document.createElement('div')
            MidCell.classList.add('MidCell')
            MidCell.style.width = `${percent}%`
            var nameSpan = document.createElement('span')
            nameSpan.classList.add('nameSpan')
            nameSpan.innerHTML = `<h4>${item[0]}: ${percent.toFixed(0)}%</h4>`
            MidCell.appendChild(nameSpan)
            resultMidContainer.appendChild(MidCell)
            resultSection.appendChild(resultMidContainer)
        } else if (item[1].value == item[1].max) {
            var resultHighContainer = document.createElement('div')
            resultHighContainer.classList.add('resultContainer')
            var HighCell = document.createElement('div')
            HighCell.classList.add('HighCell')
            HighCell.style.width = `${percent}%`
            var nameSpan = document.createElement('span')
            nameSpan.classList.add('nameSpan')
            nameSpan.innerHTML = `<h4>${item[0]}: ${percent.toFixed(0)}%</h4>`
            HighCell.appendChild(nameSpan)
            resultHighContainer.appendChild(HighCell)
            resultSection.appendChild(resultHighContainer)

        }
    })
}