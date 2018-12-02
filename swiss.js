function startTournament() {
  console.log('active');
  var inputtedText = document.getElementById('textAreaInput').value;
  console.log(inputtedText);

  var inputList = inputtedText.split('\n');
  console.log(inputList);
  var outputList = '';

  for (var i = 0; i < inputList.length; i++) {
    outputList = outputList + `${i}:` + inputList[i] + '\n';
  }


  document.getElementById('outputArea').innerText = outputList;
}

// if(document.cookie.length > 0){
//   console.log("there is a cookie");
// } else {
//   document.cookie = "name=test expires=Fri, 31 Dec 9999 23:59:59 GMT";
//   console.log("a cookie has been set");
// }


var data = {a:1, b:2, c:3};
var json = JSON.stringify(data);
var blob = new Blob([json], {type: "application/json"});
var url  = URL.createObjectURL(blob);

var a = document.createElement('a');
a.download    = "tournament2.smog";
a.href        = url;
a.textContent = "Download tournament file";

document.getElementById('outputArea').appendChild(a);

function loadTournament() {
  var loadedFile = document.getElementById('files');
  var data = loadedFile.files[0];
  fr = new FileReader();
  fr.onload = function() {;
    console.log("read complete");
    console.log(fr.result);
  }
  fr.readAsText(data);
}
