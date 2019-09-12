const { DEFAULT_EXTENSIONS } = require('@babel/core');
const { findSupportedBrowsers } = require('@open-wc/building-utils');
const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const babel = require('rollup-plugin-babel');
const indexHTML = require('rollup-plugin-index-html');
const production = !process.env.ROLLUP_WATCH;
const sizes = require("@atomico/rollup-plugin-sizes");

/**
 * Function which creates a config so that we can create a modern and a legacy config
 * with small alterations.
 * @param {object} _options
 * @param {boolean} legacy
 */

console.log(process.env.NODE_ENV);


function createConfig(_options, legacy) {
    const options = {
        outputDir: 'build',
        extensions: DEFAULT_EXTENSIONS,
        ..._options,
    };

    return {
        input: options.input,
        treeshake: production,
        output: {
            // output into given folder or default /dist. Output legacy into a /legacy subfolder
            dir: path.join(options.outputDir, legacy ? '/legacy' : ''),
            format: legacy ? 'system' : 'esm',
            sourcemap: false,
            dynamicImportFunction: !legacy && 'importShim',
            chunkFileNames: "[hash].js",
        },
        plugins: [
            indexHTML({
                // tell index-html-plugin that we are creating two builds
                multiBuild: true,
                // tell index-html-plugin whether this is the legacy config
                legacy,
                polyfills: {
                    dynamicImport: true,
                    coreJs: true,
                    regeneratorRuntime: true,
                    webcomponents: true,
                    systemJs: true,
                    fetch: true,
                    // customPolyfills: [
                    //   {
                    //     // the name of your polyfill
                    //     name: 'constructableStyleSheet',
                    //     // expression which is run in the browser to determine if the polyfill should be loaded
                    //     test: "'adoptedStyleSheets' in document",
                    //     // path to your polyfill
                    //     path: require.resolve('x/core/polyfills/constructableStyleSheets.js'),
                    //   },
                    // ],
                },
            }),

            resolve({
                extensions: DEFAULT_EXTENSIONS,
            }),
            babel({
                extensions: DEFAULT_EXTENSIONS,
                plugins: [
                    "transform-inline-environment-variables",
                    '@babel/plugin-syntax-dynamic-import',
                    '@babel/plugin-syntax-import-meta',
                    ['bundled-import-meta', { importStyle: 'baseURI' }],
                ].filter(_ => !!_),

                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: legacy ? ['ie 11'] : findSupportedBrowsers(),
                            // preset-env compiles template literals for safari 12 due to a small bug which
                            // doesn't affect most use cases. for example lit-html handles it: (https://github.com/Polymer/lit-html/issues/575)
                            exclude: legacy ? undefined : ['@babel/plugin-transform-template-literals'],
                            useBuiltIns: false,
                            modules: false,
                        },
                    ],
                ],
            }),
            terser({
                output: {comments: false},
                mangle: {
                    properties: {
                        regex: "^_"
                    }
                },
                compress: {
                    passes: 10,
                    drop_console: true,
                    module: true
                }
            }),
            sizes()
        ],
    };
}



export default [
    createConfig({ input: './index.html' }, true),
    createConfig({ input: './index.html' }, false)
];






// export default createDefaultConfig({ input: './index.html' });
