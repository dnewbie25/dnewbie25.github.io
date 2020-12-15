//object literal. You can even add functions as values

let user = {
  name: 'Crystal',
  age: 30,
  email: 'crystal3@netninja.com',
  location: 'Berlin',
  /* blogs: ['history of america but not US', 'how to grow kids'], */
  blogs: [
    //An array of objects
    {title: 'history of america but not US', likes: 30,},
    {title: 'how to grow kids', likes: 50,},
  ],
  login: function(){
    console.log('the user logged in');
  },
  logout: function(){
    console.log('the user logged out');
  },
  logBlogs: function(){
    //this keyword is used to refer to this, actually this object. this refers to the object itself
    console.log(`The user ${this.name} has the following blogs:`);
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    });
  },
};

