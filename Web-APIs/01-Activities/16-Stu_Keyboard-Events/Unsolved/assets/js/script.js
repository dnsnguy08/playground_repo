var keyPress = document.querySelector('#key');
var keyCode = document.querySelector('#code');

function keydownAction(event) {
  // TODO: Complete keydown function
  // Access value of pressed key with key property
  document.querySelector('#status').innerHTML = "KEYDOWN Event";
  // Access value of pressed key with key property
  var key = event.key.toLowerCase();
  var code = event.code;
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
  );
  if (alphabetNumericCharacters.includes(key)) {
    keyPress.textContent = key;
    keyCode.textContent = code;
      }
    }

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
