
const fontBaseSize = 16; 
const adjustSize = Platform.OS === 'android' ? 0.8 : 1; 

const COLORS = {
    primary:"#7CB7FD",
    secondary:"rgba(0,0,0,0.5)",
    tertiary:"#B4B2B2",
     uni:"#646363",
}
const FONTS = {
    // primary:"Helvetica",
    // secondary:"PlayfairDisplay-Regular",
}
const SIZES = {
    tiny: fontBaseSize * 0.5 * adjustSize,      // 8
    xSmall: fontBaseSize * 0.625 * adjustSize,  // 10
    small: fontBaseSize * 0.875 * adjustSize,   // 14
    medium: fontBaseSize * adjustSize,          // 16
    midLarge: fontBaseSize * 1.25 * adjustSize, // 20
    large: fontBaseSize * 1.5 * adjustSize,     // 24
};



export {COLORS,FONTS,SIZES};