<script>
  import "$lib/css/question.css";
</script>


<div class="form-container">
  <form class="form">
    <div class="form-group">
      <h2>Edit Question 1</h2>
      <br>
      <label for="q1">Question</label>
      <input type="text" id="q1" name="q1" required>
    </div>
    <div class="form-group">
      <label for="q1_a">Answer Choice A</label>
      <input type="text" id="q1_a" name="q1_a" required>
    </div>
    <div class="form-group">
      <label for="q1_b">Answer Choice B</label>
      <input type="text" id="q1_b" name="q1_b" required>
    </div>
    <div class="form-group">
      <label for="q1_c">Answer Choice C</label>
      <input type="text" id="q1_c" name="q1_c">
    </div>
    <div class="form-group">
      <label for="q1_d">Answer Choice D</label>
      <input type="text" id="q1_d" name="q1_d">
    </div>
    <div class="form-group">
      <label for="q1_des">Description</label>
      <textarea id="q1_des" maxlength="270" rows="5" cols="50" placeholder="Type here..."></textarea>
      <p id="charCount">0 / 270</p>
      <br>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>Select Correct Answer</label>
      <!-- Answer selection buttons -->
      <div class="nav">
        <div class="container">
          <div class="btn" data-answer="A">A</div>
          <div class="btn" data-answer="B">B</div>
          <div class="btn" data-answer="C">C</div>
          <div class="btn" data-answer="D">D</div>
        </div>
      </div>
    </div>
    
    
    <!-- Hidden input to store correct answer -->
    <input class="selected" type="hidden" id="ca_1" name="ca_1">
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const textarea = document.getElementById("q1_des");
        const charCount = document.getElementById("charCount");
        const answerButtons = document.querySelectorAll(".btn");
        const correctAnswerInput = document.getElementById("ca_1");
    
        // Update character count for textarea
        textarea.addEventListener("input", function () {
          charCount.textContent = `${this.value.length} / 270`;
        });
    
        // Handle answer selection
        answerButtons.forEach(button => {
          button.addEventListener("click", function () {
            // Remove 'selected' class from all buttons
            answerButtons.forEach(btn => btn.classList.remove("selected"));
            
            // Add 'selected' class to clicked button
            this.classList.add("selected");
            
            // Update hidden input value
            correctAnswerInput.value = this.getAttribute("data-answer");
          });
        });
      });
    </script>
    <button class="form-submit-btn" type="submit">Submit</button>
  </form>
</div>
