namespace comic.Services {
  export class UserService {
    public LoginResource
    public SignUpResource

    public registerUser(userObj) {
      return this.SignUpResource.save(userObj).$promise;
    }

    public loginUser(userInfo) {
      return this.LoginResource.save(userInfo).$promise;
    }

    constructor(private $resource:ng.resource.IResourceService){
      this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
      this.SignUpResource = this.$resource('/userRoutes/api/Register');
    }

  }
    

  export class ComicService {
    public ComicResource

    public saveComic(comic) {
      this.ComicResource.save(comic);
    }

    public getComics() {
      return this.ComicResource.query();
    }
    public removeComic(id){
      this.ComicResource.delete({id:id});
    }

    public constructor(
      public $resource
    ) {
      this.ComicResource =$resource('/comics/:id');
    }
  }

      angular.module('comic').service('userService', UserService);
      angular.module('comic').service('comicService', ComicService);
}
