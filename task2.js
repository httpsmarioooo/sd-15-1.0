export class FriendNames {
    constructor(name1, name2, name3) {
      this.name1 = name1;
      this.name2 = name2;
      this.name3 = name3;
    }
  }

  const nameEdFriends = new FriendNames ('Karim', 'Uli','Georgina');
  console.log(nameEdFriends.name1)
  console.log(nameEdFriends.name2)
  console.log(nameEdFriends.name3)