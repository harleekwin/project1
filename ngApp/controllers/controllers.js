var comic;
(function (comic) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController(userService, $window) {
                this.userService = userService;
                this.$window = $window;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                this.userService.loginUser(this.userInfo).then(function (data) {
                    _this.$window.localStorage.setItem("token", JSON.stringify(data.token));
                    alert('login successful');
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
        var RegisterController = (function () {
            function RegisterController(userService) {
                this.userService = userService;
            }
            RegisterController.prototype.signup = function () {
                this.userService.registerUser(this.user).then(function () {
                    alert('signup successful, please login');
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
        var ComicController = (function () {
            function ComicController(comicsService) {
                this.comicsService = comicsService;
                this.comics = comicsService.getComics();
            }
            ComicController.prototype.deleteComics = function (id) {
                this.comicsService.removeComics(id);
            };
            return ComicController;
        }());
        Controllers.ComicController = ComicController;
        var AddComicController = (function () {
            function AddComicController(comicService) {
                this.comicService = comicService;
            }
            AddComicController.prototype.addComic = function () {
                this.comicService.saveComic(this.comic);
            };
            return AddComicController;
        }());
        Controllers.AddComicController = AddComicController;
        var EditComicController = (function () {
            function EditComicController($stateParams, comicService) {
                this.$stateParams = $stateParams;
                this.comicService = comicService;
                this.id = $stateParams['id'];
            }
            EditComicController.prototype.editComic = function () {
                this.comic._id = this.id;
                this.comicService.saveComic(this.comic);
            };
            return EditComicController;
        }());
        Controllers.EditComicController = EditComicController;
    })(Controllers = comic.Controllers || (comic.Controllers = {}));
})(comic || (comic = {}));
