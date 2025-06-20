# Weather Status Node.js App

This is a simple Node.js application that allows users to view the current weather status for any city using the OpenWeatherMap API.

## Features
- Enter a city name to get the current temperature and weather description.
- Clean, modern UI.
- Uses Express.js and Axios for backend, vanilla JS for frontend.

## Setup Instructions

1. **Install dependencies:**
   ```sh
   npm install express axios
   ```
2. **Get an OpenWeatherMap API key:**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api) and get your API key.
   - Replace `YOUR_API_KEY` in `index.js` with your actual API key.
3. **Run the app:**
   ```sh
   node index.js
   ```
4. **Open your browser:**
   - Go to [http://localhost:3000](http://localhost:3000)

## Project Structure
- `index.js` - Main server file
- `public/` - Static frontend files
- `.github/copilot-instructions.md` - Copilot custom instructions

## Notes
- This app is for demonstration purposes. For production, consider using environment variables for API keys and adding more robust error handling.
