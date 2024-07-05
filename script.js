function initMap() {
  const location = { lat: -25.344, lng: 131.036 }; // Ubicación ficticia
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: location,
  });
  const marker = new google.maps.Marker({
      position: location,
      map: map,
  });
}

window.addEventListener('load', () => {
  // Cargar el mapa una vez que la página esté completamente cargada
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap`;
  script.async = true;
  document.head.appendChild(script);
});
