import webpush from "web-push";

webpush.setVapidDetails(
  process.env.WEB_PUSH_CONTACT as unknown as string,
  process.env.PUBLIC_VAPID_KEY as unknown as string,
  process.env.PRIVATE_VAPID_KEY as unknown as string
);

export default webpush;
