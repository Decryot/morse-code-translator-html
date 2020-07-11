let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ",
               "1","2","3","4","5","6","7","8","9","0"]
  
let morseCode = [
".- ",
"-... ",
"-.-. ",
"-.. ",
". ",
"..-. ",
"--. ",
".... ",
".. ",
".--- ",
"-.- ",
".-.. ",
"-- ",
"-. ",
"--- ",
".--. ",
"--.- ",
".-. ",
"... ",
"- ",
"..- ",
"...- ",
".-- ",
"-..- ",
"-.-- ",
"--.. ",
"/ ",
".---- ",
"..--- ",
"...-- ",
"....- ",
"..... ",
"-.... ",
"--... ",
"---.. ",
"----. ",
"----- ",]

function translateIntoMorseCode(inputText) {
    var chars = [inputText.length]
    var morseCodeText = "";
    chars = Array.from(inputText)

    for (var msgChars = 0; msgChars < chars.length; msgChars++) {
        for (var letterId = 0; letterId < letters.length; letterId++) {
            if (chars[msgChars].toLowerCase() == letters[letterId]) {
                morseCodeText += morseCode[letterId];
            }
        }
    }
    return morseCodeText;
}

function onInputChange() {
    console.log("a")
    var textInput = document.getElementById("input")
    var morseCodeOutput = document.getElementById("morse-code-output")
    var morseCodeText = translateIntoMorseCode(textInput.value);

    morseCodeOutput.textContent = morseCodeText;
}