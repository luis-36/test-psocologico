import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TESTS, c as completedCount, i as Shell, m as useProfile, n as Button, p as setName, s as cn, t as AxisMark } from "./shell-BQ72AjOt.mjs";
import { t as AdSlot } from "./ad-slot-BM-HUSHw.mjs";
import { t as Venn } from "./venn-Cshjiq90.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DXjc6DHI.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const profile = useProfile();
	const done = completedCount(profile);
	const firstOpen = TESTS.find((t) => !profile.results[t.slug]) ?? TESTS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-8 pt-12 sm:pt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "reveal text-xs font-medium uppercase tracking-[0.22em] text-subtle",
					children: "Laboratorio de lectura"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "reveal reveal-2 font-display mt-5 text-display text-foreground",
					children: ["Tres lecturas.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block italic",
						children: "Un perfil."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "reveal reveal-3 mt-6 max-w-xl text-lg text-pretty text-muted-foreground",
					children: "Vínculo, mente y esfera social se leen juntas. Empieza por el eje que te llama. El retrato se nombra cuando los tres coinciden."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal reveal-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/test/$slug",
							params: { slug: firstOpen.slug },
							children: done === 0 ? "Empezar mi perfil" : "Continuar el perfil"
						})
					}), done > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/perfil",
							children: "Ver retrato"
						})
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "reveal reveal-5 mt-8 block max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium uppercase tracking-[0.16em] text-subtle",
						children: "Cómo te nombramos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: profile.name,
						onChange: (e) => setName(e.target.value),
						placeholder: "Tu nombre, si quieres",
						maxLength: 40,
						className: "mt-2 h-11 w-full border-0 border-b border-border bg-transparent text-base text-foreground outline-none placeholder:text-subtle focus:border-primary"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 py-6",
			"aria-label": "Los tres ejes",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Venn, { profile })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-3",
			children: TESTS.map((test, i) => {
				const result = profile.results[test.slug];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: result ? "/lectura/$slug" : "/test/$slug",
					params: { slug: test.slug },
					className: cn("group flex flex-col rounded-xl bg-card p-6 hairline hairline-hover", "reveal"),
					style: { animationDelay: `${220 + i * 80}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl text-subtle/80",
								children: test.index
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AxisMark, {
								slug: test.slug,
								className: "size-10"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-8 text-3xl tracking-tight",
							children: test.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm uppercase tracking-[0.16em] text-subtle",
							children: test.axis
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 flex-1 text-pretty text-muted-foreground",
							children: test.promise
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-subtle",
								children: [
									test.questions.length,
									" preguntas · ",
									test.minutes,
									" min"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-primary",
								children: result ? result.trait.name : "Iniciar lectura"
							})]
						})
					]
				}, test.slug);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-10 md:grid-cols-3",
				children: [
					{
						n: "01",
						t: "Eliges un eje",
						d: "El que te tira ahora. No hace falta el orden."
					},
					{
						n: "02",
						t: "Respondes sin pose",
						d: "Seis escenas. La primera impresión suele ser la cierta."
					},
					{
						n: "03",
						t: "Se nombra el patrón",
						d: "Una lectura, no un ranking. Luego, el siguiente espejo."
					}
				].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm text-subtle",
						children: step.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-2 text-2xl tracking-tight",
						children: step.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-pretty text-muted-foreground",
						children: step.d
					})
				] }, step.n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdSlot, { featured: true })
		})
	] });
}
//#endregion
export { Home as component };
