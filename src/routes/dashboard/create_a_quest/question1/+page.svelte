<div class="form-container">
  <form class="form">
    <div class="form-group">
      <label for="q1">Question 1</label>
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
      <label for="myTextarea">Description</label>
      <textarea id="myTextarea" maxlength="270" rows="5" cols="50" placeholder="Type here..."></textarea>
      <p id="charCount">0 / 270</p>
      <br>
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
    <input type="hidden" id="correct_answer" name="correct_answer">
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const textarea = document.getElementById("myTextarea");
        const charCount = document.getElementById("charCount");
        const answerButtons = document.querySelectorAll(".btn");
        const correctAnswerInput = document.getElementById("correct_answer");
    
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

<style>
  .nav {
    position: relative;
    width: 80%;
    height: 60px;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  p {
    margin-left: auto;
    margin-right: 5%;
  }
  .container {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: #bef6;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
  }

  .btn {
    padding: 0.5em 1.5em;
    color: #fff;
    cursor: pointer;
    transition: 0.1s;
    border-radius: 8px;
    background: #414141;
  }

  .btn:hover {
    background: #fff3;
  }

  .form-container {
    width: 100%;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 2px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-group:last-child {
    margin-bottom: 0px !important;
  }

  .form-container .form-group label {
    color: white;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    background-color: transparent;
    border: 3px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    font-family: inherit;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 3px solid #414141;
    background-color: transparent;
  }

  .form-container .form-group input:focus,
  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #fff;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    cursor: pointer;
    border-radius: 6px;
  }
</style>
