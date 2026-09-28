<?php
get_header();
?>

<main id="primary" class="site-main">
	<div class="container entry-content">
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
					<div class="entry-content__body">
						<?php the_content(); ?>
					</div>
				</article>
			<?php endwhile; ?>
		<?php else : ?>
			<h1><?php esc_html_e( 'Nothing found', 'alfa-event-theme' ); ?></h1>
		<?php endif; ?>
	</div>
</main>

<?php
get_footer();
