import { data } from "template-details";

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const getTemplateIdForName = (templateName: string) => {
  const t = data.find((template) => template.name === templateName);
  const templateId = t?.templateId;
  return templateId ?? "";
};
