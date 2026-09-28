<?php
get_header();
?>

<main id="primary" class="site-main">
	<section class="hero hero--home" style="background-image: linear-gradient(135deg, rgba(8, 18, 30, 0.78), rgba(17, 38, 54, 0.72)), url('<?php echo esc_url( alfa_event_get_hero_image() ); ?>');">
		<div class="container hero__inner">
			<div class="hero__content">
				<p class="eyebrow">Event / Community / Impact</p>
				<h1><?php echo esc_html( get_theme_mod( 'alfa_event_hero_title', __( 'Build a better future together', 'alfa-event-theme' ) ) ); ?></h1>
				<p class="hero__subtitle"><?php echo esc_html( get_theme_mod( 'alfa_event_hero_subtitle', __( 'A premium event experience designed to rally supporters, sponsors, and community leaders around a common mission.', 'alfa-event-theme' ) ) ); ?></p>
				<div class="button-row">
					<a class="button button--primary" href="<?php echo alfa_event_get_homepage_cta_url( 'alfa_event_hero_primary_url', '#register' ); ?>"><?php echo esc_html( get_theme_mod( 'alfa_event_hero_primary_label', __( 'Get Tickets', 'alfa-event-theme' ) ) ); ?></a>
					<a class="button button--secondary" href="<?php echo alfa_event_get_homepage_cta_url( 'alfa_event_hero_secondary_url', '#overview' ); ?>"><?php echo esc_html( get_theme_mod( 'alfa_event_hero_secondary_label', __( 'Learn More', 'alfa-event-theme' ) ) ); ?></a>
				</div>
				<div class="hero__meta">
					<span>October 18–20</span>
					<span>City Center Pavilion</span>
				</div>
			</div>
		</div>
	</section>

	<section id="overview" class="intro section">
		<div class="container intro__grid">
			<div>
				<p class="eyebrow eyebrow--dark">About the experience</p>
				<h2>Designed to inspire action, connection, and lasting community impact.</h2>
			</div>
			<div>
				<p>Every great event is built around a purpose. This premium gathering brings together mission-driven people, local leaders, sponsors, families, and advocates to celebrate community, spark meaningful partnership, and create momentum that extends far beyond the event itself.</p>
				<p>From live entertainment and dynamic experiences to high-value networking and community visibility, the format is designed to create excitement while keeping the message clear and authentic.</p>
				<a class="text-link" href="#mission">Explore the mission</a>
			</div>
		</div>
	</section>

	<section id="mission" class="section section--muted">
		<div class="container">
			<div class="section-heading section-heading--center">
				<p class="eyebrow">Our mission</p>
				<h2>Built around service, visibility, and meaningful engagement.</h2>
			</div>
			<div class="cards cards--three">
				<article class="feature-card">
					<div class="feature-card__icon">★</div>
					<h3>Support the mission</h3>
					<p>Show up for causes that matter and help build a stronger, more connected local network of advocates.</p>
				</article>
				<article class="feature-card">
					<div class="feature-card__icon">✦</div>
					<h3>Celebrate community</h3>
					<p>Bring families, partners, and supporters together for an experience rooted in pride, unity, and momentum.</p>
				</article>
				<article class="feature-card">
					<div class="feature-card__icon">▣</div>
					<h3>Drive impact</h3>
					<p>Create opportunities for sponsorship, visibility, outreach, and long-term value for organizations and communities alike.</p>
				</article>
			</div>
		</div>
	</section>

	<section class="section">
		<div class="container">
			<div class="section-heading">
				<p class="eyebrow">Attractions</p>
				<h2>What visitors can expect</h2>
			</div>
			<div class="cards cards--three cards--feature">
				<article class="image-card">
					<img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80" alt="Live music and entertainment" />
					<div class="image-card__body">
						<span class="tag">Live Music</span>
						<h3>High-energy performances</h3>
						<p>Premium entertainment designed to set the tone for an unforgettable event experience.</p>
					</div>
				</article>
				<article class="image-card">
					<img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80" alt="Family-friendly event activities" />
					<div class="image-card__body">
						<span class="tag">Family Activities</span>
						<h3>Something for every age</h3>
						<p>Interactive experiences and activity zones make the event welcoming, fun, and accessible.</p>
					</div>
				</article>
				<article class="image-card">
					<img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80" alt="Food and vendor experiences" />
					<div class="image-card__body">
						<span class="tag">Food + Vendors</span>
						<h3>Local favorites and vendors</h3>
						<p>Discover curated vendors, local flavor, and immersive booths that elevate the atmosphere.</p>
					</div>
				</article>
			</div>
		</div>
	</section>

	<section class="section section--dark">
		<div class="container video-layout">
			<div class="video-frame">
				<iframe src="https://www.youtube.com/embed/ScMzIvxBSi4?si=3AQxOQ6e9YLi09vK" title="Event highlights video" loading="lazy" allowfullscreen></iframe>
			</div>
			<div class="video-copy">
				<p class="eyebrow eyebrow--light">Featured video</p>
				<h2>See the energy, the excitement, and the impact.</h2>
				<p>From the opening moments to the final call to action, this experience has been designed to build momentum, create joy, and connect the community around a larger mission.</p>
				<a class="button button--primary" href="#register">Register now</a>
			</div>
		</div>
	</section>

	<section class="section section--muted">
		<div class="container">
			<div class="section-heading section-heading--center">
				<p class="eyebrow">Partners and sponsors</p>
				<h2>Trusted by organizations and supporters who care.</h2>
			</div>
			<div class="logo-grid" aria-label="Partner logos">
				<div class="logo-pill">Summit Group</div>
				<div class="logo-pill">Northlight</div>
				<div class="logo-pill">Civic Works</div>
				<div class="logo-pill">Union Hall</div>
				<div class="logo-pill">Legacy Partners</div>
				<div class="logo-pill">Blue Harbor</div>
			</div>
		</div>
	</section>

	<section class="section section--cta">
		<div class="container cta-panel">
			<div>
				<p class="eyebrow">Partner with Us</p>
				<h2>Help shape the next great chapter of community impact.</h2>
			</div>
			<div class="cta-panel__actions">
				<a class="button button--primary" href="#sponsor">Sponsorship Opportunities</a>
				<a class="button button--secondary button--secondary-light" href="#contact">Become a Partner</a>
				<a class="button button--secondary button--secondary-light" href="#contact">Contact Us</a>
			</div>
		</div>
	</section>

	<section id="register" class="section">
		<div class="container contact-layout">
			<div class="contact-copy">
				<p class="eyebrow">Get involved</p>
				<h2>Request information or start a partnership conversation.</h2>
				<p>Whether you are interested in attending, sponsoring, volunteering, or exploring a partnership opportunity, our team is ready to help.</p>
			</div>
			<form class="contact-form" action="#" method="post">
				<div class="form-grid">
					<label>
						<span>Name</span>
						<input type="text" name="name" />
					</label>
					<label>
						<span>Phone</span>
						<input type="tel" name="phone" />
					</label>
					<label>
						<span>Email</span>
						<input type="email" name="email" required />
					</label>
					<label>
						<span>Organization</span>
						<input type="text" name="organization" />
					</label>
					<label>
						<span>Inquiry Type</span>
						<select name="inquiry-type">
							<option>General Inquiry</option>
							<option>Sponsorship</option>
							<option>Vendor Registration</option>
							<option>Partnership</option>
						</select>
					</label>
					<label class="field--full">
						<span>Message</span>
						<textarea name="message" rows="5"></textarea>
					</label>
				</div>
				<button type="submit" class="button button--primary">Send inquiry</button>
			</form>
		</div>
	</section>
</main>

<?php
get_footer();
