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
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
