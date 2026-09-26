import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1 } from "./router-Bzkhe2LL.mjs";
import { a as TESTS, c as completedCount, i as Shell, l as getTest, m as useProfile, n as Button, t as AxisMark, u as isTestSlug } from "./shell-BQ72AjOt.mjs";
import { t as AdSlot } from "./ad-slot-BM-HUSHw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lectura._slug-BG4-3MbI.js
var import_jsx_runtime = require_jsx_runtime();
function LecturaPage() {
	const { slug } = Route$1.useParams();
	const profile = useProfile();
	const test = isTestSlug(slug) ? getTest(slug) : void 0;
	const result = test ? profile.results[test.slug] : void 0;
	if (!test) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-5 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-title",
			children: "Esa lectura no existe."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "Volver al laboratorio"
			})
		})]
	}) });
	if (!result) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-5 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-title",
				children: [
					"Aún no hay lectura de ",
					test.name,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "Seis preguntas. El patrón aparece al cerrar."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/test/$slug",
					params: { slug: test.slug },
					children: ["Empezar ", test.name]
				})
			})
		]
	}) });
	const done = completedCount(profile);
	const next = TESTS.find((t) => !profile.results[t.slug]);
	const who = profile.name ? `${profile.name}, ` : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-2xl px-5 pb-24 pt-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-medium uppercase tracking-[0.2em] text-subtle",
				children: [
					test.index,
					" · ",
					test.name,
					" · ",
					test.axis
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted-foreground",
				children: [who, "tu patrón se llama"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-2 text-display italic",
				children: result.trait.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm uppercase tracking-[0.18em] text-subtle",
				children: result.trait.kicker
			}),
			test.slug === "mente" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display mt-8 text-5xl tabular-nums tracking-tight",
				children: [result.score, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 text-lg text-subtle",
					children: "estimación"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-lg text-pretty text-foreground/90",
				children: result.trait.portrait
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 space-y-4",
				children: result.trait.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-t border-border pt-4 text-pretty text-muted-foreground",
					children: line
				}, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AxisMark, {
					slug: test.slug,
					className: "size-8"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Perfil ",
						done,
						" de ",
						TESTS.length,
						". ",
						next ? "El retrato pide otro eje." : "Los tres ejes están nombrados."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row",
				children: [next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/test/$slug",
						params: { slug: next.slug },
						children: ["Seguir con ", next.name]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/perfil",
						children: "Abrir el retrato completo"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Los tres ejes"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, { featured: true })
			})
		]
	}) });
}
//#endregion
export { LecturaPage as component };
