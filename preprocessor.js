const tsc = require('typescript')
const tsConfig = require('./tsconfig.json')

const babel = require('babel-core')
const jestPreset = require('babel-preset-jest')
const transformES6Modules = require('babel-plugin-transform-es2015-modules-commonjs')

module.exports = {
	process(src, path) {
		const isTypeScript = path.endsWith('.ts') || path.endsWith('.tsx')
		const isJavaScript = path.endsWith('.js') || path.endsWith('.jsx')

		if (isTypeScript) {
			src = tsc.transpile(
				src,
				tsConfig.compilerOptions,
				path,
				[]
			)
		}

		if (isJavaScript || isTypeScript) {
      src = babel.transform(src, {
        presets: [jestPreset],
        plugins: [transformES6Modules],
        retainLines: true
      }).code
		}

		return src
	}
}
