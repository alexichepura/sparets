/**
 * Initially from https://github.com/facebook/jest/tree/master/examples/typescript
 * But jest doesn't run with es6 modules (for now?), then force commonjs.
 */

const tsc = require('typescript')
const tsConfig = require('./tsconfig.json')

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      const options = Object.assign(
        tsConfig.compilerOptions,
        {
          module: "commonjs"
        }
      )
      return tsc.transpile(src, options, path, [])
    }
    return src
  }
}
