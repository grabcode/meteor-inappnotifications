# InAppNotifications

InAppNotifications is a simple meteor package aiming to quickly get a common UX pattern to give post user actions feedback
.

## The perfect Meteor app

In order to organize a meteor app, a good strategy is to split your application in packages. Here are some benefits:

* Full control over files load
* Clear visibility over dependancies
* Reusable code over multiple projects
* Better understanding of other packages - mostly the core ones

For this many reason, I can bluntly state that the perfect Meteor App has lots of packages, and few lines of codes.


## OK but not in "atmosphere" (the meteor packages hub)

We might not need to share this with the world, or you couldn't (keeping it private), or not sure you're going to commit and maintain it... Many reasons for not publishing your package onto atmosphere.

Then, how are we going to use it and still benefit from the collaboration workflow that layers on top of Github ?

Basically we can make the most of git submodules.


### How to use it

#### First step
In your meteor folder, create a "packages" directory

```mkdir packages```



#### Adding the package into your app
```git submodule add git://github.com/{{userName}}/meteor-{{packageName}}.git packages/{{userName}}:{{packageName}}```

```meteor add {{userName}}:{{packageName}}```

```git submodule update --init --recursive```


#### Removing the package from your app
```git submodule deinit packages/{{userName}}:{{packageName}}```

```git rm packages/{{userName}}:{{packageName}}```

```meteor remove {{userName}}:{{packageName}}```




## InAppNotifications package usage

Inject the template "inappnotifs" under the body tag.

### Notes

Currently the notifications looks like shit.


## Todos

Deal with versions

Use git hooks when possible
