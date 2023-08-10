import hljs from 'highlight.js/lib/core';

import bash from 'highlight.js/lib/languages/bash';
import ruby from 'highlight.js/lib/languages/ruby';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import markdown from 'highlight.js/lib/languages/markdown';
import css from 'highlight.js/lib/languages/css';
import http from 'highlight.js/lib/languages/http';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';
import ini from 'highlight.js/lib/languages/ini';
import perl from 'highlight.js/lib/languages/perl';
import json from 'highlight.js/lib/languages/json';
import cpp from 'highlight.js/lib/languages/cpp';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('css', css);
hljs.registerLanguage('http', http);
hljs.registerLanguage('php', php);
hljs.registerLanguage('python', python);
hljs.registerLanguage('ini', ini);
hljs.registerLanguage('perl', perl);
hljs.registerLanguage('json', json);
hljs.registerLanguage('cpp', cpp);


var Docs = {
  init: function () {
    Docs.tocPosition = Docs.getTocPosition();
    Docs.checkToc();
    Docs.mobileToc();

    hljs.highlightAll();

    // Events
    $('#api').localScroll({ duration: 500, hash: true });
    $(window).scroll(Docs.checkToc);
    $('.docs-example pre').scroll(Docs.codeExampleScroll);
  },

  mobileToc: function () {
    $('.docs-toc--mobile select').on('change', function () {
      var url = $(this).val();
      window.location = url;
    });
  },

  checkToc: function () {
    // Check if user scrolled passed header height
    if ($(document).scrollTop() > Docs.tocPosition) {
      $('#toc').addClass('stick');
    } else {
      $('#toc').removeClass('stick');
    }
  },

  getTocPosition: function () {
    var position = parseInt($('#toc').css('top').replace('px', ''));
    return position;
  },

  codeExampleScroll: function () {
    if ($(this).scrollLeft() > 20) {
      $(this).parent('.docs-example').removeClass('is-faded');
    } else {
      $(this).parent('.docs-example').addClass('is-faded');
    }
  }
};

$(document).ready(Docs.init);
