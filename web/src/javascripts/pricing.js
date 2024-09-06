// Pricing logic for table calculator

import Handlebars from 'handlebars/dist/handlebars.min.js';

var Pricing = {
  // Calculator elements.
  form: document.querySelector('.pricing-calculator_form'),
  volumeInput: document.querySelector('.pricing-calculator_input'),
  blankView: document.querySelector('.pricing-calculator_blank'),
  resultView: document.querySelector('.pricing-calculator_results'),
  highVolumeView: document.querySelector('.pricing-calculator_high-volume'),
  resetButton: document.querySelector('.js-reset-calculator'),
  instructionsView: document.querySelector('.pricing-calculator_instructions'),

  resultTotal: document.querySelector('.pricing-calculator_amount'),
  resultBreakdown: document.querySelector('.pricing-calculator_breakdown'),

  // Pricing table elements.
  planRows: [].slice.call(document.querySelectorAll('.product-row--plan')),
  enterpriseRow: document.querySelector('.product-row--promo'),

  addOnTierRows: [].slice.call(
    document.querySelectorAll('.product-row--addon')
  ),

  // State vars.
  max_volume: 1900000, // The point at which the high volume pane should be shown.
  plans: [],
  addOns: [],

  /**
   * Initialize the pricing calculator.
   *
   * @return {void}
   */
  init: function () {
    // Set up the plans & add-ons.
    Pricing.fetchPlans();
    Pricing.fetchAddOns();

    // Set up listener for calculator submit events.
    Pricing.form.addEventListener('submit', Pricing.volumeFormSubmitted);

    Pricing.planRows.forEach(function (row) {
      row.addEventListener('change', Pricing.selectPlan);
    });

    Pricing.addOnTierRows.forEach(function (row) {
      row.addEventListener('change', Pricing.selectAddOn);
    });

    Pricing.resetButton.addEventListener('click', function (e) {
      e.preventDefault();

      Pricing.reset();
    });
  },

  /**
   * Handle changes to the selected plan.
   *
   * @param {InputEvent} e The radio button change event.
   */
  selectPlan: function (e) {
    if (!e.target.checked) {
      return;
    }

    var id = e.target.value,
      plan = Pricing.plans.find(function (plan) {
        return plan.id === id;
      });

    Pricing.volumeInput.value = plan.volume;

    // Highlight the relevant row.
    Pricing.resetPlanRows();

    plan.row.classList.add('product-row--selected');
    plan.input.checked = true;

    // Display the result.
    Pricing.updateSummary();
  },

  /**
   * Handle changes to add-on rows.
   *
   * @param {InputEvent} e The radio/checkbox change event.
   */
  selectAddOn: function (e) {
    var addOnId = e.target.value;

    var addOn = Pricing.addOns.find(function (addOn) {
      return addOn.id === addOnId;
    });

    if (addOn.disabled) {
      return;
    }

    var checked = e.target.checked;

    // Clear any previously selected rows.
    Pricing.resetAddOnRowsForAlias(addOn.alias);

    if (checked) {
      addOn.row.classList.add('product-row--selected');
      addOn.input.checked = true;
    }

    Pricing.updateSummary();
  },

  /**
   * Examines the plan rows to gather the available plans.
   *
   * @return {void}
   */
  fetchPlans: function () {
    // Reset the plans array.
    Pricing.plans = [];

    // Loop each of the rows in the pricing table and add the data to the plans array.
    Pricing.planRows.forEach(function (row) {
      Pricing.plans.push({
        row: row,
        input: row.querySelector('.product-row_control'),
        id: row.getAttribute('data-plan-id'),
        volume: parseInt(row.getAttribute('data-plan')),
        price: parseFloat(row.getAttribute('data-price')),
        overagesPrice: parseFloat(row.getAttribute('data-overage-price'))
      });
    });
  },

  /**
   * Examines the add-on rows to gather the available add-ons.
   *
   * @return {void}
   */
  fetchAddOns: function () {
    Pricing.addOns = [];

    Pricing.addOnTierRows.forEach(function (row) {
      Pricing.addOns.push({
        row: row,
        input: row.querySelector('.product-row_control'),
        id: row.getAttribute('data-id'),
        name: row.getAttribute('data-name'),
        alias: row.getAttribute('data-alias'),
        price: row.getAttribute('data-price'),
        included: row.classList.contains('product-row--included'),
        disabled: row.classList.contains('product-row--disabled')
      });
    });
  },

  /**
   * Handles form submits from the calculator.
   *
   * @param  {Event} e  The form submit event.
   * @return {void}
   */
  volumeFormSubmitted: function (e) {
    e.preventDefault();

    // Grab the volume from the input.
    var volume = parseInt(Pricing.volumeInput.value.replace(/[^0-9]/g, ''));

    // Stop here if the volume is not valid.
    if (!volume) {
      return Pricing.reset();
    }

    // Write the cleaned volume back to the input field.
    Pricing.volumeInput.value = volume;

    if (volume >= Pricing.max_volume) {
      return Pricing.showHighVolumePromo();
    }

    // Round the volume down to the nearest thousand.
    var roundedVolume = Math.floor(volume / 1000) * 1000;

    // Find the best priced plan.
    var result = Pricing.findPlanForVolume(roundedVolume);

    // Highlight the relevant row.
    Pricing.resetPlanRows();

    result.plan.row.classList.add('product-row--selected');
    result.plan.input.checked = true;

    // Display the result.
    Pricing.updateSummary();
  },

  /**
   * Show a prompt to contact us about volume pricing.
   *
   * @return {void}
   */
  showHighVolumePromo: function () {
    Pricing.blankView.classList.add('hidden');
    Pricing.resultView.classList.add('hidden');
    Pricing.highVolumeView.classList.remove('hidden');
    Pricing.instructionsView.classList.add('hidden');

    // Make sure no rows in the pricing table are highlighted.
    Pricing.resetPlanRows();
  },

  /**
   * Display the best plan in the calculator.
   *
   * @return {void}
   */
  updateSummary: function () {
    var volume = parseInt(Pricing.volumeInput.value.replace(/[^0-9]/g, ''));

    if (volume >= Pricing.max_volume) {
      return Pricing.showHighVolumePromo();
    }

    var volumeFormatter = new Intl.NumberFormat('en-US');

    var currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });

    var selectedPlan = Pricing.plans.find(function (plan) {
      return plan.input.checked;
    });

    if (selectedPlan === undefined) {
      // Default to first plan.
      selectedPlan = Pricing.plans[0];

      selectedPlan.row.classList.add('product-row--selected');
      selectedPlan.input.checked = true;
    }

    var selectedAddOns = [],
      addOnsTotal = 0;

    Pricing.addOns.forEach(function (addOn) {
      if (addOn.input && addOn.input.checked) {
        selectedAddOns.push({
          name: addOn.name,
          price:
            addOn.price == 0
              ? 'Included'
              : currencyFormatter.format(addOn.price)
        });
        addOnsTotal += parseInt(addOn.price);
      }
    });

    var planCost = Pricing.calculateMonthlyCost(
      selectedPlan,
      Pricing.volumeInput.value
    );

    var template = Handlebars.compile(
      '<tbody><tr><th>{{ planVolume }} emails/month</th><td>{{ planPrice }}</td></tr>{{#if hasOverages}}<tr><th>{{ overages }} extra emails <span>@ {{ planOveragesPrice }} per 1,000</span></th><td>{{ overagesCost }}</td></tr>{{/if}}{{#each addOns}}<tr><th>{{ name }}</th><td>{{ price }}</td></tr>{{/each}}</tbody>'
    );

    Pricing.resultTotal.innerHTML = currencyFormatter.format(
      planCost.totalCost + addOnsTotal
    );

    Pricing.resultBreakdown.innerHTML = template({
      planVolume: volumeFormatter.format(selectedPlan.volume),
      planPrice: currencyFormatter.format(selectedPlan.price),
      hasOverages: planCost.overages > 0,
      overages: volumeFormatter.format(planCost.overages),
      overagesCost: currencyFormatter.format(planCost.overagesCost),
      planOveragesPrice: currencyFormatter.format(selectedPlan.overagesPrice),
      addOns: selectedAddOns
    });

    Pricing.blankView.classList.add('hidden');
    Pricing.highVolumeView.classList.add('hidden');
    Pricing.resultView.classList.remove('hidden');
    Pricing.instructionsView.classList.remove('hidden');
  },

  /**
   * Reset the calculator to it’s initial state.
   *
   * @return {void}
   */
  reset: function () {
    // Result the volume input.
    Pricing.volumeInput.value = '';

    // Remove highlight from pricing table.
    Pricing.resetPlanRows();

    // Reset the addons.
    Pricing.resetAddOnRows();

    // Show blank state.
    Pricing.blankView.classList.remove('hidden');
    Pricing.highVolumeView.classList.add('hidden');
    Pricing.resultView.classList.add('hidden');
    Pricing.instructionsView.classList.add('hidden');
  },

  /**
   * Resets the pricing table rows to their default state.
   *
   * @return {void}
   */
  resetPlanRows: function () {
    Pricing.plans.forEach(function (plan) {
      plan.row.classList.remove('product-row--selected');
      plan.input.checked = false;
    });
  },

  /**
   * Reset all add-on rows back to their default state.
   *
   * @return {void}
   */
  resetAddOnRows: function () {
    Pricing.addOns.forEach(function (addOn) {
      if (addOn.included) {
        addOn.row.classList.add('product-row--selected');
      } else {
        addOn.row.classList.remove('product-row--selected');
      }

      if (addOn.input) {
        addOn.input.checked = addOn.included;
      }
    });
  },

  /**
   * Resets the addon rows to their default state.
   *
   * @return {void}
   */
  resetAddOnRowsForAlias: function (alias) {
    var addOns = Pricing.addOns.filter(function (i) {
      return i.alias == alias;
    });

    addOns.forEach(function (addOn) {
      addOn.row.classList.remove('product-row--selected');
      addOn.input.checked = false;
    });
  },

  /**
   * Finds the lowest cost plan for the user’s volume.
   * This takes into account the combination of base plan price + overages.
   *
   * @param  {Int} volume   The user's monthly volume, rounded up to the nearest
   *                        thousand.
   * @return {Object}       A result object containing the best plan and totals.
   */
  findPlanForVolume: function (volume) {
    var bestPlan;

    // Loop through each of the pricing plans.
    Pricing.plans.forEach(function (plan) {
      var result = Pricing.calculateMonthlyCost(plan, volume);

      // Check if this plan/overages combo is cheaper
      // and set it as the bestPlan if it is.
      if (bestPlan == undefined || result.totalCost <= bestPlan.totalCost) {
        bestPlan = result;
      }
    });

    // Return the best plan.
    return bestPlan;
  },

  /**
   * Calculate how much it would cost to send with a specified plan.
   *
   * @param {Plan} plan The plan to use for pricing.
   * @param {Number} volume The monthly volume.
   * @return {Object} An object with the total monthly cost, overages
   *                  amount, overages cost and plan used to calculate
   *                  the pricing.
   */
  calculateMonthlyCost: function (plan, volume) {
    var totalCost = plan.price,
      overages = 0,
      overagesCost = 0;

    // Calculate the cost of overages if they are needed.
    if (volume > plan.volume) {
      overages = Math.floor((volume - plan.volume) / 1000);
      overagesCost = overages * plan.overagesPrice;

      totalCost += overagesCost;
    }

    return {
      plan: plan,
      totalCost: totalCost,
      overages: overages * 1000,
      overagesCost: overagesCost
    };
  }
};

window.addEventListener('DOMContentLoaded', function () {
  // Initialize if there is a calculator.
  if (Pricing.form) {
    Pricing.init();
  }
});
