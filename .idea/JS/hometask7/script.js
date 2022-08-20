function randomTextBtnClick() {
  let element = document.getElementsByTagName("li");
  for (i = 0; i < element.length; i++) {
    element[i] = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    element[i].innerText = Math.random().toString(36).substring(5);
  }
}

function textVanish() {
  let element = document.querySelector('#Text');
  element.style.display = 'none';
}

function btnVanish() {
  let element = document.querySelector('#vanishBtn')
  element.style.display = 'none';
}

function textClickToShow() {
  let element = document.querySelector("#text-show");
  element.style.display = 'block';

}
