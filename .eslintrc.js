module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "$": true,
        "_": true,
        "Rx": true,
        "__dirname": true,
        "require": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};