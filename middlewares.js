import multer from "multer";
import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Wetube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  next();
};

const multerVideo = multer({ dest: "uploads/videos/" });
export const uploadVideoMiddleware = multerVideo.single("videoFile");
