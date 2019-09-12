import {h} from "preact";
import {x} from "@iosio/pwc";
import {theme} from "./theme";


export const Nav = x('nav', () => (
    <nav>
        <style>
            {// language=CSS format=true
                theme.resets + jcss`
                :host, nav{
                 display: flex;
                 position: fixed;
                 top:0;
                 width: 100%;
                 left:0;
                 right:0;
                 z-index: ${theme.zIndex.nav};
                 flex-shrink: 0;
                }
                nav{
                 border-bottom: 1px solid aliceblue;
                 height: ${theme.navHeight}px;
                 background: #fff;
                 box-shadow: ${theme.shadow[0]};
                }
            `
            }
        </style>
        <slot/>
    </nav>
));