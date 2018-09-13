import { Component, OnInit, Input,  } from '@angular/core';
import { FollowerService } from '../../_Services/follower.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private follower: FollowerService) { }

  searchResults:Array<any>;
  followers:Array<any> = [];

  searchFollowers(event): void {
    if(event.target.value.length > 0) {
        this.follower.search(event.target.value).subscribe((users:Array<any>)=>{

          this.searchResults = [];

          users.forEach(user => {
              const check = this.followers.find(u=> u.username === user.username);
              if(!check) {
                this.searchResults.push({...user, status:'pending'});
              }
          });
          
        });
    }
  }

  addFollower(username) {
    this.followers.push( this.searchResults.find(u=> u.username === username) );
    this.follower.add( username ).subscribe();
    this.searchResults = this.searchResults.filter(u=>u.username !== username);
  }

  removeFollower(username) {
    this.follower.remove(username).subscribe();
    this.followers = this.followers.filter(u=>u.username !== username);
  }

  followBack(username) {
    this.follower.followBack(username).subscribe((res)=> {
          this.followers.find(i=> i.username === username).status = 'following';
    });
  }

  ngOnInit() {
    this.follower.get().subscribe((followers:Array<any>)=>{
     this.followers = followers;
    });
  }

}
