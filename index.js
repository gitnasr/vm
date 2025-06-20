const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/weather', async (req, res) => {
  const city = req.body.city;
  const apiKey = '68ce27ea53044402aa075444252006'; // WeatherAPI.com API key
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?q=${encodeURIComponent(city)}&key=${apiKey}`);
    const weather = response.data;
    res.json({
      success: true,
      city: weather.location.name,
      temp: weather.current.temp_c,
      description: weather.current.condition.text
    });
  } catch (error) {
    res.json({ success: false, message: 'City not found or API error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
