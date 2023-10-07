const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchageIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector(".trans"),

selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "hi-IN" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});



fromText.addEventListener("keyup", () => {
    if(!fromText.value) {
        toText.value = "";
    }
});
// translate button

translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(),
    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value;
    if(!text) return;
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        data.matches.forEach(data => {
            if(data.id === 0) {
                toText.value = data.translation;
            }
        });
        toText.setAttribute("placeholder", "Translation");
    });
});
// copy text

// icons.forEach(icon => {
//     icon.addEventListener("click", ({target}) => {
//         if(!fromText.value || !toText.value) return;
//         if(target.classList.contains("fa-copy")) {
//             if(target.id == "from") {
//                 navigator.clipboard.writeText(fromText.value);
//             } else {
//                 navigator.clipboard.writeText(toText.value);
//             }
//         } 
//     });
// });
// function copytext(){
//     var copy_text=document.getElementById('results');
//     copy_text.select();
//     // for mobile
//     copy_text.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(copy_text.value);

// }