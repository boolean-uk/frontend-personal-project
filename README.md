# Flashcard App

## How do I use this?
- git clone this repo: https://github.com/AllyDouillette/vocab-trainer/ to your machine with "git clone …@github.com:vocab-trainer.git"
- cd in the directory
- run "npm ci"
- make TWO terminals, and run "npm run dev" and "npm run server"
- go to http://localhost:5173
- if you want to delete all config, copy the contents of src/api/clean-db.json into src/api/db.json.

# Feature overview
## General Config
- [x] User can create a new category (language / topical)
### Extended
- [ ] User can decide how many times he has to get a word right until it's marked as learnt
- [x] Light / dark theme support

## USAGE
- [x] User can enter new words / translations
- [x] User can decide to start a practice session
- [x] User can enter the translation, click on a check button & if it's a match it'll automatically mark it as correct, if it's not the user can still say it is (in case it's used to practice e.g. definitions for school)
- [x] time between practice instances grows longer (as in, the more times you successfully answered a flashcard, the longer it'll take for it to re-appear again)
### Extended
- [x] User can choose a file to import multiple flashcards
- [ ] review data before import 
- [x] User can see all entries and their translations

## ANALYTICS
- [x] User can see how entries are distributed over the different stages of learning
### Extended
- [ ] User sees daily stats -> will not do that, no value imo
- [x] The user sees total practice stats

# About This Personal Project
- Planning & Inspiration: I used a similar app in college and found it useful, it was [Phase6](https://www.phase-6.de/)
- Tech Stack (i.e. what technology / frameworks / libraries you used): Html CSS and React / JS, because I wanted to apply all my knowledge  here we've learnt so far
- What I enjoyed: figuring out the importing by file, CSS light / dark theme distinctions!
- What I found challenging: I learnt to hate CSV files for being totally unhinged and there being no standard for it
Links
- Online Hosted Project (if deployed -- deployment is optional but recommended): not deployed as it uses JSON server currently for a database substitute
- [Project GitHub Repo](https://github.com/AllyDouillette/vocab-trainer/)
