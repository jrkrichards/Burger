// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

  // UPDATE
  const devourBtn = document.querySelectorAll('#devour_btn');
  
  // Set up the event listener for the devour button
  if (devourBtn) {
    devourBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault

        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');
        const devoured = e.target.getAttribute('data-devoured');
        const newDevoured = {
          devoured: devoured,
        };
        
        fetch(`/api/burger/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          // Serialize the JSON body
          body: JSON.stringify(newDevoured),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page
          if (response.ok) {
            location.reload('/');
          } else {
            alert('You have to eat the whole burger! Click to devour again!');
          }
        });
      });
    });
  };

  // CREATE
  const addBurgerBtn = document.getElementById('add_button');

  if (addBurgerBtn) {
    addBurgerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.querySelectorAll('#burger_input')[0].value;

      const newBurger = {
        name: name,
      };
      // Send POST request to create a new quote
      fetch('/api/burger', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // Serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Reload the page
        console.log('Created a burger!');
        location.reload();
      });
    });
  }
});
