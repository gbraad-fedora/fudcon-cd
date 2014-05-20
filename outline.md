# Consistent Development and Deployment
_you can easily set up a self-hosted CD environment._

Software development for the web used to be easy...
... and it was mostly done in isolation
... you only needed one language (maybe two languages)

Things have changed a lot since 2000 (PHP-Nuke 2000, WordPress 2003, Drupal 2001)
... new languages
... however hosters didn't change that easily
    * reluctant to update to later versions of PHP (or use CGI to offer two versions)
    * hardly any Python (Django) or Ruby (Rails) hosting
... mostly not done in isolation.


Terms
   Source code management
   DevOps
   Continuous Integration
   Continuous Delivery
   Continuous Deployment
   Node.js, Go, etc.
   Virtualization
   IaaS, PaaS, SaaS
   OpenStack
   LXC/Docker
   Linode, Digital Ocean, AWS


Fullstack engineering
   Haystack engineering


Development and build servers
   Run integration (it builds/works on my machine)
   Travis-CI
   Jenkins
   TW CruiseControl (Go.cd)
   How can Docker help
      Delivery
      Drone (build your code, run tests)


Demo
   simple webapplication
   uses jquery and some other external libraries
   Gulp to run lint, (possible uglify/minify)
      and Mocha tests
   needs node.js to do this.
      also run a simple development server using Express (livereload)
   push to bitbucket (or github)
      git hooks trigger the Drone build

n
Deployment and hosting
   Heroku
   Dokku (deploy code)

Demo
