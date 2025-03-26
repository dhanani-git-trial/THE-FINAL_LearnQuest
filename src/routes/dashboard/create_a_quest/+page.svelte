<script lang="ts">
	import QuestionCount from "$lib/components/QuestionCount.svelte";
  let selectedQuizType = 'value-1'; // Track the selected quiz type

  // Update the showTimedQuizTime state based on selected quiz type
  function handleQuizTypeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedQuizType = target.value;
  }
</script>
<h2>Type of Quest</h2>
<div class="radio-input">
  <label class="label">
    <input type="radio" bind:group={selectedQuizType} value="value-1" on:change={handleQuizTypeChange} />
    <p class="text">IceQuest Platformer</p>
  </label>
  <label class="label">
    <input type="radio" bind:group={selectedQuizType} value="value-2" on:change={handleQuizTypeChange} />
    <p class="text">Regular Quiz</p>
  </label>
  <label class="label">
    <input type="radio" bind:group={selectedQuizType} value="value-3" on:change={handleQuizTypeChange} />
    <p class="text">Timed Quiz</p>
  </label>
</div>

<div class="checkbox-wrapper-4">
  <h2>Edit Settings</h2>
  <input class="inp-cbx" id="morning" type="checkbox">
  <label class="cbx" for="morning"><span>
  <svg width="12px" height="10px">
  </svg></span><span>Click if you would like others to remix/clone<br> your quest once it is published.</span></label>
  <svg class="inline-svg">
    <symbol id="check-4" viewBox="0 0 12 10">
      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    </symbol>
  </svg>
</div>
<h2>Amount of Questions</h2>
<QuestionCount/>

<style>
  .radio-input {
    display: flex !important;
    flex-direction: column !important;
    gap: 10px !important;
  }

  .radio-input * {
    box-sizing: border-box !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .radio-input label {
    display: flex !important;
    align-items: center !important;
    gap: 15px !important;
    padding: 0px 20px !important;
    width: 220px !important;
    cursor: pointer !important;
    height: 50px !important;
    position: relative !important;
  }

  .radio-input label::before {
    position: absolute !important;
    content: "" !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 220px !important;
    height: 45px !important;
    z-index: -1 !important;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
    border-radius: 10px !important;
    border: 2px solid transparent !important;
  }

  .radio-input label:hover::before {
    transition: all 0.2s ease !important;
    background-color: #2a2e3c !important;
  }

  .radio-input .label:has(input:checked)::before {
    background-color: #2d3750 !important;
    border-color: #435dd8 !important;
    height: 50px !important;
  }

  .radio-input .label .text {
    color: #fff !important;
  }

  .radio-input .label input[type="radio"] {
    background-color: #202030 !important;
    appearance: none !important;
    width: 17px !important;
    height: 17px !important;
    border-radius: 50% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

  .radio-input .label input[type="radio"]:checked {
    background-color: #435dd8 !important;
    -webkit-animation: puls 0.7s forwards !important;
    animation: pulse 0.7s forwards !important;
  }

  .radio-input .label input[type="radio"]:before {
    content: "" !important;
    width: 6px !important;
    height: 6px !important;
    border-radius: 50% !important;
    transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
    background-color: #fff !important;
    transform: scale(0) !important;
  }

  .radio-input .label input[type="radio"]:checked::before {
    transform: scale(1) !important;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4) !important;
    }
    70% {
      box-shadow: 0 0 0 8px rgba(255, 255, 255, 0) !important;
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0) !important;
    }
  }
  /* From Uiverse.io by Shoh2008 */ 
.checkbox-wrapper-4 * {
  box-sizing: border-box !important;
  color: white !important;
}

.checkbox-wrapper-4 .cbx {
  -webkit-user-select: none !important;
  user-select: none !important;
  cursor: pointer !important;
  padding: 6px 8px !important;
  border-radius: 6px !important;
  overflow: hidden !important;
  transition: all 0.2s ease !important;
  display: inline-block !important;
}

.checkbox-wrapper-4 .cbx:not(:last-child) {
  margin-right: 6px !important;
}

.checkbox-wrapper-4 .cbx:hover {
  background: rgba(0,119,255,0.06) !important;
}

.checkbox-wrapper-4 .cbx span {
  float: left !important;
  vertical-align: middle !important;
  transform: translate3d(0, 0, 0) !important;
}

.checkbox-wrapper-4 .cbx span:first-child {
  position: relative !important;
  width: 18px !important;
  height: 18px !important;
  border-radius: 4px !important;
  transform: scale(1) !important;
  border: 1px solid #cccfdb !important;
  transition: all 0.2s ease !important;
  box-shadow: 0 1px 1px rgba(0,16,75,0.05) !important;
}

.checkbox-wrapper-4 .cbx span:first-child svg {
  position: absolute !important;
  top: 3px !important;
  left: 2px !important;
  fill: none !important;
  stroke: #fff !important;
  stroke-width: 2 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
  stroke-dasharray: 16px !important;
  stroke-dashoffset: 16px !important;
  transition: all 0.3s ease !important;
  transition-delay: 0.1s !important;
  transform: translate3d(0, 0, 0) !important;
}

.checkbox-wrapper-4 .cbx span:last-child {
  padding-left: 8px !important;
  line-height: 18px !important;
}

.checkbox-wrapper-4 .cbx:hover span:first-child {
  border-color: #07f !important;
}

.checkbox-wrapper-4 .inp-cbx {
  position: absolute !important;
  visibility: hidden !important;
}

.checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child {
  background: #07f !important;
  border-color: #07f !important;
  animation: wave-4 0.4s ease !important;
}

.checkbox-wrapper-4 .inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0 !important;
}

.checkbox-wrapper-4 .inline-svg {
  position: absolute !important;
  width: 0 !important;
  height: 0 !important;
  pointer-events: none !important;
  user-select: none !important;
}

@media screen and (max-width: 640px) {
  .checkbox-wrapper-4 .cbx {
    width: 100% !important;
    display: inline-block !important;
  }
}

@-moz-keyframes wave-4 {
  50% {
    transform: scale(0.9) !important;
  }
}

@-webkit-keyframes wave-4 {
  50% {
    transform: scale(0.9) !important;
  }
}

@-o-keyframes wave-4 {
  50% {
    transform: scale(0.9) !important;
  }
}

@keyframes wave-4 {
  50% {
    transform: scale(0.9) !important;
  }
}
</style>
