import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TESTS, c as completedCount, i as Shell, m as useProfile, n as Button, o as architecture, t as AxisMark } from "./shell-BQ72AjOt.mjs";
import { t as AdSlot } from "./ad-slot-BM-HUSHw.mjs";
import { t as Venn } from "./venn-Cshjiq90.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/perfil-BAZTDsiR.js
var import_jsx_runtime = require_jsx_runtime();
function PerfilPage() {
	const profile = useProfile();
	const done = completedCount(profile);
	const arch = architecture({
		vinculo: profile.results.vinculo?.trait.name,
		mente: profile.results.mente?.trait.name,
		esfera: profile.results.esfera?.trait.name
	});
	const who = profile.name || "Tu";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-5 pb-24 pt-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.2em] text-subtle",
				children: "Retrato"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-display",
				children: done === 3 ? `${who === "Tu" ? "Tu" : who + ","} arquitectura.` : `${done} de 3 ejes.`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-lg text-pretty text-muted-foreground",
				children: done === 0 ? "Aún no hay lectura. Elige el eje que te tira." : done < 3 ? "El perfil se nombra cuando los tres espejos coinciden. Te falta poco — y es la parte que cambia el retrato." : "Tres lecturas, un nombre compuesto. No es un ranking. Es cómo te unes, cómo razonas y cómo te leen."
			}),
			arch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display mt-8 text-title italic text-pretty",
				children: arch
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Venn, { profile })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-4",
				children: TESTS.map((test) => {
					const result = profile.results[test.slug];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: result ? "/lectura/$slug" : "/test/$slug",
						params: { slug: test.slug },
						className: "flex items-center gap-4 rounded-xl bg-card p-5 hairline hairline-hover",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AxisMark, {
								slug: test.slug,
								className: "size-10 shrink-0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.16em] text-subtle",
									children: test.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display truncate text-2xl tracking-tight",
									children: result ? result.trait.name : "Sin lectura"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-primary",
								children: result ? "Abrir" : "Iniciar"
							})
						]
					}) }, test.slug);
				})
			}),
			done === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 space-y-4 text-pretty text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					profile.results.vinculo?.trait.name,
					" en el afecto, ",
					profile.results.mente?.trait.name.toLowerCase(),
					" en el criterio, ",
					profile.results.esfera?.trait.name.toLowerCase(),
					" en la sala. El cruce no es un promedio: es una forma de estar."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Guarda el nombre. Los tests cambian si los repites en otro día — el patrón, casi nunca." })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/test/$slug",
						params: { slug: TESTS.find((t) => !profile.results[t.slug])?.slug ?? "vinculo" },
						children: "Completar el siguiente eje"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, { featured: true })
			})
		]
	}) });
}
//#endregion
export { PerfilPage as component };
