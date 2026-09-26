import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Button, r as PARTNER, s as cn } from "./shell-BQ72AjOt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ad-slot-BM-HUSHw.js
var import_jsx_runtime = require_jsx_runtime();
function AdSlot({ className, featured = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("rounded-xl bg-card p-6 hairline", featured && "p-7 sm:p-8", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.18em] text-subtle",
				children: PARTNER.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-2xl tracking-tight text-foreground sm:text-3xl",
				children: PARTNER.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-pretty text-muted-foreground",
				children: PARTNER.line
			}),
			featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-lg text-pretty text-sm text-muted-foreground",
				children: PARTNER.body
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: featured ? "lg" : "md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/vespera",
						children: PARTNER.cta
					})
				})
			})
		]
	});
}
//#endregion
export { AdSlot as t };
