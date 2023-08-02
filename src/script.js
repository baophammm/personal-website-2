// Reload page when click on Name
const nameLogo = document.querySelector("#letter-b");
nameLogo.addEventListener("click",function(){location.reload()});

// FUNCTION SET UP PROJECT SELECTION NAME
const allProjectsInfo = document.querySelectorAll("#main-message .individual-project");

function setUpProjectNames() {
  const projectList = document.querySelector("#project-list");

  projectList.innerHTML = "";

  for (let i = 0; i < allProjectsInfo.length; i++) {
    const x = document.createElement("div");
    x.setAttribute("class","project-item");
    x.innerHTML = `<div>${allProjectsInfo[i].querySelector(".project-name").innerHTML}</div>`;
    projectList.appendChild(x);
  }

  // Connect div order matching project-individual by order
  for (let i = 0; i < projectList.children.length ; i++) {
    projectList.children[i].addEventListener("click", () => {
      toggleHiddenMessageClass(i);
    })
  }
}

setUpProjectNames();

// FUNCTION THAT ALIGN PROJECT SELECTION WITH PROJECT INFORMATION

// FUNCTION THAT Toggles main-message-hidden
function toggleHiddenMessageClass(index) {
  const mainMessageChildren = document.querySelector("#main-message").children;
  
  // Check if index has main-message-hidden class, if yes ...
  if (allProjectsInfo[index].classList.contains("main-message-hidden")) {
    // Find row that does not contain
    let nonHiddenChildIndex;
    for (let i = 0; i < mainMessageChildren.length; i++) {
      if (!mainMessageChildren[i].classList.contains("main-message-hidden")) {
        nonHiddenChildIndex = i;
      }
    }
    // Add hidden class to that row
    mainMessageChildren[nonHiddenChildIndex].classList.add("main-message-hidden");

    // Remove from selected row
    allProjectsInfo[index].classList.remove("main-message-hidden");
  } else {
    // if not index does not have main-message-hidden class
    // add main-message-hidden class to selected message
    allProjectsInfo[index].classList.add("main-message-hidden");
    // remove main-message-hidden class from welcome message
    mainMessageChildren[0].classList.remove("main-message-hidden");
  }
}

// Auto update footer year information
const footerHtml = document.querySelector("footer");

const todayDate = new Date();
const currentYear = todayDate.getFullYear()
footerHtml.innerHTML = `©${currentYear} baophammm.com`