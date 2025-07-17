document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeBtn = document.getElementById("toggleTheme");
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");
  const logoImg = document.getElementById("logoImg");

  const PATH_SOL = "./assets/icons/sol.svg";
  const PATH_LUA = "./assets/icons/lua.svg";

  function applyTheme(theme) {
    if (theme === "dark") {
      body.classList.add("dark-mode");
      toggleThemeBtn.setAttribute("aria-label", "Alternar para modo claro");
      themeIcon.src = PATH_LUA;
      logoImg.src = "./assets/icons/youtube_white.svg";
    } else {
      body.classList.remove("dark-mode");
      toggleThemeBtn.setAttribute("aria-label", "Alternar para modo escuro");
      themeIcon.src = PATH_SOL;
      logoImg.src = "./assets/icons/logo-default.svg"
    }
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme");
  if (["dark", "light"].includes(savedTheme)) {
    applyTheme(savedTheme);
  } else {
    if (
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }
  }

  toggleThemeBtn.addEventListener("click", () => {
    const currentTheme = body.classList.contains("dark-mode")
      ? "light"
      : "dark";
    applyTheme(currentTheme);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      if (!localStorage.getItem("theme")) { applyTheme(event.matches ? "dark" : "light"); }
    });
});
