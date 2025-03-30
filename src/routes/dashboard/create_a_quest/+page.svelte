<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import type { PageData } from "./$types";
  import "$lib/css/create_a_quest.css";
  export let data: PageData;
  let counter = writable(1);
  let countValue = 1; // Keep a separate variable for immediate updates

  function increment() {
    if (countValue < 10) {
      countValue++; // Update immediately
      updateCounter();
    }
  }

  function decrement() {
    if (countValue > 1) {
      countValue--; // Update immediately
      updateCounter();
    }
  }


  function updateCounter() {
    counter.set(countValue); // Update the Svelte store
    requestAnimationFrame(() => localStorage.setItem('questionCount', countValue)); // Prevent UI lag
  }


  onMount(() => {
    const savedCount = localStorage.getItem('questionCount');
    countValue = savedCount ? parseInt(savedCount, 10) : 1;
    counter.set(countValue);
  const checkbox = document.getElementById("cbx-46") as HTMLInputElement | null;
  const email_value = document.getElementById("h6element")?.textContent || "UNKNOWN";
  const name_value = document.getElementById("h5element")?.textContent || "UNKNOWN";
  localStorage.setItem("email", email_value);
  localStorage.setItem("name", name_value);
  if (checkbox) {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        console.log("Checkbox is checked!");
        localStorage.setItem("allowRemix", "EVERYONE");
      } else {
        console.log("Checkbox is unchecked!");
        localStorage.setItem("allowRemix", email_value);
      }
    });
  }

  if (localStorage.getItem("allowRemix") == "EVERYONE" && document.getElementById("cbx-46") != null) {
    const checkbox = document.getElementById("cbx-46") as HTMLInputElement;
    checkbox.checked = true;
  }

  const radioButtons = document.querySelectorAll('input[name="quest_type"]');
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      localStorage.setItem("selectedQuestType", (this as HTMLInputElement).value);
    });
  });

  // Restore the selected radio button from localStorage
  const savedQuestType = localStorage.getItem("selectedQuestType");
  if (savedQuestType) {
    const selectedRadio = document.querySelector(`input[name="quest_type"][value="${savedQuestType}"]`) as HTMLInputElement;
    if (selectedRadio) {
      selectedRadio.checked = true;
    }
  }
});
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</svelte:head>

<br>
<h6 id="h6element">{data.email}</h6>
<h5 id="h5element">{data.name}</h5>
<form id="questForm">
  <h2>Type of Quest</h2>
  <div class="radio-input">
    <label class="label">
      <input type="radio" name="quest_type" value="IceQuest Platformer" />
      <p class="text">IceQuest Platformer</p>
    </label>
    <label class="label">
      <input type="radio" name="quest_type" value="Regular Quiz" />
      <p class="text">Regular Quiz</p>
    </label>
    <label class="label">
      <input type="radio" name="quest_type" value="Timed Quiz" />
      <p class="text">Timed Quiz</p>
    </label>
  </div>

  <br>
  <h2>Edit Settings</h2>
  <div class="checkbox-wrapper-46">
    <input type="checkbox" id="cbx-46" name="allowRemix" class="inp-cbx" />
    <label for="cbx-46" class="cbx">
      <span>
        <svg viewBox="0 0 12 10" height="10px" width="12px">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      <span>Click if you would like others to remix/clone<br> your quest once it is published.</span>
    </label>
  </div>

  <br>
  <h2>Amount of Questions (max 10)</h2>
  <div class="ingrp">
    <button id="question-btn" type="button" on:click={decrement}>-</button>
    <input id="question" type="number" bind:value={$counter} readonly>
    <button id="question-btn" type="button" on:click={increment}>+</button>
  </div>

  <br>
  <button type="submit" class="button x">
    Next Page
  </button>
  <p id="responseMessage"></p>
</form>
