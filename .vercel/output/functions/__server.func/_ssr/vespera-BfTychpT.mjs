import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Shell, n as Button, r as PARTNER } from "./shell-BQ72AjOt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vespera-BfTychpT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VesperaPage() {
	const [held, setHeld] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-2xl px-5 pb-24 pt-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.2em] text-subtle",
				children: PARTNER.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-display",
				children: PARTNER.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-lg text-pretty text-muted-foreground",
				children: PARTNER.line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-pretty text-muted-foreground",
				children: PARTNER.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 space-y-8",
				children: [
					{
						n: "01",
						t: "Semana de vínculo",
						d: "Cómo te acercas, cómo pides, cómo te vas. Práctica, no teoría de pareja."
					},
					{
						n: "02",
						t: "Semana de criterio",
						d: "Atención sostenida. Menos ruido, más corte limpio en lo que piensas."
					},
					{
						n: "03",
						t: "Semana de esfera",
						d: "Presencia en grupo. Leer la sala sin desaparecer en ella."
					},
					{
						n: "04",
						t: "Semana de cruce",
						d: "Los tres ejes en una sola forma de estar. El retrato que Noesis nombra, ensayado."
					}
				].map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-border pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm text-subtle",
							children: w.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-1 text-2xl tracking-tight",
							children: w.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-pretty text-muted-foreground",
							children: w.d
						})
					]
				}, w.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 rounded-xl bg-card p-6 hairline",
				children: held ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl tracking-tight",
					children: "Plaza anotada. Te escribimos desde Vespera."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "Reservar una plaza"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Sin pago aquí. Solo una señal de interés para la siguiente cohorte."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "mt-6",
						onClick: () => setHeld(true),
						children: "Anotar mi plaza"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "Volver a Noesis"
				})
			})
		]
	}) });
}
//#endregion
export { VesperaPage as component };
