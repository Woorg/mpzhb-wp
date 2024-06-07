<?php echo $__env->make('sections.header-inner', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

  <main id="main" class="page__inner">
    <?php echo $__env->yieldContent('content'); ?>
  </main>

  <?php if (! empty(trim($__env->yieldContent('sidebar')))): ?>
    <aside class="sidebar">
      <?php echo $__env->yieldContent('sidebar'); ?>
    </aside>
  <?php endif; ?>

<?php echo $__env->make('sections.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php /**PATH /var/www/mpzhb/wordpress/wp-content/themes/mpgb-sage-10.3.1/resources/views/layouts/app-inner.blade.php ENDPATH**/ ?>