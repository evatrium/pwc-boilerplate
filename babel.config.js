console.log('babel')
module.exports = {
    // "presets": process.env.NODE_ENV === 'test' ? ["@babel/preset-env"] : [],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: ['ie 11'],
                useBuiltIns: false,
                modules: false,
            },
        ],
    ],
    plugins: [

        ['@iosio/babel-plugin-jcss'],

        ["transform-inline-environment-variables"],

        '@babel/plugin-syntax-dynamic-import',

        '@babel/plugin-syntax-import-meta',

        ['bundled-import-meta', { importStyle: 'baseURI' }],


        [
            "@babel/plugin-transform-react-jsx",
            {
                "pragma": "h",
                "pragmaFrag": "Fragment"
            }
        ],

        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose": true
            }
        ],

    ]
};