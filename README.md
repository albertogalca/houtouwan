# Houtouwan

Project description

---

Several decades ago, a small Chinese town was abandoned.

Completely depopulated, nature gradually took over, reclaiming every inch of concrete and covering it with a green mantle.

As if human life and nature had fused into one.

We’re talking about Houtouwan, a village in the Shengsi Archipelago, east of Shanghai.

Houtouwan didn’t die, as many believe. It changed. It transformed. We’ve created this template to build crearespaces.com, where we gather places that inspire us.

You can use it to transform those lists you have into directories. A new life. A new perspective. And the goal of survival (and sharing).

---

## How to use it

### 1. Duplicate the Airtable Template

To begin, you'll need to duplicate the provided Airtable template. You can find the template here. After duplicating it, customize the template by adding your specific places or data.

### Get the Airtable Token and Base ID

Once your Airtable base is set up, you need to obtain the Airtable Token and Base ID. These credentials allow your application to securely access the data in your Airtable base.

To get your Base ID, simply open the Airtable database and check the URL:

![Airtable Base ID](assets/images/documentation/base_id.png)

To get the Airtable token, you need to generate a personal access token. This can be done by visiting https://airtable.com/create/tokens and clicking on 'Create new token.' Then, you need to:

- Set a name for your token.
- Add a `data.records:read` in your scopes.
- Select your airtable base template.

After this, copy your token, and you are all set to start generating the places using the Airtable integration.




2. Clone this repository (you should have a Github account).
3. Upload your local environment to Vercel.
4. Install Jekyll and npm/yarn.
5. Install dependencies (Gemfile and npm).
6. Execute `yarn build` for generating the HTML files with your places.
7. Deploy to Vercel.

## Customization

1. How to customize texts
2. How to customize colors
3. How to customize fonts
4. SEO configurations

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Falbertogalca%2Fhoutouwan)
