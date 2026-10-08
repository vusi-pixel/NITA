import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";
import { uiText } from "../data/content.js";

function getCondition(code) {
  if (code === 0) return "Clear sky";
  if (code <= 3) return "Partly cloudy";
  if (code <= 48) return "Fog";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  if (code <= 82) return "Rain showers";
  if (code <= 86) return "Snow showers";
  return "Thunderstorms";
}

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    async function loadWeather() {
      setStatus("loading");
      setError("");
      try {
        const params = new URLSearchParams({
          latitude: "5.6037",
          longitude: "-0.1870",
          current: "temperature_2m,weather_code",
          timezone: "Africa/Accra",
        });
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { signal: controller.signal });
        if (!response.ok) throw new Error(uiText.info.weatherUnavailable);
        const result = await response.json();
        const current = result.current;
        if (!current || typeof current.temperature_2m !== "number" || typeof current.weather_code !== "number") {
          throw new Error(uiText.info.weatherUnreadable);
        }
        setWeather(current);
        setStatus("success");
      } catch (loadError) {
        if (loadError.name === "AbortError") return;
        setError(loadError.message || uiText.info.weatherFailed);
        setStatus("error");
      }
    }
    loadWeather();
    return () => controller.abort();
  }, [refresh]);

  return (
    <article className="info-card weather-card" data-reveal aria-live="polite" aria-busy={status === "loading"}>
      <div className="section-heading compact-heading">
        <div><p className="section-kicker">{uiText.info.weatherKicker}</p><h2>{uiText.info.weatherTitle}</h2></div>
        <span className="weather-location"><Icon name="pin" size={13} />{uiText.info.weatherLocation}</span>
      </div>
      {status === "loading" && (
        <div className="weather-content"><span className="weather-icon"><Icon name="cloud" size={29} /></span><p>{uiText.info.weatherLoading}</p></div>
      )}
      {status === "error" && (
        <div className="weather-error" role="alert">
          <p>{error}</p>
          <button type="button" className="text-button" onClick={() => setRefresh((value) => value + 1)}>{uiText.info.weatherTryAgain}</button>
        </div>
      )}
      {status === "success" && weather && (
        <div className="weather-content">
          <span className="weather-icon"><Icon name={weather.weather_code <= 3 ? "sun" : "cloud"} size={31} /></span>
          <strong className="weather-temperature">{Math.round(weather.temperature_2m)}<span>°C</span></strong>
          <p>{getCondition(weather.weather_code)}</p>
        </div>
      )}
      <div className="weather-footer">
        <span className={`weather-status ${status}`}><i />{status === "success" ? "LIVE CONDITIONS" : status === "loading" ? "UPDATING" : "CONNECTION ISSUE"}</span>
        <span className="weather-source">{uiText.info.weatherSource}</span>
      </div>
    </article>
  );
}
