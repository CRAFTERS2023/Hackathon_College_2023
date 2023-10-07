const apiKey = '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';

document.getElementById('checkButton').addEventListener('click', checkSpellingAndGrammar);

async function checkSpellingAndGrammar() {
    const textInput = document.getElementById('textInput').value;

    if (!textInput) {
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