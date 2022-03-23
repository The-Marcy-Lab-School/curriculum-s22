# Lesson 0:2 - Collaborative Git

#### Yesterday's recap 

## Warmup Questions ##
* What is a branch in git? 
* What does fork mean? 
* What is a pull request? 

#
#
#
#

According to Github: 
- *Branching* -> Branches allow you to develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository.
You always create a branch from an existing branch. Typically, you might create a new branch from the default branch of your repository. You can then work on this new branch in isolation from changes that other people are making to the repository.
- *Forking* -> A fork is a copy of a repository that you manage. Forks let you make changes to a project without affecting the original repository. You can fetch updates from 
or submit changes to the original repository with pull requests.
- *Pull Request* -> Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, 
you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.


## Essential Questions
- When as a SWE should I branch and when should I fork? 



- *Forking* creates a full copy of your repository, 
whereas *branching* only adds a branch to your existing tree. 



## Github Repo and Commit History - GUI

In groups of 2 or 3, complete the following:

```
1. go to Github
2. create a new repo, with a README.md, named TikTok_repo
3. once created, check the number of commits
4. go to the README.md and use your markdown cheatsheet to add an italicized header
named TikTok
5. commit your changes on the Github gui
6. use markdown and make a list of two main things TikTok is used for
7. commit your changes on the Github gui
8. repeat step 6 one more time
```

## Command Line Interface Repo and Commit History - CLI

```
As a class: 
1. add remote TikTok_repo to local  
2. add to TikTok_repo README.md, 
3. push our changes to our remote (check your changes on Github)
4. check the commit history 

```


## Github Branching - GUI

In groups of 2 or 3, complete the following:

```

1. go to Github
2. create one branch, TikTok_f1
3. add to the README.md
4. commit changes
5. pull request 
6. merge changes 
```


## Command Line Branching - CLI

In groups of 2 or 3, complete the following:

```
Using the following commands below we will add branches to our existing TikTok_repo from the command line

* git checkout -b <branch-name> to create a new branch and switch to it
* git checkout <branch-name> to switch branches
* git branch <branch-name> to create a new branch but doesn't siwtch to it
* git branch to list all branches. A branch doesn't exist until there is at least one commit in it
* git merge <branch-name> means you are merging the commits in branch-name INTO the current branch you are on!
* git branch -d <branch-name> to delete branch. You can't delete branch you are currently on

```

## Fork a repository

```
1. go to slack, and fork the Github repo Fork_It
2. Caston will add you as a collaborator
3. git clone to local cloud9
4. git push to remote

```




## WHY? 
* - When as a SWE should I branch and when should I fork? 

## LABS 1:15pm - 3:15pm

* Pairing Lab: Git and JavaScript Practice
* Read on pull request