<!DOCTYPE html>
<html>
<title>Toggle Style.JS</title>
<style>
.marked {
    background-color: orange;
    color: white;
    font-size: 30px;
    padding: 16px;
}
</style>
<script src="https://www.w3schools.com/lib/w3.js"></script>
<body>

<h2>Testing</h2>

<p>Click the button to toggle the "marked" class of id="London".</p>

<p>
<button onclick="w3.toggleClass('#London','marked')">Toggle Class</button>
</p>

<div id="London" class="city">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

</body>
</html>

