export default {
    "*": ["prettier --write --ignore-unknown --no-editorconfig"],
    "*.{ts,cts,mts,vue}": [() => "vue-tsc -p tsconfig.json --noEmit"],
    "*.{js,cjs,mjs,ts,cts,mts,vue}": ["eslint --fix"],
}
