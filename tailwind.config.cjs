module.exports = {
  theme: {
    extend: {
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
  }
}
