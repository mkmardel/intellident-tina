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
        name: "content",
        label: "Tartalom",
        path: "content",
        match: {
          exclude: "*/*",
          include: "{_index,_index.en}",
        },
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
        path: "content",
        match: {
          exclude: "*/*",
          include: "contact",
        },
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
});
