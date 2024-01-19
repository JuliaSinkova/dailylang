import "./styles/main.scss";

const imagesContext = require.context(
  "./assets/images",
  false,
  /\.(png|jpe?g|svg)$/
);
const images = imagesContext.keys().map(imagesContext);
