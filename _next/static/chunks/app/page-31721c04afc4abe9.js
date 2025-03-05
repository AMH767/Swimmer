(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8974], {
        7154: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 3923))
        },
        3923: (e, t, i) => {
            "use strict";
            i.d(t, {
                Onboarding: () => d
            });
            var n = i(5155),
                l = i(5565),
                s = i(2115),
                r = i(5672),
                o = i(1359),
                a = i(58);
            let d = e => {
                let {
                    onboarding: t
                } = e, [i, d] = (0, s.useState)(0);
                return (0, n.jsxs)(a.d.Screen, {
                    children: [(0, n.jsx)(a.d.Background, {}), (0, n.jsx)("section", {
                        style: {
                            zIndex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "6%",
                            marginBottom: "6%"
                        },

                    }), (() => {
                        let e = t[i];
                        return (0, n.jsxs)("section", {
                            className: "container",
                            style: {
                                marginBottom: "8%"
                            },
                            children: [(0, n.jsx)("h1", {
                                style: {
                                    textAlign: "center",
                                    textTransform: "capitalize",
                                    fontSize: 32
                                },
                                children: e.title1
                            }), (0, n.jsx)("h1", {
                                style: {
                                    textAlign: "center",
                                    textTransform: "capitalize",
                                    fontSize: 32
                                },
                                children: e.title2
                            }), (0, n.jsxs)("p", {
                                className: "t16",
                                style: {
                                    marginTop: "14px",
                                    textAlign: "center"
                                },
                                children: [e.description1, " ", (0, n.jsx)("br", {}), e.description2]
                            })]
                        })
                    })(), (0, n.jsx)("section", {
                        className: "container",
                        style: {
                            gap: 6,
                            marginBottom: "8%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                       
                    }), (0, n.jsx)("section", {
                        style: {
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: (0, n.jsx)(r.RC, {
                            onSlideChange: e => d(e.activeIndex),
                            children: t.map(e => (0, n.jsx)(r.qr, {
                                style: {
                                    width: "100%",
                                    height: "auto"
                                },
                                children: (0, n.jsx)(l.default, {
                                    src: e.image,
                                    alt: "Onboarding",
                                    width: 0,
                                    height: 0,
                                    sizes: "100vw",
                                    priority: !0,
                                    style: {
                                        width: "100%",
                                        height: "auto",
                                        margin: "0 auto"
                                    }
                                })
                            }, e.id))
                        })
                    }), (0, n.jsx)("section", {
                        style: {
                            padding: 20
                        },
                        children: (0, n.jsx)(a.d.Button, {
                            label: "Начать",
                            href: o.B.SIGN_IN
                        })
                    })]
                })
            }
        },
        58: (e, t, i) => {
            "use strict";
            i.d(t, {
                d: () => g
            });
            var n = i(5155);
            i(2115);
            var l = i(1542),
                s = i(6911),
                r = i(3403),
                o = i(8715),
                a = i(5565),
                d = i(4554),
                h = i(8078),
                c = i(8173),
                f = i.n(c);
            let g = {
                Sale: e => {
                    let {
                        style: t
                    } = e;
                    return (0, n.jsx)("div", {
                        style: {
                            position: "absolute",
                            top: 4,
                            right: 4,
                            height: 18,
                            width: 32,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 12,
                            backgroundColor: "#86D2A5",
                            ...t
                        },
                        children: (0, n.jsx)("span", {
                            style: {
                                fontWeight: 400,
                                color: "var(--white-color)",
                                fontSize: 12,
                                marginTop: 1,
                                fontFamily: "var(--font-league-spartan)"
                            },
                            children: "sale"
                        })
                    })
                },
                Modal: l.Modal,
                Screen: r.Screen,
                Button: s.Button,
                Rating: e => {
                    let {
                        rating: t
                    } = e;
                    return (0, n.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 58,
                        height: 10,
                        fill: "none",
                        children: [(0, n.jsx)("g", {
                            children: (0, n.jsx)("path", {
                                fill: t >= 1 ? "#FFCA40" : "#fff",
                                stroke: "#FFCA40",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m5 .833 1.288 2.609 2.879.42-2.084 2.03.492 2.866L5 7.404 2.425 8.758l.492-2.866-2.084-2.03 2.88-.42L5 .833Z"
                            })
                        }), (0, n.jsx)("g", {
                            clipPath: "url(#b)",
                            children: (0, n.jsx)("path", {
                                fill: t >= 2 ? "#FFCA40" : "#fff",
                                stroke: "#FFCA40",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m17 .833 1.288 2.609 2.879.42-2.084 2.03.492 2.866L17 7.404l-2.575 1.354.492-2.866-2.084-2.03 2.88-.42L17 .833Z"
                            })
                        }), (0, n.jsx)("g", {
                            clipPath: "url(#c)",
                            children: (0, n.jsx)("path", {
                                fill: t >= 3 ? "#FFCA40" : "#fff",
                                stroke: "#FFCA40",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m29 .833 1.288 2.609 2.879.42-2.084 2.03.492 2.866L29 7.404l-2.575 1.354.492-2.866-2.084-2.03 2.88-.42L29 .833Z"
                            })
                        }), (0, n.jsx)("g", {
                            clipPath: "url(#d)",
                            children: (0, n.jsx)("path", {
                                fill: t >= 4 ? "#FFCA40" : "#fff",
                                stroke: "#FFCA40",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m41 .833 1.288 2.609 2.879.42-2.084 2.03.492 2.866L41 7.404l-2.575 1.354.492-2.866-2.084-2.03 2.88-.42L41 .833Z"
                            })
                        }), (0, n.jsx)("g", {
                            clipPath: "url(#e)",
                            children: (0, n.jsx)("path", {
                                fill: t >= 5 ? "#FFCA40" : "#fff",
                                stroke: "#FFCA40",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m53 .833 1.288 2.609 2.879.42-2.084 2.03.492 2.866L53 7.404l-2.575 1.354.492-2.866-2.084-2.03 2.88-.42L53 .833Z"
                            })
                        }), (0, n.jsxs)("defs", {
                            children: [(0, n.jsx)("clipPath", {
                                id: "a",
                                children: (0, n.jsx)("path", {
                                    fill: "#fff",
                                    d: "M0 0h10v10H0z"
                                })
                            }), (0, n.jsx)("clipPath", {
                                id: "b",
                                children: (0, n.jsx)("path", {
                                    fill: "#fff",
                                    d: "M12 0h10v10H12z"
                                })
                            }), (0, n.jsx)("clipPath", {
                                id: "c",
                                children: (0, n.jsx)("path", {
                                    fill: "#fff",
                                    d: "M24 0h10v10H24z"
                                })
                            }), (0, n.jsx)("clipPath", {
                                id: "d",
                                children: (0, n.jsx)("path", {
                                    fill: "#fff",
                                    d: "M36 0h10v10H36z"
                                })
                            }), (0, n.jsx)("clipPath", {
                                id: "e",
                                children: (0, n.jsx)("path", {
                                    fill: "#fff",
                                    d: "M48 0h10v10H48z"
                                })
                            })]
                        })]
                    })
                },
                Header: o.Header,
                Background: () => (0, n.jsx)("div", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        zIndex: -1,
                        width: "100%",
                        height: "100%"
                    },
                    children: (0, n.jsx)(a.default, {
                        src: "/assets/bg/02.png",
                        alt: "Background",
                        priority: !0,
                        sizes: "100vw",
                        width: 0,
                        height: 0,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center"
                        }
                    })
                }),
                InputField: e => {
                    let {
                        inputType: t,
                        placeholder: i,
                        type: l = "text",
                        containerStyle: s,
                        onChange: r,
                        value: o
                    } = e;
                    return (0, n.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 14,
                            borderRadius: 25,
                            height: 50,
                            paddingLeft: 20,
                            border: "1px solid #C8CDD9",
                            backgroundColor: "#fff",
                            ...s
                        },
                        children: [(0, n.jsx)("input", {
                            placeholder: i,
                            maxLength: 50,
                            type: l,
                            style: {
                                width: "100%",
                                height: "100%",
                                padding: 0,
                                margin: 0,
                                border: "none",
                                outline: "none",
                                backgroundColor: "transparent",
                                fontSize: 18,
                                color: "var(--main-color)"
                            },
                            value: o,
                            onChange: r
                        }), (0, n.jsxs)("div", {
                            className: "clickable",
                            style: {
                                padding: "10px 19px"
                            },
                            children: ["email" === t && (0, n.jsx)(d.J.CheckSvg, {}), "password" === t && (0, n.jsx)(d.J.EyeOffSvg, {})]
                        })]
                    })
                },
                RatingStars: e => {
                    let {
                        containerStyle: t,
                        setRating: i,
                        rating: l
                    } = e;
                    return (0, n.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "row",
                            ...t
                        },
                        children: [(0, n.jsx)("button", {
                            onClick: () => {
                                i(1), i(1 === l ? 0 : 1)
                            },
                            style: {
                                marginRight: 4,
                                borderRadius: 20
                            },
                            children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 40,
                                height: 40,
                                fill: "none",
                                children: (0, n.jsx)("path", {
                                    fill: l >= 1 ? "#F5C102" : "#fff",
                                    stroke: l >= 1 ? "#F5C102" : "#C8CDD9",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "m20 4.463 4.702 9.525a.5.5 0 0 0 .376.273l10.514 1.537-7.608 7.41a.5.5 0 0 0-.144.443l1.796 10.468-9.403-4.945a.5.5 0 0 0-.466 0l-9.403 4.945 1.795-10.468a.5.5 0 0 0-.144-.442l-7.608-7.41 10.515-1.538a.5.5 0 0 0 .376-.273L20 4.463Z"
                                })
                            })
                        }), (0, n.jsx)("button", {
                            onClick: () => i(2),
                            style: {
                                marginRight: 4,
                                borderRadius: 20
                            },
                            children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 40,
                                height: 40,
                                fill: "none",
                                children: (0, n.jsx)("path", {
                                    fill: l >= 2 ? "#F5C102" : "#fff",
                                    stroke: l >= 2 ? "#F5C102" : "#C8CDD9",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "m20 4.463 4.702 9.525a.5.5 0 0 0 .376.273l10.514 1.537-7.608 7.41a.5.5 0 0 0-.144.443l1.796 10.468-9.403-4.945a.5.5 0 0 0-.466 0l-9.403 4.945 1.795-10.468a.5.5 0 0 0-.144-.442l-7.608-7.41 10.515-1.538a.5.5 0 0 0 .376-.273L20 4.463Z"
                                })
                            })
                        }), (0, n.jsx)("button", {
                            onClick: () => i(3),
                            style: {
                                marginRight: 4,
                                borderRadius: 20
                            },
                            children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 40,
                                height: 40,
                                fill: "none",
                                children: (0, n.jsx)("path", {
                                    fill: l >= 3 ? "#F5C102" : "#fff",
                                    stroke: l >= 3 ? "#F5C102" : "#C8CDD9",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "m20 4.463 4.702 9.525a.5.5 0 0 0 .376.273l10.514 1.537-7.608 7.41a.5.5 0 0 0-.144.443l1.796 10.468-9.403-4.945a.5.5 0 0 0-.466 0l-9.403 4.945 1.795-10.468a.5.5 0 0 0-.144-.442l-7.608-7.41 10.515-1.538a.5.5 0 0 0 .376-.273L20 4.463Z"
                                })
                            })
                        }), (0, n.jsx)("button", {
                            onClick: () => i(4),
                            style: {
                                marginRight: 4,
                                borderRadius: 20
                            },
                            children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 40,
                                height: 40,
                                fill: "none",
                                children: (0, n.jsx)("path", {
                                    fill: l >= 4 ? "#F5C102" : "#fff",
                                    stroke: l >= 4 ? "#F5C102" : "#C8CDD9",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "m20 4.463 4.702 9.525a.5.5 0 0 0 .376.273l10.514 1.537-7.608 7.41a.5.5 0 0 0-.144.443l1.796 10.468-9.403-4.945a.5.5 0 0 0-.466 0l-9.403 4.945 1.795-10.468a.5.5 0 0 0-.144-.442l-7.608-7.41 10.515-1.538a.5.5 0 0 0 .376-.273L20 4.463Z"
                                })
                            })
                        }), (0, n.jsx)("button", {
                            onClick: () => i(5),
                            style: {
                                borderRadius: 20
                            },
                            children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 40,
                                height: 40,
                                fill: "none",
                                children: (0, n.jsx)("path", {
                                    fill: l >= 5 ? "#F5C102" : "#fff",
                                    stroke: l >= 5 ? "#F5C102" : "#C8CDD9",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "m20 4.463 4.702 9.525a.5.5 0 0 0 .376.273l10.514 1.537-7.608 7.41a.5.5 0 0 0-.144.443l1.796 10.468-9.403-4.945a.5.5 0 0 0-.466 0l-9.403 4.945 1.795-10.468a.5.5 0 0 0-.144-.442l-7.608-7.41 10.515-1.538a.5.5 0 0 0 .376-.273L20 4.463Z"
                                })
                            })
                        })]
                    })
                },
                BottomTabBar: h.BottomTabBar,
                BlockHeading: e => {
                    let {
                        title: t,
                        className: i,
                        containerStyle: l,
                        href: s
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: i,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            ...l
                        },
                        children: [(0, n.jsx)("h3", {
                            style: {
                                textTransform: "capitalize"
                            },
                            children: t
                        }), s && (0, n.jsx)(f(), {
                            href: s,
                            children: (0, n.jsx)("span", {
                                className: "t18",
                                style: {
                                    color: "var(--main-color)"
                                },
                                children: "View all"
                            })
                        })]
                    })
                }
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [2641, 2692, 3870, 8441, 7455, 7358], () => t(7154)), _N_E = e.O()
    }
]);