# simplysocial

Building InVision's demo "simplysocial" in AngularJS and LESS CSS for fun and practice.


# Build

Make sure you have `gulp-cli` installed globally.

- `npm install`
- `bower install`
- `gulp`

The solution will be serverd at http://localhost:8080


# Notes
- Created custom webfonts for icons (using icomoon.io/app)
- Using simplified version of BEM for CSS syntax
- Could be using SCSS for CSS (chose LESS for simplicity of running it with NodeJs withouth dependencies)
- Not using LESS color functions at this point for not knowing the basic color palette yet
- Created angular filter to sanitize posts for security and automatically generate #hashtag and @mention urls
- The dialog is built for supporting dinamically changing the content on the fly (Eg. try resizing the textarea)
