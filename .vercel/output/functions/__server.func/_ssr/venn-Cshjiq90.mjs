import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TESTS } from "./shell-BQ72AjOt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/venn-Cshjiq90.js
var import_jsx_runtime = require_jsx_runtime();
var nodes = [
	{
		slug: "vinculo",
		cx: 86,
		cy: 78,
		labelX: 40,
		labelY: 28
	},
	{
		slug: "mente",
		cx: 154,
		cy: 78,
		labelX: 200,
		labelY: 28
	},
	{
		slug: "esfera",
		cx: 120,
		cy: 136,
		labelX: 120,
		labelY: 198
	}
];
function Venn({ profile }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 240 220",
			className: "w-full text-foreground",
			role: "img",
			"aria-label": "Tres ejes del perfil",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "Vínculo, mente y esfera se cruzan en un perfil" }),
				nodes.map((n) => {
					const on = Boolean(profile.results[n.slug]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: n.cx,
						cy: n.cy,
						r: "58",
						fill: on ? "currentColor" : "none",
						fillOpacity: on ? .1 : 0,
						stroke: "currentColor",
						strokeWidth: on ? 1.6 : 1.2,
						strokeOpacity: on ? .9 : .45
					}, n.slug);
				}),
				nodes.map((n) => {
					const test = TESTS.find((t) => t.slug === n.slug);
					const on = Boolean(profile.results[n.slug]);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: n.labelX,
						y: n.labelY,
						textAnchor: "middle",
						className: "fill-current",
						fontSize: "11",
						fontFamily: "var(--font-sans)",
						letterSpacing: "0.16em",
						fillOpacity: on ? 1 : .55,
						children: test?.name.toUpperCase()
					}, `${n.slug}-label`);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "120",
					y: "102",
					textAnchor: "middle",
					className: "fill-current",
					fontSize: "10",
					fontFamily: "var(--font-sans)",
					letterSpacing: "0.22em",
					fillOpacity: "0.55",
					children: "PERFIL"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sr-only",
			children: TESTS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/test/$slug",
				params: { slug: t.slug },
				children: t.name
			}, t.slug))
		})]
	});
}
//#endregion
export { Venn as t };
