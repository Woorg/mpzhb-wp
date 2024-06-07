<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="preload" href="<?php echo fonts_paths(); ?>/hinted-subset-GothamPro-Light.woff2" as="font" type="font/woff2"
        crossorigin="anonymous">
  <link rel="preload" href="<?php echo fonts_paths(); ?>/hinted-subset-GothamPro-Light.woff" as="font" type="font/woff"
        crossorigin="anonymous">

  <link rel="preload" href="<?php echo fonts_paths(); ?>/hinted-subset-GothamPro.woff2" as="font" type="font/woff2"
        crossorigin="anonymous">
  <link rel="preload" href="<?php echo fonts_paths(); ?>/hinted-subset-GothamPro.woff" as="font" type="font/woff"
        crossorigin="anonymous">

  <link rel="preload" href="<?php echo fonts_paths(); ?>/hinted-subset-GothamPro-Medium.woff2" as="font" type="font/woff2"
        crossorigin="anonymous">
  <link rel="preload" href="<?php echo fonts_paths(); ?>/hinted-subset-GothamPro-Medium.woff" as="font" type="font/woff"
        crossorigin="anonymous">

  <link rel="preload" href="<?php echo fonts_paths(); ?>/hinted-subset-GothamPro-Bold.woff2" as="font" type="font/woff2"
        crossorigin="anonymous">
  <link rel="preload" href="<?php echo fonts_paths(); ?>/hinted-subset-GothamPro-Bold.woff" as="font" type="font/woff"
        crossorigin="anonymous">

  <?php wp_head(); ?>
</head>

<body <?php body_class('page'); ?>>
<?php wp_body_open(); ?>
<?php do_action('get_header'); ?>

<!--<main class="page__inner">-->
<?php echo view(app('sage.view'), app('sage.data'))->render(); ?>
<!--</main>-->

<?php do_action('get_footer'); ?>
<?php wp_footer(); ?>
</body>
</html>

some
