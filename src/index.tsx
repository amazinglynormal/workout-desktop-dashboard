import { createRoot } from "react-dom/client";
import App from "./App";
import "./reset.css";

const rootNode = document.getElementById("root");
if (!rootNode) {
  throw Error("No root node found");
}

const root = createRoot(rootNode);

root.render(<App />);
