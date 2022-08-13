console.log("Minigram elements loaded 🧭");

function waitForElm(selector) {
   return new Promise((resolve) => {
      if (document.querySelectorAll(selector)[0]) {
         return resolve(document.querySelectorAll(selector)[0]);
      }

      const observer = new MutationObserver((mutations) => {
         if (document.querySelector(selector)) {
            resolve(document.querySelectorAll(selector)[0]);
         }
      });

      observer.observe(document.body, {
         childList: true,
         subtree: true,
      });
   });
}

const { body } = document;
let currentPost;

waitForElm("article").then((elm) => {
   currentPost = elm;
});

document.addEventListener("scroll", () => {
   waitForElm("article").then((elm) => {
      currentPost = elm;
   });
});

const goToNextPost = () => {
   console.log("next");
   console.log(currentPost);
   // currentPost = currentPost.nextElementSibling;
   // currentPost.scrollIntoView({ behavior: "smooth", block: "start" });
};
const goToPreviousPost = () => {
   console.log("previous");
};

document.addEventListener("keyup", (event) => {
   if (event.code === "ArrowUp") {
      goToPreviousPost();
   } else if (event.code === "ArrowDown") {
      goToNextPost();
   }
});

// document.addEventListener("scroll", () => {
//    const articles = document.querySelectorAll("article");
//    articles.forEach((article) => {
//       const articlePosition = article.getBoundingClientRect();
//       console.log(articlePosition.top);
//    });
// });

const buttonNext = document.createElement("button");
buttonNext.innerText = "↓";
buttonNext.id = "mg-button-next";
buttonNext.title = "Down arrow";
buttonNext.style.position = "fixed";
buttonNext.style.right = "10px";
buttonNext.style.bottom = "10px";
buttonNext.style.zIndex = "50000";
buttonNext.style.width = "30px";
buttonNext.style.height = "30px";
buttonNext.style.display = "flex";
buttonNext.style.justifyContent = "center";
buttonNext.style.alignItems = "center";
buttonNext.style.borderRadius = "6px";
buttonNext.style.outline = "none";
buttonNext.style.border = "none";
buttonNext.addEventListener("click", goToNextPost);
body.appendChild(buttonNext);

const buttonPrevious = document.createElement("button");
buttonPrevious.innerText = "↑";
buttonPrevious.id = "mg-button-previous";
buttonPrevious.title = "Up arrow";
buttonPrevious.style.position = "fixed";
buttonPrevious.style.right = "10px";
buttonPrevious.style.bottom = "50px";
buttonPrevious.style.zIndex = "50000";
buttonPrevious.style.width = "30px";
buttonPrevious.style.height = "30px";
buttonPrevious.style.display = "flex";
buttonPrevious.style.justifyContent = "center";
buttonPrevious.style.alignItems = "center";
buttonPrevious.style.borderRadius = "6px";
buttonPrevious.style.outline = "none";
buttonPrevious.style.border = "none";
buttonPrevious.addEventListener("click", goToPreviousPost);
body.appendChild(buttonPrevious);
