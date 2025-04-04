<script>
    import "$lib/css/app.css";
</script>
<div class="container">
    <ul class="levels">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>    
  </div>
  <style>

  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

html, body {
  height: 100vh;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lobster', Georgia, serif;
  color: #545454;
}

.container {
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2.4rem;
  margin: 0 0 0.8em;
}

@media screen and (min-width: 400px) {
  h1 {
    font-size: 3rem;
  }
}

.levels {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 -15px;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}

.levels li {
  margin: 0 15px 30px;
  padding: 5px;
  width: 20%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #f6f6f6;
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.1);
  background-color: gray;
  /*background-color: #428bca;*/
  color: white;
  position: relative;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.levels li:hover {
  color: #fff;
  background-color: #99ce2a;
  transform: scale(1.04);
}
</style>