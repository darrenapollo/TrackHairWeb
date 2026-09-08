---
layout: page
title: Norwood Scale Quiz - Estimate Your Norwood Stage
description: "Take a free six-question Norwood scale quiz to estimate your male pattern hair loss stage, then get a practical plan for consistent progress photos at home."
permalink: /norwood-scale/quiz/
last_modified_at: 2026-09-08
hero_kicker: Norwood scale quiz
summary: Answer six questions about your hairline and crown to get an estimated Norwood stage, plus a repeatable photo routine that makes future comparisons meaningful. Everything is calculated in your browser, and nothing you enter is sent anywhere.
schema_type: MedicalWebPage
breadcrumb_parent:
  title: Norwood scale
  url: /norwood-scale/
faq:
  - question: How accurate is a Norwood scale quiz?
    answer: A questionnaire can only estimate a stage from your own description of what you see. It is a useful orientation tool and a starting point for photo tracking, but a clinician examining your scalp, and looking at consistent photos over time, will always be more reliable.
  - question: Is my answer data stored or sent anywhere?
    answer: No. The quiz runs entirely in your browser. Nothing you select is uploaded, saved to a server, or associated with you.
  - question: What Norwood stage should I start treatment at?
    answer: There is no single stage that decides this. Treatment decisions depend on how fast you are losing hair, your age, your goals, and your medical history, which is why they belong with a qualified clinician rather than a staging chart.
  - question: Why does the quiz ask about the crown separately from the hairline?
    answer: The Norwood scale tracks frontal recession and vertex (crown) thinning as partly independent patterns. Some men recede at the temples with an intact crown, others thin at the crown first, and the combination is what separates several of the stages.
  - question: What should I do after getting my estimated stage?
    answer: Take a baseline set of photos using the same angles and lighting, then repeat them on a fixed interval. A stage label on its own tells you little, but the same label alongside six months of comparable photos tells you whether anything is changing.
citations:
  - label: "Cleveland Clinic: Male Pattern Baldness"
    url: https://my.clevelandclinic.org/health/diseases/24515-male-pattern-baldness-androgenic-alopecia
  - label: "MedlinePlus: Hair Loss"
    url: https://medlineplus.gov/hairloss.html
  - label: "AAD: Finding the right treatments for genetic hair loss"
    url: https://www.aad.org/news/finding-the-right-treatments-for-genetic-hair-loss
related_pages:
  - title: Ludwig scale quiz
    description: Estimate a Ludwig stage from six questions about your part line and crown, then start a photo baseline.
    url: /ludwig-scale/
  - title: Norwood scale guide
    description: The stages explained in full, and what the scale can and cannot tell you.
    url: /norwood-scale/
  - title: Male pattern baldness guide
    description: Androgenetic alopecia, DHT, and where treatment decisions usually fit.
    url: /male-pattern-baldness/
  - title: Hair loss treatments guide
    description: Move from pattern recognition into the main treatment categories.
    url: /treatments/
campaign_token: web-quiz
---

## Estimate your Norwood stage

The Norwood scale describes the visible pattern of male pattern baldness in seven broad stages. This quiz asks six questions about your hairline, crown, and overall scalp coverage, then maps your answers onto the stage that usually matches that description.

Treat the result as a label for the pattern you just described, not as a diagnosis. It cannot see your scalp, it does not know your family history, and it cannot tell the difference between androgenetic alopecia and the other causes of hair loss that need a clinician to distinguish.

<section class="quiz" id="norwood-quiz" aria-labelledby="quiz-heading">
  <h3 class="quiz__heading" id="quiz-heading">Six questions</h3>
  <p class="quiz__note" id="quiz-intro-note">Answer from what you see in a mirror or a recent photo, in bright, even light. Nothing you select leaves your browser.</p>

  <noscript>
    <p class="quiz__note quiz__note--warn">The interactive result needs JavaScript. The questions below still describe what each Norwood stage is based on, and the <a href="/norwood-scale/">Norwood scale guide</a> covers the stages in full.</p>
  </noscript>

  <form class="quiz__form" id="quiz-form" novalidate>
    <fieldset class="quiz__step" data-step="0">
      <legend class="quiz__legend">1. How does your hairline compare with the one you had in your teens?</legend>
      <label class="quiz__option"><input type="radio" name="hairline" value="0"><span>Unchanged, or very close to it</span></label>
      <label class="quiz__option"><input type="radio" name="hairline" value="1"><span>Slightly higher, with a little recession at the temples</span></label>
      <label class="quiz__option"><input type="radio" name="hairline" value="2"><span>Clearly receded at the temples, forming an M or a V shape</span></label>
      <label class="quiz__option"><input type="radio" name="hairline" value="3"><span>Deeply receded, well back from where it used to sit</span></label>
      <label class="quiz__option"><input type="radio" name="hairline" value="unsure"><span>Not sure</span></label>
    </fieldset>

    <fieldset class="quiz__step" data-step="1" hidden>
      <legend class="quiz__legend">2. What does the crown look like, at the back of the top of your head?</legend>
      <label class="quiz__option"><input type="radio" name="crown" value="0"><span>No thinning I can see</span></label>
      <label class="quiz__option"><input type="radio" name="crown" value="1"><span>Slightly thinner, only obvious in harsh light or photos</span></label>
      <label class="quiz__option"><input type="radio" name="crown" value="2"><span>A visibly thin patch where scalp shows through</span></label>
      <label class="quiz__option"><input type="radio" name="crown" value="3"><span>A clearly bald patch</span></label>
      <label class="quiz__option"><input type="radio" name="crown" value="unsure"><span>Not sure, I have not looked properly</span></label>
    </fieldset>

    <fieldset class="quiz__step" data-step="2" hidden>
      <legend class="quiz__legend">3. Is there still a band of hair separating your hairline from your crown?</legend>
      <label class="quiz__option"><input type="radio" name="bridge" value="0"><span>Yes, the top of my head is still covered between the two</span></label>
      <label class="quiz__option"><input type="radio" name="bridge" value="0"><span>Not applicable, my crown is not thinning</span></label>
      <label class="quiz__option"><input type="radio" name="bridge" value="1"><span>The band is thin and sparse, but still there</span></label>
      <label class="quiz__option"><input type="radio" name="bridge" value="2"><span>No, the front and the crown have joined into one area</span></label>
      <label class="quiz__option"><input type="radio" name="bridge" value="unsure"><span>Not sure</span></label>
    </fieldset>

    <fieldset class="quiz__step" data-step="3" hidden>
      <legend class="quiz__legend">4. Under bright overhead light, how much scalp shows on top?</legend>
      <label class="quiz__option"><input type="radio" name="top" value="0"><span>None that I notice</span></label>
      <label class="quiz__option"><input type="radio" name="top" value="1"><span>A little, mostly when my hair is wet or pushed back</span></label>
      <label class="quiz__option"><input type="radio" name="top" value="2"><span>Obvious scalp through the hair on top</span></label>
      <label class="quiz__option"><input type="radio" name="top" value="3"><span>Mostly scalp across the top</span></label>
      <label class="quiz__option"><input type="radio" name="top" value="unsure"><span>Not sure</span></label>
    </fieldset>

    <fieldset class="quiz__step" data-step="4" hidden>
      <legend class="quiz__legend">5. What about the sides and the back of your head?</legend>
      <label class="quiz__option"><input type="radio" name="sides" value="0"><span>Full, no change I can see</span></label>
      <label class="quiz__option"><input type="radio" name="sides" value="1"><span>Slightly thinner or lower than they used to be</span></label>
      <label class="quiz__option"><input type="radio" name="sides" value="2"><span>Only a horseshoe band of hair remains around the sides and back</span></label>
      <label class="quiz__option"><input type="radio" name="sides" value="unsure"><span>Not sure</span></label>
    </fieldset>

    <fieldset class="quiz__step" data-step="5" hidden>
      <legend class="quiz__legend">6. How long have you noticed the change?</legend>
      <label class="quiz__option"><input type="radio" name="pace" value="fast"><span>Under a year, and it seems to be moving quickly</span></label>
      <label class="quiz__option"><input type="radio" name="pace" value="steady"><span>One to five years, gradually</span></label>
      <label class="quiz__option"><input type="radio" name="pace" value="slow"><span>More than five years, very slowly</span></label>
      <label class="quiz__option"><input type="radio" name="pace" value="unsure"><span>Hard to say</span></label>
    </fieldset>

    <p class="quiz__error" id="quiz-error" role="alert" hidden>Choose an option to continue.</p>

    <div class="quiz__controls">
      <button type="button" class="button button--ghost" id="quiz-back" hidden>Back</button>
      <button type="button" class="button" id="quiz-next">Next</button>
      <p class="quiz__progress" id="quiz-progress" aria-live="polite">Question 1 of 6</p>
    </div>
  </form>

  <div class="quiz__result" id="quiz-result" hidden tabindex="-1" aria-live="polite">
    <p class="eyebrow" id="quiz-result-confidence"></p>
    <h3 class="quiz__result-stage" id="quiz-result-stage"></h3>
    <p class="quiz__result-summary" id="quiz-result-summary"></p>
    <div id="quiz-result-detail"></div>

    <div class="quiz__next">
      <h4>What to do next</h4>
      <ol id="quiz-result-actions"></ol>
    </div>

    <p class="quiz__disclaimer">This estimate describes a pattern, not a cause. It is not a diagnosis and it is not medical advice. If your hair loss is sudden, patchy, painful, or comes with scalp symptoms, see a clinician rather than a staging chart.</p>

    <div class="quiz__cta">
      <a class="button" href="{% include app-store-url.html ct='web-quiz-result' %}" target="_blank" rel="noopener">Track this stage in Track Hair</a>
      <button type="button" class="button button--ghost" id="quiz-restart">Start again</button>
    </div>
  </div>
</section>

## How the estimate is calculated

The Norwood scale separates two patterns that progress semi-independently: recession at the frontal hairline and thinning at the vertex, or crown. Most of the stages are defined by the combination of the two, plus whether a band of hair still bridges the top of the scalp between them.

- **Stages I and II** cover an unchanged or barely receded hairline with no crown involvement.
- **Stage III** is the point where recession becomes clearly visible at the temples. **Stage III vertex** describes crown thinning with frontal recession no greater than stage III.
- **Stages IV and V** involve both a receded hairline and a thinning crown, still separated by a band of hair across the top that narrows as the stages progress.
- **Stages VI and VII** describe the point where that band is gone and the frontal and crown areas have joined, leaving progressively less hair outside the horseshoe around the sides and back.

The quiz applies those rules in order, from the most advanced pattern down. If you answered "not sure" on the questions that decide your stage, the result is reported with lower confidence, because those answers are the ones doing the work.

## Why a photo baseline matters more than the label

A stage estimate is a snapshot description. It cannot tell you whether you are stable or actively losing, and that is usually the more important question. Two men at the same stage can be on completely different trajectories.

Repeatable photos are what make the difference visible. The same four angles, the same lighting, the same distance, at a fixed interval, give you a record you can actually compare instead of an impression that shifts with the bathroom mirror. That record is also far more useful in a consultation than a remembered stage number.

[Track Hair]({% include app-store-url.html ct='web-quiz-body' %}) is built around exactly that routine: scheduled treatments, prompts for repeat photos, and a timeline you can scroll back through.

{% raw %}
<script>
(function () {
  var form = document.getElementById('quiz-form');
  if (!form) return;

  var steps = Array.prototype.slice.call(form.querySelectorAll('.quiz__step'));
  var nextBtn = document.getElementById('quiz-next');
  var backBtn = document.getElementById('quiz-back');
  var progress = document.getElementById('quiz-progress');
  var errorEl = document.getElementById('quiz-error');
  var result = document.getElementById('quiz-result');
  var restart = document.getElementById('quiz-restart');
  var intro = document.getElementById('quiz-intro-note');
  var current = 0;

  var STAGES = {
    'I': {
      label: 'Norwood I',
      summary: 'No meaningful recession. This is the reference point the other stages are measured against.',
      detail: 'Your description matches an adolescent or unchanged hairline with no crown involvement. Some hairline maturation in the late teens and twenties is normal and is not the same thing as pattern hair loss.'
    },
    'II': {
      label: 'Norwood II',
      summary: 'A slightly receded hairline at the temples, with the crown still intact.',
      detail: 'This is often described as a mature hairline rather than balding. It becomes more informative when compared against a photo from a few years ago, or against a new baseline set from today.'
    },
    'III': {
      label: 'Norwood III',
      summary: 'Clearly visible recession at the temples, commonly the first stage considered cosmetically significant.',
      detail: 'The temples have receded into a deeper M or V shape while the crown is still covered. This is the stage at which many men first start paying attention to the trajectory.'
    },
    'IIIv': {
      label: 'Norwood III vertex',
      summary: 'Crown thinning is the dominant feature, with frontal recession no greater than stage III.',
      detail: 'The vertex pattern often progresses out of sight, which is why a top-down photo matters more here than a mirror does. The front and the crown can move at different speeds.'
    },
    'IV': {
      label: 'Norwood IV',
      summary: 'Both a receded hairline and a thinning crown, still separated by a band of hair across the top.',
      detail: 'The two areas are distinct, and the band of hair bridging them is the thing to watch. Its width over time is the clearest signal of whether the pattern is advancing.'
    },
    'V': {
      label: 'Norwood V',
      summary: 'More extensive loss at both the front and the crown, with a narrowing band between them.',
      detail: 'The bridge is still present but noticeably sparser. Photographs taken from directly above show this more honestly than any front-facing view.'
    },
    'VI': {
      label: 'Norwood VI',
      summary: 'The band across the top is gone, and the frontal and crown areas have joined into a single region.',
      detail: 'Loss now extends across the top of the scalp, with the surviving hair concentrated in the horseshoe around the sides and back.'
    },
    'VII': {
      label: 'Norwood VII',
      summary: 'The most advanced pattern, with hair remaining only in a narrow horseshoe around the sides and back.',
      detail: 'The remaining band is typically also finer than it once was. At this stage the practical conversations are usually about surgical options or about accepting and styling the pattern.'
    }
  };

  function answers() {
    var data = {};
    var unsure = [];
    ['hairline', 'crown', 'bridge', 'top', 'sides', 'pace'].forEach(function (name) {
      var picked = form.querySelector('input[name="' + name + '"]:checked');
      var value = picked ? picked.value : 'unsure';
      if (value === 'unsure') unsure.push(name);
      data[name] = value;
    });
    data.unsure = unsure;
    return data;
  }

  // "Not sure" falls back to the midpoint so an unanswered axis cannot push the
  // estimate to an extreme. The confidence line reports how many were guessed.
  function score(value, fallback) {
    var n = parseInt(value, 10);
    return isNaN(n) ? fallback : n;
  }

  function stageFor(data) {
    var hairline = score(data.hairline, 1);
    var crown = score(data.crown, 1);
    var bridge = score(data.bridge, 0);
    var top = score(data.top, 1);
    var sides = score(data.sides, 0);

    if (bridge === 2 && sides === 2) return 'VII';
    if (bridge === 2) return 'VI';
    if (bridge === 1 && (hairline >= 2 || crown >= 2)) return 'V';
    if (hairline >= 3 && crown >= 2) return 'V';
    if (hairline >= 2 && crown >= 2) return 'IV';
    if (hairline >= 3) return 'IV';
    if (crown >= 2) return 'IIIv';
    if (hairline >= 2) return 'III';
    if (hairline >= 1 || crown >= 1 || top >= 1) return 'II';
    return 'I';
  }

  function confidenceFor(data) {
    var deciding = ['hairline', 'crown', 'bridge'].filter(function (name) {
      return data.unsure.indexOf(name) !== -1;
    }).length;
    if (deciding >= 2) return 'Low confidence estimate';
    if (deciding === 1) return 'Rough estimate';
    if (data.unsure.length > 0) return 'Estimated stage';
    return 'Estimated stage';
  }

  function actionsFor(stage, data) {
    var list = [
      'Take a baseline set today: hairline straight on, both temples, and one directly down onto the crown. Same room, same light, hair dry and styled the same way each time.',
      'Repeat the identical set every 30 days. Comparing month to month is what turns a stage label into a trend.'
    ];

    if (stage === 'IIIv' || stage === 'IV' || stage === 'V') {
      list.push('Pay particular attention to the top-down crown photo. Vertex change is the part you never see in a mirror.');
    }
    if (stage === 'VI' || stage === 'VII') {
      list.push('If restoration is a goal, a consultation is more useful than further self-staging at this point, since donor supply rather than stage drives what is possible.');
    }
    if (data.pace === 'fast') {
      list.push('You described rapid change over less than a year. Sudden or fast hair loss is worth raising with a clinician, since several causes other than pattern baldness can look similar.');
    }
    if (data.sides === '1') {
      list.push('You noted diffuse thinning at the sides or back. Male pattern baldness normally spares that band, so this is worth having looked at properly rather than self-staged.');
    }

    list.push('Read the <a href="/norwood-scale/">full Norwood scale guide</a> for what the stages do and do not describe, then the <a href="/treatments/">treatments guide</a> for the evidence behind the main options.');
    return list;
  }

  function show(index, moveFocus) {
    steps.forEach(function (step, i) {
      step.hidden = i !== index;
    });
    current = index;
    progress.textContent = 'Question ' + (index + 1) + ' of ' + steps.length;
    backBtn.hidden = index === 0;
    nextBtn.textContent = index === steps.length - 1 ? 'See my estimate' : 'Next';
    errorEl.hidden = true;
    // Only on navigation. Focusing during the initial render would scroll the
    // visitor past the page intro straight into the form.
    if (moveFocus) {
      var first = steps[index].querySelector('input');
      if (first) first.focus();
    }
  }

  function answered(index) {
    return !!steps[index].querySelector('input:checked');
  }

  function render() {
    var data = answers();
    var stage = stageFor(data);
    var info = STAGES[stage];

    document.getElementById('quiz-result-confidence').textContent = confidenceFor(data);
    document.getElementById('quiz-result-stage').textContent = info.label;
    document.getElementById('quiz-result-summary').textContent = info.summary;
    document.getElementById('quiz-result-detail').innerHTML = '<p>' + info.detail + '</p>';

    var actions = document.getElementById('quiz-result-actions');
    actions.innerHTML = '';
    actionsFor(stage, data).forEach(function (text) {
      var li = document.createElement('li');
      li.innerHTML = text;
      actions.appendChild(li);
    });

    form.hidden = true;
    if (intro) intro.hidden = true;
    result.hidden = false;
    result.focus();

    var analytics = window.trackHairAnalytics;
    if (analytics && analytics.isLoaded() && typeof window.gtag === 'function') {
      window.gtag('event', 'norwood_quiz_completed', { stage: info.label });
    }
  }

  nextBtn.addEventListener('click', function () {
    if (!answered(current)) {
      errorEl.hidden = false;
      return;
    }
    if (current === steps.length - 1) {
      render();
      return;
    }
    show(current + 1, true);
  });

  backBtn.addEventListener('click', function () {
    if (current > 0) show(current - 1, true);
  });

  form.addEventListener('change', function () {
    errorEl.hidden = true;
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
  });

  restart.addEventListener('click', function () {
    form.reset();
    form.hidden = false;
    if (intro) intro.hidden = false;
    result.hidden = true;
    show(0, true);
  });

  show(0, false);
})();
</script>
{% endraw %}
