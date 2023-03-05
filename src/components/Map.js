import React from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Center, Divider, Flex, ScrollArea, Text } from "@mantine/core";

function Map({ sourceCoord, destCoord, source, dest, dist, setDist }) {
  const [time, setTime] = React.useState(null);
  // const [dist, setDist] = React.useState(null);

  React.useEffect(() => {
    document.getElementById("my-map").innerHTML =
      "<div id='map' style='width: 100%; height: 100%;'></div>";

    var map = new L.Map("map");
    map.setView(new L.LatLng(sourceCoord[0], sourceCoord[1]), 12);

    const myAPIKey = process.env.REACT_APP_MAPS_API_KEY;
    // const myAPIKey = "";

    const isRetina = L.Browser.retina;

    const baseUrl =
      "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
    const retinaUrl =
      "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution:
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" rel="nofollow" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" rel="nofollow" target="_blank">© OpenStreetMap</a> contributors',
      apiKey: myAPIKey,
      maxZoom: 20,
      id: "osm-bright",
    }).addTo(map);

    const fromWaypoint = [sourceCoord[0], sourceCoord[1]];
    const fromWaypointMarker = L.marker(fromWaypoint)
      .addTo(map)
      .bindPopup(source);

    const toWaypoint = [destCoord[0], destCoord[1]];
    const toWaypointMarker = L.marker(toWaypoint).addTo(map).bindPopup(dest);

    const turnByTurnMarkerStyle = {
      radius: 5,
      fillColor: "#fff",
      color: "#555",
      weight: 1,
      opacity: 1,
      fillOpacity: 1,
    };

    fetch(
      `https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(
        ","
      )}|${toWaypoint.join(",")}&mode=drive&apiKey=${myAPIKey}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setDist(result.features[0].properties.distance);
          setTime(result.features[0].properties.time);
          L.geoJSON(result, {
            style: (feature) => {
              return {
                color: "rgba(20, 137, 255, 0.7)",
                weight: 5,
              };
            },
          })
            .bindPopup((layer) => {
              return `${layer.feature.properties.distance} ${layer.feature.properties.distance_units}, ${layer.feature.properties.time}`;
            })
            .addTo(map);

          const turnByTurns = [];
          result.features.forEach((feature) =>
            feature.properties.legs.forEach((leg, legIndex) =>
              leg.steps.forEach((step) => {
                const pointFeature = {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates:
                      feature.geometry.coordinates[legIndex][step.from_index],
                  },
                  properties: {
                    instruction: step.instruction.text,
                  },
                };
                turnByTurns.push(pointFeature);
              })
            )
          );

          L.geoJSON(
            {
              type: "FeatureCollection",
              features: turnByTurns,
            },
            {
              pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, turnByTurnMarkerStyle);
              },
            }
          )
            .bindPopup((layer) => {
              return `${layer.feature.properties.instruction}`;
            })
            .addTo(map);
        },
        (error) => console.log(error)
      );
  });

  return (
    <>
      <Center>
        <Flex direction={"row"} gap={200}>
          <Flex direction={"column"}>
            <Text c={"dimmed"}>Distance</Text>
            <Text fz={24}>{dist / 1000} km</Text>
          </Flex>
          <Flex direction={"column"}>
            <Text c={"dimmed"}>Time (approx.)</Text>
            <Text fz={24}>{Math.trunc(time / 60)} mins</Text>
          </Flex>
        </Flex>
      </Center>
      <Divider sx={{ marginBottom: 30 }} />
      <Center>
        <div
          id="my-map"
          style={{
            width: "90%",
            height: "500px",
          }}
        ></div>
      </Center>
    </>
  );
}

export default Map;
