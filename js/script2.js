<<<<<<< HEAD

const apiKey = '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';
=======
const apiKey = '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';
>>>>>>> 7e8ae15ed778fa3377908078b01578f7ae3b79ba

document.getElementById('checkButton').addEventListener('click', checkSpellingAndGrammar);

async function checkSpellingAndGrammar() {
    const textInput = document.getElementById('textInput').value;

    if (!textInput) {
        console.log("working");
        alert('Please enter some text to check.');
        return;
    }

    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            prompt: `Check the following text for spelling and grammar errors:\n\n${textInput}`,
            max_tokens: 100,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        const correctedText = data.choices[0].text.trim();
        displayResults(correctedText);
    } else {
        alert('Error checking text. Please try again.');
    }
}

function displayResults(correctedText) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML=`correctedText:${correctedText}`;
}


// copy text
function copytext(){
    var copy_text=document.getElementById('results');
    copy_text.select();
    // for mobile
    copy_text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy_text.value);

}