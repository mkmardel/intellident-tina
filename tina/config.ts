import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "ba6d92d2-dbac-4837-b583-ca17a9d5fed1", // Get this from tina.io
  token: "dfdb13843cee2e999c683d3d234abe7a7ae7743f", // Get this from tina.io

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
    ],
  },
});
