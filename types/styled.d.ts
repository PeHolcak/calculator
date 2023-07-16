// styled.d.ts
import 'styled-components';

import {ThemeType} from "../src/styles/theme"

type Theme = ThemeType["theme"]

declare module 'styled-components' {
    interface DefaultTheme extends Theme { }
}
