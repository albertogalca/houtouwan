const fs = require("fs");
const yaml = require("js-yaml");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const config = yaml.load(fs.readFileSync("_config.yml", "utf8"));

const airtableToken = config.airtable.token;
const airtableBaseId = config.airtable.base_id;

if (!airtableToken) {
  console.error("Error: Airtable token is missing. Please add it to your _config.yml file under airtable.token.");
  process.exit(1);
}

if (!airtableBaseId) {
  console.error("Error: Airtable base ID is missing. Please add it to your _config.yml file under airtable.base_id.");
  process.exit(1);
}


async function getRecords(table) {
  const filterFormula = "AND({is_active} = TRUE())";
  let url = `https://api.airtable.com/v0/${airtableBaseId}/${table}?filterByFormula=${encodeURIComponent(
    filterFormula
  )}`;

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
    const city = record.fields.city;
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
