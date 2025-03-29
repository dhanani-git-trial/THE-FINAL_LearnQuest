<script lang="ts">
  import "$lib/css/create_a_quest.css";
	import QuestionCount from "$lib/components/QuestionCount.svelte";
  let selectedQuizType = 'value-1'; // Track the selected quiz type

  // Update the showTimedQuizTime state based on selected quiz type
  function handleQuizTypeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedQuizType = target.value;
  }
</script>
<br>
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
<br>
<h2>Edit Settings</h2>
<div class="checkbox-wrapper-46">
  <input type="checkbox" id="cbx-46" class="inp-cbx" />
  <label for="cbx-46" class="cbx"
    ><span>
      <svg viewBox="0 0 12 10" height="10px" width="12px">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span
    ><span>Click if you would like others to remix/clone<br> your quest once it is published.</span>
  </label>
</div>




<br>
<h2>Amount of Questions (max 10)</h2>
<QuestionCount/>

<br>
<button class="button x">
 Next Page
</button>