var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var shoppingInput = $('#shopping-input');
// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();

    var item = $('<li>');
    item.text(shoppingInput.val());
    shoppingListEl.append(item);


    // Clear input fields
    $('input[type="text"]').val('');
  }
  
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);
