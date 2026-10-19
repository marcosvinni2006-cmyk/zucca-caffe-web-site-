export type OpeningPeriod = {
  days: string;
  hours: string;
  /** Dias no formato schema.org, usados no JSON-LD */
  schemaDays: string[];
  opens: string;
  closes: string;
};

export const openingHours: OpeningPeriod[] = [
  {
    days: "Terça a sexta",
    hours: "10h às 19h",
    schemaDays: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00",
    closes: "19:00",
  },
  {
    days: "Sábado e domingo",
    hours: "9h às 19h",
    schemaDays: ["Saturday", "Sunday"],
    opens: "09:00",
    closes: "19:00",
  },
];

// TODO: confirmar que a loja fecha às segundas (não informado, deduzido dos horários)
export const closedDays = { days: "Segunda", label: "Fechado" };

export const brunchHours = {
  days: "Sábados e domingos",
  hours: "9h às 14h",
};
