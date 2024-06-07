<?php $__env->startSection('content'); ?>
  
<div class="articles container">
  <?php if(! have_posts()): ?>
    <?php if (isset($component)) { $__componentOriginald4c8f106e1e33ab85c5d037c2504e2574c1b0975 = $component; } ?>
<?php $component = $__env->getContainer()->make(App\View\Components\Alert::class, ['type' => 'warning']); ?>
<?php $component->withName('alert'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php $component->withAttributes([]); ?>
      <h1><?php echo __('Sorry, but the page you are trying to view does not exist.', 'sage'); ?></h1>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginald4c8f106e1e33ab85c5d037c2504e2574c1b0975)): ?>
<?php $component = $__componentOriginald4c8f106e1e33ab85c5d037c2504e2574c1b0975; ?>
<?php unset($__componentOriginald4c8f106e1e33ab85c5d037c2504e2574c1b0975); ?>
<?php endif; ?>

    <?php echo get_search_form(false); ?>


  <?php endif; ?>

  </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app-inner', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/mpzhb/wordpress/wp-content/themes/mpgb-sage-10.3.1/resources/views/404.blade.php ENDPATH**/ ?>