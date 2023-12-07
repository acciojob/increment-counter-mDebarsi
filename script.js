//your JS code here. If required.
 // Initialize the counter value
    let counterValue = 0;

    // Function to increment the counter and display an alert
    function incrementCounter() {
      // Display an alert with the un-incremented value
      alert("Un-incremented value: " + counterValue);

      // Increment the counter value
      counterValue++;

      // Update the counter value in the HTML
      document.getElementById('counter').innerText = counterValue;
    }