var comic;
(function (comic_1) {
    var Services;
    (function (Services) {
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
        Services.UserService = UserService;
        var ComicService = (function () {
            function ComicService($resource) {
                this.$resource = $resource;
                this.ComicResource = $resource('/comics/:id');
            }
            ComicService.prototype.saveComic = function (comic) {
                this.ComicResource.save(comic);
            };
            ComicService.prototype.getComics = function () {
                return this.ComicResource.query();
            };
            ComicService.prototype.removeComic = function (id) {
                this.ComicResource.delete({ id: id });
            };
            return ComicService;
        }());
        Services.ComicService = ComicService;
        angular.module('comic').service('userService', UserService);
        angular.module('comic').service('comicService', ComicService);
    })(Services = comic_1.Services || (comic_1.Services = {}));
})(comic || (comic = {}));
