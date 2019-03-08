const standard = require('eslint-plugin-standard')
const react = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const promise = require('eslint-plugin-promise')
const imports = require('eslint-plugin-import')
const node = require('eslint-plugin-node')

const merged = {
  rules: {},
  rulesConfig: {}
}

merge(standard)
merge(node)
merge(promise)
merge(imports)
merge(react)
merge(reactHooks)

function merge(config) {
  Object.assign(merged.rules, config.rules)
  Object.assign(merged.rulesConfig, config.rulesConfig)
}

module.exports = merged
