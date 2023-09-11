import { indetificarCampoVazio, cardFrontNumber, 
fillInfoCards, campMandatory } from "./utilidades.js";

const namePeopleCard = document.getElementById("namePeopleCard");
const cardNumbers = document.getElementById("numbers-card");
const DateCard = document.getElementById("DateCard");
const cvc = document.getElementById("securityCode");
const butConfirm = document.getElementById("but-confirm");
const dateInvalid = document.getElementById("date-invalid");
const invalidName = document.getElementById("invalid-name");

fillInfoCards.forEach((element, index) => {
    element.addEventListener("change", () => {
        const inputValue = element.value
        const mouthValue = fillInfoCards[2].value
        const yearValue = fillInfoCards[3].value

        if (inputValue) {
            campMandatory[index].classList.remove('active')
            fillInfoCards[index].classList.remove('input-error')

            if (index === 0) {
                if (isNaN(inputValue)) {
                    invalidName.classList.remove('active')
                    namePeopleCard.innerHTML = inputValue
                } else {
                    invalidName.classList.add('active')
                    fillInfoCards[index].classList.add('input-error')
                }

            } else if (index === 1) {

                cardFrontNumber(inputValue, cardNumbers)

            } else if (index === 2) {

                if (inputValue <= 0 || inputValue > 12) {
                    dateInvalid.classList.add('active')
                    fillInfoCards[index].classList.add('input-error')
                } else {
                    dateInvalid.classList.remove('active')

                    !yearValue ? DateCard.innerHTML = inputValue + "/00" : DateCard.innerHTML = inputValue + `/${yearValue}`
                }

            } else if (index === 3) {
                const innerActualy = DateCard.innerHTML[0] + DateCard.innerHTML[1]
                DateCard.innerHTML = innerActualy + `/${inputValue}`

            } else if (index === 4) {
                if (inputValue.length <= 3) {

                    if (inputValue.length !== 3) {

                        inputValue.length === 1 ? cvc.innerHTML = inputValue + "00" 
                        : cvc.innerHTML = inputValue + "0"

                    } else {
                        cvc.innerHTML = inputValue
                    }

                } else {
                    let cvcNumber = ""

                    for (let i = 0; i < inputValue.length; i++) {
                        if (i <= 2) {
                            cvcNumber += inputValue[i]
                            cvc.innerHTML = cvcNumber
                        }
                    }
                }
            }
        } else {
            fillInfoCards[index].classList.remove('input-error')

            if (index === 0) {

                invalidName.classList.remove('active')
                namePeopleCard.innerHTML = 'JANE APPLESEED'

            } else if (index === 1) {

                cardNumbers.innerHTML = '0000 0000 0000 0000'

            } else if (index === 2) {

                dateInvalid.classList.remove('active')
                yearValue ? DateCard.innerHTML = '00/' + yearValue : DateCard.innerHTML = '00/00'

            } else if (index === 3) {

                mouthValue ? DateCard.innerHTML = mouthValue + '/00' : DateCard.innerHTML = '00/00'

            } else if (index === 4) {
                
                cvc.innerHTML = '000'
            }
        }
    })
});

butConfirm.addEventListener("click", (event) => indetificarCampoVazio(event))