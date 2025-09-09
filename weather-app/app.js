// app.js
const yargs = require("yargs");
const chalk = require("chalk");


// Parse command-line arguments
const argv = yargs(process.argv.slice(2)).string(['city']).parse();

// Simulated weather data
const weatherData = {
  "New York": { temp: "22°C", condition: "Sunny" },
  "London": { temp: "18°C", condition: "Cloudy" },
  "Paris": { temp: "20°C", condition: "Rainy" },
};

// Fetch weather function
function getWeather(city) {
  if (weatherData[city]) {
    return weatherData[city];
  } else {
    return { temp: "N/A", condition: "City not found in database" };
  }
}

// Run app
const city = argv.city;
console.log(chalk.blue.bold(`\nFetching weather data for ${city}...`));
const result = getWeather(city);

console.log(
  chalk.blue.bold(`Weather for ${city}:`) +
    `\nTemperature: ${chalk.green(result.temp)}\nCondition: ${chalk.yellow(
      result.condition
    )}`
);

/* 
===============================================
 Short Written Response
===============================================
1. Purpose of package.json:
   - package.json keeps track of project metadata and lists dependencies 
     (like yargs and chalk). It helps others know what modules are needed.

2. Why node_modules is not in version control:
   - node_modules contains all installed dependencies, which can be 
     very large. Instead of sharing them, we share package.json, so 
     others can run "npm install" to get the same modules.

3. How npm install helps:
   - When you delete node_modules, running "npm install" reads 
     package.json and reinstalls all dependencies. This ensures the 
     project works the same way for every developer in a team.
*/
