<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  export let data;
  export let form;
  import { enhance } from "$app/forms";
</script>

<div class="form-container">
  <form class="form" id="questForm" method="POST" use:enhance>
    <button class="form-submit-btn" type="submit">Preview</button>
  </form>
</div>
