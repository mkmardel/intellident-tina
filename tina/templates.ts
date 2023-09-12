import type { TinaField } from "tinacms";
export function aboutFields() {
  return [
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
  ] as TinaField[];
}
export function cbctFields() {
  return [
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
  ] as TinaField[];
}
export function contactFields() {
  return [
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
  ] as TinaField[];
}
export function homepageFields() {
  return [
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
  ] as TinaField[];
}
export function price_itemFields() {
  return [
    {
      type: "string",
      name: "prices",
      label: "prices",
    },
    {
      type: "string",
      name: "title",
      label: "Árlista elem neve",
      required: true,
    },
    {
      type: "string",
      name: "note",
      label: "Megjegyzés",
    },
    {
      type: "string",
      name: "price",
      label: "Összeg",
      required: true,
    },
  ] as TinaField[];
}
export function prices__en_Fields() {
  return [
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
  ] as TinaField[];
}
export function pricesFields() {
  return [
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
  ] as TinaField[];
}
export function teamFields() {
  return [
    {
      type: "string",
      name: "types",
      label: "types",
    },
    {
      type: "string",
      name: "title",
      label: "Név",
      required: true,
    },
    {
      type: "string",
      name: "positions",
      label: "Munkakör",
      list: true,
    },
    {
      type: "image",
      name: "image",
      label: "Profilkép",
    },
    {
      type: "image",
      name: "cv",
      label: "Önéletrajz",
    },
    {
      type: "string",
      name: "timeline",
      label: "Szakmai tapasztalat",
      list: true,
    },
    {
      type: "string",
      name: "bio",
      label: "Biográfia",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "number",
      name: "weight",
      label: "Helyezés",
    },
  ] as TinaField[];
}
export function thank_youFields() {
  return [
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
  ] as TinaField[];
}
export function theme_settingsFields() {
  return [
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
  ] as TinaField[];
}
export function treatmentsFields() {
  return [
    {
      type: "string",
      name: "types",
      label: "types",
    },
    {
      type: "string",
      name: "title",
      label: "Kezelés neve",
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Avatar",
    },
    {
      type: "string",
      name: "short_description",
      label: "Rövid leírás",
      ui: {
        component: "textarea",
      },
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
    {
      type: "number",
      name: "weight",
      label: "Helyezés",
    },
  ] as TinaField[];
}
