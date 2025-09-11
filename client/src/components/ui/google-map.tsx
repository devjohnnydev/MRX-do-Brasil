import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  center: { lat: number; lng: number };
  zoom: number;
  className?: string;
}

export default function GoogleMap({ center, zoom, className }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        // Using Google Maps API without requiring API key for demonstration
        // In production, you would use the Google Maps JavaScript API with proper API key
        
        if (!mapRef.current) return;

        // Create a simple map placeholder with location information
        const mapContainer = mapRef.current;
        mapContainer.innerHTML = `
          <div class="w-full h-full bg-card border border-border rounded-lg flex flex-col items-center justify-center p-8 text-center">
            <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-foreground mb-2">MRX DO BRASIL</h3>
            <p class="text-muted-foreground mb-4">Estr. Pedro da Cunha Albuquerque Lopes, 3156<br>Perobal - América - SP</p>
            <a 
              href="https://maps.google.com/?q=Estr.+Pedro+da+Cunha+Albuquerque+Lopes+3156+Perobal+América+SP" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors inline-flex items-center"
            >
              <svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Abrir no Google Maps
            </a>
          </div>
        `;

        // For production use with API key:
        /*
        const { Loader } = await import('@googlemaps/js-api-loader');
        
        const loader = new Loader({
          apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
          version: "weekly",
        });

        const { Map } = await loader.importLibrary("maps");
        const { Marker } = await loader.importLibrary("marker");

        const map = new Map(mapRef.current, {
          center,
          zoom,
          styles: [
            // Dark theme styles for Google Maps
            {
              "elementType": "geometry",
              "stylers": [{ "color": "#212121" }]
            },
            {
              "elementType": "labels.icon",
              "stylers": [{ "visibility": "off" }]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [{ "color": "#757575" }]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [{ "color": "#212121" }]
            }
          ]
        });

        new Marker({
          position: center,
          map,
          title: "MRX DO BRASIL",
        });

        mapInstanceRef.current = map;
        */
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, [center, zoom]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full ${className || ''}`}
      data-testid="google-map-container"
    />
  );
}