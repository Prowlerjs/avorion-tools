import React from 'react';
import '@fontsource/public-sans';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlContextProvider} from "./contexts/intl";
import {CssBaseline, CssVarsProvider, extendTheme} from "@mui/joy";
import {TurretContextProvider} from "./contexts/turret";
import {ComponentContextProvider} from "./contexts/component";
import {CargoContextProvider} from "./contexts/cargo";
import {CalculatorContextProvider} from "./contexts/calculator";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = extendTheme({
    "colorSchemes": {
        "light": {
            "palette": {
                "background": {
                    "body": "var(--joy-palette-background-level1)"
                }
            }
        },
        "dark": {
            "palette": {}
        }
    }
})

root.render(
    <CssVarsProvider theme={theme} defaultMode="system" modeStorageKey="theme" disableNestedContext>
        <CssBaseline/>

        <IntlContextProvider>
            <TurretContextProvider>
                <ComponentContextProvider>
                    <CargoContextProvider>
                        <CalculatorContextProvider>
                            <App/>
                        </CalculatorContextProvider>
                    </CargoContextProvider>
                </ComponentContextProvider>
            </TurretContextProvider>
        </IntlContextProvider>
    </CssVarsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
