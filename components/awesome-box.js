import {h, Fragment, Component} from "preact";
import {pwc} from "@iosio/pwc";
import {theme} from "./theme";

export const AwesomeBox = pwc('awesome-box', class extends Component {
    static propTypes = {message: String};

    render({message}) {
        return (

            <Fragment>
                <style>
                    {// language=CSS format=true
                        theme.resets + jcss`
                            :host {
                                display: flex;
                                height: 100px;
                                width: 100%;
                                color: red;
                                background: blue;
                            }
                        `
                    }
                </style>
                <h1>Awesome box says: {message || '...set my message attribute to some awesome string value'}</h1>
                <slot/>
            </Fragment>

        )
    }
});

