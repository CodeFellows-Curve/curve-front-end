<br>

![Curve Logo](https://github.com/CodeFellows-Curve/project-resources/blob/master/assets/logoSnip.JPG)

# Curve: Curve Front End

## DESCRIPTION

<details>
  <summary><b>Contributers</b></summary>
    <ul>
      <li>Vanessa Wei</li>
      <li>Spencer Hirata</li>
      <li>Joseph Wolfe</li>
      <li>Jon Gentry</li>
      <li>Gregory Dukes</li>
      <li>Cory Henderson</li>
      <li>Chris Merrit</li>
      <li>Billy Bunn</li>
      <li>Alex White</li>
      <li>Aaron Ferris</li>
    </ul>
</details>

This Group was split into two teams and tasked with creating the front-end, this user focused portion of the Curve app. The Group was split into two teams for this initial part of the project. One team focused on the UX/UI and styling of the app, while the other focused on the logic and integration with the back-end, or server side of the app.

---

## Client Requirements

The client had several requirements for us to try to achieve with the front end of this app. First and foremost, they wanted us to re-create the functionality of an example found at [Medium: Snowflake](https://snowflake.medium.com). Other requirements include:

- Implement GraphQL
- Utilize Gatsby.js
- Dynamically import Competencies and Proficiencies

## Deployment Link

- [Curve: Your growth, visualized](https://codefellows-curve.netlify.com)

## How to run locally

Clone the repo and open in your favorite editor. Run `npm -i` to install the necessary dependencies. Run `npm start` to get the app up and running. Have fun!

## Frameworks and Tools Used

- Node.js
- React.js
- Redux
- Gatsby.js
- Apollo.js
- GraphQL
- Medium
- docz
- Jira
- VS Code
- VIM

#### And Rationale for that choice:

We choose Node because we wanted to write this in JavaScript and Node is the preferred platform for JS applications. We wanted to use Gatsby because it had built in support for GraphQL and Apollo. Those frameworks gave us capabilities we needed for speedy data queries. The original inspiration for this app was found on the Medium website, and we chose to use docz to document the app because it plays nicely with Gatsby. We utilized Jira for our agile focused daily sprints and Khanbhan board, with team managers setting tasks and assigning them to team members.

## UML

![frontEnd UML](https://github.com/CodeFellows-Curve/curve-front-end/blob/staging/team-pics/CurveFrontEnd.jpg)

## Process flow

<details>
  <summary><b>JavaScript Front-End Team Schedule</b></summary>
    <ul>
      <li><b>9:00am–9:30am</b>: Meet up for internal team plan of the day.</li>
      <li><b>9:30am–10:00am</b>: Standup meeting with integration team.</li>
      <li><b>10:00am–12:00pm</b>: Work on features.</li>
      <li><b>12:00pm–1:00pm</b>: Break for lunch as needed.</li>
      <li><b>1:00pm–4:00pm</b>: Continue work.</li>
      <li><b>4:00pm–4:30pm</b>: Standup meeting.</li>
      <li><b>4:30pm–5:00pm</b>: Continue work.</li>
      <li><b>5:00pm–5:30pm</b>: Scrum of Scrums.</li>
      <li><b>5:30pm</b>: Optionally work individually on feature branches.</li>
  </ul>
  </details>

## Current functionality

The front-end is a Gatsby application. Before a user is logged in through Auth0, three pages can be accessed:

1. `/`: A logo and "log in" button which routes to the `https://curveauth.auth0.com/` log in page
2. `/about`: A page with general information about the project and the full project team members
3. `/docs`: Site documentation created with [docz](https://www.docz.site/) and populated by `.mdx` files

After logging in through Auth0, the user is redirected to the `/app/graph` page. This page renders an initial user's professional competency/proficiency data in interactive data visualizations (graphs and tables). This view is based on the [Medium application](https://snowflake.medium.com) originally presented by the client.

If logged in, the user can also navigate to the `/app/list` page by clicking on the "All Users" navigation link. This page lists all users in the back-end graphQL database. Clicking on a users name navigates back to the `/app/graph` page re-rendered with that user's data.

## Known bugs

#### Existing limitations, etc

- Clicking a different "milestone" (circle in the pie) of the "focused" proficiency on the nightingale chart will not update the proficiency points _until_ another milestone is clicked/focused on.
- The stripe of proficiencies at the bottom of the graph page overflows the page to the right.
- Navigation of each proficiency through the arrow keys is not fully functional. Up/down arrow events aren't handled correctly.
- All text/copy for the proficiencies, milestones, examples, etc. is imported from a large object literal (`components/constants.js`) instead of the existing markdown files for each proficiency and milestone. Work was started on this, but not completed; see the [`markdwon-data`](https://github.com/CodeFellows-Curve/curve-front-end/tree/markdown-data) branch and the logic within [`utils/mardown-data-processor.js`](https://github.com/CodeFellows-Curve/curve-front-end/blob/markdown-data/src/utils/markdown-data-processor.js) (it attempts to reshape the data from [this query](https://cfcurve.azurewebsites.net/graphql/?query=%7B%0A%20%20individual(name%3A%20%22Hannah%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20review%20%7B%0A%20%20%20%20%20%20category%20%7B%0A%20%20%20%20%20%20%20%20categoryName%0A%20%20%20%20%20%20%20%20overallScore%0A%20%20%20%20%20%20%20%20subcategory%20%7B%0A%20%20%20%20%20%20%20%20%20%20subCategoryName%0A%20%20%20%20%20%20%20%20%20%20score%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) into the shape of initial state within the `graph-reducer.js`).

## Tasks remaining

#### TODOs

- [ ] Documentation in `.mdx` files for various components and modules
- [ ] `src/components/graph/index.js` & `/KeyBoardListener.js`: Actions and reducers for keyboard events
- [ ] `src/components/header.js`: Move styling from styled component to separate `.scss` file
- [ ] `src/pages/app/index.js`: Move {connect} to a component within the app root
- [ ] `src/reducers/graph-reducer.js`: Dispatch 'handleTrackMilestoneChange' somehow with parameters (state.focusedTrackId, newMilestone)
- [ ] `src/utils/auth-service.js`: Silent auth will not work with Google test key Auth0 provides for development; generate Google keys and add them to the Auth0 configuration.
- [ ] GraphQL query and mutations testing.

## Recommendations for future development

Ideally, the medium data visualization functions should be refactored to work with the data from the graphQL Query without having to reshape the data. This would make it easier to change the data, store it in the redux store, then post it back to the database. There should be more granular access control, and should be possile to show content depending on the role of a user. The data needs to be dynamically rendered, and since Gatsby needs to be build on deployment, it might be better to use a different front end framework. There should be a defined and robust admin panel, that will allow the superuser/admin to change the roles of other users or see employees/students in their team.

## Docs Referenced (links)

#### Client's Inspiration Material
- [Medium's Snowflake App - Live Site](https://snowflake.medium.com/)
- [Medium's Snowflake App - GitHub Repo](https://github.com/Medium/snowflake)
- [CircleCI blog about engineering matrixes](https://circleci.com/blog/why-we-re-designed-our-engineering-career-paths-at-circleci/)
- [Engineering Competency Matrix](https://docs.google.com/spreadsheets/d/131XZCEb8LoXqy79WWrhCX4sBnGhCM1nAIz4feFZJsEo/edit#gid=0)
- [Code Fellow's Professional Competencies](https://codefellows.github.io/common_curriculum/career_coaching/Professional_Competencies)


#### UI/UX
- [Side-drawer mobile navigation menu](https://medium.com/@heyoka/responsive-pure-css-off-canvas-hamburger-menu-aebc8d11d793)
- [d3 Tutorials](https://scrimba.com/g/gd3js)


#### Other Configuration 
- [Apollo Client (for graphQL queries to Apollo Server back-end)](https://www.apollographql.com/docs/react/)
- [Gatsby docs](https://www.gatsbyjs.org/docs/)
- [Gatsby "Link"](https://www.gatsbyjs.org/docs/gatsby-link/)
- [And another link](http://someurl.link)

<!-- ##### SUB HEADERS -->
<!--
 xof nworb kciuq eht xof nworb kciuq eht xof nworb kciuq eht xof nworb kciuq eht xof nworb kciuq eht xof nworb kciuq eht xof nworb kciuq eht xof nworb kciuq eht xof nworb kciuq eht xof nworb kciuq eht xof nworb kciuq eht xof nworb kciuq eht xof nworb kciuq eht
-->

---

footnotes

<!-- Lengthy lists of things? Use: -->
<!--
<details>
  <summary><b>List Title</b></summary>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
</details>
 -->

<!-- Endpoints? Methods? Arguments? Can use: -->
<!--
| Method | Use | Big O Time | Big O Space | IN | OUT |
| :----------- | :----------- | :-------------: | :-------------: | :-----------: | :-----------: |
| Method | desc | O(n) | O(n) | DICT | LIST |
 -->
