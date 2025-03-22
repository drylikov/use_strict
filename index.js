var module = require('module')
module.wrapper[0] += '"use_strict";'
Object.freeze(module.wrap)
