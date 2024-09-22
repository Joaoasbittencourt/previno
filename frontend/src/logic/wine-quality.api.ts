export type Field = keyof typeof fields;
export type ApiField = (typeof fields)[Field];
export type PredictWineBody = Record<ApiField, number[]>;

export const fields = {
  fixedAcidity: "fixed acidity",
  volatileAcidity: "volatile acidity",
  citricAcid: "citric acid",
  residualSugar: "residual sugar",
  chlorides: "chlorides",
  freeSulfurDioxide: "free sulfur dioxide",
  totalSulfurDioxide: "total sulfur dioxide",
  density: "density",
  ph: "pH",
  sulphates: "sulphates",
  alcohol: "alcohol",
} as const;

export const labels: Record<Field, string> = {
  fixedAcidity: "Acidez fixa",
  volatileAcidity: "Acidez volátil",
  citricAcid: "Ácido cítrico",
  residualSugar: "Açúcar residual",
  chlorides: "Cloreto",
  freeSulfurDioxide: "Dióxido de enxofre livre",
  totalSulfurDioxide: "Dióxido de enxofre total",
  density: "Densidade",
  ph: "pH",
  sulphates: "Sulfatos",
  alcohol: "Álcool",
};

export const defaultValues: Record<Field, number> = {
  fixedAcidity: 7.4,
  volatileAcidity: 0.7,
  citricAcid: 0.0,
  residualSugar: 1.9,
  chlorides: 0.076,
  freeSulfurDioxide: 11.0,
  totalSulfurDioxide: 34.0,
  density: 0.9978,
  ph: 3.51,
  sulphates: 0.56,
  alcohol: 9.4,
};

export const getDefaultValue = (field: Field) => defaultValues[field];

export const getLabel = (field: Field) => labels[field];

const formDateToBody = (data: FormData) => {
  const body: PredictWineBody = {} as PredictWineBody;
  for (const [key, value] of data.entries()) {
    console.log(fields[key as Field]);
    body[fields[key as Field]] = [Number(value)];
  }
  console.log("body", body);
  return body;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getPrediction = async (data: FormData): Promise<number> => {
  const body = formDateToBody(data);
  console.log("body amost", body, JSON.stringify(body));
  const response = await fetch(API_URL + "/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  return result.predictions[0] as number;
};
