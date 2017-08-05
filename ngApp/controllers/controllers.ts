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
      public comics

      public deleteComics(id) {
        this.comicsService.removeComics(id);
      }

      constructor(
        private comicsService
      ) {
      this.comics = comicsService.getComics();
      }
    }
    export class AddComicController {
          public comic

          public addComic() {
            this.comicService.saveComic(this.comic);
          }
          constructor (
            private comicService
          ){

          }
        }
    export class EditComicController {
      public comic
      public id

      public editComic(){
        this.comic._id = this.id;
        this.comicService.saveComic(this.comic);
      }

      constructor(
        public $stateParams,
        private comicService
      ){
        this.id = $stateParams['id'];
      }
    }

}
