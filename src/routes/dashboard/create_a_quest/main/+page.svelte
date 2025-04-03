<script lang="ts">
  import '$lib/css/app.css';
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import type { ActionData, PageData } from "./$types";

export let form: ActionData;

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
  counter.set(countValue);
  console.log("Counter updated:", countValue);
  requestAnimationFrame(() => localStorage.setItem('questionCount', String(countValue)));
}

  onMount(() => {
    const storedCount = localStorage.getItem('questionCount');
    if (storedCount) {
      countValue = parseInt(storedCount, 10);
      counter.set(countValue);
    }
  });
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</svelte:head>

<br>

<form id="questForm" method="POST">
  <script>
    localStorage.setItem("condition", 0);
  </script>
 <h2>Type of Quest</h2>
  <div class="radio-input">
    <label class="label">
      <input type="radio" name="quest_type" value="IceQuest Platformer" required />
      <p class="text">IceQuest Platformer</p>
    </label>
    <label class="label">
      <input type="radio" name="quest_type" value="Regular Quiz" required />
      <p class="text">Regular Quiz</p>
    </label>
    <label class="label">
      <input type="radio" name="quest_type" value="Timed Quiz" required />
      <p class="text">Timed Quiz</p>
    </label>
  </div>

  <br>
  <textarea id="name" name="name" required>{data?.name || ''}</textarea>
  <textarea id="email" name="email" required>{data?.email || ''}</textarea>

  <br>
  <h2>Amount of Questions (max 10)</h2>
  <div class="ingrp">
    <button id="question-btn" type="button" on:click={decrement}>-</button>
    <input id="question" type="number" bind:value={$counter} readonly>
    <input type="hidden" name="question_count" value={$counter} />
    <button id="question-btn" type="button" on:click={increment}>+</button>
  </div>

  <br>
  <button type="submit" class="button x">
    Next Page
  </button>
</form>