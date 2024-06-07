<?php

/** Enable W3 Total Cache */
define('WP_CACHE', false); // Added by W3 Total Cache

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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */


// define('WP_HOME', 'http://mpzhb.loc');
// define('WP_SITEURL', 'http://mpzhb.loc');

// define('WP_REDIS_HOST', 'redis');
// define('WP_REDIS_PASSWORD', 'secret_redis');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'mpzhb');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', 'root');

/** Database hostname */
define('DB_HOST', 'mariadb');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ' ?_B4pW)-di8im(s/j-OM,^,TG1QDq]0[{nwk(l Fa>hEKKo?Ui%/j8VR&-1E<DV');
define('SECURE_AUTH_KEY',  '[fg0{&QJ41=zw<yREE~Q,S_Sclh2a~|avLwM# RTI+0yKVPwZjq51-QQDjm?{Hbh');
define('LOGGED_IN_KEY',    'ZPNiD*-K[oMOC}(3>q:ugqA%6{pDXI_ov|^1cjFYxgyeWq84h=_{xuac_*!(O46l');
define('NONCE_KEY',        ' E&Z,*o.kf>eVAccJ|)S>?wzYJQfbhY,FCb1J<,P`r}h9?-6iImx9[7L?bIFSq.V');
define('AUTH_SALT',        'Xz]LPH;lg=fd7}$($|KRu]K-}=#l6~J@;qW|^{s>&:,3+TXr_/1d6A.9c62z(2PK');
define('SECURE_AUTH_SALT', 'XQ-9UQWkyfi:MsIUqMM@bj!O-5jFvmqYc8eQ1*&XQQ=8~}T73iWG+1SA;c[)&eBx');
define('LOGGED_IN_SALT',   '>nEey+ #hs/FAtF1- ;8E7OX2fi%Seb}uR#m%Bl-Gl=F^+HdHAMF>9&-o~D~5<<l');
define('NONCE_SALT',       'u,hOM7!atknj)f$8vft4F2#hRj669543-v6*!!E]#W56D?a/@[dZPy)9~|!syo-z');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
// define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_AUTO_UPDATE_CORE', false);
define('WP_CACHE_KEY_SALT', 'mpzhb');

define( 'DUPLICATOR_AUTH_KEY', '1gAnP!b<G$u^@ZU[TNjnxt*&@CvDMuDF46A}cE[cC~k// CKIT``$6X<L[gGDu g' );
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH'))
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
