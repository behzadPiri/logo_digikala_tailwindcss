/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", content: ["./src/*.{html,js}"],
    theme: {
        extend: {
            fontFamily:{
              "vazir_l":"vazir_l" ,
                "vazir_b":"vazir_b"
            },
            colors: {
                dark_bg_body: "#353535",
                dark_bg_card:"#242424",
                red_C:"#ef4056",
                black_C:"#0c0c0c",
                muted:"#3f4064",
                input_bg:"#f0f0f1",
                blue_C:"#008eb2",
                gray_C:"#ccc",
                white_C:"#ffffff",
            }
        },
    },
    plugins: [],
}

