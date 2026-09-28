<footer class="site-footer">
	<div class="container footer-grid">
		<div>
			<?php if ( has_custom_logo() ) : ?>
				<div class="site-footer__logo"><?php the_custom_logo(); ?></div>
			<?php else : ?>
				<a class="brand brand--footer" href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<span class="brand__mark">A</span>
					<span class="brand__text"><?php bloginfo( 'name' ); ?></span>
				</a>
			<?php endif; ?>
			<p><?php echo esc_html( get_bloginfo( 'description' ) ?: 'A premium event and mission-driven community experience built to inspire support and connection.' ); ?></p>
		</div>
		<div>
			<h3>Navigation</h3>
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'container'      => false,
					'menu_class'     => 'footer-menu',
					'fallback_cb'    => false,
				)
			);
			?>
		</div>
		<div>
			<h3>Important Links</h3>
			<ul class="footer-links">
				<li><a href="#overview">Overview</a></li>
				<li><a href="#mission">Mission</a></li>
				<li><a href="#register">Contact</a></li>
				<li><a href="#">Privacy Policy</a></li>
			</ul>
		</div>
		<div>
			<h3>Contact</h3>
			<ul class="footer-links">
				<li>hello@alfaevent.org</li>
				<li>(555) 210-4467</li>
				<li>200 Civic Avenue, Suite 200</li>
			</ul>
		</div>
	</div>
	<div class="container footer-bottom">
		<p>&copy; <?php echo esc_html( date_i18n( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?></p>
		<div class="footer-meta">
			<a href="#">Privacy Policy</a>
			<a href="#">Terms</a>
			<a href="#">Instagram</a>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
