import Modal from './modal'

var Explorer = {
  init: function () {
    Explorer.swaggerUi = {};

    // Initialize swagger for server endpoints
    Explorer.swaggerUi.Server = Explorer.constructApi('Server');
    Explorer.swaggerUi.Server.load();

    // Initialize swagger for account endpoints
    Explorer.swaggerUi.Account = Explorer.constructApi('Account');
    Explorer.swaggerUi.Account.load();

    // Custom events
    Explorer.apiToggleClick();
    Explorer.customTryButton();
    Explorer.acknowledge();
    Explorer.deletePrompt();
    Explorer.checkUrl();

    // Toggle header style for endpoint
    $(document).on('click', '.heading.toggleOperation', function () {
      $(this).toggleClass('is-active');
    });
  },

  checkUrl: function () {
    // Checks the URL hash and shows the correct API
    if (/api-type=.+/.test(window.location.search)) {
      var components = window.location.search.split('&');

      while (components.length > 0) {
        var param = components.pop().split('=');

        if (/(\?)?api-type/.test(param[0])) {
          Explorer.showCorrectApi(param[1]);
        }
      }
    }
  },

  showCorrectApi: function (apiType) {
    // Toggle endpoint list container
    $('.swagger-ui-wrap.api-operations').each(function () {
      $(this).attr('id') == 'swagger-ui-container-' + apiType
        ? $(this).show()
        : $(this).hide();
    });

    // Toggle active state
    $('.api-toggle_item[data-api-type="' + apiType + '"]')
      .addClass('api-toggle_item--active')
      .siblings()
      .removeClass('api-toggle_item--active');

    // Toggle instructions
    Explorer.showApiInstructions(apiType);
  },

  apiToggleClick: function () {
    //When the API changes, toggle to the other operations.
    $('.api-toggle_link').click(function (e) {
      e.preventDefault();

      var apiType = $(this).parents('.api-toggle_item').data('api-type');
      Explorer.showCorrectApi(apiType);

      if (history.replaceState) {
        var url =
          window.location.pathname +
          '?api-type=' +
          apiType +
          (window.location.hash || '');
        history.replaceState({}, 'Postmark API Explorer', url);
      }
    });
  },

  showApiInstructions: function (activeApiType) {
    // TODO: this can be written more efficiently
    if (activeApiType === 'server') {
      $('.js-token-account').hide();
      $('.js-token-server').show();
    } else {
      $('.js-token-server').hide();
      $('.js-token-account').show();
    }
  },

  customTryButton: function () {
    // Click on PUT, POST, DELETE try button
    $(document).on('click', '.js-try-button', function (e) {
      e.preventDefault();

      // Show prompt for DELETE requests
      if ($(this).parents('li.delete.operation').length > 0) {
        Modal.open($(this), 'delete', function () {
          $('.js-delete-input').focus();
        });
      } else {
        // Show acknowledge modal for PUT and POST requests
        // Lookup session storage
        if (
          sessionStorage.getItem('com.postmarkapp.swaggerui-ack') === 'true'
        ) {
          // If user previously acknowledged trigger endpoint request
          $(this).siblings('.submit').trigger('click');
        } else {
          Modal.open($(this), 'acknowledge');
        }
      }
    });
  },

  acknowledge: function () {
    // Click on acknowledgement button
    $(document).on('click', '.js-acknowledge', function (e) {
      e.preventDefault();

      // Set session storage so we don't show this everytime
      sessionStorage.setItem('com.postmarkapp.swaggerui-ack', true);

      // Close the modal and trigger the endpoint request
      Modal.close(function (element) {
        element.siblings('.submit').trigger('click');
      });
    });
  },

  deletePrompt: function () {
    $(document).on('click', '.js-delete-prompt', function (e) {
      e.preventDefault();

      // Grab user input value
      var userInput = $('.js-delete-input').val().toLowerCase();

      // Validate delete input
      if (userInput === '' || userInput !== 'delete') {
        $('.js-delete-error').fadeIn();
      } else {
        // Trigger button when valid
        Modal.close(function (element) {
          element.siblings('.submit').trigger('click');
        });
      }
    });
  },

  constructApi: function (api_type) {
    var normalizedType = api_type.toLowerCase();

    function addApiKeyAuthorization() {
      var key = $(this).val();
      if (key && key.trim() != '') {
        var apiKeyAuth = new SwaggerClient.ApiKeyAuthorization(
          'X-Postmark-' + api_type + '-Token',
          key,
          'header'
        );
        Explorer.swaggerUi[api_type].api.clientAuthorizations.add(
          normalizedType + '_token',
          apiKeyAuth
        );
      }
    }

    return new SwaggerUi({
      url: ExplorerConfig.url + normalizedType + '.yml',
      dom_id: 'swagger-ui-container-' + normalizedType,
      supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
      validatorUrl: null,
      onComplete: function (swaggerApi, swaggerUi) {
        $('#swagger-token-' + normalizedType)
          .change(addApiKeyAuthorization)
          .change();

        $('pre code').each(function (i, e) {
          hljs.highlightBlock(e);
        });

        Explorer.correctSwaggerUIComplexity(api_type);
      },
      onFailure: function () {
        console.log('Unable to Load SwaggerUI');
      },
      docExpansion: 'list',
      apisSorter: 'alpha',
      operationsSorter: 'method',
      showRequestHeaders: true
    });
  },

  correctSwaggerUIComplexity: function (apiType) {
    var container = '#swagger-ui-container-' + apiType.toLowerCase();

    // Remove info headers
    $('#api_info').remove();

    // Remove heading toggles.
    $('.resource > .heading > .options', container).remove();

    // Remove signature toggles.
    $('ul.signature-nav', container).remove();

    // Remove 'application/json' header dropdown because it's silly.
    $('.response-content-type', container).remove();
    $('.parameter-content-type', container).remove();

    //Remove response signature model descriptions.
    $(
      '.signature-container .description, .signature-container .strong',
      container
    ).remove();

    // Auto-fill the body parameter with the json example.
    $('.body-textarea', container).each(function () {
      $(this).val($(this).closest('tr').find('pre').text());
    });

    // Remove the parameter location from the request.
    $('.operation-params td:nth-child(4)', container).remove();
    $('.operation-params', container).each(function () {
      $(this).siblings('thead').find('th:nth-child(4)').remove();
    });

    // Remove the headers from the operation status
    $('.operation-status td:nth-child(4)', container).remove();
    $('.operation-status', container).each(function () {
      $(this).siblings('thead').find('th:nth-child(4)').remove();
    });

    // Remove Description Column if it's empty
    $('.operation-params', container).each(function () {
      var descriptionCell = $(this).find('td:nth-child(3)');
      var emptyChildren = 0;

      // Iterate through description fields
      descriptionCell.each(function () {
        // Check if cell has no children
        // Sometimes swagger injects empty elements into a cell, so this checks for that too
        if (
          $(this).children().length === 0 ||
          $(this).find('.markdown p').length === 0
        ) {
          emptyChildren++;
        }
      });

      // Check if all of the description cells are empty
      if (descriptionCell.length === emptyChildren) {
        // Remove the column header then cell
        descriptionCell
          .parents('tbody')
          .siblings('thead')
          .find('th:nth-child(3)')
          .remove();
        descriptionCell.remove();
      }
    });

    // Clean up response messages section
    $('.operation-status', container)
      .closest('.fullwidth')
      .prev('h4')
      .text('HTTP Response Codes');
    $('.operation-status', container)
      .closest('.fullwidth')
      .before(
        '<p>Check out our <a href="https://postmarkapp.com/developer/api/overview#response-codes" target="_blank">API Documentation</a> for a complete list of our HTTP response codes.</p>'
      );
    $('.operation-status', container).closest('.fullwidth').remove();

    // Add custom button for PUT, POST, DELETE methods
    $('.sandbox_header .submit', container).each(function (index, item) {
      if ($(item).closest('li.get.operation').length === 0) {
        $(item)
          .hide()
          .after(
            '<a href="#" class="js-try-button try-button">Try it out!</a>'
          );
      }
    });

    // Authentication token
    $('.sandbox', container).prepend(
      '<h4>Authentication</h4>' +
        '<table class=""><tr><td><span class="code code-token">X-Postmark-' +
        apiType +
        '-Token:</span></td><td><input type="text" class="api_token parameter required" placeholder="(required)" style="min-width: 200px;"/></td></tr></table>'
    );

    var tokenInput = $('#swagger-token-' + apiType.toLowerCase());

    //set the value on all of the inputs if any change.
    $('.api_token', container).change(function () {
      var currentKey = tokenInput.val();
      //Scrub the key so that it can only contain innocuous values.
      var newKey = $(this).val();
      newKey = newKey.replace(/[^0-9a-f-]/gi, '').substring(0, 36);
      $(this).val(newKey);
      if (currentKey != newKey) {
        tokenInput.val(newKey);
        tokenInput.change();
      }
      $(
        '.api_token, [name="X-Postmark-' + apiType + '-Token"]',
        container
      ).each(function () {
        $(this).val(newKey);
      });
    });

    $('[name="X-Postmark-' + apiType + '-Token"]').each(function () {
      var $this = $(this);
      if ($this.closest('.operation-params').find('tr').length <= 1) {
        var table = $this.closest('table.fullwidth');
        table.prev('h4').hide();
        table.hide();
      } else {
        $this.closest('tr').hide();
      }
    });

    $('.footer', container).remove();

    // If a visitor is navigating from a hash link this sets the active endpoint header
    if (window.location.hash !== '') {
      // Find the correct element
      var el = $(
        '.toggleOperation .path a[href="' + window.location.hash + '"]'
      );
      // Traverse back up to set active state
      el.parents('.toggleOperation').addClass('is-active');
    }
  }
};

$(document).ready(Explorer.init);
