# Unreal Estate: Find the way home
## Second Milestone Project 
### Code Institute / Interactive Front-End Development
[Live Page](https://krisztinatxt.github.io/unreal-estate-second-milestone-project/)
## Table of Contents

## UX
### Project Goals
Unreal Estate is a maze game with four different levels. Your mission is to help the slug to find his way home, to his shell, and become a snail.
The name of the game is one kind of tribute to [Unreal Engine](https://en.wikipedia.org/wiki/Unreal_Engine) and wordplay at the same time.
This game is my second milestone project at [Code Institute](https://codeinstitute.net/).
My goal was to build a simple game that relies heavily on JavasScript, so as a beginner at Interactive Frontend, I can achieve and show my fluency in Javascript.

### User Stories

* As a user, I want to play a maze game with trying, but feasible levels.
* As a user, I want to know how many steps I solved the maze.
* As a user, I want to easily access the navigation and the levels.
* As a user, I want to send feedback to the developer of the game.


### Developer Goals

My goal was to learn and practice JavasScript and Jquery, and at the same time build my portfolio, and create something I would use.

### Design

With my design choices I wanted to conjure the old school game's feeling.
Container boxes, buttons and modals have rounded corners to make the image more friendly.
Modals and buttons are built with [Boostrap](https://getbootstrap.com/) to help the responsiveness of the page, and keep a consistent image. 

#### Color Scheme
To find out, what colors would match with the game's cheery and facetious feeling, I used [ColorSpace](https://mycolor.space/).
I also used [Eye Dropper Chrome extension](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka) to make sure that colors on my page are consistent.
My choiches were a green and blue to the maze, rules, and dashboard; yellow for the slug, the logo, and the level buttons, light pink to the background, and black for the walls.
Hex values of the colors I used:

- ![#FFF3FA](https://placehold.it/15/FFF3FA/000000?text=+) `#FFF3FA`
- ![#649B92](https://placehold.it/15/649B92/000000?text=+) `#649B92`
- ![#68A376](https://placehold.it/15/68A376/000000?text=+) `#68A376`
- ![#f7c873](https://placehold.it/15/f7c873/000000?text=+) `#f7c873`
- ![#ffc107](https://placehold.it/15/ffc107/000000?text=+) `#ffc107`
- ![#f7c873](https://placehold.it/15/f7c873/000000?text=+) `#f7c873`

#### Fonts

I used [Google Fonts](https://fonts.google.com/), the font I choosed is Roboto Mono. as I wanted to give the game an old school and similar to typwriter's style. 
Roboto Mono is easy to read, but it looks a little bit special thanks to the serifed typeface.

### Wireframes 

During the planning process to this project, I created a couple of wireframes with [Balsamiq](https://balsamiq.com/), trying to image how the site will look on big or small devices.
To be sure, that I can see how the canvas will have enough space on the screen, I also made wireframes for small devices in landscape mode. 
It turned out, that the landscape layout is much better because of the size of the game, so I am going to share these mockups also.
- [Game Page, Victory Modal, and Feedback Form in desktop view](https://github.com/krisztinatxt/unreal-estate-second-milestone-project/tree/master/wireframes/desktop);
- [Game Page, Victory Modal and Feedback Form on smaller devices, portrait and landscape mode](https://github.com/krisztinatxt/unreal-estate-second-milestone-project/tree/master/wireframes/mobile).

Implementation ended up being slightly different.

## Features
### Existing Features

On arriving at the page, you can see three different containers. 
1. First one named as dashboard, which contains the: 
 - logo,
 - the name of the game,
 - little help about how to play,
 - the navigation buttons,
 - the level selector buttons,
 - two icons which let you contact the developer,
 - and copyright. 

I had a lot of thinking about how to implement navigation, and I decided that instead of using WASD or navigation arrows, I create a small joystick.
I am aware of that this solution doesn't let the user to play this game really fast, but I think that because the style of the game, and the player of it, speed is not very key.
The boostrap offset wasn't working by itself, so I set a separate div for each button, this fixed the problem.
The user can choose between four levels: Easy, Medium, Hard and Insane. 
At the bottom of the dashboard you can see the copyright and two buttons.
 At the beginning these contents were in the footer of the page, but when I was working on making this site responsive, I had to realise, that the canvas blocks me from setting the footer at the bottom in the way I want.
The only way it worked was setting the footer's position to `fixed`, but that would block part of my content on small devices. I consulted with tutors, hoping that we can solve the problem together, but we realised that this is a shortcoming of canvas.
Therefore the footer is not considered important in the case of the game, I removed, and I moved it's contents to the bottom of the dasboard.
When the use click on the GitHub icon, it leads to my GitHub repositiories, while when he/she hits the smaill envelope, a modal pops up.
This modal is for sending feedback to the developer: the user have to type his/her name, email address and feedback (all of the fields are required), and hit the submit button.
If the feedback got submited, the modal disappear, and an other modal pops up, telling the user, that the feedback was succesfully submitted.
In the case that for some reason, the feedback can't be submitted, an alert window turns up, where you can see an error message, asking the user to send an email to the address below.


2. Second container is named as rules.

It starts with a note for mobile and tablet users to switch their devices to landscape mode for the better experience.
I worked a lot to make the game fully responsive, but I had to realise, that working with canvas doesn't let me to give the same user experience for every devices.
Fortunatelly, I asked the tutor team about this problem, and they made me realize, that this is normal, and the only way this is considered as bad practice is not giving an alert to my users, because then they get frustrated and just leave the page.
Therefore I added a small note, and it seems to "work": in the testing phase I asked my friends to send me picture when they are playing, and all of the mobile screenshoots were in landscape position.

3. The third container is the game itself.

When I started working on this game, I was really new to `JavasScript`, I didn't know where to start, so you can see a lot of experimantation in my first `commits`.
At the very beginning I tried to understand how a maze game works, I tried to make existing games work, and break down to pieces, to see how do I want to build my game.
After a lot of research, I decided to use canvas, and draw my game and it's components on that. 
The canvas has three components: the maze (with four different levels), the player and the destination. 
To avoid the player going through the walls, I set the wall's `rgba` value as an obstable. 
When the player and the destination is touching, you can see a modal with victory message and an implemented move counter telling the player that in how many steps did they reach the destination.
At first, I built a custom modal for diplaying victory message, but it caused a bug, because it blocked other modal's overlay, so I had to remove and change to Boostrap modal.

### Features Left to Implement

1. I mentioned before the way I avoid my player going through the walls. Currently this function is not as perfect as I want: when the the edge of the walls are not sharp, the slug can "enter" the wall, altough he can never go through them.
As I know, in this case this is the best solution because I am using picture as maze, but in the future I would like to learn to how generate different levels using Javascript, so then I can easily tell me player where to stop.

2. I am planning to add a high score modal to the game, so when the player comes back, they can see what was the highest score they achived.

## Testing

Jasmine testing didn't seem essential for this particular project as I can test all of the function manually.
I also used validator to check the potencially errors.

[HTML Validaton](https://validator.w3.org/): I have one type of error saying that: `Attribute ontouchstart not allowed on element button at this point.`
After trying to fix this for a while, I had to admit, that I am oblied to ignore this message, because withouth `ontouchstart` my navigation is out of order.

[CSS Validation](https://jigsaw.w3.org/css-validator/#validate_by_input): No error found, valid.

[JavaScript Validation](https://esprima.org/demo/validate.html): No error found, code is syntactically valid.

[JSHint Metrics](https://jshint.com/):
- There are 21 functions in this file.

- Function with the largest signature take 6 arguments, while the median is 0.

- Largest function has 19 statements in it, while the median is 4.

- The most complex function has a cyclomatic complexity value of 9 while the median is 1.

I manually tested all of the functions using different browers and devices: all buttons work, maze images load, submit form sends me the email, GitHub profile opens in new window, navigation works on each level, victory modal pops up in time, move counter is well implemented.
Besides my test, I asked friends and family to play the game as much as they can, and tell me their opinion to help me what can I improve with.
The page is responsive, altough as I mentioned, users with small devices are adviced to switch to landscape mode for better user experience.

## Deployment

This website was written in GitPod, and it's hosted using Github, deployed from the master branch (via Settings). I've saved after every important change: starting with git status, git add ., git commit -m"" and in the end pushing the git to the Github repository. After every commitment, when you refresh the repository, you can see the changes. The main (landing) page of the website is named index.html.

## How to deploy the site

- Login to GitHub.
- From the list of the repositories, select the [Unreal Estate - Second Milestone Project](https://github.com/krisztinatxt/unreal-estate-second-milestone-project).
- From the menu, click on the Settings (you can find under the name of the repository).
- Scroll down to the Page section, select Master Branch from the dropdown menu.
- The website is deployed, you can find the link in Page section.
- If it's not working, or you can't see the changes you've made, wait a minute, and refresh the page.
- Every time you commit changes, you can find the link of the deployed site at the same place.

### How to deploy locally
If you want to clone this project and run locally, you have to do the following:

- Follow [this](https://github.com/krisztinatxt/unreal-estate-second-milestone-project) link to my repository on GitHub.
- Click on the Clone or download button (right side, next to the Gitpod button).
- Copy the clone URL.
- In your local IDE open Git Bash.
- Change the working directory to the location where you want the cloned directory to be made.
- Type git clone, and paste the URL you copied from the Clone or download section.
- Press Enter to creat your local clone.

## Technologies Used

- [GitHub](https://github.com/);

- [GitPod](https://gitpod.io/);

- [HTML](https://en.wikipedia.org/wiki/HTML5);

- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript);

- [Bootstrap](https://getbootstrap.com/);

- [Jquery](https://jquery.com/);

- [EmailJS](https://www.emailjs.com/);

- [Autoprefix](https://autoprefixer.github.io/);

- [FontAwesome](https://fontawesome.com/);

- [GoogleFonts](https://fonts.google.com/);

- [MazeGenerator](https://keesiemeijer.github.io/maze-generator/#);

- [Balsamiq](https://balsamiq.com/);

- [HTMLValidator](https://validator.w3.org/);

- [CSSValidator](https://jigsaw.w3.org/css-validator/)

- [JavaScriptValidator](https://esprima.org/demo/validate.html);

- [HTMLFormatter](https://htmlformatter.com/);

- [CSSBeautifier](https://www.freeformatter.com/css-beautifier.html);

- [JSHint](https://jshint.com/);

- [Favicon](https://www.favicon-generator.org/);

- [ColorSpace](https://mycolor.space/);

- [HatchFul](https://hatchful.shopify.com/);

- [Pixlr](https://pixlr.com/);

- [MarkDownLit](https://dlaa.me/markdownlint/);

## Credits

### Content
All text were written by me.

### Media

- Pictures for the maze was made with [MazeGenerator](https://keesiemeijer.github.io/maze-generator/#).
- The player's and the destinations picture is from [ClipArt](http://clipart-library.com/). The slug used to be red, but to keep consistency in colors, I repainted.
- To create a logo I used [HatchFul](https://hatchful.shopify.com/).
- To convert the logo to a favicon, I used [Favicon](https://favicon.io/).
- The Github and message icons are from [FontAwesome](https://fontawesome.com/).

### Code

- I learnt a lot about structure of canvas, the components and navigation from [W3Schools](https://www.w3schools.com/graphics/game_images.asp);
- Code for resizing canvas sourced from [this video](https://www.youtube.com/watch?v=1y57COMRSdA);
- Code for moving my player inspired by [this article](https://www.codeproject.com/Articles/577080/Create-an-HTML-and-JavaScript-Maze-Game-with-a-ti);
- How to implement EmailJS in a modal is from official [EmailJS docs](https://www.emailjs.com/docs/sdk/installation/);

## Acknowledgements 

Special thanks to:

- Code Institute Tutor Team, they helped a lot during this project, they were always professionals, patient, and really helpful.
- Tutor [Stephen](http://github.com/darilligames), who knows everything about canvas, and helped me a lot to understand how it works.
- Slack Community to be always there when I need them.
- Everybody who did take time to test this game, and give me feedback.
- My mentor, [Aaron Sinnott](https://github.com/aaronsnig501) for his advices.



This site is for educational use.

Krisztina Szabó

Code Institute

2020








