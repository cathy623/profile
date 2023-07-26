import { Injectable } from '@angular/core';
import { Userlist } from './userlist';


@Injectable({
  providedIn: 'root'
})
export class ListingService {
  submitApplication(firstName: string, lastName: string, email: string) {
  console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
}
  userList: Userlist[] = [{
    id: 6,
    name: 'Ray',
    photo: `assets/bird.jpg`,
   tags: ['twitter', 'colorful bird'],
   bio: 'SetPost has given us, a place in this new Social Media platform to show support to our small business. We help birds who are endangered or who dont have homes to either be placed back into the wild or in our shelter. We need a platform to spread awareness and help us donate to our organization.',
   stock: 22

},
{
id:0,
name: 'CEO of JetBlue',
photo:`/assets/four.jpg`,
tags: ['google', 'goggle'],
bio: ' From a young age, I was captivated by computers, and that curiosity led me to pursue a career in Computer Science. Throughout my journey, Ive enjoyed tackling challenging coding problems and exploring the fascinating world of artificial intelligence and machine learning.',
stock: 34},
{
id:1,
name: 'Apple',
photo:`/assets/apple.jpg`,
tags: ['apple', 'iPhone'],
bio: 'Apple Computer, Inc. was founded on April 1, 1976, by college dropouts Steve Jobs and Steve Wozniak, who brought to the new company a vision of changing the way people viewed computers. Jobs and Wozniak wanted to make computers small enough for people to have them in their homes or offices. Simply put, they wanted a computer that was user-friendly.',
stock: 39
},

{id:2,
  name: 'Google',
  photo:`/assets/google.jpg`,
  tags: ['google','goggle'] ,
bio: ' The Google story begins in 1995 at Stanford University. Larry Page was considering Stanford for grad school and Sergey Brin, a student there, was assigned to show him around. By some accounts, they disagreed about nearly everything during that first meeting, but by the following year they struck a partnership. Working from their dorm rooms, they built a search engine that used links to determine the importance of individual pages on the World Wide Web. They called this search engine Backrub.',
stock: 5},
{id:3,
  name: 'Rovillo',
  photo:`/assets/rovillo.png`,
  tags: ['nike', 'check'],
bio: ' Front-end developer for a social media platform SetPost',
stock: 20
},
{id:4,
  name: 'Sarai ',
  photo:`/assets/sarai.jpg`,
  tags:['blue bird', 'twitter'],
bio: ' Welcome, to our app, enjoy it and be kind to each other ',
stock: 23},
{id:7,
  name: 'Fendi',
  photo:`/assets/fendi.png`,
  tags:['clothes', 'designer'],
bio: 'Fendi coming soon with a official bio',
stock: 4
},
{id:8,
  name: 'Chanel',
  photo:`/assets/chanel.jpg`,
  tags:['clothes', 'designer'],
bio: 'Gabrielle Chanel lived her life as she alone intended. The trials of a childhood as an orphan and the successes of an accomplished businesswoman gave birth to an extraordinary character; daring, free, and ahead of her time. Faithful friendships and passionate love affairs, as well as a thirst for culture, discovery and travel helped shaped her personality. A wardrobe freed from constraints and superfluity, tweaked with masculine accents, created a visionary allure that has become timeless and yet wildly modern. Pearls and diamonds casually paired with iconic perfumes have created a signature style... That of an avant-garde woman, a pioneer whose lifestyle and multiple facets forged the values of the House she founded, and who remains an inspiration for all women.',
stock: 2,
},
{
id:9,
  name: 'Cathy',
  photo:`/assets/cathy.png`,
  tags:['cathy', 'designer'],
bio: 'A software programmer who was part of this social media platform and enjoyed the experience and ',
stock: 0,
}
];

getAllUserList(): Userlist[]{
  return this.userList;
}
getUserListById(id: number): Userlist | undefined{
  return this.userList.find(userList=>userList.id==id);
}
}
 


  

