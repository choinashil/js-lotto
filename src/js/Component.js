class Component {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;

    this.render();
  }

  setEvents() {}

  mounted() {
    console.log('0', this);
    this.setEvents();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
}

export default Component;
