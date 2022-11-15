function setupTabs() {
  document.querySelectorAll(".tabs__button").forEach((button) => {
    button.addEventListener("click", () => {
      console.log("click event on button");  

      //  traverse to different elements within our DOM. 
      //  First, we identified out sideBar that is the parent of the button elements in our HTML code. 
      //  And, the tabContainers that is the parent of the sideBar.

      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;

      // identifying tab numbers
      const tabNumber = button.dataset.forTab;
      // activation of a given tab
      const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

      sideBar.querySelectorAll(".tabs__button").forEach((button) => {
        button.classList.remove("tabs__button--active");
        // remove the all the active tag for buttons
      });
      tabsContainer.querySelectorAll(".tabs__content").forEach((tab) => {
        tab.classList.remove("tabs__content--active");
        // remove the all the active tag for contents
      });
      button.classList.add("tabs__button--active");
      tabToActivate.classList.add("tabs__content--active");

    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
});

