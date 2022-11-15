//https://637388cf348e9472990f4755.mockapi.io/:endpoint
document.querySelector('button').addEventListener('click', e =>  {
  e.preventDefault();
  let id = document.querySelector('input').value;
  let r = fetch('https://637388cf348e9472990f4755.mockapi.io/users/' + id)
  .then(response => response.json()).then(data => {
    console.log(data);
    let podaci = document.querySelector('.data');
    podaci.innerHTML = `<h2>User with id ${id}:</h2>
                      <p><b>Username:</b> ${data['username']}</p>
                      <p><b>Email:</b> ${data['email']}</p>
                      <p><b>Password:</b> ${data['password']}</p>`;
  }).catch(error => alert('Network disconnected'));
});