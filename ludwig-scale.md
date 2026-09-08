---
layout: page
title: Ludwig Scale Quiz - Estimate Female Pattern Hair Loss Stage
description: "A free Ludwig scale quiz for women. Answer six questions about your part line, crown, and shedding to get an estimated Ludwig stage and a photo tracking plan."
permalink: /ludwig-scale/
last_modified_at: 2026-09-08
hero_kicker: Ludwig scale quiz
summary: The Ludwig scale describes female pattern hair loss in three broad stages, based on the widening part line rather than a receding hairline. Answer six questions for an estimated stage and a repeatable photo routine. Everything is calculated in your browser, and nothing you enter is sent anywhere.
schema_type: MedicalWebPage
breadcrumb_parent:
  title: Female pattern hair loss
  url: /female-pattern-hair-loss/
campaign_token: web-ludwig
faq:
  - question: What is the Ludwig scale?
    answer: The Ludwig scale is a three-stage description of female pattern hair loss. It grades how much density has been lost over the top and crown, usually judged from how wide the part line has become, while the frontal hairline typically stays intact.
  - question: How is the Ludwig scale different from the Norwood scale?
    answer: The Norwood scale tracks a receding hairline and crown balding, which is the usual male pattern. The Ludwig scale tracks diffuse thinning over the top of the scalp with a preserved hairline, which is the usual female pattern. They describe different patterns, so the male stages do not translate to women.
  - question: How accurate is a Ludwig scale quiz?
    answer: It can only estimate a stage from your own description of what you see. It is a starting point for photo tracking and for a clinical conversation, not a substitute for either. Female hair loss has more common non-pattern causes than male hair loss, which a questionnaire cannot separate.
  - question: Is my answer data stored or sent anywhere?
    answer: No. The quiz runs entirely in your browser. Nothing you select is uploaded, saved to a server, or associated with you.
  - question: What is the Christmas tree pattern?
    answer: It describes a part line that widens more toward the front of the scalp than the back, giving a triangular shape when the hair is parted. It is a recognised variant of female pattern hair loss and is sometimes called the Olsen pattern.
  - question: Should I see a doctor about female hair loss?
    answer: A clinical assessment is more useful for women than for men, because thyroid disease, iron deficiency, hormonal conditions, postpartum shedding, medication effects, and scarring scalp conditions can all look similar at first. Sudden, patchy, or painful hair loss, or a hairline that is genuinely receding, should be seen promptly.
citations:
  - label: "MedlinePlus: Female Pattern Baldness"
    url: https://medlineplus.gov/ency/article/001173.htm
  - label: "MedlinePlus: Hair Loss"
    url: https://medlineplus.gov/hairloss.html
  - label: "AAD: Finding the right treatments for genetic hair loss"
    url: https://www.aad.org/news/finding-the-right-treatments-for-genetic-hair-loss
  - label: "Cleveland Clinic: Hair Loss Treatments"
    url: https://my.clevelandclinic.org/health/treatments/8307-hair-loss-treatments
related_pages:
  - title: Female pattern hair loss guide
    description: The treatment conversations, tracking plan, and review windows that usually follow a stage estimate.
    url: /female-pattern-hair-loss/
  - title: Spironolactone guide
    description: How a prescribed anti-androgen routine is tracked alongside dose notes and progress photos.
    url: /spironolactone/
  - title: How to take progress photos
    description: The repeatable angles, lighting, and intervals that make a part-line comparison meaningful.
    url: /hair-loss-progress-photos/
  - title: Norwood scale quiz
    description: The equivalent staging tool for male pattern hair loss.
    url: /norwood-scale/quiz/
---

## Estimate your Ludwig stage

The Ludwig scale describes female pattern hair loss in three broad stages. Unlike the Norwood scale used for men, it is not built around a receding hairline. In female pattern hair loss the frontal hairline usually stays where it is, and the visible change is a widening part line and thinning density across the top and crown.

This quiz asks six questions about your part, your scalp, your hair volume, and how the change started, then maps your answers onto the stage that usually matches that description.

Treat the result as a label for the pattern you just described, not as a diagnosis. Female hair loss has more common non-pattern causes than male hair loss does, and several of them need a clinician rather than a staging chart. The quiz flags the ones worth acting on.

<section class="quiz" id="ludwig-quiz" aria-labelledby="quiz-heading">
  <h3 class="quiz__heading" id="quiz-heading">Six questions</h3>
  <p class="quiz__note" id="quiz-intro-note">Answer from what you see in a mirror or a recent photo, in bright, even light, with your hair dry and parted the way you normally wear it. Nothing you select leaves your browser.</p>

  <noscript>
    <p class="quiz__note quiz__note--warn">The interactive result needs JavaScript. The questions below still describe what the Ludwig stages are based on, and the <a href="/female-pattern-hair-loss/">female pattern hair loss guide</a> covers treatment and tracking in full.</p>
  </noscript>

  <form class="quiz__form" id="quiz-form" novalidate>
    <fieldset class="quiz__step" data-step="0">
      <legend class="quiz__legend">1. When you part your hair in its usual place, how does the part compare with a year or two ago?</legend>
      <label class="quiz__option"><input type="radio" name="part" value="0"><span>The same as it has always been</span></label>
      <label class="quiz__option"><input type="radio" name="part" value="1"><span>Slightly wider, mostly toward the crown, and probably only I notice</span></label>
      <label class="quiz__option"><input type="radio" name="part" value="2"><span>Clearly wider, with scalp showing along the part</span></label>
      <label class="quiz__option"><input type="radio" name="part" value="3"><span>Very wide, with scalp visible across most of the top</span></label>
      <label class="quiz__option"><input type="radio" name="part" value="unsure"><span>Not sure</span></label>
    </fieldset>

    <fieldset class="quiz__step" data-step="1" hidden>
      <legend class="quiz__legend">2. Under bright overhead light, how much scalp shows through the hair on top?</legend>
      <label class="quiz__option"><input type="radio" name="top" value="0"><span>None that I notice</span></label>
      <label class="quiz__option"><input type="radio" name="top" value="1"><span>A little, mostly when my hair is wet or freshly parted</span></label>
      <label class="quiz__option"><input type="radio" name="top" value="2"><span>Obvious scalp through the hair over the top and crown</span></label>
      <label class="quiz__option"><input type="radio" name="top" value="3"><span>Scalp is visible across most of the top</span></label>
      <label class="quiz__option"><input type="radio" name="top" value="unsure"><span>Not sure</span></label>
    </fieldset>

    <fieldset class="quiz__step" data-step="2" hidden>
      <legend class="quiz__legend">3. What has happened to your front hairline?</legend>
      <label class="quiz__option"><input type="radio" name="hairline" value="0"><span>Unchanged, my hairline sits where it always has</span></label>
      <label class="quiz__option"><input type="radio" name="hairline" value="1"><span>Still in place, but the part is noticeably wider at the front than the back</span></label>
      <label class="quiz__option"><input type="radio" name="hairline" value="2"><span>The hairline itself has moved back, or my eyebrows have thinned</span></label>
      <label class="quiz__option"><input type="radio" name="hairline" value="unsure"><span>Not sure</span></label>
    </fieldset>

    <fieldset class="quiz__step" data-step="3" hidden>
      <legend class="quiz__legend">4. If you tie your hair back, how does the thickness compare with a year or two ago?</legend>
      <label class="quiz__option"><input type="radio" name="volume" value="0"><span>About the same</span></label>
      <label class="quiz__option"><input type="radio" name="volume" value="1"><span>Slightly thinner</span></label>
      <label class="quiz__option"><input type="radio" name="volume" value="2"><span>Noticeably thinner, it needs more wraps than it used to</span></label>
      <label class="quiz__option"><input type="radio" name="volume" value="3"><span>Much thinner</span></label>
      <label class="quiz__option"><input type="radio" name="volume" value="unsure"><span>Not sure, or I do not tie my hair back</span></label>
    </fieldset>

    <fieldset class="quiz__step" data-step="4" hidden>
      <legend class="quiz__legend">5. How did the change start?</legend>
      <label class="quiz__option"><input type="radio" name="onset" value="gradual"><span>Gradually, over a year or more</span></label>
      <label class="quiz__option"><input type="radio" name="onset" value="sudden"><span>Suddenly, with heavy shedding over the last few months</span></label>
      <label class="quiz__option"><input type="radio" name="onset" value="patchy"><span>In distinct round patches rather than all over</span></label>
      <label class="quiz__option"><input type="radio" name="onset" value="unsure"><span>Hard to say</span></label>
    </fieldset>

    <fieldset class="quiz__step" data-step="5" hidden>
      <legend class="quiz__legend">6. Do any of these apply? Tick all that do.</legend>
      <label class="quiz__option"><input type="checkbox" name="signs" value="none"><span>None of these</span></label>
      <label class="quiz__option"><input type="checkbox" name="signs" value="hormonal"><span>Irregular or absent periods, new acne, or more facial or body hair than before</span></label>
      <label class="quiz__option"><input type="checkbox" name="signs" value="scalp"><span>Scalp pain, itching, burning, or smooth shiny patches where hair will not grow</span></label>
      <label class="quiz__option"><input type="checkbox" name="signs" value="postpartum"><span>I gave birth or stopped breastfeeding in the last year</span></label>
      <label class="quiz__option"><input type="checkbox" name="signs" value="labs"><span>I have, or suspect, a thyroid condition or low iron</span></label>
      <label class="quiz__option"><input type="checkbox" name="signs" value="menopause"><span>I am going through, or past, menopause</span></label>
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

    <div class="quiz__flags" id="quiz-result-flags" hidden>
      <h4>Worth raising with a clinician</h4>
      <ul id="quiz-result-flag-list"></ul>
    </div>

    <div class="quiz__next">
      <h4>What to do next</h4>
      <ol id="quiz-result-actions"></ol>
    </div>

    <p class="quiz__disclaimer">This estimate describes a pattern, not a cause. It is not a diagnosis and it is not medical advice. Female hair loss can involve thyroid disease, iron deficiency, hormonal conditions, medication effects, postpartum changes, or inflammatory scalp conditions, and telling those apart needs a clinician. Tracking supports that conversation, it does not replace it.</p>

    <div class="quiz__cta">
      <a class="button" href="{% include app-store-url.html ct='web-ludwig-result' %}" target="_blank" rel="noopener" data-cta="quiz_result">Track your routine in Track Hair</a>
      <button type="button" class="button button--ghost" id="quiz-restart">Start again</button>
    </div>
  </div>
</section>

## What the three Ludwig stages describe

The scale grades density loss over the top of the scalp. The frontal hairline is expected to stay put in all three stages, which is what separates this pattern from the male one.

- **Type I** is perceptible thinning over the crown, with the part only slightly widened. It is often visible to the person before anyone else notices.
- **Type II** is pronounced thinning across the same area. The part is clearly widened and scalp shows through along it.
- **Type III** is extensive loss of density over the top, with scalp visible across most of the crown, while a fringe of hair usually remains at the front.

A common variant, sometimes called the Christmas tree or Olsen pattern, widens the part more toward the front than the back so the parted hair takes a triangular shape. It is still female pattern hair loss, and the quiz notes it separately when your answers describe it.

## Why a receding hairline is a different question

For men, a receding hairline is the ordinary first sign of pattern hair loss. For women it is not, and it can point to a scarring condition such as frontal fibrosing alopecia, which often thins the eyebrows at the same time. Scarring conditions damage the follicle permanently, so the window for treatment matters.

That is why the quiz asks about your hairline separately and flags it rather than folding it into a stage. A widening part is a tracking problem. A genuinely receding hairline in a woman is a reason to book an appointment.

## Why the photo baseline matters more than the stage

A stage estimate is a snapshot. It cannot tell you whether you are stable or actively losing, which is usually the more useful question, and diffuse thinning is harder to judge by eye than a receding hairline is.

The part line is the most reliable thing to photograph. Part your hair in exactly the same place, in the same light, at the same distance, and the width of that line becomes a measurement you can compare month to month instead of an impression that changes with your mood and the bathroom mirror. Add a top-down crown shot and a ponytail thickness photo and you have a record that is genuinely useful in a consultation.

[Track Hair]({% include app-store-url.html ct='web-ludwig-body' %}) is built around that routine: scheduled treatments including minoxidil and spironolactone, prompts to recapture the same angles, and a timeline you can scroll back through.

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
      label: 'Ludwig type I',
      summary: 'Perceptible thinning over the crown, with the part only slightly widened.',
      detail: 'This is the earliest of the three stages, and the one most often noticed by the person long before anyone else sees it. It is also the stage where a photo baseline is worth the most, because there is a clear before to compare against later.'
    },
    'II': {
      label: 'Ludwig type II',
      summary: 'Pronounced thinning across the top, with a clearly widened part and scalp showing through it.',
      detail: 'Density loss is now visible across the same area as type I rather than just at the crown. The width of the part line is the single most useful thing to photograph from here, because it changes measurably while overall impressions do not.'
    },
    'III': {
      label: 'Ludwig type III',
      summary: 'Extensive loss of density over the top, with scalp visible across most of the crown.',
      detail: 'A fringe usually remains at the front even at this stage, which is what continues to distinguish the female pattern from the male one. Consultation is generally more useful than further self-staging at this point.'
    },
    'diffuse': {
      label: 'Thinning without a widening part',
      summary: 'You describe less hair overall, but not the widening part line that defines the Ludwig stages.',
      detail: 'Diffuse thinning with a normal part is less typical of female pattern hair loss and more typical of shedding-driven causes such as telogen effluvium, thyroid problems, or iron deficiency. Those are worth investigating rather than staging.'
    },
    'none': {
      label: 'No pattern thinning described',
      summary: 'Your answers do not describe the widening part or crown thinning the Ludwig stages are based on.',
      detail: 'Hair density varies with styling, light, season, and health, and a stable part line is reassuring. If you are still concerned, a baseline photo set today gives you something concrete to compare against in a few months.'
    }
  };

  function answers() {
    var data = { unsure: [] };
    ['part', 'top', 'hairline', 'volume', 'onset'].forEach(function (name) {
      var picked = form.querySelector('input[name="' + name + '"]:checked');
      var value = picked ? picked.value : 'unsure';
      if (value === 'unsure') data.unsure.push(name);
      data[name] = value;
    });
    data.signs = Array.prototype.map.call(
      form.querySelectorAll('input[name="signs"]:checked'),
      function (input) { return input.value; }
    );
    return data;
  }

  // "Not sure" falls back to the midpoint so an unanswered axis cannot push the
  // estimate to an extreme. The confidence line reports how many were guessed.
  function score(value, fallback) {
    var n = parseInt(value, 10);
    return isNaN(n) ? fallback : n;
  }

  function stageFor(data) {
    var part = score(data.part, 1);
    var top = score(data.top, 1);
    var volume = score(data.volume, 1);
    // The Ludwig stages grade density over the top of the scalp. The part line
    // and visible scalp are the two direct readings of that; ponytail thickness
    // is supporting evidence, so it can only produce the diffuse result.
    var peak = Math.max(part, top);

    if (peak >= 3) return 'III';
    if (peak === 2) return 'II';
    if (peak === 1) return 'I';
    if (volume >= 2) return 'diffuse';
    return 'none';
  }

  function confidenceFor(data) {
    var deciding = ['part', 'top'].filter(function (name) {
      return data.unsure.indexOf(name) !== -1;
    }).length;
    if (deciding === 2) return 'Low confidence estimate';
    if (deciding === 1) return 'Rough estimate';
    return 'Estimated stage';
  }

  // Conditions a stage label cannot describe, each routed to a clinician rather
  // than folded into the estimate.
  function flagsFor(data) {
    var flags = [];

    if (data.hairline === '2') {
      flags.push('You described a hairline that has moved back, or thinning eyebrows. In women this is not the usual pattern, and it can point to a scarring condition such as frontal fibrosing alopecia. Scarring is permanent once it happens, so this is worth an appointment soon rather than watching for a few more months.');
    }
    if (data.onset === 'sudden') {
      flags.push('Sudden heavy shedding over a few months is more typical of telogen effluvium than of pattern hair loss. It often follows illness, childbirth, surgery, rapid weight loss, or a period of significant stress by two to three months, and it usually recovers, but the trigger is worth identifying.');
    }
    if (data.onset === 'patchy') {
      flags.push('Loss in distinct round patches is not the female pattern and can indicate alopecia areata. It is worth having looked at rather than tracked.');
    }
    if (data.signs.indexOf('scalp') !== -1) {
      flags.push('Scalp pain, itching, burning, or smooth shiny patches can indicate an inflammatory or scarring scalp condition. These need clinical assessment, and photo tracking should not delay it.');
    }
    if (data.signs.indexOf('hormonal') !== -1) {
      flags.push('Irregular periods, new acne, or increased facial or body hair alongside hair loss can suggest a hormonal cause worth investigating. A clinician may want blood tests before discussing treatment.');
    }
    if (data.signs.indexOf('labs') !== -1) {
      flags.push('Thyroid problems and low iron both cause hair loss that can look like early pattern thinning. If either is suspected or untreated, that is usually worth resolving before judging whether a hair treatment is working.');
    }
    if (data.signs.indexOf('postpartum') !== -1) {
      flags.push('Shedding after childbirth or after stopping breastfeeding is common and usually settles on its own within several months. A photo baseline now makes it much easier to tell later whether it settled or continued.');
    }
    return flags;
  }

  function actionsFor(stage, data) {
    var list = [
      'Take a baseline set today: your part line straight down from above, one directly onto the crown, and your hair tied back if you usually wear it that way. Same room, same light, same parting, hair dry and styled the same way each time.',
      'Repeat the identical set every 30 days. Part width is the measurement that actually moves, and comparing month to month is what turns a stage label into a trend.'
    ];

    if (stage === 'II' || stage === 'III') {
      list.push('Photograph the part in two places, at the front and toward the crown. That is what tells you whether the pattern is the Christmas tree variant and whether it is spreading.');
    }
    if (data.hairline === '1') {
      list.push('You described a part that widens more at the front than the back, which is the Christmas tree or Olsen variant. It is still female pattern hair loss, but note it so a clinician has the detail.');
    }
    if (stage === 'diffuse' || data.onset === 'sudden') {
      list.push('Keep a shedding note alongside the photos: roughly how much, and whether it is changing. Read the guide to <a href="/blog/is-hair-shedding-normal/">normal shedding versus a longer-term trend</a> for a calmer way to record it.');
    }
    if (data.signs.indexOf('menopause') !== -1) {
      list.push('Note where you are in the menopause transition alongside the photos. Density often changes through it, and the timing is useful context when reviewing a treatment later.');
    }

    list.push('Read the <a href="/female-pattern-hair-loss/">female pattern hair loss guide</a> for the treatment conversations that usually follow, and <a href="/hair-loss-progress-photos/">how to take progress photos</a> for the angles and lighting that make a comparison hold up.');
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

  // Works for the checkbox step too: at least one box, including "None of
  // these", counts as answered.
  function answered(index) {
    return !!steps[index].querySelector('input:checked');
  }

  function fill(id, items) {
    var host = document.getElementById(id);
    host.innerHTML = '';
    items.forEach(function (text) {
      var li = document.createElement('li');
      li.innerHTML = text;
      host.appendChild(li);
    });
  }

  function render() {
    var data = answers();
    var stage = stageFor(data);
    var info = STAGES[stage];
    var flags = flagsFor(data);

    document.getElementById('quiz-result-confidence').textContent = confidenceFor(data);
    document.getElementById('quiz-result-stage').textContent = info.label;
    document.getElementById('quiz-result-summary').textContent = info.summary;
    document.getElementById('quiz-result-detail').innerHTML = '<p>' + info.detail + '</p>';

    var flagBox = document.getElementById('quiz-result-flags');
    if (flags.length) {
      fill('quiz-result-flag-list', flags);
      flagBox.hidden = false;
    } else {
      flagBox.hidden = true;
    }

    fill('quiz-result-actions', actionsFor(stage, data));

    form.hidden = true;
    if (intro) intro.hidden = true;
    result.hidden = false;
    result.focus();

    var analytics = window.trackHairAnalytics;
    if (analytics && analytics.isLoaded() && typeof window.gtag === 'function') {
      window.gtag('event', 'ludwig_quiz_completed', {
        stage: info.label,
        flagged: flags.length > 0
      });
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

  form.addEventListener('change', function (event) {
    errorEl.hidden = true;

    // "None of these" is mutually exclusive with the specific signs, so a
    // contradictory pair can never reach the routing logic.
    var changed = event.target;
    if (changed && changed.name === 'signs' && changed.checked) {
      var boxes = form.querySelectorAll('input[name="signs"]');
      Array.prototype.forEach.call(boxes, function (box) {
        if (box === changed) return;
        if (changed.value === 'none' || box.value === 'none') box.checked = false;
      });
    }
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
