const projects = [
  {
    "title": "AR for Firefighters",
    "year": "2020 (WIP)",
    "location": "CU Boulder",
    "explination":
      "I am currently working on a big research project for the IRON Lab at CU Boulder. The project's main focus is to help firefighters interact with each other as well as drones in massive fires. There are two versions of this app: one for the command center as well as for the firefighters out in the field. I am having a lot of fun with this project because of how much I get to draw ideas from science fiction. For example, I made a remake of the map hologram from the command center of Westworld. (Prototype video down below) We have plans to add in lots of cool and unique ways to interact/command drones from both views. We plan to publish a paper by the end of the semester, so I am really excited.",
    "media": {
      "youtube": [
        "utvrEp7TIqA"
      ],
      "images": {
        "http://atlas.colorado.edu/iron/": "images/iron-lab.jpg"
      }
    }
  },
  {
    "title": "VR Keyboards",
    "year": "2020",
    "location": "CU Boulder",
    "explination":
      "Over Thanksgiving I bought an Oculus Quest because of the announced link and hand tracking capabilities. A month or so later, the hand tracking came out and I messed around with the Oculus Integration package for Unity. Something that I had wanted to see in VR for a long time was a good hand tracking keyboard. I made 5 keyboards in total, with the majority of them being tree based, similar to the markup menus seen in Maya. The rest were typical keyboards, but after using them I realized they don't work well because there are no haptics.",
    "media": {
      "youtube": [
        "Kh9HxFriJAg"
      ],
      "images": {
      }
    }
  },
  {
    "title": "Oculus Go Hand Tracking",
    "year": "2019",
    "location": "CU Boulder",
    "explination":
      "Around the same time that Oculus announced that hand tracking would be coming to the Quest, I was developing hand tracking for the Go. Using a Leap Motion and Pion, a WebRTC Golang library, I was able to make it work. There is almost no visible latency, which is why I like my implementation of WebRTC so much. A video of a demo with a keyboard is available down below as well as a link to the GitHub repo.",
    "media": {
      "youtube": [
        "B1bTTb_H4ao"
      ],
      "images": {
        "https://github.com/zer0grand/go-hand-tracking": "images/go-tracking.jpg"
      }
    }
  },
  {
    "title": "Oculus VR & Arduino",
    "year": "2019",
    "location": "CU Boulder",
    "explination":
      "Fall 2019 I took a required class for my major called Object. The course was focused on how to use microcontrollers like the Arduino, along with how to make circuts with different input/outputs. On many of my projects, I ended up going above and beond the requirements. I was very interested in integrating an Arduino with VR. I ended up doing two main projects. The first one was my own controller and game on an Oculus Go, and the second one was a utility to scan a room with LIDAR and view it in VR (in real time). I have documentation of both projects on YouTube below.",
    "media": {
      "youtube": [
        "o9phocbsioA",
        "W8sXY-P4k1I"
      ],
      "images": {
      }
    }
  },
  {
    "title": "SGNP Network & Demo",
    "year": "2019",
    "location": "Speech Graphics (Edinburgh, UK)",
    "explination":
      "Over the summer I was extremely fortunate to work at Speech Graphics. The company is based in Edinbugh, Scotland, but I spent my time between the office in Silicon Valley and Scotland. Speech Graphics works on automated facial animation, and they are very well known in the gaming industry since the software is used in almost every major AAA game. While I was there, I worked on the demo app as well as the Speech Graphics Network Platform (SGNP). I worked on the demo app in Unity with C# and I worked on the network platform in C. One of the main reasons I enjoyed working on the projects I did was because of John and Attila, my supervisors, as well as Dimitrios, a coworker. I ask a lot of questions, but they were always there with answers and never got tired of talking to me. I had such a fun time working that I even had a 101.5 hour work week to meet an investor meeting deadline! Speech Graphics is listed as the best Scottish startup of the year- link below.",
    "media": {
      "youtube": [
      ],
      "images": {
        "https://www.speech-graphics.com/": "images/speech-graphics.jpg",
        "https://lnkd.in/drzNnt7": "images/speech-graphics-award.jpg"
      }
    }
  },
  {
    "title": "VR Mocap Painting",
    "year": "2019",
    "location": "CU Boulder",
    "explination":
      "For my third semester at CU Boulder, I had an independent study with my lab's supervisor, Daniel Leithinger. I wanted to use the new motion capture studio that we had recently aquired. It has real time streaming capabilities, and I could stream the data to Unity. At first, I wanted to create a Sketchup-like VR app, where you can draw on a 2d plane and it interprets the position into 3d space infront of the user. While I was able to make that mechanic, I ended up going for a more tilt-brush like app in the end. The most exciting part about this to me was designing the UI/UX for this app. UI/UX is still uncharted design territorry, since up until now everything has almost all been two dimentional. I came up with a modular way to create three dimentional marking menus for different tools in my application (similar to those in Autodesk Maya). This way, a user pressed a button and was able to quickly make a gesture to equip a tool. One of the other cool parts of the app was a custom 3d color picker I made. Link to a demo coming soon!",
    "media": {
      "youtube": [
      ],
      "images": {
        "https://github.com/zer0grand/mocap-modeling": "images/vr-paint.jpg"
      }
    }
  },
  {
    "title": "Yodlee Demo App",
    "year": "2018",
    "location": "Yodlee (Redwood City, CA)",
    "explination": "I interned at Envestnet Yodlee over summer 2018. There, I sharpened my HTML/CSS/JS skills, as well as learned how to do backend work with Django. I also learned a lot about how the internet works, and became really good with Postman. At Yodlee, I developed a demo app using their financial tech API. I also did a lot of documentation reform for both the API as well as their general website. I had a lot of fun because of my awesome mentors Karun, Hiren, and Apoorv.",
    "media": {
      "youtube": [
      ],
      "images": {
        "https://developer.yodlee.com/": "images/yodlee.jpg"
      }
    }
  },
  {
    "title": "Project Skywave",
    "year": "2018",
    "location": "CU Boulder",
    "explination":
      "Project Skywave was my project during my first semester at CU. During my general engineering class, a group of me and 4 other students worked on a theory I had come up with. I found it diffuclut to come up with a project at first, since the class focused on designing products for impoverished areas/3rd world countries. Everyone else in the class came up with some ideas more hardware related than software, but I wanted to work on software. Because of this, I came up with a theory for blanketed internet access for impoverished areas. Using two Raspberry Pi's, some radio transmitters/recievers, and some physics I had found out about, we built a miniature scale skywave. A skywave is a type of light wave that bounces off of atmosphere reflecting down into another location on earth. I had figured out that you can bounce a certain frequency of radio waves off of ionized substances, like the ionosphere. Because we didnt have the budget for huge equipment, we used tinfoil to boucnce our radio waves off of, posing as the ionosphere. We came up with our own data transmission protocol, and was able to send text files from one Pi to another. With this, my team was given the award of best project in the class.",
    "media": {
      "youtube": [
        "GeA4RCLiSSA"
      ],
      "images": {
      }
    }
  },
  {
    "title": "Space Elevator",
    "year": "2017",
    "location": "Lydian Academy",
    "explination":
      "For my highschool capstone, I wanted to show off my Autodesk Maya skills that I had been learning for the previous year or so. I asked my teacher, Nate, how I could create some science/math project using the application. Together we brainstormed ideas, and came up with interplanetary travel. We quickly realized the fuel to wait ratio problem. After loads of reaserch, we came up with the idea of slingshotting a pod between planets. Originally, we thought of building huge      gyroscopes around planes, and spinning them to sling the pods in different direcitons. Then, we found out about space elevators. To see the outcome of my capstone, watch the presentation below.",
    "media": {
      "youtube": [
        "OPrTtCALV_Y"
      ],
      "images": {
      }
    }
  },
];

var chevron = true;
const projectList = document.getElementById("project-list");
for (var i=0; i<projects.length; i++) {
  projectList.innerHTML += '<div onmouseover="showProject('+i+');">0'+(i+1)+'</div>';
}
showProject(0);
hideProjectText();

function getTextDistance() {
  return (window.innerHeight * 0.01 * -34) - (document.getElementById("project-explination").clientHeight)*.5;
}
function removeElement(elementId) {
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

function showProject(num) {
  document.getElementById("project-title").innerHTML = "<p>" + projects[num]["title"] + "</p>";
  document.getElementById("project-year").innerHTML = "<p>&nbsp" + projects[num]["year"] + "</p>";
  document.getElementById("project-location").innerHTML = "<p>&nbsp" + projects[num]["location"] + "</p>";
  document.getElementById("project-explination").innerHTML = '<div id="project-explination-cover"></div><p>' + "&nbsp".repeat(8) + projects[num]["explination"] + "</p>";
  for (var i=0; i<projects.length; i++) {
    document.getElementById("project-list").children[i].style = "";
  }
  document.getElementById("project-list").children[num].style = "border-color: var(--text-color); color: var(--text-color); font-weight:var(--font-highlight-weight);";

  // media
  document.getElementById("media").innerHTML = "";
  for (var i=0; i<projects[num]["media"]["youtube"].length; i++) {
    document.getElementById("media").innerHTML += '<iframe width="280" height="157" src="https://www.youtube.com/embed/'+ projects[num]["media"]["youtube"][i] +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  }
  if (Object.keys(projects[num]["media"]["images"]).length > 0) {
    for (let [key, value] of Object.entries(projects[num]["media"]["images"])) {
      document.getElementById("media").innerHTML += '<a href="'+ key +'" target="_blank" onmouseenter="linkIn(this);" onmouseleave="linkOut(this);"><div class="link-warning">Website</div><img src="'+ value +'"></a>';
    }
  }
}

function linkIn(el) {
  el.firstChild.style = "opacity: 1;";
}
function linkOut(el) {
  el.firstChild.style = "opacity: 0;";
}

var mediaTimeout;
function showProjectText() {
  if (chevron) {
    document.getElementById("action-indicator").style = "opacity: 0;"
    setTimeout(function () {
      removeElement("action-indicator");
    }, 500);
    chevron = false;
  }

  mediaTimeout = setTimeout(function () {
    document.getElementById("project-lower-hitbox").setAttribute("onmouseleave", "");
    document.getElementById("project-lower-hitbox").setAttribute("onmouseenter", "");
    document.getElementById("project-lower-hitbox").style = "pointer-events: none;";
    document.getElementById("project-lower-media").setAttribute("onmouseleave", "hideProjectText();");
  }, 500);

  // corner image
  document.getElementById("corner-image").style = "opacity: .05; z-index: -1;";
  // text
  document.getElementById("project-explination").style = "top: " + getTextDistance() + "px;"; // had to do it this way because safari cant render calc D:<
  document.getElementById("project-explination-cover").style = "opacity: 0;";
  document.getElementById("project-description").style = "transform: translateX(-40px); opacity: 0;";
  document.getElementById("project-title").style = "transform: translateX(40px); opacity: .1;";
  // media
  document.getElementById("project-lower-media").style = "bottom: 0;";
}
function hideProjectText() {
  clearTimeout(mediaTimeout);
  // corner image
  document.getElementById("corner-image").style = "opacity: 1; z-index: 2;";
  // text
  document.getElementById("project-explination").style = "top:0;";
  document.getElementById("project-explination-cover").style = "opacity: 1;";
  document.getElementById("project-description").style = "transform: translateX(0px); opacity: 1;";
  document.getElementById("project-title").style = "transform: translateX(0px); opacity: 1;";
  // media
  document.getElementById("project-lower-hitbox").style = "pointer-events: all;";
  document.getElementById("project-lower-media").style = "bottom: calc(-1 * var(--media-bar-height));";
  document.getElementById("project-lower-media").setAttribute("onmouseleave", "");
  document.getElementById("project-lower-hitbox").setAttribute("onmouseleave", "hideProjectText();");
  document.getElementById("project-lower-hitbox").setAttribute("onmouseenter", "showProjectText();");
}

function openLinkedin() {
  window.open("https://www.linkedin.com/in/corbin-peters-62319b152/");
}
function openHome() {
  window.location.href = "index.html";
}
