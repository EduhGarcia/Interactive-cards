const infoDatas = document.getElementById("info-datas");
export const fillInfoCards = document.querySelectorAll("input");
export const campMandatory = document.querySelectorAll(".camp-mandatory");

export function indetificarCampoVazio(event) {
    event.preventDefault()
     
    fillInfoCards.forEach((item, index) => {
        if (item.value === "") {
            campMandatory[index].classList.add('active')
            fillInfoCards[index].classList.add('input-error')
        }
    })

    const labelActive = document.querySelectorAll(".active")

    if (labelActive.length === 0) {
        infoDatas.classList.add("tesk-completed")

        infoDatas.innerHTML =
            `<img src="./src/images/icon-complete.svg" class="img-complete" alt="Icone de complete">
             <h2 class="title-complete">Thank you!</h2> 
             <p class="paragrafy-complete" >We've added your card details</p>
             <button class="but-form" >Continue</button>`
    }
}

export function cardFrontNumber(inputValue, cardNumbers) {
    let valueNumbersCard = ''

    for (let i = 0; i < inputValue.length; i++) {
        valueNumbersCard += inputValue[i]

        if (i === 3 || i === 7 || i === 11) valueNumbersCard += " "
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

        for (let i = 0; i <= 18; i++) numberMeaning += valueNumbersCard[i]
        cardNumbers.innerHTML = numberMeaning
    }
}