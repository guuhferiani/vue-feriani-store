// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
    // **optional**. Default: `{}`
    // Override settings for a workspace. Workspaces are identified by their root path.
    settings: {
      "vetur.validation.template": true,
      "vetur.validation.style": true,
      "vetur.validation.script": true,
    },
    // **optional**. Default: `[{ root: './' }]`
    // Support monorepos, multiple projects in the same repository.
    projects: [
      {
        // **required**
        // Where is your project?
        // It is relative to `vetur.config.js`.
        root: './#app',
        // **optional**. Default: `'package.json'`
        // Where is `package.json` in the project?
        // We default to `package.json` so we can infer the locked version of vue.
        package: './package.json',
        // **optional**
        // Where is the global components directory?
        // Relative to `root`.
        globalComponents: [
          './src/components/**/*.vue'
        ]
      }
    ]
  }
  