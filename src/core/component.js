export class Component {
  constructor(id) {
    this.$el = document.getElementById(id);
    this.init();
  }

  init() {}

  onHide() {}

  onShow() {}

  hide() {
    if (this.$el) this.$el.classList.add("hide");
    this.onHide();
  }

  show() {
    if (this.$el) this.$el.classList.remove("hide");
    this.onShow();
  }
}
