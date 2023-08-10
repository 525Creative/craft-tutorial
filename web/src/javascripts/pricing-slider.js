import Handlebars from 'handlebars/dist/handlebars.min.js';
import * as noUiSlider from 'nouislider';

var Pricing = {
  // Calculator elements.
  slider: document.querySelector('.js-pricing-slider'),
  blankView: document.querySelector('.js-pricing-blank'),
  resultView: document.querySelector('.js-pricing-results'),
  highVolumeView: document.querySelector('.js-pricing-high-volume'),
  instructionsView: document.querySelector('.js-pricing-instructions'),

  resultTotal: document.querySelector('.js-pricing-amount'),
  resultBreakdown: document.querySelector('.js-pricing-breakdown'),
  mobileTotal: document.querySelector('.js-pricing-total'),

  // State vars.
  min_volume: 100, // Free tier
  max_volume: 1900000, // The point at which the high volume pane should be shown.
  plans: [
    {
      volume: 10000,
      price: 15,
      overagesPrice: 1.80,
      increment: 1000 // Range slider value increments when plan is active
    },
    {
      volume: 50000,
      price: 55,
      overagesPrice: 1.30,
      increment: 1000
    },
    {
      volume: 125000,
      price: 115,
      overagesPrice: 1.10,
      increment: 5000
    },
    {
      volume: 300000,
      price: 245,
      overagesPrice: 1.00,
      increment: 10000
    },
    {
      volume: 700000,
      price: 455,
      overagesPrice: 0.80,
      increment: 10000
    },
    {
      volume: 1500000,
      price: 775,
      overagesPrice: 0.60,
      increment: 10000
    }
  ],

  /**
   * Initialize the pricing calculator.
   *
   * @return {void}
   */
  init: function () {
    noUiSlider.create(Pricing.slider, {
      range: Pricing.generateRange(),
      start: Pricing.min_volume,
      connect: 'lower',
      tooltips: {
        to: function(value) {
          return Pricing.generateTooltip(value);
        }
      },
      pips: {
        mode: 'values',
        values: Pricing.generateValues(),
        density: 20,
        format: {
          to: function (value) {
            if (value === Pricing.max_volume) return 'More';
            return value.toLocaleString();
          },
          from: function (value) {
            if (value === 'More') return Pricing.max_volume;
            return value;
          }
        }
      }
    });

    // Move markers into base container
    // Allows markers to be properly layered over slider
    const pips = Pricing.slider.querySelector('.noUi-pips');
    const base = Pricing.slider.querySelector('.noUi-base');
    base.appendChild(pips);

    Pricing.slider.noUiSlider.on('slide', Pricing.slidePlan);

    // Make it so pip values are clickable
    // This ensures that the precise value of the slider is set when a label is selected
    // Without this, the slider thinks you're selecting the bar
    // So if you select the end of the 10k label, it would set the slider to something like 16k instead
    var values = pips.querySelectorAll('.noUi-value')
    values.forEach(function(value) {
      // Use mousedown instead of click event
      // Ensures that this event overrides the slider behavior which prevents the handle from bouncing back and forth
      value.addEventListener('mousedown', function(event) {
        var label = event.target.textContent.replace(/,/g,'');

        if (label == 'More') {
          label = Pricing.max_volume;
        }

        label = Number(label);

        // Set handle position
        Pricing.slider.noUiSlider.set(label);

        // Trigger slide event
        Pricing.slidePlan([label]);
      })
    });
  },

  /**
   * Generate values to display on slider labels
   */
  generateValues: function() {
    var values = [Pricing.min_volume];

    Pricing.plans.forEach(function(plan) {
      values.push(plan.volume);
    });

    values.push(Pricing.max_volume);
    return values;
  },

  /**
   * Generate tooltip label based on current volume
   * @param {string} volume
   * @returns string
   */
  generateTooltip: function(volume) {
    var volumeLabel = volume.toLocaleString();

    // If slider is at the max volume
    if (volume === Pricing.max_volume) {
      return `${volumeLabel}+ emails`;
    }

    // If slider is between 100+ and 10k
    var lowestPaidPlan = Pricing.plans[0];

    if (volume > Pricing.min_volume && volume < lowestPaidPlan.volume) {
      return `Up to ${lowestPaidPlan.volume.toLocaleString()} emails`;
    }

    return `${volumeLabel} emails`;
  },

  /**
   * Outputs a slider ranges required by nouislider
   * Key % specifies where plan is positioned on the slider
   * var range = {
      'min': [100, 100],
      '14%': [10000, 1000],
      '29%': [50000, 1000],
      '43%': [125000, 5000],
      '57%': [300000, 10000],
      '71%': [700000, 10000],
      '86%': [1500000, 10000],
      'max': [1900000]
    };
   * @returns object
   */
  generateRange: function() {
    var range = {};

    // Set free plan
    range.min = [Pricing.min_volume, 100];
    range.max = [Pricing.max_volume];

    // Keep track of the total marks on the slider
    // Total plans + the free plan + max volume
    var totalMarks = Pricing.plans.length + 1;
    var itemPercentage = 100 / totalMarks;

    // Iterate through plans
    Pricing.plans.forEach(function(plan, index) {
      // Calculate position on slider
      var position = Math.round(itemPercentage * (index + 1));
      range[position] = [plan.volume, plan.increment];
    });

    return range;
  },

  /**
   * Update summary when slider changes
   */
  slidePlan: function (value) {
    Pricing.current_volume = Number(value[0]);
    Pricing.updateMobileTotal();

    // Round the volume down to the nearest thousand.
    var roundedVolume = Math.floor(Pricing.current_volume / 1000) * 1000;

    // Find the best priced plan.
    var result = Pricing.findPlanForVolume(roundedVolume);

    // Set currebt state
    Pricing.current_plan = result.plan;

    // Display the result.
    Pricing.updateSummary();
  },

  /**
   * Update volume tooltip/label on mobile
   */
  updateMobileTotal: function() {
    var label = Pricing.mobileTotal;
    var tooltip = Pricing.generateTooltip(Pricing.current_volume);

    label.textContent = tooltip;
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
  },

  /**
   *
   * @return {void}
   */
  showFreePlan: function() {
    Pricing.resultView.classList.add('hidden');
    Pricing.highVolumeView.classList.add('hidden');
    Pricing.instructionsView.classList.add('hidden');
    Pricing.blankView.classList.remove('hidden');
  },

  /**
   * Display the best plan in the calculator.
   *
   * @return {void}
   */
  updateSummary: function () {
    var volume = Pricing.current_volume;

    if (volume >= Pricing.max_volume) {
      return Pricing.showHighVolumePromo();
    }

    if (volume <= 100) {
      return Pricing.showFreePlan();
    }

    var volumeFormatter = new Intl.NumberFormat('en-US');

    var currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });

    var selectedPlan = Pricing.current_plan;

    if (selectedPlan === undefined) {
      // Default to first plan.
      selectedPlan = Pricing.plans[0];
    }

    var planCost = Pricing.calculateMonthlyCost(
      selectedPlan,
      Pricing.current_volume
    );

    var lowestPaidActive = Pricing.current_volume > Pricing.min_volume &&
                           Pricing.current_volume < Pricing.plans[0].volume;

    var template = Handlebars.compile(
      `<tbody>
        <tr>
          <th>
            {{#if lowestPaidActive }}Up to {{/if}}
            {{ planVolume }} emails/month
          </th>
          <td>{{ planPrice }}</td>
        </tr>

        {{#if hasOverages}}
          <tr>
            <th>{{ overages }} extra emails <span>@ {{ planOveragesPrice }} per 1,000</span></th>
            <td>{{ overagesCost }}</td>
          </tr>
        {{/if}}
      </tbody>`
    );

    Pricing.resultTotal.innerHTML = currencyFormatter.format(
      planCost.totalCost
    );

    Pricing.resultBreakdown.innerHTML = template({
      lowestPaidActive: lowestPaidActive,
      planVolume: volumeFormatter.format(selectedPlan.volume),
      planPrice: currencyFormatter.format(selectedPlan.price),
      hasOverages: planCost.overages > 0,
      overages: volumeFormatter.format(planCost.overages),
      overagesCost: currencyFormatter.format(planCost.overagesCost),
      planOveragesPrice: currencyFormatter.format(selectedPlan.overagesPrice)
    });

    Pricing.blankView.classList.add('hidden');
    Pricing.highVolumeView.classList.add('hidden');
    Pricing.resultView.classList.remove('hidden');
    Pricing.instructionsView.classList.remove('hidden');
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
  if (Pricing.slider) {
    Pricing.init();
  }
});
