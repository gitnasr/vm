document.getElementById('weatherForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = 'Loading...';
  try {
    const response = await fetch('/weather', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `city=${encodeURIComponent(city)}`
    });
    const data = await response.json();
    if (data.success) {
      resultDiv.innerHTML = `<strong>${data.city}</strong>: ${data.temp}°C, ${data.description}`;
    } else {
      resultDiv.innerHTML = `<span class="error">${data.message}</span>`;
    }
  } catch (err) {
    resultDiv.innerHTML = '<span class="error">Error fetching weather data.</span>';
  }
});
