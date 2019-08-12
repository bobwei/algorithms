class LoadingBar {
  constructor($target) {
    this.$target = $target;
    this.queue = [];
    this.nRunnings = 0;
  }

  create() {
    const $dummy = document.createElement('div');
    $dummy.innerHTML = `
      <div class="loading-bar">
        <div class="progress" />
      </div>
    `;
    const $el = $dummy.firstElementChild;
    this.$target.appendChild($el);
    this.queue.push($el);
    this.run();
  }

  async run() {
    if (this.nRunnings + 1 <= 1 && this.queue.length) {
      this.nRunnings += 1;
      await this.animate(this.queue.shift());
      this.nRunnings -= 1;
      this.run();
    }
  }

  animate($el) {
    return new Promise((resolve) => {
      const $progress = $el.querySelector('.progress');
      $progress.addEventListener('animationend', resolve, { once: true });
      $progress.classList.add('loading');
    });
  }
}

const loadingBar = new LoadingBar(document.querySelector('#container'));

function onClick() {
  loadingBar.create();
}
