import sizes from "./font/sizes"
import weight from "./font/weight"
import zIndexes from "./z-indexes"
import family from "./font/family"
import {
    redTheme,
    pinkTheme,
    greenTheme,
    blueTheme,
    defaultColorTheme,
    ColorPalete
} from "./colors"


const defaultTheme = {
    weight,
    sizes,
    zIndexes,
    family,
    colors: defaultColorTheme
}
export type ColorTheme = typeof defaultColorTheme

export type ThemeType = {
    theme: typeof defaultTheme,
    colorsTheme: {[key in ColorPalete]?: ColorTheme}
}

const theme: ThemeType = {
    theme: defaultTheme, 
    colorsTheme: {
        redTheme,
        pinkTheme,
        greenTheme,
        blueTheme,
        defaultColorTheme,
    }
}

export default theme