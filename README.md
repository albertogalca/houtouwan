# Houtouwan

Houtouwan is a template using Airtable as a database created by [Alberto Gallego](https://albertogalca.com/) and [Marga Camps](https://x.com/marga_camps) to build [Creare Spaces](http://crearespaces.com/). It provides a foundation for you to create your own directories easily and accessibly for anyone.

---

Several decades ago, a small Chinese town was abandoned.

Completely depopulated, nature gradually took over, reclaiming every inch of concrete and covering it with a green mantle.

As if human life and nature had fused into one.

We’re talking about Houtouwan, a village in the Shengsi Archipelago, east of Shanghai.

Houtouwan didn’t die, as many believe. It changed. It transformed. We’ve created this template to build crearespaces.com, where we gather places that inspire us.

You can use it to transform those lists you have into directories. A new life. A new perspective. And the goal of survival (and sharing).

---

## Requirements

- Github account & Git.
- Airtable account.
- Jekyll.
- NodeJS.
- Vercel account (if you want to deploy on Vercel).

## How to use it

### 1. Duplicate the Airtable Template

To begin, you'll need to duplicate the provided Airtable template. You can find the [template here](https://airtable.com/appszGRwxOuju9sYi/shrFBTjrS9u2BA78X). After duplicating it, customize the template by adding your specific places or data.

### 2. Get the Airtable Token and Base ID

Once your Airtable base is set up, you need to obtain the Airtable Token and Base ID. These credentials allow your application to securely access the data in your Airtable base.

To get your Base ID, simply open the Airtable database and check the URL:

![Airtable Base ID](assets/images/documentation/base_id.png)

To get the Airtable token, you need to generate a personal access token. This can be done by visiting https://airtable.com/create/tokens and clicking on 'Create new token.' Then, you need to:

- Set a name for your token.
- Add a `data.records:read` in your scopes.
- Select your airtable base template.

After this, copy your token. Then go to `_config.yml` file and update the following section with your credentials:

```yml
airtable:
  token: "YOUR_AIRTABLE_PERSONAL_TOKEN"
  base_id: "YOUR_AIRTABLE_BASE_ID"
```

After this you are all set to start generating the places using the Airtable integration.

### 3. Clone this Repository

Next, clone the GitHub repository to your local machine. This repository contains the necessary files and configuration to build and deploy your project. Ensure you have a GitHub account and use the following command to clone the repository:

````bash
git clone https://github.com/albertogalca/houtouwan.git
````

### 4. Install Jekyll and npm/yarn

To build and manage your project, you'll need to install Jekyll ([follow the documentation](https://jekyllrb.com/docs/)), a static site generator, and npm ([follow the documentation](https://nodejs.org/en/download/package-manager)) for managin JavaScript packages.

### 5. Install dependencies

With Jekyll and npm installed, the next step is to install the project dependencies listed in the Gemfile and package.json files. Run the following commands in the root directory of your project:

````bash
bundle install
npm install
````

### 6. Configurate Vercel

You can deploy this template wherever you want. There are plenty of options, and most of them support Jekyll. In this case, to make it easier for you, I highly recommend Vercel because it's free. You can create an account on [Vercel](https://vercel.com/) and follow the instructions:

- Once you have created the account, you need to connect Vercel to GitHub. This way, we can select our new repository to be uploaded to Vercel.
- Once we have it, you just need to select "Import" in your project, and your configuration should look something like this (basically, you need to leave the default configuration). After that, click on "Deploy."

![Vercel config](assets/images/documentation/vercel_config.png)

You should be ready with those steps. If you need more help with this or if you are trying to deploy to another service provider, just reach out at [][hi@crearespaces.com,](mailto:hi@crearespaces.com), and we will try to help you.


## How to customize this template

All the customization is in the `_config.yml` file and the `tailwind.config.js` file. This is just an HTML file styled with [Tailwind CSS](https://tailwindcss.com/). If you have the knowledge, feel free to change whatever you want to adapt the template to your requirements.

### 1. Customize texts

You can easily customize all the text on the web. Just go to `_config.yml` and update the following variables as you please:

```yaml
header_text: "This is a template for creating directories" # Text for the main header of the website
footer_text_1: "This is a right footer" # Right footer text
footer_text_2: "This is a left footer" # Left footer text
header_image: "/assets/images/example.jpg"
content_image: "/assets/images/example.jpg"
place_link_text: "Visit this place" # The link text to go directly to the location, which will appear on the location details page.
```

Don't forget to upload the changes to your GitHub repository to see the updates on your deployed website.

### 2. Customize colors

Colors are handled by Tailwind, the CSS framework I'm using for this template. Just go to `tailwind.config.js` and update the following two parameters:

```js
colors: {
  primary: "#588157",
   background: "#fefae0",
},
```


Don't forget to upload the changes to your GitHub repository to see the updates on your deployed website.

### 3. Customize fonts

You have two options for incorporating fonts:

- **You can import fonts from Google Fonts.** Again, go to the `_config.yml` and add the font like this (don't forget to specify the type as `google`):

```yaml
  - url: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
    type: "google"
```

- **You can import fonts locally.** Just copy your fonts into`/assets/fonts` and create a new entry in the `_config.yml` like this:

```yaml
  - url: "/assets/fonts/InstrumentSerif-Regular.woff2"
    type: "woff2"
```

After incorporating your fonts properly, you can use them in the same file by updating the following parameters:

```yaml
paragraph_font: "'Open Sans', serif"
title_font: "'Open Sans', serif"
```

### 4. Customize SEO

In this project, we use the `jekyll-seo-tag` plugin for all SEO purposes. If you want to delve further into the configuration,, [you can check the plugin documentation](https://github.com/jekyll/jekyll-seo-tag).

In the current configuration, you can customize everything from the `_config.yml`:

- **url:** Your domain URL.
- **title:** Your website title.
- **description:** Your website description.
- **author:** Update this with your Twitter account and name (your project name).
- **twitter:** Update with your Twitter username.
- **social:** In name, you can add your project name, and in links, you can add a list of all your project's social links.
