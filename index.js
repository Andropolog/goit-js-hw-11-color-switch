const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body")
};
const randomColor = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const colorSwitch = {
  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.colorSwitchId = setInterval(() => {
      refs.body.style.backgroundColor = colors[randomColor(0, colors.length - 1)];
    }, 1000);
  },
  stop() {
    clearInterval(this.colorSwitchId);
    this.isActive = false;
  }
};
refs.startBtn.addEventListener("click", colorSwitch.start.bind(colorSwitch));
refs.stopBtn.addEventListener("click", colorSwitch.stop.bind(colorSwitch));