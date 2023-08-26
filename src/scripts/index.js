const infoDatas = document.getElementById("info-datas");
const namePeopleCard = document.getElementById("namePeopleCard");
const cardNumbers = document.getElementById("numbers-card");
const DateCard = document.getElementById("DateCard");
const cvc = document.getElementById("securityCode");
const butConfirm = document.getElementById("but-confirm");
const dateInvalid = document.getElementById("date-invalid");
const invalidName = document.getElementById("invalid-name");

const fillInfoCards = document.querySelectorAll("input");
const campMandatory = document.querySelectorAll(".camp-mandatory");

fillInfoCards.forEach((element, index) => {

    element.addEventListener("change", () => {
        if (element.value !== '') {
            campMandatory[index].classList.remove('active')
            fillInfoCards[index].classList.remove('input-error')

            if (index === 0) {

                if (isNaN(element.value)) {
                    invalidName.classList.remove('active')
                    namePeopleCard.innerHTML = element.value
                } else {
                    invalidName.classList.add('active')
                }

            } else if (index === 1) {
                let valueNumbersCard = ''

                for (let i = 0; i < element.value.length; i++) {
                    valueNumbersCard += element.value[i]
                    if (i === 3 || i === 7 || i === 11) {
                        valueNumbersCard += " "
                    }
                }

                if (valueNumbersCard.length <= 19) {
                    const quantifiedNumbersCard = 19 - valueNumbersCard.length

                    for (let i = 0; i < quantifiedNumbersCard; i++) {
                        if (valueNumbersCard.length == 4 || valueNumbersCard.length == 9 || valueNumbersCard.length == 14) {

                            valueNumbersCard += ' '

                        } else {
                            valueNumbersCard += "0"
                        }
                    }

                    cardNumbers.innerHTML = valueNumbersCard
                } else {
                    let numberMeaning = ''
                    for (let i = 0; i <= 18; i++) {
                        numberMeaning += valueNumbersCard[i]
                    }

                    cardNumbers.innerHTML = numberMeaning
                }

            } else if (index === 2) {

                if (element.value <= 0 || element.value > 12) {
                    dateInvalid.classList.add('active')
                } else {
                    dateInvalid.classList.remove('active')

                    if (fillInfoCards[3].value === '') {
                        DateCard.innerHTML = element.value + "/00"
                    } else {
                        DateCard.innerHTML = element.value + `/${fillInfoCards[3].value}`
                    }
                }

            } else if (index === 3) {
                const innerActualy = DateCard.innerHTML[0] + DateCard.innerHTML[1]
                DateCard.innerHTML = innerActualy + `/${element.value}`

            } else if (index === 4) {
                if (element.value.length <= 3) {

                    if (element.value.length !== 3) {
                        cvc.innerHTML = element.value + "0"
                    } else {
                        cvc.innerHTML = element.value
                    }

                } else {
                    let cvcNumber = ""
                    for (let i = 0; i < element.value.length; i++) {

                        if (i <= 2) {
                            cvcNumber += element.value[i]
                            cvc.innerHTML = cvcNumber
                        }
                    }
                }
            }
        } else {

            if (index === 0) {
                invalidName.classList.remove('active')
                namePeopleCard.innerHTML = 'JANE APPLESEED'

            } else if (index === 1) {
                cardNumbers.innerHTML = '0000 0000 0000 0000'

            } else if (index === 2) {
                
                if (fillInfoCards[3].value !== '') {
                    DateCard.innerHTML = '00/' + fillInfoCards[3].value
                } else {
                    DateCard.innerHTML = '00/00'
                }

            } else if (index === 3) {

                if (fillInfoCards[2].value !== '') {
                    DateCard.innerHTML = fillInfoCards[2].value + '/00'
                } else {
                    DateCard.innerHTML = '00/00'
                }

            } else if (index === 4) {
                cvc.innerHTML = '000'
            }
        }
    })
});

butConfirm.addEventListener("click", (event) => {
    event.preventDefault()
    let count = 0

    fillInfoCards.forEach((item, index) => {

        if (item.value === "") {
            campMandatory[index].classList.add('active')
            fillInfoCards[index].classList.add('input-error')
            count = 1

        } else if (item.value !== "") {
            return count = 0
        }

    })

    if (count === 0) {
        infoDatas.classList.add("tesk-completed")

        infoDatas.innerHTML =
            `<img src="./src/images/icon-complete.svg" class="img-complete" alt="Icone de complete">
             <h2 class="title-complete">Thank you!</h2> 
             <p class="paragrafy-complete" >We've added your card details</p>
             <button class="but-form" >Continue</button>`
    }
})
