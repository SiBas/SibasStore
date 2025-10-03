self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5405], {
    48312: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return r(19025)
        }
        ])
    },
    8368: function(e, t, r) {
        "use strict";
        r.r(t),
        t.default = {
            src: "/_next/static/media/beduk.bc7c2552.gif",
            height: 150,
            width: 150,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    49854: function(e, t, r) {
        "use strict";
        r.r(t),
        t.default = {
            src: "/_next/static/media/bulan-sabit.f155bceb.gif",
            height: 150,
            width: 150,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    24531: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/masjid.e52f8167.png",
            height: 334,
            width: 1132,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEUAAAAAAAAAAABMaXEAAAAAAAAAAAAAAAAAAABReBoRAAAACHRSTlNj55UAuyElulKUhakAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BmZWBgYGBjZmBiZ+TgYGRhAgABkQAzLpWSVAAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 2
        }
    },
    79766: function(e, t, r) {
        "use strict";
        r.r(t),
        t.default = {
            src: "/_next/static/media/star-isra-miraj.a5b0b360.svg",
            height: 411,
            width: 1408,
            blurWidth: 0,
            blurHeight: 0
        }
    },
    54007: function(e, t, r) {
        "use strict";
        r.d(t, {
            H: function() {
                return Meteors
            }
        });
        var a = r(85893);
        r(67294);
        var o = r(82863);
        let Meteors = e => {
            let {number: t, className: r} = e
              , l = Array(t || 20).fill(!0);
            return (0,
            a.jsx)(a.Fragment, {
                children: l.map( (e, t) => (0,
                a.jsx)("span", {
                    className: (0,
                    o.cn)("absolute left-1/2 top-1/2 h-1 w-1 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10]", "before:absolute before:top-1/2 before:h-[1px] before:w-[80px] before:-translate-y-[0%] before:transform before:bg-gradient-to-r before:from-white before:to-transparent before:content-['']", r),
                    style: {
                        top: -20,
                        left: Math.floor(2800 * Math.random() + -1400) + "px",
                        animationDelay: Math.random() * (.8 - .2) + .2 + "s",
                        animationDuration: Math.floor(8 * Math.random() + 2) + "s"
                    }
                }, "meteor" + t))
            })
        }
    },
    19025: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            __N_SSP: function() {
                return eb
            },
            default: function() {
                return ej
            }
        });
        var a = r(85893)
          , o = r(71662)
          , l = r(36492)
          , n = r(63736);
        let useArticle = e => {
            let {REGION: t} = (0,
            n.E)();
            return (0,
            l.a)({
                queryKey: ["article", t],
                queryFn: async () => {
                    let {data: e} = await o.h.get("/article", {
                        params: {
                            region: t.toUpperCase(),
                            limit: 3,
                            sort: "news.created_at",
                            dir: "DESC"
                        }
                    });
                    return e
                }
                ,
                keepPreviousData: !1,
                refetchOnWindowFocus: !1,
                ...e
            })
        }
          , useBanner = () => {
            let {REGION: e} = (0,
            n.E)();
            return (0,
            l.a)({
                queryKey: ["banner", e],
                queryFn: async () => {
                    let {data: t} = await o.h.get("/banner", {
                        params: {
                            region: e.toUpperCase()
                        }
                    });
                    return t.data
                }
                ,
                refetchOnWindowFocus: !1
            })
        }
        ;
        var i = r(51310)
          , s = r(72063)
          , d = r(51993)
          , c = r(59965)
          , u = r(86010)
          , m = r(5368)
          , x = r(18263)
          , h = r(14025)
          , p = r(31955)
          , g = r(64216)
          , v = r(98814)
          , f = r(64998)
          , b = r(53756)
          , j = r(73460)
          , w = r(67294)
          , N = r(65709)
          , y = r(65861)
          , C = r(25675)
          , A = r.n(C)
          , k = r(82863);
        function Marquee(e) {
            let {className: t, reverse: r, pauseOnHover: o=!1, children: l, vertical: n=!1, repeat: i=4, ...s} = e;
            return (0,
            a.jsx)("div", {
                ...s,
                className: (0,
                k.cn)("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]", {
                    "flex-row": !n,
                    "flex-col": n
                }, t),
                children: Array(i).fill(0).map( (e, t) => (0,
                a.jsx)("div", {
                    "data-run-marquee": !n && i > 3,
                    "data-run-marquee-vertical": n && i > 3,
                    className: (0,
                    k.cn)("flex shrink-0 justify-around [gap:var(--gap)] data-[run-marquee-vertical=true]:animate-marquee-vertical data-[run-marquee=true]:animate-marquee data-[run-marquee]:flex-row data-[run-marquee-vertical=true]:flex-col", {
                        "group-hover:[animation-play-state:paused]": o,
                        "[animation-direction:reverse]": r
                    }),
                    children: l
                }, t))
            })
        }
        var S = r(54146)
          , _ = r(75823)
          , H = r(79511)
          , M = r(77501)
          , T = r(32858)
          , E = r(85711)
          , q = r(55057)
          , R = r(93327)
          , z = r(20476)
          , F = r(8167)
          , V = r(19448);
        let P = {
            INSTANT: E.T,
            FLASH: T.H,
            "5_MINUTE": H.I,
            "10_MINUTE": M.R,
            MANUAL: q.M
        }
          , CountdownTimer = e => {
            let {targetDate: t} = e
              , [r,o] = w.useState(0);
            return w.useEffect( () => {
                let e = setInterval( () => {
                    o(t - new Date().getTime())
                }
                , 1e3);
                return () => {
                    clearInterval(e)
                }
            }
            , [t]),
            (0,
            a.jsxs)("div", {
                className: "flex items-center gap-1 text-sm capitalize",
                children: [(0,
                a.jsx)("div", {
                    className: "flex h-7 w-7 items-center justify-center rounded-md bg-background",
                    children: Math.floor(r / 864e5)
                }), (0,
                a.jsx)("div", {
                    className: "flex h-7 w-7 items-center justify-center rounded-md bg-background",
                    children: Math.floor(r % 864e5 / 36e5)
                }), (0,
                a.jsx)("div", {
                    className: "flex h-7 w-7 items-center justify-center rounded-md bg-background",
                    children: Math.floor(r % 36e5 / 6e4)
                }), (0,
                a.jsx)("div", {
                    className: "flex h-7 w-7 items-center justify-center rounded-md bg-background",
                    children: Math.floor(r % 6e4 / 1e3)
                })]
            })
        }
          , FlashSaleCard1 = e => {
            let {productName: t, productVariantName: r, price: o, originalPrice: l, image: n, currency: i, productHandle: s, productVariantCode: d} = e;
            return (0,
            a.jsxs)(R.r, {
                href: "/".concat(s, "?pvc=").concat(d),
                className: (0,
                k.cn)(["relative w-[265px] cursor-pointer rounded-xl border p-4", "border-muted/75 bg-muted/50 hover:bg-muted/60"]),
                children: [(0,
                a.jsxs)("div", {
                    className: "flex flex-row items-center gap-3",
                    children: [n && (0,
                    a.jsx)(A(), {
                        className: "rounded-lg bg-muted",
                        width: "48",
                        height: "48",
                        alt: "",
                        src: n
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0,
                        a.jsx)("figcaption", {
                            className: "text-sm font-medium text-foreground",
                            children: t
                        }), (0,
                        a.jsx)("p", {
                            className: "text-xs font-medium text-destructive line-through",
                            children: (0,
                            _.lb)(l, i)
                        }), (0,
                        a.jsx)("p", {
                            className: "text-xs font-medium text-primary",
                            children: (0,
                            _.lb)(o, i)
                        })]
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "mt-2 text-sm text-foreground",
                    children: r
                }), (0,
                a.jsxs)(F.V, {
                    size: "medium",
                    color: "primary",
                    children: ["HEMAT ", (0,
                    _.lb)(l - o, i)]
                })]
            })
        }
          , FlashSaleCard2 = e => {
            let {product: t, background: r, foreground: o, image: l} = e;
            t.originalPrice,
            t.price;
            let n = "INSTANT";
            n = 0 === t.processTime ? "INSTANT" : t.processTime <= 60 ? "FLASH" : t.processTime <= 300 ? "5_MINUTE" : t.processTime <= 600 ? "10_MINUTE" : "MANUAL";
            let i = P[n]
              , s = t.useStock && t.stock - t.stockUsage < 1;
            return (0,
            a.jsxs)(R.r, {
                href: "/".concat(t.productHandle, "?pvc=").concat(t.productVariantCode),
                className: (0,
                u.Z)(["group/flashsale relative flex w-full cursor-pointer flex-col justify-between rounded-xl duration-300 lg:w-[265px]", r ? "bg-flashsale-background" : "bg-muted", o ? "text-flashsale-foreground" : "text-muted-foreground", !!l && "border-none bg-flashsale-image bg-cover bg-center bg-no-repeat", "hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background", s && "!cursor-not-allowed opacity-70 grayscale"]),
                children: [(0,
                a.jsxs)("div", {
                    className: "flex flex-col gap-2 p-3 lg:p-4",
                    children: [(0,
                    a.jsxs)("div", {
                        children: [(0,
                        a.jsx)("figcaption", {
                            className: "text-sm font-medium text-foreground",
                            children: t.productVariantName
                        }), (0,
                        a.jsx)("figcaption", {
                            className: "text-xs text-foreground",
                            children: t.productName
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex items-center gap-1.5 lg:gap-3",
                        children: [t.image && (0,
                        a.jsx)(A(), {
                            className: "h-6 w-6 duration-300 group-hover/flashsale:rotate-12 group-hover/flashsale:scale-110 lg:h-8 lg:w-8",
                            width: "36",
                            height: "36",
                            src: t.image,
                            alt: "flashsale-".concat(t.id)
                        }), (0,
                        a.jsx)("div", {
                            className: "flex flex-col gap-1 lg:gap-2",
                            children: (0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)("p", {
                                    className: "font-medium text-primary",
                                    children: (0,
                                    _.lb)(t.price, t.currency)
                                }), (0,
                                a.jsx)("p", {
                                    className: "text-xs font-medium italic text-destructive line-through",
                                    children: (0,
                                    _.lb)(t.originalPrice, t.currency)
                                })]
                            })
                        })]
                    }), t.useStock && (0,
                    a.jsxs)("div", {
                        className: "w-full",
                        children: [(0,
                        a.jsx)(V.E, {
                            value: (t.stock - t.stockUsage) / t.stock * 100,
                            className: "mb-1 h-1.5"
                        }), (0,
                        a.jsx)("div", {
                            className: "flex justify-end",
                            children: (0,
                            a.jsx)("div", {
                                className: "flex items-center text-[8px] font-semibold md:text-[10px]",
                                children: t.stock - t.stockUsage < 1 ? "Out of Stock" : "".concat((0,
                                _.lb)(t.stockUsage, ""), " / ").concat((0,
                                _.lb)(t.stock, ""), " purchased")
                            })
                        })]
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "flex w-full items-end justify-end gap-1 rounded-b-xl bg-gradient-to-b from-muted to-muted/40 p-2",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex h-full w-fit items-center rounded bg-gradient-to-b from-primary to-primary/60 px-1.5 text-xxs font-semibold text-primary-foreground",
                        children: ["- ", (0,
                        _.lb)(t.originalPrice - t.price, t.currency)]
                    }), (0,
                    a.jsx)("div", {
                        className: "h-fit w-fit rounded bg-white p-1",
                        children: (0,
                        a.jsx)(i, {
                            className: "h-4 w-16"
                        })
                    })]
                })]
            })
        }
          , Flashsale = e => {
            var t, r, o, l, n, i, s, d, c, u, m, x, h, p, g, v;
            let {config: f} = e
              , {t: j} = (0,
            b.$G)("home")
              , N = (0,
            S.Ad)()
              , {data: C} = (0,
            y.u)();
            if (!(null == C ? void 0 : null === (t = C.data) || void 0 === t ? void 0 : t.length))
                return null;
            null === (o = f.content) || void 0 === o || null === (r = o.order) || void 0 === r || r.variant,
            null === (n = f.content) || void 0 === n || null === (l = n.order) || void 0 === l || l.variantForeground,
            null === (s = f.content) || void 0 === s || null === (i = s.order) || void 0 === i || i.variantImage;
            let A = C.data.length;
            return (0,
            a.jsx)("div", {
                className: "container",
                children: (0,
                a.jsxs)("div", {
                    className: "relative rounded-2xl bg-muted/50",
                    children: [N && (0,
                    a.jsxs)("div", {
                        className: "absolute -left-2 -top-2 flex -space-x-2",
                        children: [(0,
                        a.jsx)(z.M4, {
                            className: "h-8 w-auto"
                        }), (0,
                        a.jsx)(z.M4, {
                            className: "h-8 w-auto scale-x-[-1]"
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "px-4 pb-3 pt-4",
                        children: [(0,
                        a.jsxs)("h3", {
                            className: "flex items-center space-x-4 text-foreground",
                            children: [(0,
                            a.jsx)("div", {
                                className: "text-lg font-semibold uppercase leading-relaxed tracking-wider",
                                children: (null === (c = f.content) || void 0 === c ? void 0 : null === (d = c.flashSale) || void 0 === d ? void 0 : d.title) || "⚡️ ".concat(j("home:flashsale"))
                            }), (null === (m = f.feature) || void 0 === m ? void 0 : null === (u = m.flashSale) || void 0 === u ? void 0 : u.expiredAt) && (0,
                            a.jsx)(CountdownTimer, {
                                targetDate: new Date(null === (h = f.feature) || void 0 === h ? void 0 : null === (x = h.flashSale) || void 0 === x ? void 0 : x.expiredAt).getTime()
                            })]
                        }), (0,
                        a.jsx)("p", {
                            className: "pl-6 text-xs text-foreground",
                            children: (null === (g = f.content) || void 0 === g ? void 0 : null === (p = g.flashSale) || void 0 === p ? void 0 : p.subtitle) || j("home:flashsale-description")
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "relative flex h-full w-full flex-col items-center justify-center overflow-hidden pb-2 pt-1",
                        children: (0,
                        a.jsx)(Marquee, {
                            pauseOnHover: !0,
                            className: "container",
                            style: {
                                "--duration": "".concat(Math.max(60, 10 * A), "s")
                            },
                            repeat: 4,
                            children: null == C ? void 0 : null === (v = C.data) || void 0 === v ? void 0 : v.map(e => {
                                var t, r, o, l, n, i, s, d, c, u;
                                return (0,
                                a.jsxs)(w.Fragment, {
                                    children: [(null === (r = f.content) || void 0 === r ? void 0 : null === (t = r.flashSale) || void 0 === t ? void 0 : t.card) === 1 && (0,
                                    a.jsx)(FlashSaleCard1, {
                                        ...e
                                    }), (null === (l = f.content) || void 0 === l ? void 0 : null === (o = l.flashSale) || void 0 === o ? void 0 : o.card) === 2 && (0,
                                    a.jsx)(FlashSaleCard2, {
                                        product: {
                                            ...e
                                        },
                                        background: null === (i = f.content) || void 0 === i ? void 0 : null === (n = i.flashSale) || void 0 === n ? void 0 : n.background,
                                        foreground: null === (d = f.content) || void 0 === d ? void 0 : null === (s = d.flashSale) || void 0 === s ? void 0 : s.foreground,
                                        image: null === (u = f.content) || void 0 === u ? void 0 : null === (c = u.flashSale) || void 0 === c ? void 0 : c.image
                                    })]
                                }, e.id)
                            }
                            )
                        })
                    })]
                })
            })
        }
        ;
        var Z = r(13520);
        let ArticleCard = e => {
            let {name: t, title: r, img: o, children: l, bounds: n, scrollX: i, href: s, ...d} = e
              , c = w.useRef(null)
              , u = (0,
            S.Ad)()
              , x = w.useCallback( () => {
                let e = c.current;
                if (!e || 0 === n.width)
                    return 1;
                let t = e.getBoundingClientRect();
                return t.left < n.left ? Math.max(.5, 1 - (n.left - t.left) / t.width) : t.right > n.right ? Math.max(.5, 1 - (t.right - n.right) / t.width) : 1
            }
            , [c, n.width, n.left, n.right])
              , p = (0,
            Z.q)(x(), {
                stiffness: 154,
                damping: 23
            });
            return w.useLayoutEffect( () => {
                p.set(x())
            }
            , [x, p]),
            (0,
            h.W)(i, "change", () => {
                p.set(x())
            }
            ),
            (0,
            a.jsx)(R.r, {
                href: s,
                className: "group duration-500 ease-out [--bg-size:300%]",
                children: (0,
                a.jsxs)(m.E.div, {
                    ref: c,
                    style: {
                        opacity: p
                    },
                    ...d,
                    className: "relative flex aspect-[9/14] w-48 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end rounded-xl shadow-lg duration-200 ease-in-out group-hover:scale-105 group-hover:ring-2 group-hover:ring-primary group-hover:ring-offset-2 group-hover:ring-offset-background sm:aspect-[3/4] sm:w-72 md:w-[24.6rem] md:rounded-3xl",
                    children: [(0,
                    a.jsx)(A(), {
                        alt: "",
                        src: o,
                        className: "absolute inset-x-0 top-0 aspect-square w-full rounded-t-xl object-cover md:rounded-t-3xl",
                        width: 1e3,
                        height: 1e3
                    }), (0,
                    a.jsx)("div", {
                        "aria-hidden": "true",
                        className: "absolute inset-0 rounded-xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-black/10 sm:from-25% md:rounded-3xl"
                    }), (0,
                    a.jsxs)("figure", {
                        className: "relative p-4 md:p-10",
                        children: [(0,
                        a.jsx)("blockquote", {
                            children: (0,
                            a.jsx)("p", {
                                className: "relative line-clamp-3 text-sm/5 text-white sm:text-lg/6 md:text-xl/7",
                                children: l
                            })
                        }), (0,
                        a.jsxs)("figcaption", {
                            className: "mt-4 border-t border-t-white/10 pt-4 md:mt-6 md:pt-6",
                            children: [(0,
                            a.jsx)("p", {
                                className: "text-xs/4 font-medium text-white sm:text-sm/6",
                                children: t
                            }), (0,
                            a.jsx)("p", {
                                className: "text-xs/4 font-medium sm:text-sm/6",
                                children: (0,
                                a.jsx)("span", {
                                    className: "line-clamp-3 bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#fff1be] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent group-hover:animate-gradient",
                                    children: r
                                })
                            })]
                        })]
                    }), u && (0,
                    a.jsx)(z.M7, {
                        className: "absolute -left-[9.5px] -top-[11px] h-8 w-auto"
                    })]
                })
            })
        }
        ;
        var B = r(80269)
          , L = r(96085)
          , W = r(52231);
        function Mosque(e) {
            return (0,
            a.jsxs)("svg", {
                viewBox: "0 0 661 518",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0,
                a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M329.739 66.6325L328.005 103.859C319.615 105.158 313.184 112.391 313.184 121.146C313.184 129.333 318.816 136.187 326.407 138.104L325.882 149.352C318.553 151.448 313.184 158.178 313.184 166.18C313.184 171.858 315.903 176.891 320.087 180.092L308.04 192.559C284.165 217.262 256.8 238.176 227.547 256.195C170.416 291.387 132.486 354.733 133.069 426.893H66.2984V386.861C66.2984 384.374 68.3134 370.345 70.8006 370.345C75.2256 370.345 78.7805 366.645 78.549 362.174C78.3269 357.98 74.5622 354.835 70.3624 354.835H66.2984V301.293H70.8006C75.0868 301.293 78.5583 297.819 78.5583 293.535C78.5583 289.252 75.0868 285.777 70.8006 285.777H66.2984V280.201C66.2984 266.271 56.1214 254.093 42.4544 252.47L40.7789 217.722C40.7387 216.96 40.1277 216.333 39.347 216.296C38.52 216.256 37.8165 216.895 37.7764 217.722L36.1008 252.467C22.6806 254.044 12.2568 265.425 12.2568 279.272V285.777H7.75462C3.46844 285.777 0 289.252 0 293.535C0 297.819 3.46844 301.293 7.75462 301.293H12.2568V354.835H8.1928C3.98994 354.835 0.228349 357.98 0.0123432 362.174C-0.225263 366.645 3.33266 370.345 7.75462 370.345C10.2418 370.345 12.2568 384.374 12.2568 386.861V518H648.737V386.861C648.737 384.374 650.752 370.345 653.242 370.345C657.667 370.345 661.222 366.645 660.988 362.174C660.769 357.98 657.007 354.835 652.804 354.835H648.737V301.293H653.242C657.525 301.293 661 297.819 661 293.535C661 289.252 657.525 285.777 653.242 285.777H648.737V280.201C648.737 266.271 638.56 254.087 624.893 252.47L623.221 217.722C623.18 216.96 622.569 216.333 621.789 216.296C620.959 216.256 620.258 216.895 620.215 217.722L618.546 252.467C605.122 254.041 594.702 265.425 594.702 279.272V285.777H590.196C585.913 285.777 582.442 289.252 582.442 293.535C582.442 297.819 585.913 301.293 590.196 301.293H594.702V354.835H590.631C586.438 354.835 582.673 357.98 582.451 362.174C582.216 366.645 585.771 370.345 590.196 370.345C592.683 370.345 594.702 384.374 594.702 386.861V426.893H529.816C529.82 426.346 529.85 425.803 529.85 425.254C529.85 353.894 492.182 291.332 435.641 256.374C406.073 238.089 378.39 216.91 354.228 191.908L342.154 179.41C345.86 176.2 348.211 171.469 348.211 166.18C348.211 158.746 343.573 152.41 337.037 149.871L336.473 137.666C343.301 135.277 348.211 128.793 348.211 121.146C348.211 112.928 342.542 106.05 334.908 104.158L333.158 66.6325C333.118 65.7592 332.418 65.0432 331.532 65C331.504 65 331.477 65 331.449 65C330.542 65 329.783 65.7129 329.739 66.6325ZM626 314.84C626 311.064 629.136 308 632.998 308C636.867 308 640 311.064 640 314.84V347H626V314.84ZM604 314.84C604 311.064 607.131 308 611.003 308C614.863 308 618 311.064 618 314.84V347H604V314.84ZM43 314.84C43 311.064 46.1331 308 49.9952 308C53.8669 308 57 311.064 57 314.84V347H43V314.84ZM21 314.84C21 311.064 24.1339 308 28 308C31.863 308 35 311.064 35 314.84V347H21V314.84Z",
                    fill: "currentColor"
                }), (0,
                a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M299.524 35.2381C299.524 54.6988 315.354 70.4762 334.879 70.4762V70.4762C348.719 70.4762 360.673 62.524 366.476 50.9783V50.9783C361.559 55.845 354.79 58.8592 347.311 58.8592V58.8592C332.293 58.8592 320.115 46.7218 320.115 31.753V31.753C320.115 16.7811 332.293 4.64678 347.311 4.64678V4.64678C349.5 4.64678 351.619 4.93178 353.658 5.41815V5.41815C348.213 2.00121 341.788 0 334.879 0V0C315.354 0 299.524 15.7712 299.524 35.2381",
                    fill: "currentColor"
                })]
            })
        }
        var I = r(60802);
        let Card1 = e => {
            let {product: t, background: r, foreground: o, image: l, type: n} = e
              , i = (0,
            S.Ad)();
            return (0,
            a.jsxs)(m.E.li, {
                variants: {
                    hidden: {
                        y: 20,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1
                    }
                },
                className: "relative [--card-padding:theme(spacing.2)] [--card-radius:theme(borderRadius.2xl)]",
                children: [(0,
                a.jsx)(R.r, {
                    href: "/".concat(t.handle),
                    className: (0,
                    u.Z)(["flex items-center gap-x-2 rounded-[--card-radius] bg-muted text-foreground duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background md:gap-x-3", "bg-title-product", !!r && ("popular" === n ? "bg-popular-background" : "bg-recommendation-background"), !!o && ("popular" === n ? "text-popular-foreground" : "text-recommendation-foreground"), !!l && "".concat("popular" === n ? "bg-popular-image" : "bg-recommendation-image", " bg-cover bg-center bg-no-repeat")]),
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex items-center gap-3 p-[--card-padding]",
                        children: [(0,
                        a.jsx)(W.J, {
                            src: t.thumbnail,
                            alt: t.title,
                            width: 56,
                            height: 56,
                            priority: !0,
                            className: "aspect-square h-14 w-14 rounded-[calc(var(--card-radius)-var(--card-padding))] object-cover object-center duration-300 group-hover/recommendation:scale-110 group-hover/recommendation:shadow-2xl md:h-20 md:w-20"
                        }), (0,
                        a.jsxs)("div", {
                            className: "relative flex w-full flex-col",
                            children: [(0,
                            a.jsx)("h2", {
                                className: "w-[80px] truncate text-xxs font-semibold text-foreground sm:w-[125px] md:w-[150px] md:text-base lg:w-[175px]",
                                children: t.title
                            }), (0,
                            a.jsx)("p", {
                                className: "text-xxs text-foreground md:text-sm",
                                children: t.publisher
                            })]
                        })]
                    })
                }), i && (0,
                a.jsx)("div", {
                    className: "absolute -right-[5px] -top-[5px]",
                    children: (0,
                    a.jsx)(z.Tk, {
                        className: "h-6 w-auto"
                    })
                })]
            }, t.code)
        }
          , Card2 = e => {
            let {product: t, background: r, foreground: o, image: l, type: n} = e;
            return (0,
            a.jsx)(m.E.li, {
                variants: {
                    hidden: {
                        y: 20,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1
                    }
                },
                className: (0,
                u.Z)("[--card-padding:theme(spacing.4)] [--card-radius:theme(borderRadius.2xl)]", ["rounded-[--card-radius] bg-muted", !!r && ("popular" === n ? "bg-popular-background" : "bg-recommendation-background"), !!o && ("popular" === n ? "text-popular-foreground" : "text-recommendation-foreground"), !!l && "".concat("popular" === n ? "bg-popular-image" : "bg-recommendation-image", " bg-cover bg-center bg-no-repeat")]),
                children: (0,
                a.jsxs)("div", {
                    className: "flex h-full w-full flex-col items-center rounded-[--card-radius] border md:flex-row",
                    children: [(0,
                    a.jsx)("div", {
                        className: "h-full w-full md:w-1/2",
                        children: (0,
                        a.jsx)("div", {
                            className: "relative aspect-square h-[100px] w-full overflow-hidden rounded-[--card-radius] object-cover outline outline-2 outline-offset-2 outline-primary md:h-full md:w-auto forced-colors:outline-[Highlight]",
                            children: (0,
                            a.jsx)(W.J, {
                                src: t.thumbnail,
                                alt: t.title,
                                className: "object-cover object-top",
                                fill: !0
                            })
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "relative flex h-full w-full flex-col justify-between p-[--card-padding]",
                        children: [(0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsx)("h2", {
                                className: "line-clamp-1 font-semibold",
                                children: t.title
                            }), (0,
                            a.jsx)("p", {
                                className: "text-xs font-medium",
                                children: t.publisher
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "pt-4",
                            children: (0,
                            a.jsx)(I.z, {
                                type: "button",
                                className: "w-full uppercase md:w-auto",
                                size: "sm",
                                asChild: !0,
                                children: (0,
                                a.jsxs)(R.r, {
                                    href: "/".concat(t.handle),
                                    children: [(0,
                                    a.jsx)(L.Z, {
                                        className: "mr-2 h-4 w-4"
                                    }), (0,
                                    a.jsx)("span", {
                                        children: "Top Up"
                                    })]
                                })
                            })
                        }), (0,
                        a.jsx)("span", {
                            className: "absolute bottom-3 right-3 hidden rounded-md border bg-secondary px-1.5 py-0.5 text-xs uppercase text-secondary-foreground lg:block",
                            children: t.code
                        })]
                    })]
                })
            }, t.code)
        }
          , Card3 = e => {
            let {product: t, background: r, foreground: o, image: l, type: n} = e;
            return (0,
            a.jsx)(m.E.li, {
                variants: {
                    hidden: {
                        y: 20,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1
                    }
                },
                className: "[--card-padding:theme(spacing.2)] [--card-radius:theme(borderRadius.2xl)]",
                children: (0,
                a.jsx)(R.r, {
                    href: "/".concat(t.handle),
                    className: (0,
                    u.Z)(["flex items-center gap-x-2 rounded-[--card-radius] bg-muted duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background md:gap-x-3", !!r && ("popular" === n ? "bg-popular-background" : "bg-recommendation-background"), !!o && ("popular" === n ? "text-popular-foreground" : "text-recommendation-foreground"), !!l && "".concat("popular" === n ? "bg-popular-image" : "bg-recommendation-image", " bg-cover bg-center bg-no-repeat")]),
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex items-center gap-3 p-[--card-padding]",
                        children: [(0,
                        a.jsx)(W.J, {
                            src: t.thumbnail,
                            alt: t.title,
                            width: 56,
                            height: 56,
                            priority: !0,
                            className: "aspect-square h-14 w-14 rounded-[calc(var(--card-radius)-var(--card-padding))] object-cover object-center ring-1 ring-background md:h-20 md:w-20"
                        }), (0,
                        a.jsxs)("div", {
                            className: "relative flex w-full flex-col",
                            children: [(0,
                            a.jsx)("h2", {
                                className: "w-[100px] truncate font-bjcredits text-xxs font-semibold text-foreground sm:w-[125px] md:w-[150px] md:text-base lg:w-[175px]",
                                children: t.title
                            }), (0,
                            a.jsx)("p", {
                                className: "text-xxs text-foreground md:text-sm",
                                children: t.publisher
                            })]
                        })]
                    })
                })
            }, t.code)
        }
          , Card4 = e => {
            let {product: t, background: r, foreground: o, image: l, type: n} = e;
            return (0,
            a.jsxs)(m.E.li, {
                variants: {
                    hidden: {
                        y: 20,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1
                    }
                },
                className: "rounded-[calc(var(--card-radius)-6px)] duration-300 ease-in-out [--card-padding:theme(spacing.2)] [--card-radius:theme(borderRadius.2xl)] hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background",
                children: [(0,
                a.jsx)(R.r, {
                    href: "/".concat(t.handle),
                    className: (0,
                    u.Z)(["flex items-center gap-x-2 rounded-t-[--card-radius] bg-secondary md:gap-x-3", !!r && ("popular" === n ? "bg-popular-background" : "bg-recommendation-background"), !!o && ("popular" === n ? "text-popular-foreground" : "text-recommendation-foreground"), !!l && "".concat("popular" === n ? "bg-popular-image" : "bg-recommendation-image", " bg-cover bg-center bg-no-repeat")]),
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex items-center gap-3 p-[--card-padding]",
                        children: [(0,
                        a.jsx)(W.J, {
                            src: t.thumbnail,
                            alt: t.title,
                            width: 56,
                            height: 56,
                            priority: !0,
                            className: "aspect-square h-14 w-14 rounded-[calc(var(--card-radius)-var(--card-padding))] object-cover object-center ring-1 ring-background md:h-20 md:w-20"
                        }), (0,
                        a.jsxs)("div", {
                            className: "relative flex w-full flex-col",
                            children: [(0,
                            a.jsx)("h2", {
                                className: "w-[100px] truncate font-bjcredits text-xxs font-semibold text-foreground sm:w-[125px] md:w-[150px] md:text-base lg:w-[175px]",
                                children: t.title
                            }), (0,
                            a.jsx)("p", {
                                className: "text-xxs text-foreground md:text-sm",
                                children: t.publisher
                            })]
                        })]
                    })
                }), (0,
                a.jsx)("div", {
                    className: "h-2.5 w-full rounded-b-[--card-radius] bg-primary"
                })]
            }, t.code)
        }
          , Card5 = e => {
            let {product: t, background: o, foreground: l, image: n, type: i} = e
              , s = (0,
            S.Ad)()
              , d = (0,
            S.Mg)()
              , c = (0,
            S.$2)()
              , x = (0,
            w.useRef)(null)
              , [h,p] = (0,
            w.useState)("");
            return (0,
            w.useEffect)( () => {
                let e = x.current;
                if (!e)
                    return;
                e.crossOrigin = "Anonymous";
                let t = new B.Z;
                e.onload = () => {
                    let r = t.getColor(e);
                    r && p("rgb(".concat(r[0], ", ").concat(r[1], ", ").concat(r[2], ")"))
                }
            }
            , []),
            (0,
            a.jsxs)(m.E.li, {
                variants: {
                    hidden: {
                        y: 20,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1
                    }
                },
                className: "group/product-card relative z-0 [--card-padding:theme(spacing.2)] [--card-radius:theme(borderRadius.2xl)]",
                children: [(0,
                a.jsx)(R.r, {
                    href: "/".concat(t.handle),
                    className: (0,
                    u.Z)(["flex items-center gap-x-2 rounded-[--card-radius] bg-muted text-foreground duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background md:gap-x-3", "bg-title-product", !!o && ("popular" === i ? "bg-popular-background" : "bg-recommendation-background"), !!l && ("popular" === i ? "text-popular-foreground" : "text-recommendation-foreground"), !!n && "".concat("popular" === i ? "bg-popular-image" : "bg-recommendation-image", " bg-cover bg-center bg-no-repeat"), d && "hover:ring-[4px]"]),
                    style: {
                        backgroundColor: h
                    },
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex items-center gap-3 p-[--card-padding]",
                        children: [(0,
                        a.jsx)(W.J, {
                            ref: x,
                            src: t.thumbnail,
                            alt: t.title,
                            width: 56,
                            height: 56,
                            priority: !0,
                            className: "aspect-square h-14 w-14 rounded-[calc(var(--card-radius)-var(--card-padding))] object-cover object-center duration-300 group-hover/product-card:scale-110 group-hover/product-card:rounded-xl group-hover/product-card:shadow-2xl md:h-20 md:w-20"
                        }), (0,
                        a.jsxs)("div", {
                            className: "relative flex w-full flex-col",
                            children: [(0,
                            a.jsx)("h2", {
                                className: "w-[80px] truncate text-xxs font-semibold text-foreground sm:w-[125px] md:w-[150px] md:text-base lg:w-[175px]",
                                children: t.title
                            }), (0,
                            a.jsx)("p", {
                                className: "text-xxs text-foreground md:text-sm",
                                children: t.publisher
                            })]
                        })]
                    })
                }), s && (0,
                a.jsx)("div", {
                    className: "absolute -right-[5px] -top-[5px]",
                    children: (0,
                    a.jsx)(z.Tk, {
                        className: "h-6 w-auto"
                    })
                }), d && (0,
                a.jsx)(Mosque, {
                    className: "pointer-events-none absolute right-4 top-0 -z-10 w-16 text-primary duration-300 ease-in-out group-hover/product-card:-translate-y-full lg:right-6"
                }), c && (0,
                a.jsx)(A(), {
                    src: r(8368),
                    alt: "",
                    className: "pointer-events-none absolute -bottom-2 -right-2 flex w-12 items-start duration-300 ease-in-out lg:w-16"
                })]
            }, t.code)
        }
          , CardTakapedia = e => {
            let {product: t, background: r, foreground: o, image: l} = e;
            return (0,
            a.jsx)(m.E.li, {
                variants: {
                    hidden: {
                        y: 20,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1
                    }
                },
                whileHover: {
                    scale: 1.025,
                    transition: {
                        duration: .1
                    }
                },
                className: "[--card-padding:theme(spacing.2)] [--card-radius:theme(borderRadius.2xl)]",
                children: (0,
                a.jsxs)(R.r, {
                    href: "/".concat(t.handle),
                    className: "group relative",
                    children: [(0,
                    a.jsxs)("div", {
                        className: (0,
                        k.cn)("relative flex h-[4.5rem] items-center gap-x-1.5 overflow-hidden rounded-t-xl bg-muted p-1.5 shadow-xl sm:h-24 md:gap-x-3 md:p-3"),
                        children: [(0,
                        a.jsx)(W.J, {
                            src: t.thumbnail,
                            alt: t.title,
                            className: "object-cover object-[100%_10%] grayscale group-focus-within:grayscale-0 group-hover:grayscale-0 md:object-[100%_20%]",
                            fill: !0
                        }), (0,
                        a.jsx)("div", {
                            className: "from-secondary-400 absolute inset-0 bg-gradient-to-r to-transparent"
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: (0,
                        u.Z)(["flex flex-col items-start justify-between rounded-b-xl bg-primary bg-contain bg-[120px] bg-no-repeat px-4 py-2 sm:bg-right md:flex-row md:items-center md:py-4", !!r && "bg-popular-background", !!o && "text-popular-foreground", !!l && "bg-popular-image"]),
                        children: [(0,
                        a.jsx)("h2", {
                            className: (0,
                            u.Z)("font-chakra text-xs font-semibold text-primary-foreground sm:text-base"),
                            children: t.title
                        }), (0,
                        a.jsx)("h3", {
                            className: "font-chakra text-xxs font-medium text-primary-foreground sm:text-xs",
                            children: t.publisher
                        })]
                    })]
                })
            }, t.code)
        }
        ;
        var O = {
            src: "/_next/static/media/left-hanger-isra-miraj.96656a7b.svg",
            height: 390,
            width: 299,
            blurWidth: 0,
            blurHeight: 0
        };
        let U = (0,
        m.E)(R.r)
          , ProductCard1 = e => {
            let {product: t} = e
              , r = (0,
            S.Ad)()
              , o = (0,
            S.qG)();
            return (0,
            a.jsxs)(U, {
                href: "/".concat(t.handle),
                whileTap: {
                    scale: .9
                },
                whileHover: {
                    scale: 1.05,
                    transition: {
                        duration: .1
                    }
                },
                variants: {
                    hidden: {
                        y: 20,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1
                    }
                },
                className: "relative",
                children: [(0,
                a.jsxs)("div", {
                    className: "group relative transform overflow-hidden rounded-2xl bg-muted duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background",
                    children: [(0,
                    a.jsx)(W.J, {
                        src: t.thumbnail,
                        alt: t.title,
                        width: 192,
                        height: 288,
                        priority: !0,
                        className: "aspect-[4/6] object-cover object-center"
                    }), (0,
                    a.jsxs)("article", {
                        className: "absolute inset-x-0 -bottom-10 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out group-hover:bottom-3 sm:px-4 group-hover:sm:bottom-4",
                        children: [(0,
                        a.jsx)("h2", {
                            className: "truncate text-sm font-semibold text-foreground sm:text-base",
                            children: t.title
                        }), (0,
                        a.jsx)("p", {
                            className: "truncate text-xxs text-foreground sm:text-xs",
                            children: t.publisher
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "absolute inset-0 transform bg-gradient-to-t from-transparent transition-all duration-300 group-hover:from-background"
                    })]
                }), r && (0,
                a.jsx)(z.M7, {
                    className: "absolute -left-[9.5px] -top-[11px] h-8 w-auto"
                }), o && (0,
                a.jsx)(A(), {
                    src: O,
                    alt: "",
                    className: "absolute left-2 top-0 w-20"
                })]
            })
        }
          , ProductCard2 = e => {
            let {product: t} = e
              , r = (0,
            S.Ad)()
              , o = (0,
            S.qG)()
              , l = (0,
            S.Mg)();
            return (0,
            a.jsxs)(U, {
                href: "/".concat(t.handle),
                whileTap: {
                    scale: .9
                },
                whileHover: {
                    scale: 1.05,
                    transition: {
                        duration: .1
                    }
                },
                variants: {
                    hidden: {
                        y: 20,
                        opacity: 0
                    },
                    visible: {
                        y: 0,
                        opacity: 1
                    }
                },
                className: "group relative",
                children: [(0,
                a.jsxs)("div", {
                    className: (0,
                    k.cn)("relative transform overflow-hidden rounded-xl bg-muted duration-300 ease-in-out hover:rotate-3 hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background", l && "hover:ring-[8px]"),
                    children: [(0,
                    a.jsx)(W.J, {
                        src: t.thumbnail,
                        alt: t.title,
                        width: 192,
                        height: 288,
                        priority: !0,
                        className: "aspect-square rounded-t-xl object-cover object-center"
                    }), (0,
                    a.jsx)("div", {
                        className: "rounded-b-xl bg-muted py-2",
                        children: (0,
                        a.jsxs)("div", {
                            className: "flex flex-col px-3 py-1",
                            children: [(0,
                            a.jsx)("h2", {
                                className: "truncate text-sm font-semibold text-foreground sm:text-base",
                                children: t.title
                            }), (0,
                            a.jsx)("p", {
                                className: "truncate text-xxs text-foreground sm:text-xs",
                                children: t.publisher
                            })]
                        })
                    }), r && (0,
                    a.jsx)(z.M7, {
                        className: "absolute -left-[9.5px] -top-[11px] h-8 w-auto"
                    }), o && (0,
                    a.jsx)(A(), {
                        src: O,
                        alt: "",
                        className: "absolute left-2 top-0 w-20"
                    })]
                }), l && (0,
                a.jsx)(Mosque, {
                    className: "pointer-events-none absolute right-0 top-0 -z-10 w-20 text-primary duration-300 ease-in-out group-hover:-translate-y-full"
                })]
            })
        }
        ;
        var D = r(12750)
          , G = r(16056)
          , J = r(22544);
        r(92261),
        r(96964);
        var $ = r(22546)
          , K = {
            src: "/_next/static/media/bg-cny.feb48a6a.svg",
            height: 566,
            width: 1440,
            blurWidth: 0,
            blurHeight: 0
        }
          , Y = {
            src: "/_next/static/media/flower-left-cny.186c08c8.svg",
            height: 566,
            width: 374,
            blurWidth: 0,
            blurHeight: 0
        }
          , X = {
            src: "/_next/static/media/flower-right-cny.35dfc024.svg",
            height: 521,
            width: 580,
            blurWidth: 0,
            blurHeight: 0
        };
        function CNY() {
            return (0,
            a.jsxs)("div", {
                className: "absolute inset-0 bg-[#660004]",
                children: [(0,
                a.jsx)(A(), {
                    src: K,
                    alt: "",
                    className: "absolute inset-0 w-full",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: Y,
                    alt: "",
                    className: "absolute bottom-0 left-0 h-32 w-auto lg:h-auto",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: X,
                    alt: "",
                    className: "absolute right-0 top-0 h-32 w-auto lg:h-auto",
                    priority: !0
                })]
            })
        }
        var Q = r(54007);
        function IdulFitri() {
            return (0,
            a.jsxs)("div", {
                className: "absolute inset-0 bg-primary/10",
                children: [(0,
                a.jsx)(A(), {
                    src: r(79766),
                    alt: "",
                    className: "absolute inset-0 h-full w-full",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: r(79766),
                    alt: "",
                    className: "absolute inset-0 h-full w-full rotate-180",
                    priority: !0
                }), (0,
                a.jsx)(Q.H, {
                    number: 50
                }), (0,
                a.jsx)("div", {
                    className: "absolute inset-x-0 mx-auto max-w-[1800px]",
                    children: (0,
                    a.jsx)(A(), {
                        src: r(49854),
                        alt: "",
                        className: "absolute right-0 w-40",
                        quality: 100,
                        priority: !0
                    })
                }), (0,
                a.jsx)("div", {
                    className: "absolute inset-0 bg-bottom bg-repeat-x [background-size:300px_auto] lg:[background-size:700px_auto]",
                    style: {
                        backgroundImage: "url(".concat(r(24531).Z.src, ")")
                    }
                })]
            })
        }
        var ee = {
            src: "/_next/static/media/bg-isra-miraj.e5f33293.svg",
            height: 230,
            width: 1440,
            blurWidth: 0,
            blurHeight: 0
        }
          , et = {
            src: "/_next/static/media/bottom-cloud-isra-miraj.7f4b04b8.svg",
            height: 234,
            width: 1440,
            blurWidth: 0,
            blurHeight: 0
        }
          , er = {
            src: "/_next/static/media/center-cloud-isra-miraj.6d6abc71.svg",
            height: 147,
            width: 1401,
            blurWidth: 0,
            blurHeight: 0
        }
          , ea = {
            src: "/_next/static/media/left-cloud-isra-miraj.3bf06c08.svg",
            height: 157,
            width: 341,
            blurWidth: 0,
            blurHeight: 0
        }
          , eo = {
            src: "/_next/static/media/right-cloud-isra-miraj.3718e13d.svg",
            height: 157,
            width: 341,
            blurWidth: 0,
            blurHeight: 0
        }
          , el = {
            src: "/_next/static/media/right-hanger-isra-miraj.351b6536.svg",
            height: 397,
            width: 344,
            blurWidth: 0,
            blurHeight: 0
        }
          , en = r(79766)
          , ei = {
            src: "/_next/static/media/unta-isra-miraj.b1ab4bff.svg",
            height: 51,
            width: 169,
            blurWidth: 0,
            blurHeight: 0
        };
        function IsraMiraj() {
            return (0,
            a.jsxs)("div", {
                className: "absolute inset-0 bg-[#153852]",
                children: [(0,
                a.jsx)(A(), {
                    src: ea,
                    alt: "",
                    className: "absolute left-0 top-0 h-14 w-auto lg:top-0 lg:h-auto",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: eo,
                    alt: "",
                    className: "absolute right-0 hidden lg:block",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: O,
                    alt: "",
                    className: "absolute left-4 top-0 hidden lg:block",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: el,
                    alt: "",
                    className: "absolute right-2 h-24 w-auto lg:h-auto",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: et,
                    alt: "",
                    className: "absolute inset-x-0 -bottom-14 w-full",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: er,
                    alt: "",
                    className: "absolute inset-x-12 top-1/2 w-full -translate-y-1/2",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: en.default,
                    alt: "",
                    className: "absolute inset-x-12 top-1/2 w-full -translate-y-1/2",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: ee,
                    alt: "",
                    className: "absolute inset-x-0 -bottom-2 w-full lg:-bottom-14",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: ei,
                    alt: "",
                    className: "absolute bottom-2 left-12 h-4 w-auto lg:left-40 lg:h-auto",
                    priority: !0
                })]
            })
        }
        var es = r(5098)
          , ed = r(13568)
          , ec = r(92290)
          , eu = r(49632)
          , em = r(47032)
          , ex = r(12971);
        function Aurora(e) {
            let {colorStops: t=["#00d8ff", "#7cff67", "#00d8ff"], amplitude: r=1, blend: o=.5} = e
              , l = (0,
            w.useRef)(e);
            l.current = e;
            let n = (0,
            w.useRef)(null);
            return (0,
            w.useEffect)( () => {
                let e;
                let a = n.current;
                if (!a)
                    return;
                let i = new ed.T({
                    alpha: !0,
                    premultipliedAlpha: !0,
                    antialias: !0
                })
                  , s = i.gl;
                function resize() {
                    if (!a)
                        return;
                    let t = a.offsetWidth
                      , r = a.offsetHeight;
                    i.setSize(t, r),
                    e && (e.uniforms.uResolution.value = [t, r])
                }
                s.clearColor(0, 0, 0, 0),
                s.enable(s.BLEND),
                s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA),
                s.canvas.style.backgroundColor = "transparent",
                window.addEventListener("resize", resize);
                let d = new ec.C(s);
                d.attributes.uv && delete d.attributes.uv;
                let c = t.map(e => {
                    let t = new eu.I(e);
                    return [t.r, t.g, t.b]
                }
                );
                e = new em.$(s,{
                    vertex: "#version 300 es\n  in vec2 position;\n  void main() {\n    gl_Position = vec4(position, 0.0, 1.0);\n  }\n",
                    fragment: "#version 300 es\n  precision highp float;\n\n  uniform float uTime;\n  uniform float uAmplitude;\n  uniform vec3 uColorStops[3];\n  uniform vec2 uResolution;\n  uniform float uBlend;\n\n  out vec4 fragColor;\n\n  vec3 permute(vec3 x) {\n    return mod(((x * 34.0) + 1.0) * x, 289.0);\n  }\n\n  float snoise(vec2 v){\n    const vec4 C = vec4(\n        0.211324865405187, 0.366025403784439,\n        -0.577350269189626, 0.024390243902439\n    );\n    vec2 i  = floor(v + dot(v, C.yy));\n    vec2 x0 = v - i + dot(i, C.xx);\n    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n    i = mod(i, 289.0);\n\n    vec3 p = permute(\n        permute(i.y + vec3(0.0, i1.y, 1.0))\n      + i.x + vec3(0.0, i1.x, 1.0)\n    );\n\n    vec3 m = max(\n        0.5 - vec3(\n            dot(x0, x0),\n            dot(x12.xy, x12.xy),\n            dot(x12.zw, x12.zw)\n        ), \n        0.0\n    );\n    m = m * m;\n    m = m * m;\n\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);\n\n    vec3 g;\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n  }\n\n  struct ColorStop {\n    vec3 color;\n    float position;\n  };\n\n  #define COLOR_RAMP(colors, factor, finalColor) {                  int index = 0;                                                for (int i = 0; i < 2; i++) {                                     ColorStop currentColor = colors[i];                          bool isInBetween = currentColor.position <= factor;          index = int(mix(float(index), float(i), float(isInBetween)));     }                                                             ColorStop currentColor = colors[index];                       ColorStop nextColor = colors[index + 1];                      float range = nextColor.position - currentColor.position;     float lerpFactor = (factor - currentColor.position) / range;     finalColor = mix(currentColor.color, nextColor.color, lerpFactor);   }\n\n  void main() {\n    vec2 uv = gl_FragCoord.xy / uResolution;\n    \n    ColorStop colors[3];\n    colors[0] = ColorStop(uColorStops[0], 0.0);\n    colors[1] = ColorStop(uColorStops[1], 0.5);\n    colors[2] = ColorStop(uColorStops[2], 1.0);\n    \n    vec3 rampColor;\n    COLOR_RAMP(colors, uv.x, rampColor);\n    \n    float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;\n    height = exp(height);\n    height = (uv.y * 2.0 - height + 0.2);\n    float intensity = 0.6 * height;\n    \n    float midPoint = 0.20;\n    float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);\n    \n    vec3 auroraColor = intensity * rampColor;\n    \n    fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);\n  }\n",
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        uAmplitude: {
                            value: r
                        },
                        uColorStops: {
                            value: c
                        },
                        uResolution: {
                            value: [a.offsetWidth, a.offsetHeight]
                        },
                        uBlend: {
                            value: o
                        }
                    }
                });
                let u = new ex.K(s,{
                    geometry: d,
                    program: e
                });
                a.appendChild(s.canvas);
                let m = 0
                  , update = r => {
                    m = requestAnimationFrame(update);
                    let {time: a=.01 * r, speed: n=1} = l.current;
                    if (e) {
                        var s, d, c;
                        e.uniforms.uTime.value = a * n * .1,
                        e.uniforms.uAmplitude.value = null !== (s = l.current.amplitude) && void 0 !== s ? s : 1,
                        e.uniforms.uBlend.value = null !== (d = l.current.blend) && void 0 !== d ? d : o;
                        let r = null !== (c = l.current.colorStops) && void 0 !== c ? c : t;
                        e.uniforms.uColorStops.value = r.map(e => {
                            let t = new eu.I(e);
                            return [t.r, t.g, t.b]
                        }
                        ),
                        i.render({
                            scene: u
                        })
                    }
                }
                ;
                return m = requestAnimationFrame(update),
                resize(),
                () => {
                    var e;
                    cancelAnimationFrame(m),
                    window.removeEventListener("resize", resize),
                    a && s.canvas.parentNode === a && a.removeChild(s.canvas),
                    null === (e = s.getExtension("WEBGL_lose_context")) || void 0 === e || e.loseContext()
                }
            }
            , [r]),
            (0,
            a.jsx)("div", {
                ref: n,
                className: "h-full w-full"
            })
        }
        function Ramadhan() {
            return (0,
            a.jsxs)("div", {
                className: "absolute inset-0 bg-[#123746]",
                children: [(0,
                a.jsx)("div", {
                    className: "absolute inset-0 bg-bottom bg-repeat-x [background-size:300px_auto] lg:[background-size:auto_auto]",
                    style: {
                        backgroundImage: "url(".concat(r(24531).Z.src, ")")
                    }
                }), (0,
                a.jsx)(A(), {
                    src: O,
                    alt: "",
                    className: "absolute left-0 top-0 hidden h-3/5 lg:block",
                    priority: !0
                }), (0,
                a.jsx)(A(), {
                    src: el,
                    alt: "",
                    className: "absolute right-2 h-32 w-auto lg:h-3/5",
                    priority: !0
                }), (0,
                a.jsx)(Aurora, {
                    colorStops: ["#00D8FF", "#7CFF67", "#00D8FF"],
                    blend: .5,
                    amplitude: 1,
                    speed: 1
                })]
            })
        }
        let Slider = e => {
            var t;
            let {images: o, config: l} = e
              , n = (0,
            S.Ad)()
              , i = (0,
            S.m7)()
              , s = (0,
            S.qG)()
              , d = (0,
            S.qb)()
              , c = (0,
            S.Mg)()
              , u = (0,
            S.$2)();
            return o && o.length < 1 ? (0,
            a.jsx)("div", {
                className: "relative flex min-h-[164px] items-center justify-center overflow-hidden bg-secondary/50 px-4 py-4 text-center lg:min-h-[553.96px] lg:py-8",
                children: "No Banner"
            }) : (0,
            a.jsxs)("section", {
                className: "relative flex items-center overflow-hidden bg-secondary/50 px-4 py-4 lg:min-h-[553.96px] lg:py-8",
                children: [o && (0,
                a.jsxs)($.tq, {
                    spaceBetween: 30,
                    centeredSlides: !0,
                    autoplay: {
                        delay: 5e3,
                        disableOnInteraction: !1
                    },
                    pagination: {
                        clickable: !0
                    },
                    loop: !0,
                    grabCursor: !0,
                    modules: [J.pt, J.W_],
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                    className: "container",
                    children: [o ? o.map(e => (0,
                    a.jsx)($.o5, {
                        className: "swiper-slide px-0 md:px-4",
                        children: (0,
                        a.jsx)(R.r, {
                            href: e.href,
                            children: (0,
                            a.jsx)("div", {
                                className: "relative aspect-[1080/424] h-full",
                                children: (0,
                                a.jsx)(W.J, {
                                    src: e.src,
                                    alt: e.title,
                                    fill: !0,
                                    priority: !0,
                                    sizes: "100vw",
                                    className: "rounded-3xl",
                                    quality: 100
                                })
                            })
                        })
                    }, e.id)) : null, (0,
                    a.jsxs)("div", {
                        className: "z-50 hidden items-center justify-end space-x-2 md:flex",
                        children: [(0,
                        a.jsx)("button", {
                            type: "button",
                            className: "swiper-button swiper-button-prev !ml-8",
                            children: (0,
                            a.jsx)("div", {
                                className: "flex aspect-square h-12 w-12 scale-75 items-center justify-center rounded-full bg-muted/50 shadow-2xl sm:scale-100",
                                children: (0,
                                a.jsx)(D, {
                                    className: "h-8 w-8 pr-1"
                                })
                            })
                        }), (0,
                        a.jsx)("button", {
                            type: "button",
                            className: "swiper-button swiper-button-next !mr-8",
                            children: (0,
                            a.jsx)("div", {
                                className: "flex aspect-square h-12 w-12 scale-75 items-center justify-center rounded-full bg-muted/50 shadow-2xl sm:scale-100",
                                children: (0,
                                a.jsx)(G, {
                                    className: "h-8 w-8 pl-1"
                                })
                            })
                        })]
                    })]
                }), (null == l ? void 0 : null === (t = l.meta) || void 0 === t ? void 0 : t.title) === "TAKAPEDIA" && (0,
                a.jsx)(Q.H, {
                    number: 50
                }), n && (0,
                a.jsx)(z.to, {
                    className: "absolute inset-0 w-full"
                }), i && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(es.z, {
                        className: "absolute inset-0 w-full"
                    }), (0,
                    a.jsx)(A(), {
                        src: r(46497).Z,
                        alt: "",
                        className: "absolute inset-x-0 bottom-0 w-full bg-bottom"
                    })]
                }), s && (0,
                a.jsx)(IsraMiraj, {}), d && (0,
                a.jsx)(CNY, {}), c && (0,
                a.jsx)(Ramadhan, {}), u && (0,
                a.jsx)(IdulFitri, {})]
            })
        }
        ;
        var eh = r(49721)
          , ep = r(27239)
          , eg = r(22849)
          , ev = r(32758);
        let RecentProductSection = e => {
            var t, r, o, l;
            let {config: i} = e
              , s = (0,
            S.Mg)()
              , [d,c] = w.useState([])
              , {t: u} = (0,
            b.$G)("home")
              , {REGION: x} = (0,
            n.E)();
            return (w.useEffect( () => {
                let e = {};
                try {
                    e = JSON.parse(localStorage.getItem("recent-products")) || {}
                } catch (t) {
                    e = {}
                }
                c(e[x] || [])
            }
            , [x]),
            d && 0 !== d.length) ? (0,
            a.jsxs)("div", {
                className: "md:container",
                children: [(0,
                a.jsxs)("div", {
                    className: "mb-5 px-4 text-foreground md:px-0",
                    children: [(0,
                    a.jsx)("h3", {
                        className: "text-lg font-semibold uppercase leading-relaxed tracking-wider",
                        children: (null === (r = i.content) || void 0 === r ? void 0 : null === (t = r.recommendation) || void 0 === t ? void 0 : t.title) || "✨ ".concat(u("home:recomendation"))
                    }), (0,
                    a.jsx)("p", {
                        className: "pl-6 text-xs",
                        children: (null === (l = i.content) || void 0 === l ? void 0 : null === (o = l.recommendation) || void 0 === o ? void 0 : o.subtitle) || u("home:recomendation-description")
                    })]
                }), d && d.length > 0 && (0,
                a.jsxs)(m.E.ul, {
                    variants: {
                        hidden: {
                            opacity: 1,
                            scale: 1
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delayChildren: .2,
                                staggerChildren: .1
                            }
                        }
                    },
                    initial: "hidden",
                    animate: "visible",
                    className: "relative grid grid-cols-2 gap-4 bg-muted/50 p-3 md:grid-cols-3 md:rounded-3xl lg:min-h-[120px]",
                    children: [s && (0,
                    a.jsx)(Mosque, {
                        className: "absolute -top-[94px] right-8 z-50 w-[120px] text-muted/50"
                    }), d.map( (e, t) => {
                        var r, o, l, n, s, d, c, u, m, x, h, p;
                        return (0,
                        a.jsxs)(w.Fragment, {
                            children: [(null === (o = i.content) || void 0 === o ? void 0 : null === (r = o.recommendation) || void 0 === r ? void 0 : r.card) === 1 && (0,
                            a.jsx)(Card1, {
                                type: "recommendation",
                                product: e,
                                background: i.content.recommendation.background,
                                foreground: i.content.recommendation.foreground,
                                image: i.content.recommendation.image
                            }), (null === (n = i.content) || void 0 === n ? void 0 : null === (l = n.recommendation) || void 0 === l ? void 0 : l.card) === 2 && (0,
                            a.jsx)(Card2, {
                                type: "recommendation",
                                product: e,
                                background: i.content.recommendation.background,
                                foreground: i.content.recommendation.foreground,
                                image: i.content.recommendation.image
                            }), (null === (d = i.content) || void 0 === d ? void 0 : null === (s = d.recommendation) || void 0 === s ? void 0 : s.card) === 3 && (0,
                            a.jsx)(Card3, {
                                type: "recommendation",
                                product: e,
                                background: i.content.recommendation.background,
                                foreground: i.content.recommendation.foreground,
                                image: i.content.recommendation.image
                            }), (null === (u = i.content) || void 0 === u ? void 0 : null === (c = u.recommendation) || void 0 === c ? void 0 : c.card) === 4 && (0,
                            a.jsx)(Card4, {
                                type: "recommendation",
                                product: e,
                                background: i.content.recommendation.background,
                                foreground: i.content.recommendation.foreground,
                                image: i.content.recommendation.image
                            }), (null === (x = i.content) || void 0 === x ? void 0 : null === (m = x.recommendation) || void 0 === m ? void 0 : m.card) === 5 && (0,
                            a.jsx)(Card5, {
                                type: "recommendation",
                                product: e,
                                background: i.content.recommendation.background,
                                foreground: i.content.recommendation.foreground,
                                image: i.content.recommendation.image
                            }), (null === (p = i.content) || void 0 === p ? void 0 : null === (h = p.recommendation) || void 0 === h ? void 0 : h.card) === 101 && (0,
                            a.jsx)(CardTakapedia, {
                                type: "recommendation",
                                product: e,
                                background: i.content.recommendation.background,
                                foreground: i.content.recommendation.foreground,
                                image: i.content.recommendation.image
                            })]
                        }, t)
                    }
                    )]
                })]
            }) : null
        }
          , PopularProductSection = e => {
            var t, r, o, l;
            let {config: n} = e
              , {data: s, isLoading: d} = (0,
            i.$3)({}, !0)
              , {t: c} = (0,
            b.$G)("home");
            return (0,
            a.jsxs)("div", {
                className: "container",
                children: [(0,
                a.jsxs)("div", {
                    className: "mb-5 text-foreground",
                    children: [(0,
                    a.jsx)("h3", {
                        className: "text-lg font-semibold uppercase leading-relaxed tracking-wider",
                        children: (null === (r = n.content) || void 0 === r ? void 0 : null === (t = r.popular) || void 0 === t ? void 0 : t.title) || "\uD83D\uDD25 ".concat(c("home:popular"))
                    }), (0,
                    a.jsx)("p", {
                        className: "pl-6 text-xs",
                        children: (null === (l = n.content) || void 0 === l ? void 0 : null === (o = l.popular) || void 0 === o ? void 0 : o.subtitle) || c("home:popular-description")
                    })]
                }), s && s.length > 0 && (0,
                a.jsx)(m.E.ul, {
                    variants: {
                        hidden: {
                            opacity: 1,
                            scale: 0
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delayChildren: .2,
                                staggerChildren: .1
                            }
                        }
                    },
                    initial: "hidden",
                    animate: "visible",
                    className: "grid grid-cols-2 gap-4 md:grid-cols-3",
                    children: s.map(e => {
                        var t, r, o, l, i, s, d, c, u, m, x, h;
                        return (0,
                        a.jsxs)(w.Fragment, {
                            children: [(null === (r = n.content) || void 0 === r ? void 0 : null === (t = r.popular) || void 0 === t ? void 0 : t.card) === 1 && (0,
                            a.jsx)(Card1, {
                                type: "popular",
                                product: e,
                                background: n.content.popular.background,
                                foreground: n.content.popular.foreground,
                                image: n.content.popular.image
                            }), (null === (l = n.content) || void 0 === l ? void 0 : null === (o = l.popular) || void 0 === o ? void 0 : o.card) === 2 && (0,
                            a.jsx)(Card2, {
                                type: "popular",
                                product: e,
                                background: n.content.popular.background,
                                foreground: n.content.popular.foreground,
                                image: n.content.popular.image
                            }), (null === (s = n.content) || void 0 === s ? void 0 : null === (i = s.popular) || void 0 === i ? void 0 : i.card) === 3 && (0,
                            a.jsx)(Card3, {
                                type: "popular",
                                product: e,
                                background: n.content.popular.background,
                                foreground: n.content.popular.foreground,
                                image: n.content.popular.image
                            }), (null === (c = n.content) || void 0 === c ? void 0 : null === (d = c.popular) || void 0 === d ? void 0 : d.card) === 4 && (0,
                            a.jsx)(Card4, {
                                type: "popular",
                                product: e,
                                background: n.content.popular.background,
                                foreground: n.content.popular.foreground,
                                image: n.content.popular.image
                            }), (null === (m = n.content) || void 0 === m ? void 0 : null === (u = m.popular) || void 0 === u ? void 0 : u.card) === 5 && (0,
                            a.jsx)(Card5, {
                                type: "popular",
                                product: e,
                                background: n.content.popular.background,
                                foreground: n.content.popular.foreground,
                                image: n.content.popular.image
                            }), (null === (h = n.content) || void 0 === h ? void 0 : null === (x = h.popular) || void 0 === x ? void 0 : x.card) === 101 && (0,
                            a.jsx)(CardTakapedia, {
                                type: "popular",
                                product: e,
                                background: n.content.popular.background,
                                foreground: n.content.popular.foreground,
                                image: n.content.popular.image
                            })]
                        }, e.code)
                    }
                    )
                }), s && 0 === s.length && !d && (0,
                a.jsxs)("div", {
                    className: "container flex h-56 flex-col items-center justify-center rounded-2xl border bg-muted/20",
                    children: [(0,
                    a.jsx)(g.Z, {
                        className: "h-12 w-12 text-muted-foreground/50"
                    }), (0,
                    a.jsx)("h1", {
                        className: "mt-4 text-lg font-semibold",
                        children: c("home:popular-empty")
                    }), (0,
                    a.jsx)("p", {
                        className: "text-sm font-medium",
                        children: c("home:popular-empty-description")
                    })]
                }), d && (0,
                a.jsx)("div", {
                    className: "grid grid-cols-2 gap-4 md:grid-cols-3",
                    children: Array.from({
                        length: 9
                    }, (e, t) => t).map(e => (0,
                    a.jsx)("div", {
                        className: "h-[96px] w-full animate-pulse rounded-lg bg-muted"
                    }, e))
                })]
            })
        }
          , ProductSection = e => {
            let {config: t} = e
              , {data: r, isLoading: o, isSuccess: l} = (0,
            i.Pt)()
              , {t: n} = (0,
            b.$G)("home")
              , handleScrollToRight = () => {
                let e = document.querySelector(".hide-scrollbar");
                e && e.scrollTo({
                    left: e.scrollLeft + 200,
                    behavior: "smooth"
                })
            }
              , handleScrollToLeft = () => {
                let e = document.querySelector(".hide-scrollbar");
                e && e.scrollTo({
                    left: e.scrollLeft - 200,
                    behavior: "smooth"
                })
            }
            ;
            return (0,
            a.jsx)("div", {
                className: "container",
                children: (0,
                a.jsxs)(c.O.Group, {
                    children: [(0,
                    a.jsxs)(c.O.List, {
                        children: [o && (0,
                        a.jsx)("div", {
                            className: "hide-scrollbar -mb-px flex space-x-3 overflow-auto",
                            children: Array.from({
                                length: 6
                            }, (e, t) => t).map(e => (0,
                            a.jsx)("div", {
                                className: "h-9 w-24 animate-pulse whitespace-nowrap rounded-lg bg-muted px-4 py-2 text-sm outline-none"
                            }, e))
                        }), l && (0,
                        a.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0,
                            a.jsx)("div", {
                                className: "block lg:hidden",
                                children: (0,
                                a.jsx)(I.z, {
                                    type: "button",
                                    size: "icon-sm",
                                    onClick: () => handleScrollToLeft(),
                                    children: (0,
                                    a.jsx)(v.Z, {
                                        className: "h-4 w-4 "
                                    })
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "hide-scrollbar -mb-px flex transform items-center gap-2 overflow-auto duration-300 ease-in-out md:gap-3",
                                children: null == r ? void 0 : r.map(e => (0,
                                a.jsx)(c.O, {
                                    className: e => {
                                        let {selected: t} = e;
                                        return (0,
                                        k.cn)("whitespace-nowrap rounded-lg bg-muted px-4 py-2 text-sm font-semibold text-foreground outline-none duration-300 focus:bg-primary focus-visible:bg-primary", t && "bg-primary text-primary-foreground hover:bg-primary/75")
                                    }
                                    ,
                                    children: e.name
                                }, e.name))
                            }), (0,
                            a.jsx)("div", {
                                className: "block lg:hidden",
                                children: (0,
                                a.jsx)(I.z, {
                                    type: "button",
                                    size: "icon-sm",
                                    onClick: () => handleScrollToRight(),
                                    children: (0,
                                    a.jsx)(f.Z, {
                                        className: "h-4 w-4 "
                                    })
                                })
                            })]
                        })]
                    }), (0,
                    a.jsxs)(c.O.Panels, {
                        children: [o && (0,
                        a.jsx)("div", {
                            className: "my-8 grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-5 xl:grid-cols-6",
                            children: Array.from({
                                length: 12
                            }, (e, t) => t).map(e => (0,
                            a.jsx)("div", {
                                className: "relative aspect-[4/6] w-full animate-pulse overflow-hidden rounded-xl bg-muted"
                            }, e))
                        }), l && (0,
                        a.jsx)("ul", {
                            className: "my-8",
                            children: null == r ? void 0 : r.map( (e, r) => {
                                let {products: o} = e;
                                return (0,
                                a.jsx)(ef, {
                                    products: o,
                                    config: t
                                }, r)
                            }
                            )
                        }), r && 0 === r.length && (0,
                        a.jsxs)("div", {
                            className: "container flex h-56 flex-col items-center justify-center rounded-2xl border bg-muted/20",
                            children: [(0,
                            a.jsx)(g.Z, {
                                className: "h-12 w-12 text-muted-foreground/50"
                            }), (0,
                            a.jsx)("h1", {
                                className: "mt-4 text-lg font-semibold",
                                children: n("home:product-empty")
                            }), (0,
                            a.jsx)("p", {
                                className: "text-sm font-medium",
                                children: n("home:product-empty-description")
                            })]
                        })]
                    })]
                })
            })
        }
          , ArticleSection = e => {
            var t, r, o, l, n, i, s;
            let {config: d} = e
              , {data: c} = useArticle()
              , m = w.useRef(null)
              , {scrollX: p} = (0,
            x.v)({
                container: m
            })
              , [g,v] = (0,
            j.Z)()
              , [f,b] = w.useState(0);
            return (0,
            h.W)(p, "change", e => {
                b(Math.floor(e / m.current.children[0].clientWidth))
            }
            ),
            (0,
            a.jsxs)("div", {
                className: "my-8",
                children: [(0,
                a.jsxs)("div", {
                    className: "container text-foreground",
                    children: [(0,
                    a.jsx)("h3", {
                        className: "text-lg font-semibold uppercase leading-relaxed tracking-wider",
                        children: null === (r = d.content) || void 0 === r ? void 0 : null === (t = r.news) || void 0 === t ? void 0 : t.title
                    }), (0,
                    a.jsx)("p", {
                        className: "max-w-3xl pt-2 text-xs",
                        children: null === (l = d.content) || void 0 === l ? void 0 : null === (o = l.news) || void 0 === o ? void 0 : o.subtitle
                    })]
                }), (0,
                a.jsx)("div", {
                    children: (0,
                    a.jsxs)("div", {
                        ref: m,
                        className: (0,
                        u.Z)(["mx-0 flex gap-4 px-[var(--scroll-padding)] py-8 sm:mx-4 sm:gap-8", "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden", "snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth", "[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.3xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]"]),
                        children: [null == c ? void 0 : c.data.map( (e, t) => {
                            var r, o;
                            let {title: l, subtitle: n, authorName: i, thumbnail: s, slug: c} = e;
                            return (0,
                            a.jsx)(ArticleCard, {
                                name: i,
                                title: l,
                                img: s,
                                bounds: v,
                                scrollX: p,
                                href: "".concat(null === (o = d.feature) || void 0 === o ? void 0 : null === (r = o.news) || void 0 === r ? void 0 : r.url, "/articles/").concat(c),
                                children: n
                            }, t)
                        }
                        ), (0,
                        a.jsx)("div", {
                            className: "w-[42rem] shrink-0 sm:w-[54rem]"
                        })]
                    })
                }), (0,
                a.jsx)("div", {
                    className: "container",
                    children: (0,
                    a.jsx)(I.z, {
                        type: "button",
                        variant: "secondary",
                        asChild: !0,
                        children: (0,
                        a.jsx)(R.r, {
                            href: null !== (s = null === (i = d.feature) || void 0 === i ? void 0 : null === (n = i.news) || void 0 === n ? void 0 : n.url) && void 0 !== s ? s : "#",
                            children: "Lihat Semua Artikel"
                        })
                    })
                })]
            })
        }
          , ef = w.memo(function(e) {
            let {products: t, config: r} = e
              , [o,l] = w.useState(1)
              , [n,i] = w.useState([])
              , {t: s} = (0,
            b.$G)("home");
            return (w.useEffect( () => {
                if (o > 1) {
                    let e = t.slice((o - 1) * 12, 12 * o);
                    i(t => [...t, ...e])
                } else
                    i(t.slice((o - 1) * 12, 12 * o))
            }
            , [o, t]),
            0 === n.length) ? null : (0,
            a.jsx)(c.O.Panel, {
                children: n.length && (0,
                a.jsxs)("div", {
                    children: [(0,
                    a.jsx)(m.E.div, {
                        variants: {
                            hidden: {
                                opacity: 1,
                                scale: 1
                            },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    delayChildren: .1,
                                    staggerChildren: .05
                                }
                            }
                        },
                        initial: "hidden",
                        animate: "visible",
                        className: "mb-4 grid grid-cols-3 gap-4 sm:mb-8 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-5 xl:grid-cols-6",
                        children: n.map(e => {
                            var t, o, l, n;
                            return (0,
                            a.jsxs)(w.Fragment, {
                                children: [(null === (o = r.content) || void 0 === o ? void 0 : null === (t = o.product) || void 0 === t ? void 0 : t.card) === 1 && (0,
                                a.jsx)(ProductCard1, {
                                    product: e,
                                    type: "product"
                                }, e.code), (null === (n = r.content) || void 0 === n ? void 0 : null === (l = n.product) || void 0 === l ? void 0 : l.card) === 2 && (0,
                                a.jsx)(ProductCard2, {
                                    product: e,
                                    type: "product"
                                }, e.code)]
                            }, e.code)
                        }
                        )
                    }), (0,
                    a.jsx)("div", {
                        className: (0,
                        k.cn)("text-center", t.length <= n.length ? "hidden" : ""),
                        children: (0,
                        a.jsx)(I.z, {
                            type: "button",
                            variant: "outline",
                            onClick: () => {
                                l(e => e + 1)
                            }
                            ,
                            children: s("common:load-more")
                        })
                    })]
                })
            })
        });
        var eb = !0
          , ej = (0,
        ev.Z)(e => {
            var t, r, o, l, n, i, c, u, m, x, h, g, v, f;
            let {config: b} = e
              , [j,N] = w.useState(!1)
              , [y,C] = w.useState([])
              , [A,k] = w.useState(0)
              , S = useBanner()
              , _ = (0,
            d.a)("(min-width: 1024px)");
            (0,
            s.B)("home", {
                onSuccess: e => {
                    C(e.data);
                    let t = p.Z.get("dont-show-home");
                    !t && e.data.length > 0 && setTimeout( () => {
                        H()
                    }
                    , 1e3)
                }
            });
            let H = w.useCallback( () => {
                N(!0),
                k(0)
            }
            , [])
              , M = w.useCallback( () => {
                N(!1),
                k(0)
            }
            , [])
              , T = w.useCallback( () => {
                k(e => 0 === e ? y.length - 1 : e - 1)
            }
            , [y.length])
              , E = w.useCallback( () => {
                k(e => e === y.length - 1 ? 0 : e + 1)
            }
            , [y.length]);
            return w.useEffect( () => {
                j && setTimeout( () => {
                    M()
                }
                , 1e5)
            }
            , [j, M]),
            w.useEffect( () => {
                var e;
                (null == b ? void 0 : null === (e = b.analytic) || void 0 === e ? void 0 : e.facebook) && window.fbq && window.fbq("track", "ViewContent")
            }
            , []),
            (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(eg.H, {
                    meta: b.meta
                }), (0,
                a.jsxs)("div", {
                    className: "sr-only",
                    children: [(0,
                    a.jsx)("h1", {
                        children: null === (t = b.meta) || void 0 === t ? void 0 : t.title
                    }), (0,
                    a.jsx)("p", {
                        children: null === (r = b.meta) || void 0 === r ? void 0 : r.description
                    })]
                }), (0,
                a.jsx)(Slider, {
                    images: S.data,
                    config: b
                }), (0,
                a.jsxs)("div", {
                    className: "flex flex-col gap-y-8 pt-8",
                    children: [(null === (l = b.feature) || void 0 === l ? void 0 : null === (o = l.flashSale) || void 0 === o ? void 0 : o.isActive) && new Date(null === (i = b.feature) || void 0 === i ? void 0 : null === (n = i.flashSale) || void 0 === n ? void 0 : n.expiredAt).getTime() > new Date().getTime() && (0,
                    a.jsx)(Flashsale, {
                        config: b
                    }), (null === (c = b.feature) || void 0 === c ? void 0 : c.hasRecommendation) && (0,
                    a.jsx)(RecentProductSection, {
                        config: b
                    }), (null === (u = b.feature) || void 0 === u ? void 0 : u.hasPopular) && (0,
                    a.jsx)(PopularProductSection, {
                        config: b
                    }), (0,
                    a.jsx)(ProductSection, {
                        config: b
                    }), (null === (x = b.feature) || void 0 === x ? void 0 : null === (m = x.news) || void 0 === m ? void 0 : m.isActive) && (0,
                    a.jsx)(ArticleSection, {
                        config: b
                    })]
                }), (0,
                a.jsx)(eh.q, {
                    kuki: "dont-show-home",
                    isOpen: j,
                    images: y,
                    currentImage: A,
                    handleNext: E,
                    handlePrevious: T,
                    handleClose: M
                }), _ && (null === (g = b.feature) || void 0 === g ? void 0 : null === (h = g.liveTransaction) || void 0 === h ? void 0 : h.isActive) && (null === (f = b.feature) || void 0 === f ? void 0 : null === (v = f.liveTransaction) || void 0 === v ? void 0 : v.showNotification) && (0,
                a.jsx)(ep.$, {})]
            })
        }
        , "optional", N.Z)
    }
}, function(e) {
    e.O(0, [296, 1327, 8136, 9573, 3920, 8093, 4967, 2758, 5709, 8095, 9774, 2888, 179], function() {
        return e(e.s = 48312)
    }),
    _N_E = e.O()
}
]);
