# RS-GraphiQL
UI for GraphQL

1. Self Validation Video **Video**: [YouTube](https://youtu.be/MIrTA9zd6Sc)
2. **Task**: [link](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md) 
3. **Screenshot**:

<img width="1135" alt="Screen Shot 2023-05-27 at 9 26 42 PM" src="https://github.com/nikGrape/graphiql-app/assets/48928594/9612f930-7ed8-4b73-b62a-46a84f9d5eb5">

4. **Deploy**: [link](https://rs-graphiql-app-1453.netlify.app/#/welcome)

5. **Done**: 27 May 2023, Deadline: 28 May 2023

6. **Score** 75/90:

### Welcome route - 10/10

- [+] The welcome page should contain general information about the developers, project, and course. **2 point**
- [+] In the upper right corner there are 2 buttons: Sign In and Sign Up. **2 point**
- [+] If login token is valid and unexpired, change the Sign In and Sign Up buttons to the "Go to Main Page" button. **2 points**
- [+] When the token expires - the user should be redirected to the "Welcome page" automatically. **3 points**
- [+] Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form. **1 point**

### Sign In / Sign Up  20/20

- [+] Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be **5 points**
- [+] Client-side validation should be implemented. **10 points**
- [+] Upon successful login, the user should be redirected to the Main page **3 point**
- [+] If the user is already logged in and tries to reach these routes, they should be redirected to the Main page. **2 point**

### GraphiQL route - max 35/50
- [+] Working editor allowing to edit the query. **15 points**
- [-] (Not lazy loaded) Working documentation explorer, should be visible only when sdl request will succeed. **15 points**
- [+] Variables section. Should be closed/opened **5 points**
- [+] Headers section. Should be closed/opened **5 points**
- [+] Response section. **10 points**


### General requirements - max 5/10

- [+] Localization **5 point**
- [+] Sticky header **5 points**
