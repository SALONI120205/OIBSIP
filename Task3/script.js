function convertTemp() {
    let temp = parseFloat(document.getElementById("inputTemp").value);
    let unit = document.getElementById("inputUnit").value;
    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML = "❗ Please enter a valid number";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    }
    else if (unit === "fahrenheit") {
        fahrenheit = temp;
        celsius = (temp - 32) * 5/9;
        kelvin = ((temp - 32) * 5/9) + 273.15;
    }
    else if (unit === "kelvin") {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = ((temp - 273.15) * 9/5) + 32;
    }

    result.innerHTML = `
        <span>🌡️ Celsius: ${celsius.toFixed(2)} °C</span><br>
        <span>🔥 Fahrenheit: ${fahrenheit.toFixed(2)} °F</span><br>
        <span>❄️ Kelvin: ${kelvin.toFixed(2)} K</span>
    `;
}
