namespace comic.Controllers {

    export class LoginController {
        public userInfo

        public login() {
          this.userService.loginUser(this.userInfo).then((data) => {
            this.$window.localStorage.setItem("token", JSON.stringify(data.token));
            alert('login successful');
          })
        }

        public constructor(
          private userService,
          public $window
        ) {

        }
    }


    export class RegisterController {
        public user

        public signup() {
          this.userService.registerUser(this.user).then(() => {
            alert('signup successful, please login');
          })
        }

        public constructor(
          private userService
        ) {

        }
    }

    export class ComicController {
        public comics;
        public comic = {};

        public save() {
          this.comicService.save(this.comic).then(()=> {
            this.comics = this.comicService.list(); // redisplay list
            this.comic = {};  // clear form
          }).catch((err) => {
            console.error(err);
          })
        }

        public remove(comicId) {
          this.comicService.remove(comicId).then(() => {
            this.comics = this.comicService.list(); // redisplay list
          }).catch((err) => {
            console.error(err);
          });
        }

        constructor(private comicService:comic.Services.ComicService) {
          this.comics = this.comicService.list();
        }
    }

    export class EditComicController {
        public comic;

        public save() {
          this.comicService.save(this.comic).then(()=> {
            this.$state.go('home'); // navigate back to home
          }).catch((err) => {
            console.error(err);
          })
        }

        constructor(
          private comicService:comic.Services.ComicService,
          private $state: ng.ui.IStateService,
          private $stateParams: ng.ui.IStateParamsService
        ) {
          let comicId = $stateParams['id'];
          this.comic = this.comicService.get(comicId);
        }
    }


    export class AddComicController {
      public comic

    public addComic() {
      this.comicService.saveComic(this.comic);
    }

    constructor(
      private comicService
    ) {
  }
}
}
