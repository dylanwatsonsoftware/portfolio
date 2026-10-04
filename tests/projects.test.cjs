const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const root = path.resolve(__dirname, "..");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, ...args) {
  if (/^(components|types|lib)\//.test(request))
    request = path.join(root, request);
  return resolve.call(this, request, ...args);
};
for (const ext of [".ts", ".tsx"]) {
  require.extensions[ext] = (module, filename) => {
    const source = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
    }).outputText;
    module._compile(source, filename);
  };
}
const sample = {
  title: "Example project",
  description: "A useful app.",
  url: "https://github.com/example/app",
  demoUrl: "https://example.com",
  image: "/images/projects/example.webp",
  imageAlt: "The app interface",
  tags: ["React", "Spotify"],
};
for (const component of [
  "components/pages/index/base/projects",
  "components/layouts/projects",
]) {
  test(`${component} shows a preview and separate demo and source links`, () => {
    const Projects = require(path.join(root, component)).default;
    const html = renderToStaticMarkup(
      React.createElement(Projects, { projects: [sample] })
    );
    assert.match(html, /src="\/images\/projects\/example.webp"/);
    assert.match(html, /alt="The app interface"/);
    assert.match(html, /href="https:\/\/example.com"/);
    assert.match(html, /href="https:\/\/github.com\/example\/app"/);
    assert.match(html, /View source/);
    assert.match(html, /Spotify/);
  });
  test(`${component} supports older projects without previews or demos`, () => {
    const Projects = require(path.join(root, component)).default;
    const html = renderToStaticMarkup(
      React.createElement(Projects, {
        projects: [
          {
            title: "Legacy",
            description: "Older work",
            url: "https://example.org",
          },
        ],
      })
    );
    assert.match(html, /Legacy/);
    assert.match(html, /href="https:\/\/example.org"/);
    assert.doesNotMatch(html, /src="undefined"|href="undefined"/);
  });
}
