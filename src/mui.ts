import "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette {
        customFontPalette: string;
    }

    interface PaletteOptions {
        customFontPalette: string;
    }
}
