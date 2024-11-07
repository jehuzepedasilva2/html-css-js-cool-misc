function handleCloudScene() {
  const cloudScene = document.querySelector(".clouds");
  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".moon");
  cloudScene.addEventListener("click", () => {
    if (sun.classList.contains("vis")) {
      sun.classList.remove("vis");
      moon.classList.add("vis");
    } else {
      moon.classList.remove("vis");
      sun.classList.add("vis");
    }
  });
}

handleCloudScene();

