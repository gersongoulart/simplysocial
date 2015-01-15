'use strict';

module.exports = /*@ngInject*/
  function homeController($scope) {
    $scope.posts = [{
      name: 'Sam Soffers',
      avatar: 'assets/images/avatar-02.jpg',
      body: 'How to Get Inspired: the Right Way - Designmodo http://bit.ly/1lE4uJc Good stuff from @designmodo!',
      pastTime: '3m',
      replies: [{
        name: 'Jed Bridges',
        avatar: 'assets/images/avatar-021.jpg',
        body: 'Great way to start the week. Thanks for sharing!',
        pastTime: '1h'
      },{
        name: 'Ren Walker',
        avatar: 'assets/images/avatar-022.jpg',
        body: 'Feeling inspired now... thanks for great article @designmodo',
        pastTime: '1h'
      }]
    },{
      name: 'Meg Robichaud',
      avatar: 'assets/images/avatar-03.jpg',
      body: 'My view this morning is simply beautiful... http://instagram.com/p/mV0PUrHRwQ/',
      pastTime: '25m',
      photo: 'assets/images/photo-01.jpg'
    },{
      name: 'Kerem Suer',
      avatar: 'assets/images/avatar-04.jpg',
      body: '8 Apps to Turn Pipe Dreams Into Prototypes http://on.mash.to/1oubyu8',
      pastTime: '50m'
    },{
      name: 'Liang Shi',
      avatar: 'assets/images/avatar-05.jpg',
      body: 'How to get animations out of your head http://bit.ly/1q7BngO Funny and useful.',
      pastTime: '1h'
    },{
      name: 'Vitor Leal',
      avatar: 'assets/images/avatar-06.jpg',
      body: 'You have to see this bike. It will make your daily commute a absolute joy ride! http://vimeo.com/p/mV0PUrHRwQ',
      pastTime: '1h',
      video: 'assets/images/photo-02.jpg'
    },{
      name: 'Pallavi Gupta',
      avatar: 'assets/images/avatar-07.jpg',
      body: 'Need some reading? 11 free ebooks for designers | Creative Bloq http://bit.ly/1lE5QDM via @netmag',
      pastTime: '25m',
      replies: []
    },{
      name: 'Jenny Shen',
      avatar: 'assets/images/avatar-08.jpg',
      body: 'Perfect day to be autside taking pictures http://instagram.com/p/mV0PUrHRwQ',
      pastTime: '25m',
      photo: 'assets/images/photo-03.jpg'
    },{
      name: 'Jonathan Moreira',
      avatar: 'assets/images/avatar-09.jpg',
      body: 'Thoughtful brand decisions vs. emotional brand decisions. http://ow.ly/vtT2i',
      pastTime: '1h'
    },{
      name: 'Jon Brennan',
      avatar: 'assets/images/avatar-10.jpg',
      body: 'Had some time to play with the interactive portion of inDesignCC http://bit.ly/1lE5QD',
      pastTime: '1h'
    },{
      name: 'Michael Wong',
      avatar: 'assets/images/avatar-11.jpg',
      body: 'Awesome! Check this out. http://instagram.com/p/mV0PUrHRwQ',
      pastTime: '25m',
      video: 'assets/images/photo-04.jpg'
    },{
      name: 'Ed Wellbrook',
      avatar: 'assets/images/avatar-12.jpg',
      body: '#freelancers will enjoy @WDTrends for graphic and web design tips and inspiration.',
      pastTime: '2h',
      replies: []
    },{
      name: 'Ignacio Giri',
      avatar: 'assets/images/avatar-13.jpg',
      body: 'Sponsor // Bootstrap Responsive Templates http://bit.ly/1qfijLOl #design',
      pastTime: '1h'
    },{
      name: 'Lauren Gray',
      avatar: 'assets/images/avatar-14.jpg',
      body: '7 Servings of Type for a Healthy Head & Body http://heydesigner.net/yfwnj',
      pastTime: '1h'
    },{
      name: 'Buzz Usborne',
      avatar: 'assets/images/avatar-15.jpg',
      body: 'Road trip! http://bit.ly/1hkXFdK',
      pastTime: '25m',
      photo: 'assets/images/photo-05.jpg'
    },{
      name: 'Scott Riley',
      avatar: 'assets/images/avatar-16.jpg',
      body: 'Deal with your problems before they deal with you happiness.',
      pastTime: '2h'
    },{
      name: 'Ryan O. Hicks',
      avatar: 'assets/images/avatar-17.jpg',
      body: 'Excited about @99U Conf lineup this year http://conference.99u.com',
      pastTime: '1h'
    },{
      name: 'Samihah Azim',
      avatar: 'assets/images/avatar-18.jpg',
      body: 'Love this picture http://instagram.com/p/mV0PUrHRwQ',
      pastTime: '25m',
      photo: 'assets/images/photo-06.jpg'
    }];
  };
