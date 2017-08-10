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
     public ComicResource;

     public get(id) {
       return this.ComicResource.get({id:id});
     }

     public list() {
       return this.ComicResource.query();
     }

     public save(comic) {
       return this.ComicResource.save(comic).$promise;
     }

     public remove(comicId) {
       return this.ComicResource.remove({id:comicId}).$promise;
     }

     constructor($resource:ng.resource.IResourceService) {
       this.ComicResource = $resource('/api/books/:id');
     }
 }

      angular.module('comic').service('userService', UserService);
      angular.module('comic').service('comicService', ComicService);
}
