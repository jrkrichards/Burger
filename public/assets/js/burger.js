// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

  // UPDATE
  const devourBtn = document.querySelectorAll('#devour_btn');
  
  // Set up the event listener for the create button
  if (devourBtn) {
    devourBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault
        console.log('test');
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');
        const devoured = e.target.getAttribute('data-devoured');

        console.log(id)
        const newDevoured = {
          devoured: devoured,
        };
      
        fetch(`/api/burger/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(newDevoured),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed devoured to: ${newDevoured}`);
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }

  // CREATE
  const addBurgerBtn = document.getElementById('add_button');

  if (addBurgerBtn) {
    addBurgerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.querySelectorAll('#burger_input')[0].value;

      const newBurger = {
        burger_name: name,
      };

      // Send POST request to create a new quote
      fetch('/api/burger', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newCat),
      }).then(() => {
        // Empty the form
        document.getElementById('ca').value = '';

        // Reload the page so the user can see the new quote
        console.log('Created a new cat!');
        location.reload();
      });
    });
  }
});
