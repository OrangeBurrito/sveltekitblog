<script>
	import { onMount, onDestroy } from "svelte";
	import { isFadeout } from "$lib/stores.js";
	export let post = {};

	onMount(() => {
		$isFadeout = true;
	});

	onDestroy(() => {
		$isFadeout = false;
	});
</script>

<div class="post-wrap">
	<header>
		<div class="cover-image">
			<img class="placeholder" src={post.coverImage} alt="" />
		</div>
		<div class="text-container">
				<h1 class="title">{post.title}</h1>
			<div class="dates">
				<div class="date">
					<strong>Published: </strong>{post.date}<br />
				</div>
				{#if post.lastUpdated}
					<div class="date">
						<strong>Updated: </strong>
						{post.lastUpdated}
					</div>
				{/if}
			</div>
		</div>
	</header>
	<div class="content">{@html post.content}</div>
	<footer>Copyright © OrangeBurrito 2021</footer>
</div>

<style>
	.post-wrap {
		display: block;
		width: 100%;
		margin: 0 auto;
		background: var(--white);
	}

	header {
		padding: var(--padding-medium) var(--padding-medium) 0 var(--padding-medium);
		position: relative;
	}

	.cover-image {
		position: relative;
		height: 250px;
	}

	.cover-image img {
		width: 100%;
	}

	.dates {
		display: flex;
	}

	.date strong {
		font-family: var(--code-font);
		font-size: var(--regular-fz);
	}

	.content {
		position: relative;
		padding: var(--padding-medium) var(--padding-large);
	}

	.content :global(p) {
		margin-bottom: var(--padding-medium);
		font-size: var(--middling-fz);
	}

	.content :global(a) {
		background: linear-gradient(
			to bottom,
			var(--accent) 0%,
			var(--accent) 100%
		);
		padding-bottom: 3px;
		background-position: 0 100%;
		background-repeat: repeat-x;
		background-size: 4px 2px;
		color: inherit;
		text-decoration: none;
		transition: all 0.125s ease-in;
	}

	.content :global(a:hover) {
		color: var(--white);
		background-size: 4px 50px;
	}

	.content :global(h1),
	.content :global(h2),
	.content :global(h3),
	.content :global(h4) {
		margin-top: var(--padding-huge);
		margin-bottom: var(--padding-regular);
	}

	.content :global(h2) {
		font-size: 32px;
	}

	.content :global(h3) {
		font-size: 26px;
	}

	.content :global(h4) {
		font-size: 24px;
		font-weight: 400;
	}

	.content :global(h2:first-of-type) {
		margin-top: var(--padding-regular);
	}

	.content :global(img) {
		display: block;
		margin: var(--padding-large) auto var(--padding-regular) auto;
		border-radius: var(--bdrs);
		max-width: 80%;
	}

	.content :global(img + p) {
		text-align: center;
		font-family: var(--flourish-font);
		margin-bottom: var(--padding-large);
	}

	.content :global(li) {
		font-size: var(--middling-fz);
		line-height: 1.4;
		margin-bottom: var(--padding-small);
	}

	.content :global(li::marker) {
		font-family: var(--header-font);
		font-size: var(--medium-fz);
	}

	.content :global(li > p) {
		margin-bottom: var(--padding-small);
	}

	.content :global(ul > li) {
		font-size: 21px;
		list-style-type: square;
		margin: 0.8rem 0;
	}

	.content :global(.image-caption) {
		text-align: center;
		font-family: var(--flourish-font);
		margin-bottom: var(--padding-large);
	}

	.content :global(hr) {
		height: 40px;
		border: 0;
		background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='794px' height='51px' viewBox='0 0 794 51' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpolygon id='path-1' points='0.907103825 0 798.907104 0 798.907104 364 0.907103825 364'%3E%3C/polygon%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='36257-O0KTX6' transform='translate(0.000000, -212.000000)'%3E%3Cg id='Group' transform='translate(-4.907104, 171.000000)'%3E%3Cg id='Group-70'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cg id='Clip-67'%3E%3C/g%3E%3Cpath d='M610.198586,77 C699.286076,77 783.215114,73.4231956 849.907104,64.0083772 L849.765531,63.0342269 C783.152303,72.4392054 699.257163,76.0169938 610.198586,76.0160098 C468.900459,76.0169938 314.600519,67.0124993 195.629099,58.0080049 C136.142392,53.5062497 85.4880646,49.0035105 49.7059121,45.62744 C31.8148358,43.9389128 17.6415541,42.5318068 7.94178925,41.5478166 C3.09140831,41.0548375 -0.640344182,40.6681294 -3.15975068,40.40442 C-5.67816019,40.1407106 -6.98023573,40 -6.98422371,40 L-7.09289617,40.9780863 C-7.08292622,40.9790703 327.520578,77 610.198586,77 Z' id='Fill-68' fill='black' style='fill: var(--hr-color, black)' mask='url(%23mask-2)'%3E%3C/path%3E%3C/g%3E%3Cpath d='M204.690104,47.32 C206.259104,42.729 211.015104,44.247 211.564104,45.397 C212.744104,47.867 213.564104,47.459 213.564104,47.459 C213.564104,47.459 211.475104,47.412 210.596104,49.717 C210.211104,50.727 208.816104,56.337 204.832104,58.949 C202.997104,60.153 200.700104,60.071 198.966104,61.194 C197.487104,62.163 196.569104,65.733 194.477104,65.784 C194.528104,65.733 194.579104,65.58 194.630104,65.479 C194.069104,65.835 193.355104,65.632 192.743104,65.632 C192.845104,65.376 192.590104,65.58 192.743104,65.325 C192.641104,65.428 192.641104,65.172 192.539104,65.223 C192.488104,64.764 192.284104,64.458 192.590104,64.101 C192.437104,64.254 192.590104,64.101 192.437104,64.203 C192.131104,63.285 196.633104,60.39 197.092104,57.891 C198.220104,51.746 202.522104,48.379 204.690104,47.32' id='Fill-73' fill='black' style='fill: var(--hr-color, black)'%3E%3C/path%3E%3Cpath d='M237.461104,48.48 C240.188104,44.985 244.713104,48.584 244.314104,51.397 C248.502104,52.923 251.137104,63.152 251.621104,65.056 C251.621104,65.056 254.867104,70.497 254.733104,74.267 C254.250104,72.998 254.242104,74.368 253.553104,73.169 C253.483104,73.311 252.586104,72.323 252.517104,72.464 C251.439104,71.459 250.904104,67.897 250.103104,67.455 C249.301104,67.012 244.307104,65.92 241.012104,62.94 C237.824104,60.056 237.482104,56.195 237.693104,54.727 C238.377104,49.959 234.689104,50.147 234.689104,50.147 C234.689104,50.147 236.502104,49.709 237.461104,48.48' id='Fill-79' fill='black' style='fill: var(--hr-color, black)'%3E%3C/path%3E%3Cpath d='M490.329073,53.2234708 C489.681073,52.5704708 487.329073,50.5564708 485.450073,51.0884708 C483.536073,51.6304708 481.516073,54.0154708 481.624073,56.5644708 L481.662073,56.5564708 C481.662073,56.5564708 480.546073,57.4964708 480.276073,57.7454708 C479.575073,58.3664708 475.473073,63.1004708 474.745073,69.2234708 C474.510073,71.1834708 474.352073,73.7664708 474.662073,75.0564708 C474.972073,76.3454708 473.722073,78.5464708 473.020073,79.9774708 C472.696073,80.5984708 469.438073,84.9064708 471.702073,83.9734708 C470.907104,85.7234708 472.329073,85.1394708 472.329073,85.1394708 C472.329073,85.1394708 471.827073,86.6204708 472.662073,86.6204708 C473.001073,86.6204708 473.995073,85.1394708 473.995073,85.1394708 C473.995073,85.1394708 473.995073,87.9734708 475.238073,84.4414708 C476.071073,87.7754708 477.917073,79.0904708 478.528073,77.9324708 C479.140073,76.7754708 481.459073,75.7964708 483.265073,74.8634708 C485.072073,73.9324708 486.663073,71.7724708 487.632073,69.7204708 C489.035073,66.8614708 489.662073,64.4804708 489.662073,61.3064708 C489.662073,54.2234708 492.971073,53.9734708 492.971073,53.9734708 C492.971073,53.9734708 490.976073,53.8764708 490.329073,53.2234708' id='Fill-87' fill='black' style='fill: var(--hr-color, black)'%3E%3C/path%3E%3Cpath d='M177.695104,46.218 C179.252104,47.12 180.579104,51.973 180.214104,56.075 C179.708104,61.772 180.593104,64.226 180.581104,64.709 C180.567104,64.962 180.224104,63.94 180.126104,64.119 C180.028104,64.3 179.377104,66.022 179.377104,66.022 C178.314104,65.897 177.788104,64.477 177.788104,64.477 C177.788104,64.477 177.614104,65.198 177.439104,65.022 C176.716104,64.271 177.416104,61.669 177.165104,60.689 C176.433104,57.829 174.939104,58.128 173.502104,55.834 C171.625104,52.839 171.708104,49.822 172.127104,48.584 C172.433104,47.644 172.922104,46.91 172.226104,45.906 C171.746104,45.206 171.072104,45.652 170.403104,45.709 C170.714104,45.484 171.124104,45.445 171.434104,45.219 C171.788104,44.971 175.734104,39.39 177.695104,46.218' id='Fill-90' fill='black' style='fill: var(--hr-color, black)'%3E%3C/path%3E%3Cpath d='M422.710104,55.938 C422.537104,55.574 421.710104,50.668 417.874104,51.317 C415.392104,51.738 413.710104,53.668 414.627104,57.084 C414.271104,59.936 412.264104,61.525 413.761104,67.05 C415.427104,73.204 419.112104,76.736 419.257104,78.691 C419.356104,80.243 419.127104,86.627 419.127104,86.627 C419.236104,86.528 420.370104,85.727 420.478104,85.628 C420.696104,85.909 420.845104,86.237 421.127104,86.501 C421.153104,86.355 421.604104,86.239 421.632104,86.093 C422.013104,86.465 422.516104,87.242 423.070104,87.497 C423.089104,87.079 423.173104,86.461 423.354104,86.134 C423.363104,86.406 424.202104,87.052 424.257104,87.243 C424.202104,87.052 424.678104,86.266 424.824104,85.33 C425.142104,85.72 426.640104,85.572 426.877104,85.918 C424.794104,82.584 424.141104,77.345 424.120104,75.908 C424.019104,72.43 426.519104,69.102 426.492104,65.673 C426.454104,60.903 422.710104,55.938 422.710104,55.938' id='Fill-98' fill='black' style='fill: var(--hr-color, black)'%3E%3C/path%3E%3Cpath d='M302.845104,52.885 C302.750104,52.573 302.523104,47.483 298.347104,48.334 C296.386104,48.734 295.575104,51.737 296.049104,53.353 C295.437104,55.595 294.345104,56.846 294.877104,61.459 C295.470104,66.599 298.846104,68.692 298.732104,70.277 C298.630104,71.533 298.642104,73.546 298.598104,74.85 L298.535104,75.183 C298.632104,75.116 298.744104,75.156 298.841104,75.089 C298.980104,75.342 299.019104,76.129 299.210104,76.376 C299.248104,76.262 299.903104,75.988 299.529104,75.487 C299.785104,75.832 300.989104,77.493 301.170104,77.254 C301.146104,77.474 301.582104,76.552 301.603104,76.712 C301.582104,76.552 301.681104,76.558 301.906104,75.826 C302.110104,76.178 302.440104,76.195 302.585104,76.501 C303.798104,75.019 302.642104,71.989 302.793104,70.834 C303.120104,68.033 304.624104,64.088 305.002104,61.334 C305.529104,57.506 302.845104,52.885 302.845104,52.885' id='Fill-99' fill='black' style='fill: var(--hr-color, black)'%3E%3C/path%3E%3Cpath d='M542.099104,60.139 C541.980104,59.748 542.402104,54.385 537.377104,54.3367902 C534.210104,54.307 533.793104,57.501 533.210104,60.084 C532.422104,62.891 530.212104,63.731 530.877104,69.501 C531.616104,75.928 535.338104,80.463 535.187104,82.446 C535.052104,84.019 534.894104,88.962 535.018104,88.878 C535.195104,89.194 535.379104,89.576 535.622104,89.884 C535.671104,89.741 535.845104,89.516 535.894104,89.374 C536.220104,89.805 537.677104,91.884 537.908104,91.584 C537.877104,91.859 538.835104,90.146 539.124104,89.228 C539.384104,89.669 539.485104,89.668 539.670104,90.051 C541.222104,88.192 540.271104,82.86 540.467104,81.415 C540.893104,77.911 543.928104,73.925 544.419104,70.48 C545.104104,65.688 542.099104,60.139 542.099104,60.139' id='Fill-100' fill='black' style='fill: var(--hr-color, black)'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
		background-repeat: no-repeat;
		background-size: 100% auto;
		margin-bottom: var(--padding-large);
	}

	footer {
		width: 100vw;
		font-family: var(--code-font);
		text-align: center;

		color: var(--white);
		background: var(--dark);
		padding: var(--padding-medium);
		margin-left: calc(-50vw + 50%);
	}

	@media (min-width: 500px) {
		.post-wrap {
			margin-top: var(--padding-medium);
			border-radius: var(--bdrs);
		}

		header {
			border-top-left-radius: var(--bdrs);
			border-top-right-radius: var(--bdrs);
			overflow: hidden;
			padding: 0;
		}

		.cover-image {
			width: 100%;
			height: 300px;
		}

		.text-container {
			display: block;
			position: absolute;
			z-index: 2;
			font-size: 20px;
			bottom: var(--padding-regular);
			left: var(--padding-regular);
			max-width: 40ch;
		}

		.text-container .date {
			display: inline-block;
			background: var(--white);
			padding: var(--padding-small) var(--padding-regular);
			box-shadow: rgba(var(--bxs-black), 0.2) 0px 20px 30px;
		}

		.title {
			display: inline;
			background: var(--white);
			box-shadow: 12px 0 0 var(--white), -12px 0 0 var(--white);
			box-decoration-break: clone;
			padding: 12px 0;
			margin-left: 12px;
		}

		.dates {
			display: block;
		}

		.text-container .date {
			margin-right: 2rem;
		}

		.text-container .date:nth-of-type(3) {
			margin-top: -5rem;
		}

		.content {
			box-shadow: 0 0 10px rgba(var(--bxs-black), 0.8);
			clip-path: inset(-6px 0px 0px 0px);
		}
	}

	@media (min-width: 500px) and (max-width: 1023px) {
		.post-wrap {
			width: 50ch;
		}
	}

	@media (min-width: 1024px) {
		.post-wrap {
			position: absolute;
			width: 55%;
			left: 50%;
			transform: translate(-50%);
		}

		.cover-image {
			height: 350px;
		}

		.text-container {
			font-size: var(--medium-fz);
		}
	}
</style>
