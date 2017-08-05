var comic;
(function (comic) {
    angular.module('comic', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('login', {
            url: '/',
            templateUrl: '/ngApp/views/login.html',
            controller: comic.Controllers.LoginController,
            controllerAs: 'vm'
        })
            .state('register', {
            url: '/register',
            templateUrl: '/ngApp/views/register.html',
            controller: comic.Controllers.RegisterController,
            controllerAs: 'vm'
        })
            .state('comic', {
            url: '/comic',
            templateUrl: '/ngApp/views/comic.html',
            controller: comic.Controllers.ComicController,
            controllerAs: 'vm'
        })
            .state('add', {
            url: '/add',
            templateUrl: '/ngApp/views/addComic.html',
            controller: comic.Controllers.AddComicController,
            controllerAs: 'vm'
        })
            .state('edit', {
            url: '/edit/:id',
            templateUrl: '/ngApp/views/editComic.html',
            controller: comic.Controllers.EditComicController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(comic || (comic = {}));
