// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        btnColor: string;
    }
    
    export interface DarkTheme {
        textColor: string;
        bgColor: string;
        btnColor: string;
    }
}