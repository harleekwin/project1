var comic;
(function (comic_1) {
    var Service;
    (function (Service) {
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
                this.SignUpResource = this.$resource('/userRoutes/api/Register');
            }
            UserService.prototype.registerUser = function (userObj) {
                return this.SignUpResource.save(userObj).$promise;
            };
            UserService.prototype.loginUser = function (userInfo) {
                return this.LoginResource.save(userInfo).$promise;
            };
            return UserService;
        }());
        Service.UserService = UserService;
        var ComicService = (function () {
            function ComicService($resource) {
                this.ComicResource = $resource('/api/books/:id');
                this.PublisherResource = $resource('/api/books/publisher/:name');
            }
            ComicService.prototype.get = function (id) {
                return this.ComicResource.get({ id: id });
            };
            ComicService.prototype.list = function () {
                return this.ComicResource.query();
            };
            ComicService.prototype.getPublisherComics = function (publisher) {
                return this.PublisherResource.query({ name: publisher });
            };
            ComicService.prototype.save = function (comic) {
                return this.ComicResource.save(comic).$promise;
            };
            ComicService.prototype.remove = function (comicId) {
                return this.ComicResource.remove({ id: comicId }).$promise;
            };
            return ComicService;
        }());
        Service.ComicService = ComicService;
        angular.module('comic').service('userService', UserService);
        angular.module('comic').service('comicService', ComicService);
    })(Service = comic_1.Service || (comic_1.Service = {}));
})(comic || (comic = {}));
