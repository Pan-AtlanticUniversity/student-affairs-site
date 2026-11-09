import { Schema } from "mongoose";

const STORED_UPLOAD = /^\/?uploads\//;

const mediaBaseUrl = () =>
  (process.env.MEDIA_BASE_URL || "/uploads").replace(/\/+$/, "");

const withoutBackendRoute = (stored: string) => {
  const route = process.env.BACKEND_ROUTE;
  return route && stored.startsWith(route) ? stored.slice(route.length) : stored;
};

const uploadKey = (stored: unknown) => {
  if (typeof stored !== "string") return undefined;
  const local = withoutBackendRoute(stored);
  return STORED_UPLOAD.test(local) ? local.replace(STORED_UPLOAD, "") : undefined;
};

export const storedMedia = (key: string) => `uploads/${key}`;

export const mediaUrl = (stored: unknown) => {
  const key = uploadKey(stored);
  return key === undefined ? stored : `${mediaBaseUrl()}/${key}`;
};

const resolveAt = (node: unknown, [field, ...rest]: string[]): void => {
  if (Array.isArray(node)) return node.forEach((item) => resolveAt(item, [field, ...rest]));
  if (!node || typeof node !== "object" || !(field in node)) return;
  const record = node as Record<string, unknown>;
  if (rest.length) return resolveAt(record[field], rest);
  record[field] = mediaUrl(record[field]);
};

export const withMediaUrls = (...paths: string[]) => (schema: Schema) => {
  schema.set("toJSON", {
    transform: (_doc, ret) => {
      paths.forEach((path) => resolveAt(ret, path.split(".")));
      return ret;
    },
  });
};
