function CopyCripBoard() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

// A simple hash function for the purpose of this CTF.
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash;
}


// The correct hashed keyword
// For this example, the keyword is "ABDC".
const correctHash = simpleHash("N-CTF{Welcome_to_CTF}");

function checkKeyword() {
    const input = document.getElementById("userInput").value;
    const hashedInput = simpleHash(input);
    const messageDiv = document.getElementById("message");

    if (hashedInput === correctHash) {
        const successMessage = `
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <p>おめでとうございます！正解です！</p>
                <hr>
                <p class="mb-0">次の問題に進みましょう!</p>
            </div>
			<button type="button" class="btn btn-outline-primary">
				<a href="./Level2.html">Next</a>
			</button>
        `;
        messageDiv.innerHTML = successMessage;
    } else {
        const NotCorrect = `
			<p class="text-start fs-3">Not Correct!<p>
		`;
        messageDiv.innerHTML = NotCorrect;
    }
}

const correctHash2 = simpleHash("N-CTF{Ceaser_Crypto_is_fun}");
function checkKeyword2() {
    const input = document.getElementById("userInput").value;
    const hashedInput = simpleHash(input);
    const messageDiv = document.getElementById("message");

    if (hashedInput === correctHash2) {
        const successMessage = `
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <p>おめでとうございます！正解です！</p>
                <hr>
                <p class="mb-0">すべてクリア！</p>
            </div>
        `;
        messageDiv.innerHTML = successMessage;
    } else {
        const NotCorrect = `
			<p class="text-start fs-3">Not Correct!<p>
		`;
        messageDiv.innerHTML = NotCorrect;
    }
}



