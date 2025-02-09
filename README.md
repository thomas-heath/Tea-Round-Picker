# Tea Round Picker

As part of the interview process for Nisien.ai, I've been tasked with creating a Tea Round Picker!
This project will take Users and Drink orders as input, and then provide the user with a designated drink maker, solving all arguments over such matters.

I've built the front-end using Vite, it's using React and TypeScript.
I've built the back-end using .NET 8.

To build and run the front-end, assuming you have npm installed, open ./Front-end in a terminal use the command `npm run dev`. Out of the box it's configured to point at an API on a port that's used by an included Docker Compose file, you can run this from the same folder using the command `docker compose up`.

The back-end should be easy enough to run using Visual Studio, Rider or VSCode.

## Learning Experiences
- I configured and used VSCode as a primary development environment. Day to day I develop using Visual Studio, but as my personal computer runs Linux I've had to switch to using the terminal and VSCode. It has been quite interesting to use the CLI for .NET, feels like there's quite a lot of quality of life features missing but I assume that can be compensated for with different config. Will probably invest in Rider at some point if I decide to work on C# projects in my personal time.
- React & Typescript have been fun to get started with. `useState` function seems integral to how pages can function dynamically, and getting everything working once I'd figured out how to make it shared across pages/components was very satisfying. I assumed Typescript would error if I tried to pipe a response body into an incompatible model, but it errored when accessed which was tricky to figure out.

## Current State
- The front-end is functionally complete, although it isn't pretty and doesn't work very well if you try to attempt the flow multiple times. Because there's no delete endpoints in the API provided it's not very easy to re-use, especially because users have a 1-1 relationship with drink orders and you can't change existing orders. A workaround would be to have the front-end keep state of all the orders and users, and only give the POST DrinkOrders the UserIds from the current session but at that point the only purpose the API serves is picking the next user for the drink run, which could be done quite easily in the front-end.
- I didn't have time to get the back-end working. I've scaffolded the structure of the codebase and set up entity relationships, but core functionality isn't there and the relationships don't bubble up to the Controller level yet. There's also no code that decides on who makes the drink run. It also runs on a different port to what the front-end points to.

## Improvements
- The front end could store more state and display to the user the current roster of drinkers & their drinks. Could also defer hitting the database to until the end of the process so users can modify drinkers & their drinks. Could use some prettying up as well. If I'm honest in with the current requirements I'd ditch the back-end entirely and just make this a standalone single page application. It doesn't need persistent state.
- The back-end needs finishing to match the endpoints exposed in the docker file so it can replace it. I'd containerise it along with the front-end and upload both to Docker Hub so they can be run very compactly in the same way as the provided back-end. It currently uses a database in Memory so its state is wiped after every run. Not such a big deal with the current reqs but if I wanted to implement a history based selection process then I'd build a persistent database. DELETE & PUT endpoints are top of the list after persistent data so the front end has more options.
