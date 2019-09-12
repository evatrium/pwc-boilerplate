import {x, globalStyles} from "@iosio/pwc";

import {h, Fragment, Component} from "preact";


import {todos as to} from "../demo/todos";

import {obi, connectObi} from "@iosio/obi";

import {Nav, AwesomeBox} from "../components";

// import {obi} from "@iosio/obi/preact/index.esm";

let todos = obi(to);

globalStyles(// language=CSS
    jcss`    html {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        flex: 1 0 auto;
    }

    .asdf {
        color: pink;
    }

    .derp {
        background: purple;
    }

    *, *::before,
    *::after {
        box-sizing: border-box;
    }`
);


const Test = x('test', ({name}) => (
    <div>
        <h1>name: {name}</h1>
        <slot/>
    </div>
), {name: String});


const TestListItem = x('list-item', ({text}) => {
    return (
        <Fragment>
            <b>heyoo: {text}</b>
        </Fragment>
    );
}, {text: String});

// const TestListItem = x('list-item', (props)=>{
//     return <ListItemComponent {...props}/>
// }, {text: String});

// const TestListItem = x('list-item', ({text})=>(
//     <Fragment>
//         <b>heyoo: {text}</b>
//     </Fragment>
// ), {text: String});

const test = obi({
    count: 0,
});


const counter = {
    count: 0,
    interval: null,
    start() {
        counter.stop();
        counter.interval = setInterval(() => {
            test.count = test.count + 1
        }, 1000);
    },
    stop() {
        clearInterval(counter.interval);
    }
};

const $counter = obi(counter);

const Counter = x('counter', ({color}, {mounted}) => {
    test.$use();

    return (
        <div style={{border: '2px solid purple', width: '100%'}}>
            <style>{`
                     *, *::before,
                        *::after {
                            box-sizing: border-box;
                        }
                `}</style>
            <span style={{color: 'blue', background: mounted ? 'white' : 'aliceblue'}}>{test.count}</span>
            <div style={{height: 20, width: 20, background: color || 'blue'}}>
                <slot/>
            </div>
        </div>
    )
}, {color: String});


const Lister = x('lister', todos.$connect()(() => (
    <ul>
        {todos.displayList.map((t) => (
            <li key={t.id}>
                <b>{t.name}</b>
                <button onClick={() => todos.removeTodo(t)}>X</button>
                <Counter>
                </Counter>
            </li>
        ))}

    </ul>
)));


class AppComponent extends Component {

    static propTypes = {some: String, cool: Boolean, prop: Number, types: Object, yo: Array};

    state = {bool: true, text: '', asdf: 0};

    toggle = () => {
        this.setState(state => ({bool: !state.bool}))
    };

    render(props, state) {


        return (
            <Fragment>
                <Nav/>
                <style>
                    {// language=CSS
                            `
                            :host, *, *::before,
                            *::after {
                                box-sizing: border-box;
                            }
                            :host{
                                padding-top: 70px;
                                width: 100%;
                                height: 100%;
                            }
                            .asdf {
                                color: pink;
                            }

                            .derp {
                                background: red;
                            }
                        `}
                </style>


                {/*

                    ******************

                    changing the class on subsequent render will indicate that the fragment hack is not working correctly.
                    - if not working correctly it will change on the second re-render not the first re-render;
                    - if working, will change first re-render

                */}


                <h1 className={todos.todoName === '' ? 'derp' : null}>
                    TODOS!!!!
                </h1>


                <button onClick={this.toggle}>toggle</button>

                <AwesomeBox/>


                {/*<input onInput={}*/}
                <h1 style={state.bool ? {color: todos.todoName === '' ? 'blue' : 'red'} : 'color:green'}
                >
                    style object!!!!</h1>


                <h4> Num search results: {todos.displayList.length}</h4>


                {/*<Heyooo num={todos.displayList.length}/>*/}

                {/*<input ref={this.input} placeholder="add todo" value={todos.todoName}*/}
                {/*onInput={(e) => todos.todoName = e.target.value}/>*/}

                {/*<button onClick={() => state.bool = !state.bool}> show hid derp</button>*/}
                <button onClick={() => this.setState({bool: !state.bool})}> bool</button>

                <button onClick={$counter.start}> start counter</button>
                <button onClick={$counter.stop}> stop counter</button>


                {state.bool && <Test name={todos.todoName} onClick={() => 'asdf'
                    // console.log('shit balls')
                }/>}


                <button onClick={todos.makeABunch}>
                    make a bunch!!!
                </button>
                ... i dare you


                <br/>
                <br/>

                <input placeholder="add todo" value={todos.todoName}
                       onInput={(e) => todos.todoName = e.target.value}/>

                <button onClick={todos.addTodo} style="color:blue">
                    Add todo !!! :
                </button>

                <br/>

                <input placeholder="search" value={todos.searchValue}
                       onInput={(e) => todos.setSearchValue(e.target.value)}/>

                <div style="width:100%;display:flex">

                    <div style="width:50%">

                        <Lister></Lister>

                    </div>


                    {/*<div style="width:50%">*/}
                    {/*<TextList derp={() => console.log('derp')}/>*/}
                    {/*</div>*/}


                </div>

                <TestListItem text={'derp'}/>


            </Fragment>
        )
    }

}

export const Demo = x('app', todos.$connect()(AppComponent));
