import { ref, onMounted, onUnmounted, shallowRef, type Ref } from "vue";
import "maplibre-gl/dist/maplibre-gl.css";

export interface NetworkHub {
  id: string;
  name: string;
  region: string;
  city: string;
  lng: number;
  lat: number;
  specialty: string;
  badge: string;
}

export const defaultHubs: NetworkHub[] = [
  {
    id: "ph",
    name: "Philippines",
    region: "Southeast Asia",
    city: "Manila HQ",
    lng: 120.9842,
    lat: 14.5995,
    specialty:
      "Central Distribution, Commercial Operations & Freight Logistics[cite: 3, 4]",
    badge: "HQ",
  },
  {
    id: "kr",
    name: "Korea",
    region: "East Asia",
    city: "Seoul / Incheon",
    lng: 126.978,
    lat: 37.5665,
    specialty:
      "K-beauty & skincare formulation sourcing (KFDA certified)[cite: 3, 4]",
    badge: "K-Beauty",
  },
  {
    id: "cn",
    name: "China",
    region: "East Asia",
    city: "Yiwu / Ningbo",
    lng: 120.075,
    lat: 29.3069,
    specialty:
      "Machinery, industrial OEM/ODM & general goods manufacturing[cite: 3, 4]",
    badge: "Machinery",
  },
  {
    id: "th",
    name: "Thailand",
    region: "Southeast Asia",
    city: "Bangkok",
    lng: 100.5018,
    lat: 13.7563,
    specialty:
      "Food & beverage ingredients sourcing & regional logistics[cite: 3, 4]",
    badge: "Food & Logistics",
  },
  {
    id: "vn",
    name: "Vietnam",
    region: "Southeast Asia",
    city: "Hanoi",
    lng: 105.8544,
    lat: 21.0285,
    specialty: "Apparel & artisanal crafts sourcing and export[cite: 3, 4]",
    badge: "Apparel & Crafts",
  },
  {
    id: "jp",
    name: "Japan",
    region: "East Asia",
    city: "Tokyo",
    lng: 139.6917,
    lat: 35.6895,
    specialty:
      "Precision manufacturing, packaging & specialty materials[cite: 4]",
    badge: "Packaging",
  },
  {
    id: "de",
    name: "Germany",
    region: "Europe",
    city: "Hamburg / Frankfurt",
    lng: 9.9937,
    lat: 53.5511,
    specialty:
      "Nutritional supplements, active formulas & EU compliance standards[cite: 3, 4]",
    badge: "Supplements",
  },
  {
    id: "fr",
    name: "France",
    region: "Europe",
    city: "Paris",
    lng: 2.3522,
    lat: 48.8566,
    specialty:
      "Fine fragrance, luxury perfumery & premium skincare sourcing[cite: 3, 4]",
    badge: "Perfume & Luxury",
  },
  {
    id: "it",
    name: "Italy",
    region: "Europe",
    city: "Milan / Rome",
    lng: 9.19,
    lat: 45.4642,
    specialty:
      "Artisanal coffee, luxury private label development & goods[cite: 3, 4]",
    badge: "Coffee & Luxury",
  },
  {
    id: "pl",
    name: "Poland",
    region: "Europe",
    city: "Warsaw",
    lng: 21.0122,
    lat: 52.2297,
    specialty:
      "Hygiene products & CE-certified medical supplies sourcing[cite: 3, 4]",
    badge: "Medical Supplies",
  },
  {
    id: "au",
    name: "Australia",
    region: "Oceania",
    city: "Sydney",
    lng: 151.2093,
    lat: -33.8688,
    specialty:
      "Ocean freight forwarding & Oceania trading partner network[cite: 3, 4]",
    badge: "Oceania Trade",
  },
];

export interface ProjectedHub extends NetworkHub {
  x: number;
  y: number;
}

export function useTradeMap(
  containerRef: Ref<HTMLElement | null>,
  hubsList: NetworkHub[] = defaultHubs,
) {
  const activeHub = ref<NetworkHub>(hubsList[0]!);
  const projectedHubs = ref<ProjectedHub[]>([]);
  const mapInstance = shallowRef<any>(null);
  let resizeObserver: ResizeObserver | null = null;

  const updateProjections = () => {
    if (!mapInstance.value) return;

    projectedHubs.value = hubsList.map((hub) => {
      const pos = mapInstance.value.project([hub.lng, hub.lat]);
      return { ...hub, x: pos.x, y: pos.y };
    });
  };

  const focusHub = (hub: NetworkHub) => {
    activeHub.value = hub;
    if (!mapInstance.value) return;

    const isMobile = window.innerWidth < 768;

    mapInstance.value.flyTo({
      center: [hub.lng, hub.lat],
      zoom: hub.id === "au" ? (isMobile ? 2.6 : 3.3) : isMobile ? 3.1 : 3.8,
      speed: 1.2,
      curve: 1.35,
      essential: true,
    });
  };

  onMounted(async () => {
    const maplibre = await import("maplibre-gl");
    if (!containerRef.value) return;

    const isMobile = window.innerWidth < 768;

    const map = new maplibre.Map({
      container: containerRef.value,
      style: {
        version: 8,
        sources: {
          "osm-tiles": {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: "osm-layer",
            type: "raster",
            source: "osm-tiles",
            minzoom: 0,
            maxzoom: 19,
            paint: {
              "raster-saturation": -0.32,
              "raster-contrast": 0.08,
              "raster-brightness-max": 0.96,
            },
          },
        ],
      },
      center: isMobile ? [118.0, 16.0] : [108.0, 18.0],
      zoom: isMobile ? 1.6 : 2.1,
      minZoom: 1.2,
      maxZoom: 7,
      attributionControl: false,
    });

    mapInstance.value = map;

    map.on("load", () => {
      map.resize();
      updateProjections();
    });

    map.on("render", updateProjections);
    map.on("move", updateProjections);

    if (containerRef.value && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        map.resize();
        updateProjections();
      });
      resizeObserver.observe(containerRef.value);
    }
  });

  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
    if (mapInstance.value) {
      mapInstance.value.remove();
      mapInstance.value = null;
    }
  });

  return {
    hubs: hubsList,
    activeHub,
    projectedHubs,
    focusHub,
  };
}
