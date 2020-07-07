function openLinkedin() {
  window.open('https://www.linkedin.com/in/corbin-peters-62319b152/');
}

var projets = document.getElementById('projects');
var projectInfo = document.getElementById('project-info');
var projectMedia = document.getElementById('project-media');
var projectTitle = document.getElementById('project-title');
var projectExplination = document.getElementById('project-explination');
var imageView = document.getElementById('image-view');

for (var i=0; i<projectList.length; i++) {
  if (i == 4) {
    projects.innerHTML += '<div class="project-section-header" style="margin-top:80px;">\
                            <p>Other Projects:<p>\
                           </div>\
                           <br>';
  }
  projets.innerHTML += '<div class="project-card" onclick="showProject('+ i +');">\
                          <img class="asdf" onload="loadImage(this)" src="'+ 'images/' + projectList[i]['thumbnail'] +'"></img>\
                          <div class="project-overlay">\
                            <p>'+ projectList[i]['title'] +'</p>\
                            <p>'+ projectList[i]['description'] +'</p>\
                          </div>\
                        </div>';
}

function loadImage(el) {
  el.removeAttribute("onload");
  if (el.height >= el.width - 220) {
    el.style.width = "100%";
  } else {
    el.style.height = "100%";
    el.style.left = "50%";
    el.style.transform = "translatex(-50%)";
  }
}

// for (var i=0; i<projectList.length; i++) {
//   var x = document.getElementById('projects').childNodes[i].img[0];
//   console.log(x);
//
// }
projets.innerHTML += '<div class="footer"></div>'

function showProject(num) {
  projectInfo.style.opacity = "1";
  projectInfo.style.pointerEvents = "all";

  projectMedia.innerHTML = "";
  projectTitle.innerHTML = projectList[num]['title'];
  projectExplination.innerHTML = projectList[num]['explination'];

  // videos
  for (var i=0; i<projectList[num]["media"]["youtube"].length; i++) {
    projectMedia.innerHTML += '<div class="project-card">\
                                <iframe width="400" height="300" src="https://www.youtube.com/embed/'+ projectList[num]["media"]["youtube"][i] +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
                              </div>';
  }

  // images
  for (var i=0; i<projectList[num]["media"]["images"].length; i++) {
    projectMedia.innerHTML += '<div class="project-card media-image" onclick="event.stopPropagation(); showImage('+ num +', '+ i +');">\
                                <img src="images/'+ projectList[num]["media"]["images"][i] +'" onload="loadImage(this);"></img>\
                              </div>';
  }

  // links
  if (Object.keys(projectList[num]["media"]["links"]).length > 0) {
    for (let [key, value] of Object.entries(projectList[num]["media"]["links"])) {
      projectMedia.innerHTML += '<div class="project-card" onclick="event.stopPropagation();">\
                                  <img onload="loadImage(this);" src="images/'+ value +'"></img>\
                                  <a href="'+ key +'" target="_blank" class="project-overlay-media">\
                                    <i class="fas fa-external-link-alt"></i>\
                                  </a>\
                                </div>';
    }
  }

  projectMedia.innerHTML += '<div class="footer"></div>'


}
function hideProject() {
  projectInfo.style.opacity = "0";
  projectInfo.style.pointerEvents = "none";
}

function showImage(num, i) {
  imageView.style.opacity = "1";
  imageView.style.pointerEvents = "all";

  imageView.innerHTML = '<img src="images/'+ projectList[num]["media"]["images"][i] +'">';
}
function hideImage() {
  imageView.style.opacity = "0";
  imageView.style.pointerEvents = "none";
}
