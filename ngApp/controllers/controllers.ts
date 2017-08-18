namespace comic.Controllers {

    export class LoginController {
        public userInfo
        public isAdmin

        public login(){
          if(this.isAdmin === true) {
            this.userInfo.role = 'admin';
            this.createSession();
          } else {
            this.userInfo.role = 'guest';
            this.createSession();
          }
        }

        public createSession() {
          this.userService.loginUser(this.userInfo).then((data) => {
            this.$window.localStorage.setItem("token", JSON.stringify(data.token));
            this.$state.go('comic');
          })
        }

        public constructor(
          private userService,
          public $window,
          public $state
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
        public publisher;
        public payload

        public create() {
          if(this.payload.role === 'admin') {
            alert('Success!');
          } else {
            alert('Denied. admins only.')
          }
        }

        public read() {
          alert('Success!');
        }

        public update() {
          if(this.payload.role === 'admin') {
            alert('Success!');
          } else {
            alert('Denied. admins only.')
          }
        }

        public delete() {
          if(this.payload.role === 'admin') {
            alert('Success!');
          } else {
            alert("Denied. admins only.")
          }
        }

        public getComics() {
          this.comics = this.comicService.getPublisherComics(this.publisher);

        }

        public save() {
          this.comicService.save(this.comic).then(()=> {
            this.comic = this.comicService.list(); // redisplay list
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

        constructor(private comicService:comic.Service.ComicService) {
          this.comics = this.comicService.list();

        let token = window.localStorage['token'];

        if(token) {
          this.payload = JSON.parse(window.atob(token.split('.')[1]));
          console.log(this.payload);
        }
    }
}
    export class EditComicController {
        public comic;
        public comicId;

        public save() {
          this.comic._id = this.comicId;
          this.comicService.save(this.comic).then(()=> {
            this.$state.go('home'); // navigate back to home
          }).catch((err) => {
            console.error(err);
          })
        }

        constructor(
          private comicService:comic.Service.ComicService,
          private $state: ng.ui.IStateService,
          private $stateParams: ng.ui.IStateParamsService
        ) {
          this.comicId = $stateParams['id'];
          this.comic = this.comicService.get(this.comicId);
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
