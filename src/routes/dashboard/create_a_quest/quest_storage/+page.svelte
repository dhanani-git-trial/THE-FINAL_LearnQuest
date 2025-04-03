<script>
	let modalVisible = false; // State to track modal visibility
	export let data;
	export let form;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
		integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
		crossorigin="anonymous"
	/>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-pzjw8f+ua7Kw1TIq0KLc++nK6fM6XXvK1yR/pz9t7p+Q8pA4jk6rZSTp0UX2L2I5"
		crossorigin="anonymous"
	></script>
	<style>
		.modal-fall {
			animation: fallAndFadeIn 0.5s ease-out forwards;
			background-color: rgba(0, 0, 0, 0.8);
			height: 100000%;
		}

		@keyframes fallAndFadeIn {
			0% {
				opacity: 0;
				transform: translateY(-50px);
			}
			100% {
				opacity: 1;
				transform: translateY(0);
			}
		}
	</style>
</svelte:head>
<form id="questForm" use:enhance>
<input name="email" value={data.email}>
<button
	type="submit"
	class="btn btn-primary"
	on:click={() => (modalVisible = true)}
>
	Launch demo modal
</button>
</form>

<!-- Modal -->
{#if modalVisible}
	<div
		class="modal fade show modal-fall"
		id="exampleModalLong"
		tabindex="-1"
		role="dialog"
		aria-labelledby="exampleModalLongTitle"
		aria-hidden="true"
		style="display: block;"
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">
						Modal title
					</h5>
					<button
						type="button"
						class="close"
						on:click={() => (modalVisible = false)}
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					{#if form?.quest_type}
						<strong>Quest Type: </strong><button class="x"
							>{form.quest_type}</button
						>
					{/if}
					<br />
					<hr />
					{#if form?.q1}
						<strong>Question 1: </strong><button class="x"
							>{form.q1}</button
						><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
						<button class="x">{form.q1_a}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
						<button class="x">{form.q1_b}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
						<button class="x">{form.q1_c}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
						<button class="x">{form.q1_d}</button><br />
						Correct Answer: <button class="x">{form.ca_1}</button><br
						/>
						Description:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
							>{form.q1_des}</button
						>
						<br />
						<hr />
					{/if}

					{#if form?.q2}
						<strong>Question 2: </strong><button class="x"
							>{form.q2}</button
						><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
						<button class="x">{form.q2_a}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
						<button class="x">{form.q2_b}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
						<button class="x">{form.q2_c}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
						<button class="x">{form.q2_d}</button><br />
						Correct Answer: <button class="x">{form.ca_2}</button><br
						/>
						Description:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
							>{form.q2_des}</button
						>
						<br />
						<hr />
					{/if}

					{#if form?.q3}
						<strong>Question 3: </strong><button class="x"
							>{form.q3}</button
						><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
						<button class="x">{form.q3_a}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
						<button class="x">{form.q3_b}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
						<button class="x">{form.q3_c}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
						<button class="x">{form.q3_d}</button><br />
						Correct Answer: <button class="x">{form.ca_3}</button><br
						/>
						Description:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
							>{form.q3_des}</button
						>
						<br />
						<hr />
					{/if}

					{#if form?.q4}
						<strong>Question 4: </strong><button class="x"
							>{form.q4}</button
						><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
						<button class="x">{form.q4_a}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
						<button class="x">{form.q4_b}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
						<button class="x">{form.q4_c}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
						<button class="x">{form.q4_d}</button><br />
						Correct Answer: <button class="x">{form.ca_4}</button><br
						/>
						Description:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
							>{form.q4_des}</button
						>
						<br />
						<hr />
					{/if}

					{#if form?.q5}
						<strong>Question 5: </strong><button class="x"
							>{form.q5}</button
						><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
						<button class="x">{form.q5_a}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
						<button class="x">{form.q5_b}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
						<button class="x">{form.q5_c}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
						<button class="x">{form.q5_d}</button><br />
						Correct Answer: <button class="x">{form.ca_5}</button><br
						/>
						Description:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
							>{form.q5_des}</button
						>
						<br />
						<hr />
					{/if}

					{#if form?.q6}
						<strong>Question 6: </strong><button class="x"
							>{form.q6}</button
						><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
						<button class="x">{form.q6_a}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
						<button class="x">{form.q6_b}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
						<button class="x">{form.q6_c}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
						<button class="x">{form.q6_d}</button><br />
						Correct Answer: <button class="x">{form.ca_6}</button><br
						/>
						Description:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
							>{form.q6_des}</button
						>
						<br />
						<hr />
					{/if}

					{#if form?.q7}
						<strong>Question 7: </strong><button class="x"
							>{form.q7}</button
						><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
						<button class="x">{form.q7_a}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
						<button class="x">{form.q7_b}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
						<button class="x">{form.q7_c}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
						<button class="x">{form.q7_d}</button><br />
						Correct Answer: <button class="x">{form.ca_7}</button><br
						/>
						Description:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
							>{form.q7_des}</button
						>
						<br />
						<hr />
					{/if}

					{#if form?.q8}
						<strong>Question 8: </strong><button class="x"
							>{form.q8}</button
						><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
						<button class="x">{form.q8_a}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
						<button class="x">{form.q8_b}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
						<button class="x">{form.q8_c}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
						<button class="x">{form.q8_d}</button><br />
						Correct Answer: <button class="x">{form.ca_8}</button><br
						/>
						Description:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
							>{form.q8_des}</button
						>
						<br />
						<hr />
					{/if}

					{#if form?.q9}
						<strong>Question 9: </strong><button class="x"
							>{form.q9}</button
						><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
						<button class="x">{form.q9_a}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
						<button class="x">{form.q9_b}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
						<button class="x">{form.q9_c}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
						<button class="x">{form.q9_d}</button><br />
						Correct Answer: <button class="x">{form.ca_9}</button><br
						/>
						Description:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
							>{form.q9_des}</button
						>
						<br />
						<hr />
					{/if}

					{#if form?.q10}
						<strong>Question 10: </strong><button class="x"
							>{form.q10}</button
						><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
						<button class="x">{form.q10_a}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
						<button class="x">{form.q10_b}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
						<button class="x">{form.q10_c}</button><br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
						<button class="x">{form.q10_d}</button><br />
						Correct Answer: <button class="x">{form.ca_10}</button><br
						/>
						Description:<br />
						&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
							>{form.q10_des}</button
						>
						<br />
						<hr />
					{/if}
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						on:click={() => (modalVisible = false)}>Close</button
					>
					<button type="button" class="btn btn-primary"
						>Save changes</button
					>
				</div>
			</div>
		</div>
	</div>
{/if}
