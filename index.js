// https://github.com/gophptrainings/javascript-examples/blob/master/example2.html



function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}








var finalDiv = document.getElementById("final");


function addSubmitBox() {
  var headingValue = document.getElementById("paraOne");

  var mainContainerVar = document.createElement("div");
  mainContainerVar.setAttribute("class", "mainContainer");
  mainContainerVar.setAttribute("id", "container_1");

  var head = '<h1>' + document.getElementById("paraOne").value + '</h1>';
  var subHead = '<h2>' + document.getElementById("paraTwo").value + '</h2>';
  var paragraph = '<p>' + document.getElementById("paraThree").value + '</p>';







  var para = head + subHead + paragraph ;


  mainContainerVar.innerHTML = para;
  finalDiv.appendChild(mainContainerVar);
  accordionSection();


};

var accordianDiv = document.getElementById("accordionPanelsStayOpenExample");




function accordionSection() {

for (i=0;i<counter;i++){
  var textBoxHobbies = document.getElementById("hobbies_"+i).value;
  if(textBoxHobbies){
    var accordianItem = document.createElement("div");
    accordianItem.setAttribute("class", "accordion-item");


    var accordOne =  `<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_${i}" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"><input class="radio-button" type="radio" name="" value=""> ${document.getElementById("hobbies_"+i).value} </button></h2>`;
    accordianItem.innerHTML = accordOne;
    accordianDiv.appendChild(accordianItem);
    accordDescriptionSection(i);

  }
}

}


// var accordionDescriptionDiv = document.getElementById("panelsStayOpen-collapseOne");

function accordDescriptionSection(countId) {

  var accordDescriptionitem = document.createElement("div");
  accordDescriptionitem.setAttribute("class", "accordion-body");


  var accordDescriptionOne = `<div id="panelsStayOpen-collapseOne_${countId}"  class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne"><div class="accordion-body"> ${document.getElementById("textDescription_"+countId).value}</div></div>`
  accordDescriptionitem.innerHTML = accordDescriptionOne;
  accordianDiv.appendChild(accordDescriptionitem);
}





var counter = 1;
var textBox = "";
var hob = document.getElementById("hob")

function addBox() {
  var div = document.createElement("div");
  div.setAttribute("class", "form-group");
  div.setAttribute("id", "box_" + counter);

  var textBox = "<input type='text' name='hobbies[]' class='myinput form-control' id='hobbies_" + counter + "'><br><textarea id='textDescription_" + counter + "' name='name' rows='5' cols='35'>write your para</textarea><br><input class='mybox' type='button' value='-' onclick='removeBox(this)'>";

  div.innerHTML = textBox;

  hob.appendChild(div);

  counter++;
}

function removeBox(ele) {
  ele.parentNode.remove();
}
