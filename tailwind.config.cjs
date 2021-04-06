const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.svelte"],
  darkMode: "media",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              color: colors.blue["600"]
            },
            ":not(h1,h2,h3,h4,h5,h6) > a:hover": {
              textDecoration: "underline"
            },
            li: {
              listStyleType: "none"
            },
            h1: {
              fontWeight: "700",
              lineHeight: "1.5rem"
            },
            "h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a": {
              color: "inherit"
            },
            hr: {
              border: `1px solid ${colors.gray["600"]}`
            },
            "ol, ul": {
              paddingLeft: "2.5rem"
            },
            "blockquote p:first-of-type::before": {
              content: ""
            },
            "blockquote p:last-of-type::after": {
              content: ""
            },
            "code::before": {
              content: ""
            },
            "code::after": {
              content: ""
            }
          }
        },
        light: {
          css: {
            color: colors.gray["300"],
            strong: {
              color: colors.gray["100"]
            },
            code: {
              color: colors.gray["100"]
            },
            blockquote: {
              color: colors.gray["100"]
            },
            "h1, h2, h3, h4, h5, h6": {
              color: colors.white
            },
            a: {
              color: colors.yellow["200"],
              textDecoration: "none"
            },
            "h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a": {
              color: "inherit"
            }
          }
        }
      },
      animation: {
        "spin-30": "spin 30s linear infinite",
        "spin-40": "spin 40s linear infinite",
        "spin-50": "spin 50s linear infinite",
        "spin-60": "spin 60s linear infinite",
        "spin-30-reverse": "spin 30s linear infinite reverse",
        "spin-40-reverse": "spin 40s linear infinite reverse",
        "spin-50-reverse": "spin 50s linear infinite reverse",
        "spin-60-reverse": "spin 60s linear infinite reverse",
        blink: "blink 1s infinite",
        fadein: "fadein 4s"
      },
      keyframes: {
        blink: {
          "0%, 10%, 90%, 100%": { opacity: "0" },
          "40%, 60%": { opacity: "1" }
        },
        fadein: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "100%"
          }
        }
      }
    }
    //    fontFamily: {
    //      sans: ["Segoe UI"]
    //    },
    //    colors: {
    //      black: "#111111"
    //    }
  },
  variants: {
    extend: {
      typography: ["dark"]
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
