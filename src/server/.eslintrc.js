module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-underscore-dangle": ["error", { "allow": ["_id", "_refresh"] }],
        "consistent-return": ["error", { "treatUndefinedAsUnspecified": false }]
    }
};