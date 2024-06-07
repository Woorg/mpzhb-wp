<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */


// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'abp' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'V.CCt4U=PHm%}ZPdP:|-tPU<U-S5Iw|/4,<_ /KF=lVhP/g(m0VoW< ATF`{I.Q_');
define('SECURE_AUTH_KEY',  'Nsy@iT&{U0EE^l0!n_zfe|zF]F@+-XWME7-Y#n%z a1Ll<8e!^^XSy#Q*(|HB.!:');
define('LOGGED_IN_KEY',    '4$|xcuA %w+KTn+;HY=2@bZ|f)#a8.S[sa=xOP_oh278H>_{V3n!_+/)ZSTYHn D');
define('NONCE_KEY',        'ft[+%|!fTP4_2og9ufFyf;/P}AKQ}VC}<`G;0B[PAa]lUI|-|q#h,6&W~X)oM5a+');
define('AUTH_SALT',        'P-U@3KaaK,EVH!$m/78z{u^Rt!ecOf]WB|QRh9j?|)tR3 GWy+qOX *sly@fCj+o');
define('SECURE_AUTH_SALT', 'K.7M Z<H9s[WR?V{V4lX>*?/L:p9H uca9*2.O%+>xUV[e%TrT~k?48n|QQC:Ex8');
define('LOGGED_IN_SALT',   'c+aI|gSu*k`eq3L:B3_4qfpXm M8t_,6Y*Gqf~OEk<%lE*aNy2ep?c .)NxnQLEr');
define('NONCE_SALT',       'h+<[[77G(DROXfK%Q.S{n@j-7wl3xp~|t5z4SVS1drzQvJV/`l6pc:H5*6^la(O{');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define('WP_CACHE_KEY_SALT', 'abp' );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
