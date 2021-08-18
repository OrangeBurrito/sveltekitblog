<!-- <div class="outside">
	<div class="inside"/>
</div> -->
<div class="wrap">
	<div class="img-wrap">
		<img src="/bust.png" alt="">
	</div>
	<p>OrangeBurrito<br>circa 2021</p>
</div>

<style>
	.wrap {
		width: 80%;
		height: 70%;
		margin: 0 auto;
		text-align: center;
	}

	p {
		padding-top: 1rem;
		font-size: 1.5rem;
		color: var(--black);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.img-wrap {
		width: 100%;
		height: 90%;
		position: relative;
		/* background-color: white; */
		background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=ffffffff&noise=5c5c5c&density=13&opacity=62);
		/* background: var(--medium-light); */
		/* overflow: hidden; */
	}

	img {
		opacity: 0.5;
		position: relative;
		bottom: 0.5rem;
	}
	.outside {
		position: relative;
		width: 100%;
		height: 220px;
		background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
	}

	.inside {
		position: absolute;
		top: 10px;
		left: 10px;
		right: 10px;
		bottom: 10px;
		background: #e7f0fd;
		background-image: url('https://i.ibb.co/Hr0Pjrb/bust.png'); 
		background-size: cover;
		background-position: top center;	
	}

	.outside, .inside {
	  clip-path: polygon(85% 14%, 73% 15%, 49% 5%, 23% 17%, 18% 41%, 22% 56%, 15% 74%, 49% 99%, 84% 76%, 80% 44%, 92% 35%);
	}
</style>