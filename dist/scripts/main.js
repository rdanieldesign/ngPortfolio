(function(){

	angular.module('Portfolio', ['ngRoute'])

	.config(function($routeProvider){

		$routeProvider.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'Home'
		});

		$routeProvider.when('/single/:project', {
			templateUrl: 'templates/single.html',
			controller: 'Single'
		});

		$routeProvider.when('/resume', {
			templateUrl: 'templates/resume.html',
			controller: 'Resume'
		});

	})

	.run(['$rootScope', function($rootScope){

		$rootScope.projects = allProjects;

		$('#hamburger').click(function(){
			$(this).toggleClass('active');
			$('nav ul').toggleClass('active');
		});

	}]);

	// .directive('scrollTo', ['$anchorScroll', '$location', function($anchorScroll, $location, element){
	//  	element.bind('click', function(){
	// 		console.log('hey');
	// 		$location.hash('contact');
	// 		$anchorScroll();
	// 	});
	// }]);

}());
var allProjects = [

	// Flycast
	{
		link: 'flyCast',
		title: 'Flycast',
		copy: "Flycast is a web application that allows fly fishermen to compare the conditions of other users' successful fishing trips in order to make informed decisions on how to fish during similar trips. Users document a catch by simply taking a picture, then the application gets the user's geolocation and uses this information to gather data on the current conditions at that user's location. All of this information is then organized by river or stream for later analysis. Users can then filter catches by specific conditions in preparation for their trip.",
		webLink: 'http://rdanieldesign.github.io/FishingApp/index.html#/',
		thumb: 'fly-thumb.jpg',
		images: ['images/fly-details-m.jpg', 'images/fly-grid-d.jpg', 'images/fly-filters-d.jpg', 'images/fly-river-d.jpg']
	},

	// Word Bucket
	{
		link: 'wordBucket',
		title: 'Word Bucket',
		copy: "Word Bucket is a blogging app built on Backbone and Parse. Users can create an account, write posts, publish or save as a draft, and read other's posts. We also added a comments section where users can comment on one another's posts if they are logged in. I collaborated on this project with Wendy Nichols.",
		webLink: 'http://wendynichols.github.io/Blog_project/',
		thumb: 'wordbucket-thumb.jpg',
		images: ['images/wordbucket-main.jpg', 'images/wordbucket-post.jpg', 'images/wordbucket-m.jpg']
	},

	// Fork and Spoon
	{
		link: 'forkAndSpoon',
		title: 'Fork & Spoon',
		copy: "Fork & Spoon is a fictional neighborhood cafe located in Flushing, NY. My team built a website for this restaurant that featured dynamic content from a custom Apiary API, the Google Maps API, and the Flickr API. I collaborated on this project with Dean Gilewicz, John Crocker, and Joanna Edgell.",
		webLink: 'http://rdanieldesign.github.io/RestaurantTIY/',
		thumb: 'fork-thumb.jpg',
		images: ['images/fork-main.jpg', 'images/fork-menu.jpg', 'images/fork-m.jpg']
	},

	// Bricks
	{
		link: 'bricks',
		title: 'Bricks: a To-Do App',
		copy: "Bricks is a simple to-do application that allows users to create to-do items, mark them as completed when done, and clear completed items. Users can also filter to-do items by complete, active, and all. I collaborated on this project with Andrew El-Masry.",
		webLink: 'http://andrewelmasry.com/toDoApp/',
		thumb: 'bricks-thumb.jpg',
		images: ['images/bricks-m.jpg', 'images/bricks-d.jpg']
	},

	// Trailer Park Shootout
	{
		link: 'trailerGame',
		title: 'Trailer Park Shootout',
		copy: "This is a trailer park themed first-person shooter using jQuery animations and CSS sprites. Pro tip: use the rifle. If you can beat the final boss with a pistol then you're probably taking this too seriously.",
		webLink: 'http://rdanieldesign.github.io/TurnGame/',
		thumb: 'trailer-thumb.jpg',
		images: ['images/trailer-main.jpg', 'images/trailer-deer.jpg']
	},

	// SummerSays
	{
		link: 'summerSays',
		title: 'Summer Says',
		copy: "Summer Anderson, Books-A-Million's top trendspotter, wanted to revamp her online presence and transform her site into a more image-oriented, blog-inspired destination for fashion and literature enthusiasts. To do this, I designed and developed a custom Wordpress theme that included a simple Pinterest-like masonry layout, infinite scroll, and Instagram integration that not only helped Summer's finds take center stage but made it possible for her to generate content on the fly with ease.",
		webLink: 'http://dev.summersays.com',
		thumb: 'thumb-summer.jpg',
		images: ['images/ss-home.jpg', 'images/ss-grid.jpg', 'images/ss-single.jpg']
	}

	// Email
	// {
	// 	link: 'BAMemails',
	// 	title: 'BAM! Emails',
	// 	copy: "A large part of my job at BAM is designing and coding emails. These email blasts were created for a variety of purposes, including promoting events, advertising products, and announcing sales.",
	// 	thumb: 'thumb-email.jpg',
	// 	images: ['images/email-armed.jpg', 'images/email-armed2.jpg','images/email-summer.jpg','images/email-summer2.jpg','images/email-flash.jpg','images/email-flash2.jpg', ]
	// },

	// EBM
	// {
	// 	link: 'BAMpublishing',
	// 	title: 'BAM! Publishing',
	// 	copy: "BAM! Publishing is a print on-demand service that Books-A-Million offers to customers who want to produce their own work or books that have gone out of print. O2 Ideas did a great job with the branding and site design. After the initial site launch, BAM! decided that we needed to provide a search function for users to find available titles for print, as well as template options for those who wanted to format their own work for production. Utilizing the styles established by O2 and search scripts created by our internal developer, I developed a responsive search page as well as a cover templates page and an interior templates page.",
	// 	webLink: 'http://www.bampublish.com',
	// 	thumb: 'thumb-ebm.jpg',
	// 	images: ['images/ebm-search.jpg', 'images/ebm-covers.jpg', 'images/ebm-templates.jpg']
	// },

	// ConcreteCanvas
	// {
	// 	link: 'concreteCanvas',
	// 	title: 'Concrete Canvas',
	// 	copy: "Concrete Canvas is a skateboard shop located in Auburn, Alabama, a town with a large population of skateboarders who are currently forced to purchase products online or from neighboring cities. This shop prides itself on emphasizing skateboarding as an art rather than a sport, viewing the activity as a creative interpretation of one’s surrounding landscape in a physical manner. Contemporary skate shops have taken the role as a community center and headquarters for local skateboarders; while maintaining the function of providing necessary products for skateboarding, shops also carry the responsibility of promoting the local skate scene. Concrete Canvas is an operation run purely for skateboarders by skateboarders. We intend to create unity in a scattered skateboarding scene by emphasizing key values in the community. The aesthetic of Concrete Canvas is based on the contrast between the vibrant and energetic appeal of skateboarding and the stony, urban environment that skateboarders thrive in. Finding the creative potential in overlooked or abandoned architectural structures is skateboarding’s highest calling, and this theme is presented outright in Concrete Canvas’s color scheme: radiating orange, yellow, and red emerging from fields of rigid gray.",
	// 	thumb: 'thumb-cc.jpg',
	// 	images: ['images/cc-boards.jpg', 'images/cc-boxes1.jpg', 'images/cc-boxes2.jpg', 'images/cc-bags.jpg', 'images/cc-all.jpg']
	// }

	// UCP
	// {
	// 	link: 'ucp',
	// 	title: 'UCP Casual Day Shirt',
	// 	copy: "United Cerebral Palsy commisions a t-shirt design every year to raise money and awareness for their campaign to help those suffering from Cerebral Palsy. This year, UCP wanted to celebrate the many businesses around Birmingham who have played a key role in financially supporting their operations, and the spirit of giving in the city of Birmingham.",
	// 	thumb: 'thumb-ucp.jpg',
	// 	images: ['images/ucp-large.jpg']
	// },

	// Shred Ready
	// {
	// 	link: 'shredReady',
	// 	title: 'Shred Ready SIA Tradeshow',
	// 	copy: "As an exhibitor in the SIA 2012 Trade Show, Shred Ready entered the snow industry this year with a new helmet, the Forty4. I designed a line of graphics and colorways for Shred Ready's snow helmet, along with a comprehensive company folder containing three informational flyers, a business card, and the 2012 order form and program. I collaborated with artist Evan Watson to create the back drop for the booth, a hand-stenciled eight-by-twenty foot banner that matched my folder's cover design.",
	// 	thumb: 'thumb-sr.jpg',
	// 	images: ['images/sr-set.jpg', 'images/sr-banner.jpg', 'images/sr-helmets1.jpg', 'images/sr-helmets2.jpg', 'images/sr-folder.jpg', 'images/sr-flyers1.jpg', 'images/sr-flyers2.jpg']
	// },

	// SMS
	// {
	// 	link: 'BAMsms',
	// 	title: 'BAM! SMS Campaign',
	// 	copy: "In an effort to gain further access to their customers, BAM! launched a campaign to collect subscribers for their text message program. Customers were prompted to sign up to receive texts via in-store signage and email blasts, as well as small cards they received at the register upon checkout. BAM! offered a free coffee for those who subscribed to receive texts.",
	// 	thumb: 'sms-thumb2.jpg',
	// 	images: ['images/sms-sign.jpg', 'images/sms-card.jpg', 'images/sms-email.jpg', ]
	// }

];
(function(){

	angular.module('Portfolio')

	.controller('Home', ['$scope', '$rootScope', '$anchorScroll', '$location', function($scope, $rootScope, $anchorScroll, $location){

		$scope.projects = $rootScope.projects;

		$scope.scrollTo = function(section){
			console.log(section);
			$location.hash(section);
			$anchorScroll();
		};

	}]);

}());
(function(){

	angular.module('Portfolio')

	.controller('Single', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){

		$scope.single = _.find($rootScope.projects, function(proj){
			return proj.link === $routeParams.project;
		});

		var currentIndex = _.indexOf($rootScope.projects, $scope.single);

		var nextIndex;

		if(currentIndex === $rootScope.projects.length - 1){
			nextIndex = 0;
		} else {
			nextIndex = currentIndex + 1;
		};

		$scope.images = $scope.single.images;

		$scope.nextLink = $rootScope.projects[nextIndex].link;

	}]);

}());
(function(){

	angular.module('Portfolio')

	.controller('Resume', ['$scope', function($scope){

		

	}]);

}());