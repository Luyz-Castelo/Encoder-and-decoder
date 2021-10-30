function main() {
  const messageToEncode = document.querySelector('.message-to-encode');
  const messageToDecode = document.querySelector('.message-to-decode');
  const keyUsed = document.querySelector('.key-used');
  const buttonEncode = document.querySelector('.encode-message');
  const buttonDecode = document.querySelector('.decode-message');

  buttonEncode.addEventListener('click', () => {
    messageToDecode.value = encodeMessage(messageToEncode.value);
  });

  buttonDecode.addEventListener('click', () => {
    messageToEncode.value = decodeMessage(messageToDecode.value, keyUsed.value);
  });
  
}

function encodeMessage(messageToEncode) {
  const specialCharacters = ['.', ',', ':', '!', '?', ' ']
  const key = Math.round(Math.random() * (10 - 1) + 1);
  let encodedMessage = '';

  for (let i = 0; i < messageToEncode.length; i++) {
    // se NÃO for um caracter especial
    if(!specialCharacters.includes(messageToEncode[i])) {
      const encodedCharacter = String.fromCharCode(messageToEncode.charCodeAt(i) - key)

      encodedMessage += encodedCharacter;
    } else {
      encodedMessage += messageToEncode[i];
    }
  }

  encodedMessage += `
  key ` + key
  
  console.log(encodedMessage)
  return encodedMessage;
}

function decodeMessage(messageToDecode, key) {
  key = Number(key) || 1;
  const specialCharacters = ['.', ',', ':', '!', '?', ' ']
  let decodedMessage = '';

  for (let i = 0; i < messageToDecode.length; i++) {
    // se NÃO for um caracter especial
    if(!specialCharacters.includes(messageToDecode[i])) {
      const decodedCharacter = String.fromCharCode(messageToDecode.charCodeAt(i) + key)

      decodedMessage += decodedCharacter;
    } else {
      decodedMessage += messageToDecode[i];
    }
  }
  
  return decodedMessage;
}

main();