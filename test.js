import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const vikeReactDir = path.join(__dirname, "packages/vike-react/");

try {
  console.log("createRequire(import.meta.url)", {
    paths: vikeReactDir,
  });
  const require_ = createRequire(import.meta.url);
  const resolved = require_.resolve("vike-react/feature", {
    paths: [vikeReactDir],
  });

  console.log(resolved);
} catch (error) {
  console.log(error);
}

try {
  console.log("createRequire(__dirname)", {
    paths: vikeReactDir,
  });
  const require_ = createRequire(__dirname);
  const resolved = require_.resolve("vike-react/feature", {
    paths: [vikeReactDir],
  });

  console.log(resolved);
} catch (error) {
  console.log(error);
}

try {
  console.log("createRequire(vikeReactDir)", {
    paths: __dirname,
  });
  const require_ = createRequire(vikeReactDir);
  const resolved = require_.resolve("vike-react/feature", {
    paths: [__dirname],
  });

  console.log(resolved);
} catch (error) {
  console.log(error);
}
