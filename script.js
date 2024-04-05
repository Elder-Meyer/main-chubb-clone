// Mostrar el contenido del tab seleccionado
function openTab(event, tabName, sectionName) {
  var i, tabcontent, sectioncontent;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  sectioncontent = document.getElementsByClassName("sectioncontent");
  for (i = 0; i < sectioncontent.length; i++) {
    sectioncontent[i].style.display = "none";
  }

  document.getElementById(sectionName).style.display = "block";
  document.getElementById(tabName).style.display = "block";

  // Eliminar la clase 'active' de todos los tablinks
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Agregar la clase 'active' al tablink seleccionado
  event.currentTarget.classList.add("active");
}

openTab(event, "tab1", "section1");