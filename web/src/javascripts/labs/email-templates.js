var EmailTemplates = {
  init: function () {
    const templatePreviewEl = document.querySelector('.js-template-preview');
    const previewBtnEl = document.querySelectorAll('.js-preview-button');

    if (!previewBtnEl.length) {
      return;
    }

    function resetClasses() {
      templatePreviewEl.classList.remove('template-preview--mobile', 'template-preview--desktop');
      previewBtnEl.forEach((el) => {
        el.classList.remove('is-active')
      })
    }

    previewBtnEl.forEach((el) => {
      el.addEventListener('click', function (e) {
        resetClasses()

        const target = el.getAttribute('data-preview');
        templatePreviewEl.classList.add(`template-preview--${target}`);
        el.classList.add('is-active');
      })
    })
  }
};

window.addEventListener('load', EmailTemplates.init);
