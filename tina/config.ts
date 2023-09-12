import { defineConfig } from "tinacms";
import { aboutFields } from "./templates";
import { cbctFields } from "./templates";
import { contactFields } from "./templates";
import { homepageFields } from "./templates";
import { price_itemFields } from "./templates";
import { prices__en_Fields } from "./templates";
import { pricesFields } from "./templates";
import { teamFields } from "./templates";
import { thank_youFields } from "./templates";
import { theme_settingsFields } from "./templates";
import { treatmentsFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch: "main",
  clientId: "42447209-2f9d-405a-9f34-1f542092aa2a", // Get this from tina.io
  token: "a573acacdf6581119383352f81c48c84c2b073c6", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Főoldal",
        name: "f_oldal",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "object",
            name: "slider_1",
            label: "1. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_2",
            label: "2. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_3",
            label: "3. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_4",
            label: "4. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_5",
            label: "5. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_6",
            label: "6. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_7",
            label: "7. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "box_1",
            label: "1. Doboz",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Cím",
                required: true,
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "Hivatkozás",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "box_2",
            label: "2. Doboz",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Cím",
                required: true,
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "Hivatkozás",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "box_3",
            label: "3. Doboz",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Cím",
                required: true,
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "Hivatkozás",
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "motto",
            label: "Mottó",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "short_bio",
            label: "Rövid biográfia",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "treatments_sub",
            label: "Kezelések alcíme",
          },
          {
            type: "string",
            name: "team_sub",
            label: "Csapatunk alcíme",
          },
          {
            type: "string",
            name: "contact_sub",
            label: "Kapcsolat alcíme",
          },
          {
            type: "string",
            name: "copyright",
            label: "Copyright",
            ui: {
              component: "textarea",
            },
            required: true,
          },
        ],
      },
      {
        format: "md",
        label: "Kapcsolat",
        name: "kapcsolat",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "address",
            label: "Teljes cím",
            required: true,
          },
          {
            type: "string",
            name: "short_address",
            label: "Rövid cím",
            required: true,
          },
          {
            type: "string",
            name: "phone",
            label: "Telefonszám",
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "E-mail cím",
            required: true,
          },
          {
            type: "string",
            name: "facebook",
            label: "Facebook",
            required: true,
          },
          {
            type: "string",
            name: "footer_description",
            label: "footer_description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "opening_line_1",
            label: "Nyitvatartás 1. sor",
            fields: [
              {
                type: "string",
                name: "days",
                label: "Napok",
                required: true,
              },
              {
                type: "string",
                name: "time",
                label: "Időpontok",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "opening_line_2",
            label: "Nyitvatartás 2. sor",
            fields: [
              {
                type: "string",
                name: "days",
                label: "Napok",
                required: true,
              },
              {
                type: "string",
                name: "time",
                label: "Időpontok",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "opening_line_3",
            label: "Nyitvatartás 3. sor",
            fields: [
              {
                type: "string",
                name: "days",
                label: "Napok",
                required: true,
              },
              {
                type: "string",
                name: "time",
                label: "Időpontok",
                required: true,
              },
            ],
          },
        ],
      },
      {
        format: "md",
        label: "Kezelések",
        name: "kezel_sek",
        path: "content/treatments",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...treatmentsFields(),
        ],
      },
      {
        format: "md",
        label: "Csapatunk",
        name: "csapatunk",
        path: "content/team",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...teamFields(),
        ],
      },
      {
        format: "md",
        label: "Áraink",
        name: "_raink",
        path: "content/pages",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "prices",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
          },
          {
            type: "string",
            name: "types",
            label: "types",
          },
          {
            type: "string",
            name: "validity",
            label: "Érvényesség",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Kategóriák",
            list: true,
          },
          {
            type: "object",
            name: "prices",
            label: "Árak",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Megnevezés",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Megjegyzés",
              },
              {
                type: "string",
                name: "amount",
                label: "Összeg",
                required: true,
              },
              {
                type: "string",
                name: "slug",
                label: "Kategória",
                options: [],
              },
            ],
          },
        ],
      },
      {
        format: "md",
        label: "Rólunk",
        name: "r_lunk",
        path: "content/pages",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
          },
          {
            type: "string",
            name: "types",
            label: "types",
          },
          {
            type: "image",
            name: "image",
            label: "Fotó",
          },
          {
            type: "string",
            name: "head",
            label: "Fejléc",
          },
          {
            type: "string",
            name: "motto",
            label: "Mottó",
          },
          {
            type: "string",
            name: "bio",
            label: "Biográfia",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "greetings",
            label: "Aláírás",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        format: "md",
        label: "CBCT",
        name: "cbct",
        path: "content/pages",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "cbct",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
          },
          {
            type: "string",
            name: "types",
            label: "types",
          },
          {
            type: "image",
            name: "image_1",
            label: "1. Fotó",
          },
          {
            type: "image",
            name: "image_2",
            label: "2. Fotó",
          },
          {
            type: "string",
            name: "head",
            label: "Fejléc",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Leírás",
            ui: {
              component: "textarea",
            },
            required: true,
          },
        ],
      },
      {
        format: "md",
        label: "Főoldal",
        name: "f_oldal_en",
        path: "en/content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index.en",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "object",
            name: "slider_1",
            label: "1. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_2",
            label: "2. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_3",
            label: "3. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_4",
            label: "4. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_5",
            label: "5. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_6",
            label: "6. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "slider_7",
            label: "7. Slider",
            fields: [
              {
                type: "image",
                name: "image",
                label: "Fotó",
              },
              {
                type: "string",
                name: "title",
                label: "Cím",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "box_1",
            label: "1. Doboz",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Cím",
                required: true,
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "Hivatkozás",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "box_2",
            label: "2. Doboz",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Cím",
                required: true,
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "Hivatkozás",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "box_3",
            label: "3. Doboz",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Cím",
                required: true,
              },
              {
                type: "string",
                name: "text",
                label: "Szöveg",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "Hivatkozás",
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "motto",
            label: "Mottó",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "short_bio",
            label: "Rövid biográfia",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "treatments_sub",
            label: "Kezelések alcíme",
          },
          {
            type: "string",
            name: "team_sub",
            label: "Csapatunk alcíme",
          },
          {
            type: "string",
            name: "contact_sub",
            label: "Kapcsolat alcíme",
          },
          {
            type: "string",
            name: "copyright",
            label: "Copyright",
            ui: {
              component: "textarea",
            },
            required: true,
          },
        ],
      },
      {
        format: "md",
        label: "Kapcsolat",
        name: "kapcsolat_en",
        path: "en/content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact.en",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "address",
            label: "Teljes cím",
            required: true,
          },
          {
            type: "string",
            name: "short_address",
            label: "Rövid cím",
            required: true,
          },
          {
            type: "string",
            name: "phone",
            label: "Telefonszám",
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "E-mail cím",
            required: true,
          },
          {
            type: "string",
            name: "facebook",
            label: "Facebook",
            required: true,
          },
          {
            type: "string",
            name: "footer_description",
            label: "footer_description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "opening_line_1",
            label: "Nyitvatartás 1. sor",
            fields: [
              {
                type: "string",
                name: "days",
                label: "Napok",
                required: true,
              },
              {
                type: "string",
                name: "time",
                label: "Időpontok",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "opening_line_2",
            label: "Nyitvatartás 2. sor",
            fields: [
              {
                type: "string",
                name: "days",
                label: "Napok",
                required: true,
              },
              {
                type: "string",
                name: "time",
                label: "Időpontok",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "opening_line_3",
            label: "Nyitvatartás 3. sor",
            fields: [
              {
                type: "string",
                name: "days",
                label: "Napok",
                required: true,
              },
              {
                type: "string",
                name: "time",
                label: "Időpontok",
                required: true,
              },
            ],
          },
        ],
      },
      {
        format: "md",
        label: "Kezelések",
        name: "kezel_sek_en",
        path: "en/content/treatments",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...treatmentsFields(),
        ],
      },
      {
        format: "md",
        label: "Csapatunk",
        name: "csapatunk_en",
        path: "en/content/team",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...teamFields(),
        ],
      },
      {
        format: "md",
        label: "Áraink",
        name: "_raink_en",
        path: "en/content/pages",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "prices.en",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
          },
          {
            type: "string",
            name: "types",
            label: "types",
          },
          {
            type: "string",
            name: "validity",
            label: "Érvényesség",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Kategóriák",
            list: true,
          },
          {
            type: "object",
            name: "prices",
            label: "Árak",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Megnevezés",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Megjegyzés",
              },
              {
                type: "string",
                name: "amount",
                label: "Összeg",
                required: true,
              },
              {
                type: "string",
                name: "slug",
                label: "Kategória",
                options: [],
              },
            ],
          },
        ],
      },
      {
        format: "md",
        label: "Rólunk",
        name: "r_lunk_en",
        path: "en/content/pages",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about.en",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
          },
          {
            type: "string",
            name: "types",
            label: "types",
          },
          {
            type: "image",
            name: "image",
            label: "Fotó",
          },
          {
            type: "string",
            name: "head",
            label: "Fejléc",
          },
          {
            type: "string",
            name: "motto",
            label: "Mottó",
          },
          {
            type: "string",
            name: "bio",
            label: "Biográfia",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "greetings",
            label: "Aláírás",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        format: "md",
        label: "CBCT",
        name: "cbct_en",
        path: "en/content/pages",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "cbct.en",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
          },
          {
            type: "string",
            name: "types",
            label: "types",
          },
          {
            type: "image",
            name: "image_1",
            label: "1. Fotó",
          },
          {
            type: "image",
            name: "image_2",
            label: "2. Fotó",
          },
          {
            type: "string",
            name: "head",
            label: "Fejléc",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Leírás",
            ui: {
              component: "textarea",
            },
            required: true,
          },
        ],
      },
      {
        format: "md",
        label: "Megjelenés",
        name: "megjelen_s",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "theme-settings",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "theme",
            label: "Színséma",
            options: ["Theme 1", "Theme 2", "Theme 3", "Theme 4", "Theme 5"],
            required: true,
          },
          {
            type: "image",
            name: "banner",
            label: "Alcímek háttere",
          },
        ],
      },
      {
        format: "md",
        label: "Űrlap üzenet",
        name: "_rlap__zenet",
        path: "content/pages",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "---",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "thank-you",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
          },
          {
            type: "string",
            name: "types",
            label: "types",
          },
          {
            type: "image",
            name: "image",
            label: "Kép (Animáció)",
          },
          {
            type: "string",
            name: "content",
            label: "Tartalom",
            ui: {
              component: "textarea",
            },
            required: true,
          },
        ],
      },
    ],
  },
});
