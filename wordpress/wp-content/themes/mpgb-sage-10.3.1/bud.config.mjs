// @ts-check

/**
 * Build configuration
 *
 * @see {@link https://bud.js.org/guides/configure}
 * @param {import('@roots/bud').Bud} app
 */
export default async (app) => {
  app
    /**
     * Application entrypoints
     */
    .entry({
      app: ["@scripts/app", "@styles/app"],
      editor: ["@scripts/editor", "@styles/editor"],
    })

    /**
     * Directory contents to be included in the compilation
     */
    // .assets(["images"])

    /**
     * Matched files trigger a page reload when modified
     */
    .watch([
      "resources/views/**/*.blade.php",
      "app/**/*.php",
      '**/*.php',
      'front/static/dev/assets/**/*.{js, scss}',
    ])

    /**
     * Proxy origin (`WP_HOME`)
     */
    .proxy("http://abp-publishing.loc")

    /**
     * Development origin
     */
    .serve("http://localhost:3004")

    /**
     * URI of the `public` directory
     */
    .setPublicPath("/app/themes/sage/public/")

    /**
     * Generate WordPress `theme.json`
     *
     * @note This overwrites `theme.json` on every build.
     */
    .wpjson
      .settings({
        color: {
          custom: false,
          customGradient: false,
          defaultPalette: false,
          defaultGradients: false,
        },
        custom: {
          spacing: {},
          typography: {
            'font-size': {},
            'line-height': {},
          },
        },
        spacing: {
          padding: true,
          units: ['px', '%', 'em', 'rem', 'vw', 'vh'],
        },
        typography: {
          customFontSize: false,
        },
      })
      .enable()
};
