# 吉拉德
## Gerard Braad
## <span class="lightblue">me</span><span class="white">@gbraad</span><span class="orange">.nl</span>


### <span class="orange">Software</span> / <span class="lightblue">Hardware</span> Engineer


### <span class="orange">F/OSS</span> community and development


### <span class="lightblue">Fedora</span> Project, FAmSCo


### <span class="orange">Dutch</span> Ministry of Defence


### <span class="lightblue">IT</span> Consultant at <b>Thought</b>Works


### Teaching



# CD

## Consistent <span class="orange">Development</span> and <span class="lightblue">Deployment</span>
#### you can easily setup a self-hosted CD environment



## 2000
## &nbsp;


## 2000
## PHP


## PHPNuke


## Wordpress


## Drupal


## 2005
## &nbsp;


## 2005
## ...


## Ruby on Rails


## Django


## ...


## Full-stack or haystack?


<img class="fill" src="./images/haystack.jpg" alt="Haystack engineering" />


## DevOps


## PaaS



## <span class="orange">Consistent</span>
## <span class="lightblue">Development</span>



## <span class="orange">Continuous</span>
## <span class="lightblue">Integration</span>


## Continuous Integration
![CI](./images/ci.svg "Continuous Integration")


## Shared repository
![CI](./images/ci.svg "Continuous Integration")


## Automate the build
![CI](./images/ci.svg "Continuous Integration")


## Build on integration machine
![CI](./images/ci.svg "Continuous Integration")


## Self-testing
![CI](./images/ci.svg "Continuous Integration")


## Easy access to deliverables
![CI](./images/ci.svg "Continuous Integration")


## Test in a clone of production
![CI](./images/ci.svg "Continuous Integration")


## Keep the build fast
![CI](./images/ci.svg "Continuous Integration")



## <span class="lightblue">How?</span>
## &nbsp;


## Build-scripts
## &nbsp;


## Build-scripts
## ... to <span class="orange italic">automate</span> your builds


## Build server
## &nbsp;


## Build server
## ... to improve build <span class="orange italic">consistency</span>


## Travis-CI


<img class="fill" src="./images/travis.png" alt="Travis" />


## Jenkins


<img class="fill" src="./images/jenkins.png" alt="Jenkins" />


## Go.CD


<img class="fill" src="./images/goenv.jpg" alt="Go pipelines" />


<img class="fill" src="./images/gocd.jpg" alt="Go dependencies" />


## Tests


## Unit-tests


## Behavioral tests 



## <span class="orange">Demo</span>?



## Docker
## &nbsp;


## Docker
## ... is lightweight virtualization


## Docker
## <span class="lightblue">operating system-level virtualization</span>

Note: provides a means to re-use system installed 
libraries


## <span class="lightblue">Containers</span>
## &nbsp;
## &nbsp;


## <span class="lightblue">Containers</span>
## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;provide <span class="orange italic">process-isolation</span>
## &nbsp;


## <span class="lightblue">Containers</span>
## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;provide <span class="orange italic">process-isolation</span>
## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;possibility to <span class="orange italic">allocate resources</span>


![VM](./images/fullvirt.svg "Virtual Machine/Virtualization")


![Docker](./images/docker.svg "Docker")


## <span class="lightblue">Containers</span>
## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;provide <span class="orange italic">process-isolation</span>
## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;possibility to <span class="orange italic">allocate resources</span>


## <span class="lightblue">Containers</span>
## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LXC
## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cgroups

Note: method for running multiple isolated
Linux systems (containers) on a single control host.



## LXC
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;


## LXC
## &nbsp;
## <span class="lightblue center">operating system-level virtualization</span>
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;


## LXC
## &nbsp;
## <span class="lightblue center">operating system-level virtualization</span>
## method for running
## &nbsp;
## &nbsp;
## &nbsp;


## LXC
## &nbsp;
## <span class="lightblue center">operating system-level virtualization</span>
## method for running
## <span class="lightblue center">multiple isolated</span>
## &nbsp;
## &nbsp;


## LXC
## &nbsp;
## <span class="lightblue center">operating system-level virtualization</span>
## method for running
## <span class="lightblue center">multiple isolated</span>
## Linux systems (<span class="orange italic">containers</span>)
## on a single control host



## cgroups
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;


## cgroups
## &nbsp;
## kernel feature to <span class="orange italic">limit</span>, <span class="orange italic">account</span>
## and <span class="orange italic">isolate</span>
## &nbsp;
## &nbsp;
## &nbsp;


## cgroups
## &nbsp;
## kernel feature to <span class="orange italic">limit</span>, <span class="orange italic">account</span>
## and <span class="orange italic">isolate</span>
## <span class="lightblue center">resource usage</span>
## &nbsp;
## &nbsp;


## cgroups
## &nbsp;
## kernel feature to <span class="orange italic">limit</span>, <span class="orange italic">account</span>
## and <span class="orange italic">isolate</span>
## <span class="lightblue center">resource usage</span>
## (CPU, memory, disk I/O, etc.) of
## &nbsp;


## cgroups
## &nbsp;
## kernel feature to <span class="orange italic">limit</span>, <span class="orange italic">account</span>
## and <span class="orange italic">isolate</span>
## <span class="lightblue center">resource usage</span>
## (CPU, memory, disk I/O, etc.) of
## <span class="lightblue center">process groups</span>



## <span class="orange">Demo</span>, please?


## $ docker pull [image name]


```bash

root@vps07:~# docker pull fedora
Pulling repository fedora
5cc9e91966f7: Download complete 
b7de3133ff98: Download complete 
511136ea3c5a: Download complete 
ef52fb1fe610: Download complete 
```


## $ docker run [image name] [command]


```bash

root@vps07:~# docker run fedora uname -a
Linux 17b6d4fbe1e4 3.13.0-24-generic #46-Ubuntu SMP Thu Apr 10 19:11:08 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux
root@vps07:~# docker run fedora cat /etc/fedora-release
Fedora release 20 (Heisenbug)
root@vps07:~# docker run fedora echo Hello, World!
Hello, World!
root@vps07:~# docker run fedora touch /tmp/bazinga
```


## $ docker ps -a


```bash

root@vps07:~# docker ps -a
CONTAINER ID        IMAGE                       COMMAND
2120010fe35e        fedora:20                   touch /tmp/bazinga
2a23a2804f2e        fedora:20                   cat /etc/fedora-rele
17b6d4fbe1e4        fedora:20                   uname -a            
0d43d9e6d79d        fedora:20                   echo Hello, World!  
bd49f1bdce76        dokku/gauth:latest          /bin/bash -c '/start
2b259bc79412        dokku/fudcon-cd:latest      /bin/bash -c '/start
```


## $ docker diff [container id]


```bash

root@vps07:~# docker diff 2120010fe35e
C /dev
C /dev/ptmx
C /tmp
A /tmp/bazinga
root@vps07:~# docker rm 2120010fe35e

```


![Docker](./images/docker2.svg "Docker layers")


## Why is this important?


## $ ./install.sh
## &nbsp;
## &nbsp;
## &nbsp;


## $ ./install.sh
## [<span class="red">Failed</span>]
## &nbsp;
## &nbsp;


## $ ./install.sh
## [<span class="red">Failed</span>]
## $ ./uninstall.sh
## &nbsp;


## $ ./install.sh
## [<span class="red">Failed</span>]
## $ ./uninstall.sh
## [<span class="red">Failed</span>]


## $ docker run ./install.sh
## &nbsp;
## &nbsp;
## &nbsp;


## $ docker run ./install.sh
## [<span class="red">Failed</span>]
## &nbsp;
## &nbsp;


## $ docker run ./install.sh
## [<span class="red">Failed</span>]
## $ docker run ./install.sh /opt
## &nbsp;


## $ docker run ./install.sh
## [<span class="red">Failed</span>]
## $ docker run ./install.sh /opt
## [  <span class="lightgreen">OK</span>  ]



<img class="fill" src="./images/drone-header.png" alt="Drone.io" />


## Build-server


## Easy installation
## &nbsp;


## Easy installation
## $ ./droned


<img class="fill" src="./images/drone-add.png" alt="Drone add" />


```bash

$ cat .drone.yml
image: bradrydzewski/node:0.10
script:
  - npm -d install
  - npm test
notify:
  email:
    recipients:
      - me@gbraad.nl
```


```bash

$ git add .drone.yml
$ git commit -m "Added .drone.yml"
$ git push origin master
```


<img class="fill" src="./images/drone-current.png" alt="Drone building" />


<img class="fill" src="./images/drone-error.png" alt="Drone error" />


<img class="fill" src="./images/drone-overview.png" alt="Drone dashboard" />



## <span class="orange">Consistent</span>
## <span class="lightblue">Deployment</span>



## Continuous Delivery 
## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;... or Deployment?


## Continuous Delivery 
## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;... or Deployment?
![CI](./images/cd.svg "Continuous Delivery/Deployment")


## Delivery != Deployment


## 8 Principles


## Process of releasing must...
## &nbsp;
## &nbsp;


## Process of releasing must...
## ... be repeatable
## &nbsp;


## Process of releasing must...
## ... be repeatable
## &nbsp;&nbsp;&nbsp;&nbsp;and reliable


## Automate everything 

Note: A manual deployment can never be described as repeatable and reliable (not if I’m doing it anyway!). You have to invest seriously in automating all the tasks you do repeatedly, and this tends to lead to reliability.


## If somethings difficult or painful
## &nbsp; 


## If somethings difficult or painful
## ... do it more often. 


## Keep everything in source control


## Done means 'released'


## Build quality in


## Everybody responsible
## for the release process


## Improve continuously


## 4 Practices


## Build binaries only once
## &nbsp;


## Build binaries only once
## ... and easily accessible


## Use the same mechanism to deploy


## Smoke test your deployment


## If anything fails
## &nbsp;


## If anything fails
## ... <span class="red">stop</span> the line!


## Continuous Delivery 
## &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;... or Deployment?
![CI](./images/cd.svg "Continuous Delivery/Deployment")


## Continuous Deployment is the next step of Continuous Delivery

Note: Every change that passes the automated tests is deployed to production automatically.



## How to deploy?
## &nbsp;


## How to deploy?
## ... automate!


## PaaS
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;


## PaaS
## a cloud model to <span class="orange italic">deliver</span> a
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;


## PaaS
## a cloud model to <span class="orange italic">deliver</span> a
## <span class="lightblue center">computing platform</span>
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;


## PaaS
## a cloud model to <span class="orange italic">deliver</span> a
## <span class="lightblue center">computing platform</span>
## typically <span class="orange italic">including</span>
## &nbsp;
## &nbsp;
## &nbsp;


## PaaS
## a cloud model to <span class="orange italic">deliver</span> a
## <span class="lightblue center">computing platform</span>
## typically <span class="orange italic">including</span>
## &nbsp;• <span class="lightblue">execution environment</span>
## &nbsp;
## &nbsp;

Note: a programming language execution environment.


## PaaS
## a cloud model to <span class="orange italic">deliver</span> a
## <span class="lightblue center">computing platform</span>
## typically <span class="orange italic">including</span>
## &nbsp;• <span class="lightblue">execution environment</span>
## &nbsp;• <span class="lightblue">database</span>
## &nbsp;


## PaaS
## a cloud model to <span class="orange italic">deliver</span> a
## <span class="lightblue center">computing platform</span>
## typically <span class="orange italic">including</span>
## &nbsp;• <span class="lightblue">execution environment</span>
## &nbsp;• <span class="lightblue">database</span>
## &nbsp;• <span class="lightblue">web server</span>


## Dokku
## &nbsp;


## Dokku
## ... a mini-Heroku


## <span class="orange">Demo</span>


```bash

$ cat package.json
{
  <snip>
  "dependencies": {
    "express": "~2.5.9"
  },
  "devDependencies": {
  <snip>
  },
  "scripts": {
    "test": "gulp",
    "start": "node server.js"
  },
  "engines": {
    "node": "0.10.x"
  }
}
```


```bash

$ cat Procfile
web: npm start
```


```bash

$ git remote add dokku dokku@apps.spotsnel.net:fudcon-cd
```


```bash

$ git push dokku master
Counting objects: 35, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (32/32), done.
Writing objects: 100% (32/32), 343.22 KiB | 0 bytes/s, done.
Total 32 (delta 2), reused 0 (delta 0)
-----> Cleaning up ...
-----> Building fudcon-cd ...
remote: Cloning into '/tmp/tmp.rioqngxsnd'...
remote: done.
remote: HEAD is now at c5eeb4b... Add styling (fonts and favicon)
       Node.js app detected
-----> Requested node range:  0.10.x
-----> Resolved node version: 0.10.28
-----> Downloading and installing node
-----> Restoring node_modules directory from cache
-----> Pruning cached dependencies not specified in package.json
-----> Writing a custom .npmrc to circumvent npm bugs
-----> Installing dependencies
-----> Caching node_modules directory for future builds
-----> Cleaning up node-gyp and npm artifacts
-----> Building runtime environment
-----> Discovering process types
       Procfile declares types -> web
-----> Releasing fudcon-cd ...
-----> Deploying fudcon-cd ...
=====> Application deployed:
       http://fudcon-cd.apps.spotsnel.net

To dokku@dokku.spotsnel.net:fudcon-cd
   88a15bc..c5eeb4b  master -> master
```


```bash

$ docker ps -a
CONTAINER ID        IMAGE                       COMMAND                PORTS <snip> STATUS
6271633e3e37        dokku/fudcon-cd:latest      /bin/bash -c '/start   0.0.0.0:49164->5000/tcp           
08e2e858a7bf        f069120d2efc                /build/builder         Exited (0)     
fd9526d0ab18        progrium/buildstep:latest   /bin/bash -c 'mkdir    Exited (0) 
```


## Continuous deployment?
## &nbsp;


## Continuous deployment?
## ... easy!


```

$ cat .drone.yml
image: bradrydzewski/node:0.10
script:
  - npm -d install
  - npm test
notify:
  email:
    recipients:
      - me@gbraad.nl
deploy:
  git:
    target: dokku@apps.spotsnel.net:fudcon-cd
```


<img class="fill" src="./images/drone-deploy1.png" alt="Drone automated deploy 1" />


<img class="fill" src="./images/drone-deploy2.png" alt="Drone automated deploy 2" />



## How does this work?
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;


## How does this work?
## &nbsp;
## Software <span class="orange italic">deployment</span> using
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;


## How does this work?
## &nbsp;
## Software <span class="orange italic">deployment</span> using
## <span class="lightblue center">git</span>
## &nbsp;
## &nbsp;
## &nbsp;
## &nbsp;


## How does this work?
## &nbsp;
## Software <span class="orange italic">deployment</span> using
## <span class="lightblue center">git</span>
## When code is <span class="orange italic">pushed</span> to repo,
## &nbsp;
## &nbsp;
## &nbsp;


## How does this work?
## &nbsp;
## Software <span class="orange italic">deployment</span> using
## <span class="lightblue center">git</span>
## When code is <span class="orange italic">pushed</span> to repo,
## <span class="lightblue center">hooks</span>
## &nbsp;
## &nbsp;


## How does this work?
## &nbsp;
## Software <span class="orange italic">deployment</span> using
## <span class="lightblue center">git</span>
## When code is <span class="orange italic">pushed</span> to repo,
## <span class="lightblue center">hooks</span>
## will perform <span class="orange italic">actions</span> on the
## &nbsp;


## How does this work?
## &nbsp;
## Software <span class="orange italic">deployment</span> using
## <span class="lightblue center">git</span>
## When code is <span class="orange italic">pushed</span> to repo,
## <span class="lightblue center">hooks</span>
## will perform <span class="orange italic">actions</span> on the
## <span class="lightblue center">ssh command / (post-update)</span>



## About 100 lines of <span class="lightblue">bash</span>


```bash

case "$1" in
  receive)
    APP="$2"; IMAGE="dokku/$APP"
    echo "-----> Cleaning up ..."
    dokku cleanup
    echo "-----> Building $APP ..."
    cat | dokku build $APP
    echo "-----> Releasing $APP ..."
    dokku release $APP
    echo "-----> Deploying $APP ..."
 dokku deploy $APP
    echo "=====> Application deployed:"
    echo "       $(dokku url $APP)"
    echo
```


```bash

  build)
    APP="$2"; IMAGE="dokku/$APP"; CACHE_DIR="$DOKKU_ROOT/$APP/cache"
    id=$(cat | docker run -i -a stdin progrium/buildstep /bin/bash -c "mkdir -p /app && tar -xC /app")
    test $(docker wait $id) -eq 0
    docker commit $id $IMAGE > /dev/null
    [[ -d $CACHE_DIR ]] || mkdir $CACHE_DIR
    pluginhook pre-build $APP
    id=$(docker run -d -v $CACHE_DIR:/cache $IMAGE /build/builder)
    docker attach $id
    test $(docker wait $id) -eq 0
    docker commit $id $IMAGE > /dev/null
    pluginhook post-build $APP
    ;;
```


```bash

  release)
    APP="$2"; IMAGE="dokku/$APP"
    pluginhook pre-release $APP
    if [[ -f "$DOKKU_ROOT/$APP/ENV" ]]; then
      id=$(cat "$DOKKU_ROOT/$APP/ENV" | docker run -i -a stdin $IMAGE /bin/bash -c "mkdir -p /app/.profile.d && cat > /app/.profile.d/app-env.sh")
      test $(docker wait $id) -eq 0
      docker commit $id $IMAGE > /dev/null
    fi
    pluginhook post-release $APP
    ;;
```


```bash

  deploy)
    APP="$2"; IMAGE="dokku/$APP"
    pluginhook pre-deploy $APP

    # kill the app when running
    if [[ -f "$DOKKU_ROOT/$APP/CONTAINER" ]]; then
      oldid=$(< "$DOKKU_ROOT/$APP/CONTAINER")
      docker inspect $oldid &> /dev/null && docker kill $oldid > /dev/null
    fi

    # start the app
    DOCKER_ARGS=$(: | pluginhook docker-args $APP)
    id=$(docker run -d -p 5000 -e PORT=5000 $DOCKER_ARGS $IMAGE /bin/bash -c "/start web")
    echo $id > "$DOKKU_ROOT/$APP/CONTAINER"
    port=$(docker port $id 5000 | sed 's/0.0.0.0://')
    echo $port > "$DOKKU_ROOT/$APP/PORT"
    echo "http://$(< "$DOKKU_ROOT/HOSTNAME"):$port" > "$DOKKU_ROOT/$APP/URL"

    pluginhook post-deploy $APP $port
    ;;
```


```bash
  cleanup)
    # delete all non-running container
    docker ps -a | grep 'Exit' |  awk '{print $1}' | xargs docker rm &> /dev/null &
    # delete unused images
    docker images | grep '<none>' |  awk '{print $3}'  | xargs docker rmi &> /dev/null &
    ;;
```


## nginx


```

upstream fudcon-cd { server 127.0.0.1:49163; }
server {
  listen      [::]:80;
  listen      80;
  server_name fudcon-cd.apps.spotsnel.net;
  location    / {
    proxy_pass  http://fudcon-cd;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $http_host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Forwarded-Port $server_port;
    proxy_set_header X-Request-Start $msec;
  }
}
```


## Containers
## &nbsp;


## Containers
## ... as the <span class="lightblue">Delivery Unit</span>


## More...

* Dokku - deployment
* Fig - deployment
* Flynn - deployment and orchestration
* Deis - deployment and orchestration
* Shipyard - monitoring
* CoreOS - Linux distro around systemd and docker
* Jenkins's docker plugin
* gear<span class="red">d</span>


## Still to do

* No browser tests for acceptance tests?!
* Unified containers
* Container as deliverable


## Questions



# 吉拉德 
## Gerard Braad
## <span class="lightblue">me</span><span class="white">@gbraad</span><span class="orange">.nl</span>
#### 微博/微信/Twitter: @gbraad
