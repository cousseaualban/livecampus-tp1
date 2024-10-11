const API_KEY = "889bdac92c774d818f284432241110";

async function fetchWeather() {
  try {
    // Utilisation des template literals pour intégrer la clé API dans l'URL
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Aizenay&aqi=no`
    );
    let data = await response.json();

    // Extraction des informations météo importantes
    const temp = data.current.temp_c; // Température en °C
    const iconUrl = "https:" + data.current.condition.icon; // URL de l'icône

    // Mise à jour du DOM pour afficher l'icône et la température
    document.getElementById("weather-info").innerText = `${temp}°C`;
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.src = iconUrl;
    weatherIcon.style.display = "inline"; // Affiche l'icône maintenant qu'elle est chargée
  } catch (error) {
    console.error("Erreur:", error);
    document.getElementById("weather-info").innerText = "Météo indisponible";
  }
}

fetchWeather();
