var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
var import_path2 = __toESM(require("path"));
var import_fs_extra = __toESM(require("fs-extra"));

// src/utils.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var isFunction = (arg) => typeof arg === "function";
var isBoolean = (arg) => {
  return typeof arg === "boolean";
};
var isNotFalse = (arg) => {
  return !(isBoolean(arg) && !arg);
};
var isRegExp = (arg) => Object.prototype.toString.call(arg) === "[object RegExp]";
function readAllFiles(root, reg) {
  let resultArr = [];
  try {
    if (import_fs.default.existsSync(root)) {
      const stat = import_fs.default.lstatSync(root);
      if (stat.isDirectory()) {
        const files = import_fs.default.readdirSync(root);
        files.forEach(function(file) {
          const t = readAllFiles(import_path.default.join(root, "/", file), reg);
          resultArr = resultArr.concat(t);
        });
      } else {
        if (reg !== void 0) {
          if (isFunction(reg.test) && reg.test(root)) {
            resultArr.push(root);
          }
        } else {
          resultArr.push(root);
        }
      }
    }
  } catch (error) {
  }
  return resultArr;
}

// src/index.ts
var import_chalk = __toESM(require("chalk"));
var import_debug = require("debug");
var import_imagemin = __toESM(require("imagemin"));
var import_imagemin_gifsicle = __toESM(require("imagemin-gifsicle"));
var import_imagemin_pngquant = __toESM(require("imagemin-pngquant"));
var import_imagemin_optipng = __toESM(require("imagemin-optipng"));
var import_imagemin_mozjpeg = __toESM(require("imagemin-mozjpeg"));
var import_imagemin_svgo = __toESM(require("imagemin-svgo"));
var import_imagemin_webp = __toESM(require("imagemin-webp"));
var import_imagemin_jpegtran = __toESM(require("imagemin-jpegtran"));
var debug = (0, import_debug.debug)("vite-plugin-imagemin");
var extRE = /\.(png|jpeg|gif|jpg|bmp|svg)$/i;
var exportFn = (options = {}) => {
  let outputPath;
  let publicDir;
  let config;
  const emptyPlugin = {
    name: "vite:imagemin"
  };
  const { disable = false, filter = extRE, verbose = true } = options;
  if (disable) {
    return emptyPlugin;
  }
  debug("plugin options:", options);
  const mtimeCache = /* @__PURE__ */ new Map();
  let tinyMap = /* @__PURE__ */ new Map();
  async function processFile(filePath, buffer) {
    let content;
    try {
      content = await import_imagemin.default.buffer(buffer, {
        plugins: getImageminPlugins(options)
      });
      const size = content.byteLength, oldSize = buffer.byteLength;
      tinyMap.set(filePath, {
        size: size / 1024,
        oldSize: oldSize / 1024,
        ratio: size / oldSize - 1
      });
      return content;
    } catch (error) {
      config.logger.error("imagemin error:" + filePath);
    }
  }
  return __spreadProps(__spreadValues({}, emptyPlugin), {
    apply: "build",
    enforce: "post",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      outputPath = config.build.outDir;
      if (typeof config.publicDir === "string") {
        publicDir = config.publicDir;
      }
      debug("resolvedConfig:", resolvedConfig);
    },
    async generateBundle(_options, bundler) {
      tinyMap = /* @__PURE__ */ new Map();
      const files = [];
      Object.keys(bundler).forEach((key) => {
        filterFile(import_path2.default.resolve(outputPath, key), filter) && files.push(key);
      });
      debug("files:", files);
      if (!files.length) {
        return;
      }
      const handles = files.map(async (filePath) => {
        let source = bundler[filePath].source;
        const content = await processFile(filePath, source);
        if (content) {
          bundler[filePath].source = content;
        }
      });
      await Promise.all(handles);
    },
    async closeBundle() {
      if (publicDir) {
        const files = [];
        readAllFiles(publicDir).forEach((file) => {
          filterFile(file, filter) && files.push(file);
        });
        if (files.length) {
          const handles = files.map(async (publicFilePath) => {
            const filePath = publicFilePath.replace(publicDir + import_path2.default.sep, "");
            const fullFilePath = import_path2.default.join(outputPath, filePath);
            if (import_fs_extra.default.existsSync(fullFilePath) === false) {
              return;
            }
            const { mtimeMs } = await import_fs_extra.default.stat(fullFilePath);
            if (mtimeMs <= (mtimeCache.get(filePath) || 0)) {
              return;
            }
            const buffer = await import_fs_extra.default.readFile(fullFilePath);
            const content = await processFile(filePath, buffer);
            if (content) {
              await import_fs_extra.default.writeFile(fullFilePath, content);
              mtimeCache.set(filePath, Date.now());
            }
          });
          await Promise.all(handles);
        }
      }
      if (verbose) {
        handleOutputLogger(config, tinyMap);
      }
    }
  });
};
function handleOutputLogger(config, recordMap) {
  config.logger.info(`
${import_chalk.default.cyan("\u2728 [vite-plugin-imagemin]")}- compressed image resource successfully: `);
  const keyLengths = Array.from(recordMap.keys(), (name) => name.length);
  const valueLengths = Array.from(recordMap.values(), (value) => `${Math.floor(100 * value.ratio)}`.length);
  const maxKeyLength = Math.max(...keyLengths);
  const valueKeyLength = Math.max(...valueLengths);
  recordMap.forEach((value, name) => {
    let { ratio, size, oldSize } = value;
    ratio = Math.floor(100 * ratio);
    const fr = `${ratio}`;
    const denseRatio = ratio > 0 ? import_chalk.default.red(`+${fr}%`) : ratio <= 0 ? import_chalk.default.green(`${fr}%`) : "";
    const sizeStr = `${oldSize.toFixed(2)}kb / tiny: ${size.toFixed(2)}kb`;
    config.logger.info(import_chalk.default.dim(import_path2.default.basename(config.build.outDir)) + "/" + import_chalk.default.blueBright(name) + " ".repeat(2 + maxKeyLength - name.length) + import_chalk.default.gray(`${denseRatio} ${" ".repeat(valueKeyLength - fr.length)}`) + " " + import_chalk.default.dim(sizeStr));
  });
  config.logger.info("\n");
}
function filterFile(file, filter) {
  if (filter) {
    const isRe = isRegExp(filter);
    const isFn = isFunction(filter);
    if (isRe) {
      return filter.test(file);
    }
    if (isFn) {
      return filter(file);
    }
  }
  return false;
}
function getImageminPlugins(options = {}) {
  const {
    gifsicle = true,
    webp = false,
    mozjpeg = false,
    pngquant = false,
    optipng = true,
    svgo = true,
    jpegTran = true
  } = options;
  const plugins = [];
  if (isNotFalse(gifsicle)) {
    debug("gifsicle:", true);
    const opt = isBoolean(gifsicle) ? void 0 : gifsicle;
    plugins.push((0, import_imagemin_gifsicle.default)(opt));
  }
  if (isNotFalse(mozjpeg)) {
    debug("mozjpeg:", true);
    const opt = isBoolean(mozjpeg) ? void 0 : mozjpeg;
    plugins.push((0, import_imagemin_mozjpeg.default)(opt));
  }
  if (isNotFalse(pngquant)) {
    debug("pngquant:", true);
    const opt = isBoolean(pngquant) ? void 0 : pngquant;
    plugins.push((0, import_imagemin_pngquant.default)(opt));
  }
  if (isNotFalse(optipng)) {
    debug("optipng:", true);
    const opt = isBoolean(optipng) ? void 0 : optipng;
    plugins.push((0, import_imagemin_optipng.default)(opt));
  }
  if (isNotFalse(svgo)) {
    debug("svgo:", true);
    const opt = isBoolean(svgo) ? void 0 : svgo;
    plugins.push((0, import_imagemin_svgo.default)(opt));
  }
  if (isNotFalse(webp)) {
    debug("webp:", true);
    const opt = isBoolean(webp) ? void 0 : webp;
    plugins.push((0, import_imagemin_webp.default)(opt));
  }
  if (isNotFalse(jpegTran)) {
    debug("webp:", true);
    const opt = isBoolean(jpegTran) ? void 0 : jpegTran;
    plugins.push((0, import_imagemin_jpegtran.default)(opt));
  }
  return plugins;
}
var src_default = exportFn;
module.exports = exportFn;
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
