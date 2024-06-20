const fs = require("fs");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const airtableToken =
  "pattYV2vv2pHM3QTU.c9058cbb271a95aee1eb54473b904a2dc66c6c30f541d5436165c93ba292dc04";
const airtableBaseId = "appiZtE7OwYC34l0n";

async function getRecords(table) {
  let url = `https://api.airtable.com/v0/${airtableBaseId}/${table}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${airtableToken}`,
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  const records = data.records;

  return records;
}

async function saveRecordsToFile() {
  try {
    const records = await getRecords("Spaces");
    const jsonContent = JSON.stringify(records, null, 2);

    fs.writeFileSync("_data/places.json", jsonContent, "utf8");
    console.log("Data successfully written to _data/places.json");

    // Extract and save unique cities
    const cities = extractUniqueCities(records);
    const citiesJsonContent = JSON.stringify(cities, null, 2);

    fs.writeFileSync("_data/cities.json", citiesJsonContent, "utf8");
    console.log("Unique cities successfully written to _data/cities.json");
  } catch (error) {
    console.error("Error fetching and saving data:", error);
  }
}

function extractUniqueCities(records) {
  const citiesSet = new Set();
  records.forEach((record) => {
    const city = record.fields.City;
    if (city) {
      citiesSet.add(city);
    }
  });

  const citiesArray = Array.from(citiesSet)
    .sort()
    .map((city) => ({ city }));
  return citiesArray;
}

saveRecordsToFile();
