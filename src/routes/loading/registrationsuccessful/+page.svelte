<script lang="ts">
	import Spinner from "$lib/components/Spinner.svelte";
    export let data;
    setTimeout(() => {
      window.location.href = '/login';  // Redirect to the desired URL
    }, 1000);  // 1000 milliseconds = 1 second
</script>
<div>
<Spinner></Spinner>
<h3>Registration sucessful!<br>Redirecting to login page...</h3>
</div>
<style>
    h3 {
        font-weight: normal;
        font-family: 'Varela Round';
        text-align: center;
    }

    div {
        height: 100%;
        transform: translate(0%, 50%);
    }
</style>
