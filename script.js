const ham = document.getElementById("ham");
const x = document.getElementById("x");

function hidePopup() {
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".grid-container").style.filter = "";
  document.querySelector(".toolbar").style.filter = "";
}

const otherProjects = [
  {
    name: "Multi Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: "assets/mobile/last-project-mobile.svg",
    technologies: ["css", "html", "bootstrap", "Ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    name: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "assets/mobile/project1.svg",
    technologies: ["html", "bootstrap", "Ruby"],
    liveLink: "#",
    sourceLink: "#",
  },

  {
    name: "Sample Project Number 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias",
    image: "assets/mobile/project1.svg",
    technologies: ["html", "css"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    name: "Sample Project Number 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias",
    image: "assets/mobile/project1.svg",
    technologies: ["html", "javascript", "css", "Ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    name: "Sample Project Number 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias",
    image: "assets/mobile/project1.svg",
    technologies: ["javascript", "bootstrap", "Ruby"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    name: "Sample Project Number 5",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias",
    image: "assets/mobile/project1.svg",
    technologies: ["Ruby", "html"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    name: "Sample Project Number 6",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo asperiores sit laborum totam fugit beatae earum alias",
    image: "assets/mobile/project1.svg",
    technologies: ["bootstrap"],
    liveLink: "#",
    sourceLink: "#",
  },
];

function showPopup() {
  document.querySelector(".popup").style.display = "flex";
  document.querySelector(".grid-container").style.filter = "blur(5px)";
  document.querySelector(".toolbar").style.filter = "blur(5px)";
}

/* ----------------- Building Popup (Mobile) ---------------- */

const popupSection = document.querySelector(".popup");
const popupX = document.createElement("img");
popupX.src = "assets/mobile/x.svg";
popupX.alt = "popup close button";
popupX.id = "x-popup";
popupX.onclick = hidePopup;
const popupName = document.createElement("h3");
const popupUl = document.createElement("ul");
const popupImage = document.createElement("img");
popupImage.alt = "project";
popupImage.className = "image";
const popupDescription = document.createElement("p");
const liveButton = document.createElement("button");
liveButton.innerText = "See Live";
liveButton.className = "my-buttons live-button popup-button";
const sourceButton = document.createElement("button");
sourceButton.innerText = "See Source";
sourceButton.className = "my-buttons source-button popup-button";
popupSection.append(
  popupX,
  popupName,
  popupUl,
  popupImage,
  popupDescription,
  liveButton,
  sourceButton
);

/* ----------------- Binding Popup (Mobile) ---------------- */

function bindPopup(projectNumber) {
  popupName.innerText = otherProjects[projectNumber].name;
  popupUl.innerHTML = "";
  for (
    let index = 0;
    index < otherProjects[projectNumber].technologies.length;
    index += 1
  ) {
    popupUl.innerHTML += `<li>${otherProjects[projectNumber].technologies[index]}</li>`;
  }
  popupSection.appendChild(popupUl);
  popupImage.src = otherProjects[projectNumber].image;
  popupDescription.innerText = otherProjects[projectNumber].description;
  showPopup();
}

/* ----------------- Building LAST project part (Mobile) ---------------- */

const lastProjectsArticle = document.querySelector(".last-project");
const imgMobile = document.createElement("img");
imgMobile.className = "last-project-image-mobile mobile-only";
imgMobile.src = "assets/mobile/last-project-mobile.svg";
imgMobile.alt = "last project";
const imgDesktop = document.createElement("img");
imgDesktop.className = "desktop-images last-project-image";
imgDesktop.src = "assets/desktop/last-project-desktop.svg";
imgDesktop.alt = "last project desktop";
const lastProjectInnerSection = document.createElement("section");
lastProjectsArticle.append(imgMobile, imgDesktop, lastProjectInnerSection);
const lastProjectH2 = document.createElement("h2");
lastProjectH2.className = "last-project-title";
lastProjectH2.innerText = otherProjects[0].name;
const lastProjectP = document.createElement("p");
lastProjectP.className = "last-project-supporting-text";
lastProjectP.innerText = otherProjects[0].description;
const lastProjectUl = document.createElement("ul");
lastProjectUl.className = "last-project-items";
for (let index = 0; index < otherProjects[0].technologies.length; index += 1) {
  lastProjectUl.innerHTML += `<li>${otherProjects[0].technologies[index]}</li>`;
}
const lastProjectButton = document.createElement("button");
lastProjectButton.className = "my-buttons last-project-button";
lastProjectButton.onclick = () => {
  bindPopup(0);
};
lastProjectButton.innerText = "See Project";
lastProjectInnerSection.append(
  lastProjectH2,
  lastProjectP,
  lastProjectUl,
  lastProjectButton
);

/* ----------------- Building OTHER projects part (Mobile) ---------------- */

const otherProjectsSection = document.getElementById("other-projects-section");
for (let index = 1; index < otherProjects.length; index += 1) {
  const projectArticle = document.createElement("article");
  projectArticle.className = `project${index} other-projects-item`;
  projectArticle.id = `project${index}`;
  const h1 = document.createElement("h1");
  h1.className = "title-post";
  h1.innerText = otherProjects[index].name;
  const h2 = document.createElement("h2");
  h2.className = "supporting-text";
  h2.innerText = otherProjects[index].description;
  const ul = document.createElement("ul");
  ul.id = "technologies";
  for (let j = 0; j < otherProjects[index].technologies.length; j += 1) {
    let tech = "";
    tech = otherProjects[index].technologies[j];
    ul.innerHTML += `<li>${tech}</li>`;
  }
  const button = document.createElement("button");
  button.className = "my-buttons";
  button.onclick = () => {
    bindPopup(index);
  };
  button.innerText = "See Project";
  otherProjectsSection.appendChild(projectArticle);
  const myArticle = document.getElementById(projectArticle.id);
  myArticle.append(h1, h2, ul, button);
}

function showMobileMenu() {
  document.querySelector(".mobile-menu").style.display = "block";
  document.querySelector(".grid-container").style.display = "none";
  document.querySelector(".menu-footer").style.display = "block";
  document.querySelector(".toolbar").style.display = "none";
}

function hideMobileMenu() {
  document.querySelector(".mobile-menu").style.display = "none";
  document.querySelector(".grid-container").style.display = "grid";
  document.querySelector(".menu-footer").style.display = "none";
  document.querySelector(".toolbar").style.display = "flex";
}

ham.addEventListener("click", showMobileMenu());
x.addEventListener("click", hideMobileMenu());
