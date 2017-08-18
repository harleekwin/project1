var comic;
(function (comic) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController(userService, $window, $state) {
                this.userService = userService;
                this.$window = $window;
                this.$state = $state;
            }
            LoginController.prototype.login = function () {
                if (this.isAdmin === true) {
                    this.userInfo.role = 'admin';
                    this.createSession();
                }
                else {
                    this.userInfo.role = 'guest';
                    this.createSession();
                }
            };
            LoginController.prototype.createSession = function () {
                var _this = this;
                this.userService.loginUser(this.userInfo).then(function (data) {
                    _this.$window.localStorage.setItem("token", JSON.stringify(data.token));
                    _this.$state.go('comic');
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
            function ComicController(comicService) {
                this.comicService = comicService;
                this.comic = {};
                this.comics = this.comicService.list();
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    console.log(this.payload);
                }
            }
            ComicController.prototype.create = function () {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                }
                else {
                    alert('Denied. admins only.');
                }
            };
            ComicController.prototype.read = function () {
                alert('Success!');
            };
            ComicController.prototype.update = function () {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                }
                else {
                    alert('Denied. admins only.');
                }
            };
            ComicController.prototype.delete = function () {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                }
                else {
                    alert("Denied. admins only.");
                }
            };
            ComicController.prototype.getComics = function () {
                this.comics = this.comicService.getPublisherComics(this.publisher);
            };
            ComicController.prototype.save = function () {
                var _this = this;
                this.comicService.save(this.comic).then(function () {
                    _this.comic = _this.comicService.list();
                    _this.comic = {};
                }).catch(function (err) {
                    console.error(err);
                });
            };
            ComicController.prototype.remove = function (comicId) {
                var _this = this;
                this.comicService.remove(comicId).then(function () {
                    _this.comics = _this.comicService.list();
                }).catch(function (err) {
                    console.error(err);
                });
            };
            return ComicController;
        }());
        Controllers.ComicController = ComicController;
        var EditComicController = (function () {
            function EditComicController(comicService, $state, $stateParams) {
                this.comicService = comicService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.comicId = $stateParams['id'];
                this.comic = this.comicService.get(this.comicId);
            }
            EditComicController.prototype.save = function () {
                var _this = this;
                this.comic._id = this.comicId;
                this.comicService.save(this.comic).then(function () {
                    _this.$state.go('home');
                }).catch(function (err) {
                    console.error(err);
                });
            };
            return EditComicController;
        }());
        Controllers.EditComicController = EditComicController;
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
    })(Controllers = comic.Controllers || (comic.Controllers = {}));
})(comic || (comic = {}));
