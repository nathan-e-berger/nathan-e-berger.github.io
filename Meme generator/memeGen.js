// create submit button event listener set to launch makeMeme on click
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {makeMeme()});

// create varaiables for text fields, image, and destination meme container
let upperText = document.getElementById('uppertext');
let lowerText = document.getElementById('lowertext');
let imgURL = document.getElementById('imageURL');
let memes = document.getElementById('memes');

// remove last child element on page when delete button clicked
function deleteMeme () {
  memes.removeChild(memes.lastChild);
}

// clear data in all text fields
function clearData () {
  document.getElementById('form').reset();
}

function makeMeme () {
  // make container for both text fields and meme

  // send text field data to respective containers
  // assign image URL to new image variable

  // add image and text containers to meme container
  // add meme to meme container and clear text field data

  let memeContainer = document.createElement('memeDiv');
  let hiDiv = document.createElement('hiDiv');
  let loDiv = document.createElement('loDiv');

  hiDiv.append(upperText.value);
  loDiv.append(lowerText.value);
  let image = document.createElement('img');
  image.src = imgURL.value;

  memeContainer.append(image, hiDiv, loDiv);
  memes.appendChild(memeContainer);

  clearData();
}
