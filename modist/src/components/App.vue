<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-navbar-light-2" id="ftco-navbar">
			<div class="container">
				<a class="navbar-brand" href="index.html">ArtHouse</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="oi oi-menu"></span>Меню
				</button>

				<div class="collapse navbar-collapse" id="ftco-nav">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item"><a href="index.html" class="nav-link">Главная</a></li>
						<li class="nav-item"><a href="index.html" class="nav-link">Товары</a></li>
						<li class="nav-item dropdown active">
						<a class="nav-link dropdown-toggle" href="index.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Категории</a>
						<div class="dropdown-menu" aria-labelledby="dropdown04">
							<router-link class="dropdown-item" to="/paints" @click="filter('Краски художественные')">Краски художественные</router-link>
							<router-link class="dropdown-item" to="/brushes" @click="filter('Кисти') ">Кисти</router-link>
							<router-link class="dropdown-item" to="/holstsinrul" @click="filter('Холсты в рулоне') ">Холсты в рулоне</router-link>
							<router-link class="dropdown-item" to="/holst" @click="filter('Холст на подрамнике') ">Холст на подрамнике</router-link>
							<router-link class="dropdown-item" to="/presents" @click="filter('Подарочные наборы') ">Подарочные наборы</router-link>
						</div>
						</li>
						<li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
					</ul>
				</div>
			</div>
		</nav>

		<div class="hero-wrap hero-bread" style="background-image: url('../assets/images/zast1.jpg');">
			<div class="container">
				<div class="row no-gutters slider-text align-items-center justify-content-center">
				<div class="col-md-9  text-center">
					<h1 class="mb-0 bread">Goods</h1>
					<p class="breadcrumbs"><span class="mr-2"><a href="index.html">Товары</a></span></p>
			
				</div>
				</div>
			</div>
		</div>

	<router-view></router-view>
	</div>
</template>
