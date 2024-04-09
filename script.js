function consultaClima() {
  const apiKey = 'acadeac3426e5178c4e63bc94450627d';
  const cidade = document.getElementById('cidade').value;

  if (!cidade) {
    alert('Digite uma cidade');
    return;
  }

  const urlClima = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`;

  fetch(urlClima)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      

      document.getElementById('temp').innerHTML = `Temperatura: ${temp - 273} C`;
      document.getElementById('description').innerHTML = `Descrição: ${description}`;
    })
    .catch(error => {
      console.error('Erro ao consultar API:', error);
      alert('Erro ao consultar API');
    });
}