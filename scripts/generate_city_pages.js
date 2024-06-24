const fs = require("fs");
const path = require("path");
const https = require("https");

const cities = require("../_data/cities.json");
const places = require("../_data/places.json");

function generateCityHTML(city) {
  const cityPlaces = places.filter((place) => place.fields.city === city);
  return `---
layout: default
title: "${city}"
description: "${city} Collection of Spaces"
permalink: "/cities/${toURLFriendly(city)}"
---

<nav class="text-3xl lg:text-6xl leading-relaxed tracking-wide mb-20">
  <a class="underline underline-offset-8 decoration-2" href="/">World</a> / ${city}
</nav>

<div class="text-3xl lg:text-6xl leading-relaxed tracking-wide">
  ${cityPlaces
    .map(
      (place, index) => `
  <a class="text-primary/70 hover:text-primary"
     href="/cities/${toURLFriendly(city)}/${toURLFriendly(
        place.fields.name
      )}">${place.fields.name}</a>
  ${index < cityPlaces.length - 1 ? '<span class="mx-2">·</span>' : ""}
  `
    )
    .join("")}
</div>
`;
}

function generatePlaceHTML(place) {
  const pictures = place.fields.pictures || [];
  const pictureElements = pictures
    .slice(0, 4)
    .map((picture, index) => {
      const imageUrl = picture.thumbnails.large.url;
      const fileName = `p0${index + 1}.jpg`;
      downloadImage(
        imageUrl,
        path.join(
          __dirname,
          `../assets/images/places/${toURLFriendly(
            place.fields.name
          )}/${fileName}`
        )
      );
      return `
      <img loading="lazy" class="w-full lg:w-[512px] h-auto lg:h-[683px] object-cover"
        src="/assets/images/places/${toURLFriendly(
          place.fields.name
        )}/${fileName}" />`;
    })
    .join("");

  return `---
layout: default
title: "${place.fields.name}"
permalink: "/cities/${toURLFriendly(place.fields.city)}/${toURLFriendly(
    place.fields.name
  )}"
city: "${place.fields.city}"
---

<nav class="text-3xl lg:text-6xl leading-relaxed tracking-wide mb-20">
  <a class="underline underline-offset-8 decoration-2" href="/">World</a> / <a
    class="underline underline-offset-8 decoration-2" href="/cities/${toURLFriendly(
      place.fields.city
    )}">${place.fields.city}</a> / ${place.fields.name}
</nav>

<div>
  <p class="text-2xl lg:text-4xl max-w-3xl mb-12">${
    place.fields.description
  }</p>
  <a class="underline underline-offset-8 decoration-2 text-2xl lg:text-4xl"
    href="${
      place.fields.google_maps
    }" target="_blank" rel="noopener nofollow">Visit this place</a>
</div>

<div class="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:-mx-24">
  ${pictureElements}
</div>
 `;
}

function toURLFriendly(input) {
  return input
    .normalize("NFD") // Normalize the string to separate characters and diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .replace(/ /g, "_")
    .replace(/[^\w-]+/g, "");
}

function downloadImage(url, filepath) {
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const file = fs.createWriteStream(filepath);
  https
    .get(url, (response) => {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`Downloaded ${filepath}`);
      });
    })
    .on("error", (err) => {
      fs.unlink(filepath);
      console.error(`Error downloading ${filepath}: ${err.message}`);
    });
}

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, "../cities");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate and write HTML files for each city and each place
cities.forEach((cityObj) => {
  const city = cityObj.city;
  const cityHTML = generateCityHTML(city);
  const cityFileName = `${toURLFriendly(city)}.html`;
  const cityFilePath = path.join(outputDir, cityFileName);
  fs.writeFileSync(cityFilePath, cityHTML, "utf8");
  console.log(`Generated ${cityFilePath}`);

  // Create city directory for places if it doesn't exist
  const cityDir = path.join(outputDir, toURLFriendly(city));
  if (!fs.existsSync(cityDir)) {
    fs.mkdirSync(cityDir, { recursive: true });
  }

  // Generate and write HTML files for each place in the city
  const cityPlaces = places.filter((place) => place.fields.city === city);
  cityPlaces.forEach((place) => {
    const placeHTML = generatePlaceHTML(place);
    const placeFileName = `${toURLFriendly(place.fields.name)}.html`;
    const placeFilePath = path.join(cityDir, placeFileName);
    fs.writeFileSync(placeFilePath, placeHTML, "utf8");
    console.log(`Generated ${placeFilePath}`);
  });
});
