module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,

        /**
         * 在环境中启用 Vue3 中的编译器宏，详情可参考
         * https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-generate-no-undef-warnings
         */
        "vue/setup-compiler-macros": true,
    },
    globals: {},

    /**
     * parser 的配置，主要采用 vue-eslint-parser 和 @typescript-eslint/parser, 参考
     * https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
     */
    // parser for `<template>`
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: {
            // parser for `<script>`
            js: "espree",

            // parser for `<script lang="ts">`
            ts: "@typescript-eslint/parser",

            // parser for vue directives and vue interpolations
            "<template>": "espree",
        },
        // tsconfigRootDir: __dirname,
        // project: ['./tsconfig.json'],
        // extraFileExtensions: ['.vue'],
        sourceType: "module",
        vueFeatures: {
            interpolationAsNonHTML: true,
            styleCSSVariableInjection: true,
        },
    },

    /**
     * 关于这些共享配置包含的 rules 列表：
     *   - eslint:recommended: https://eslint.org/docs/rules/
     *   - plugin:vue/vue3-recommended: https://eslint.vuejs.org/rules/
     *   - plugin:@typescript-eslint/recommended: https://typescript-eslint.io/rules/
     *   - plugin:@typescript-eslint/recommended-requiring-type-checking: todo
     *   - plugin:prettier/recommended: https://github.com/prettier/eslint-config-prettier
     */
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        // "plugin:@typescript-eslint/recommended-requiring-type-checking", // 由于ts类型校验存在问题，暂不启用
        "plugin:prettier/recommended",
    ],

    rules: {
        "spaced-comment": ["error", "always", { markers: ["/"] }], // 注释后面强制存在至少一个空格
        "@typescript-eslint/no-non-null-assertion": ["off"],
        "vue/multi-word-component-names": ["off"],
    },

    /**
     * 注意，prettier 插件不需要列在这里，因为上面的`extends`中的`plugin:prettier/recommended`已经配置好了
     * 详情可查看 https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
     */
    plugins: ["vue", "@typescript-eslint"],
}
