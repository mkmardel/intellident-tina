import { defineConfig } from "tinacms";
import { useCMS } from "tinacms";

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
        name: "content",
        label: "Tartalom",
        path: "content",
        match: {
          exclude: "*/*",
          include: "",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        templates: [
          {
            name: "content",
            label: "Főoldal",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "object",
                name: "slider_1",
                label: "Slider 1",
                fields: [
                  {
                    type: "image",
                    name: "image",
                    label: "Kép",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Cím",
                  },
                  {
                    type: "string",
                    name: "text",
                    label: "Szöveg",
                  },
                ],
              },
            ],
          },
          {
            name: "contact",
            label: "Kapcsolat",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "team",
        label: "Csapat",
        path: "content/team",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          exclude: "*/*",
          include: "",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Név",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "types",
            label: "Típus",
            options: ["team"],
          },
        ],
      },
    ],
  },
});
