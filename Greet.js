function Greet(user) {
  const changeText = () => {
    alert(`Welcome ${user}`);
  };
  document.getElementById('btn').addEventListener('click', changeText);
}
Greet(Siddaraju);
