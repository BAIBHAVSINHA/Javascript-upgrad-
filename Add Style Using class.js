<!DOCTYPE html>
<html>
<title>Add Style.JS</title>
<style>
.class1 {
    background-color: orange;
    font-size: 30px;
    color: white;
}
.class2 {
    padding: 20px;
    border: 5px solid red;
}
</style>
<script src="https://www.w3schools.com/lib/w3.js"></script>
<body>

<h2>Testing</h2>

<p>Click the button to add class='class1 class2' to id='London'.</p>

<button onclick="w3.addClass('#London','class1 class2')">Add Classes</button>

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

