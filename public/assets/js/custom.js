// Ios Safari Browser Height
const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--vh", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);
setTimeout(() => {
  appHeight();
}, 100);
