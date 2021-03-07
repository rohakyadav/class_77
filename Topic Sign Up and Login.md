Topic Sign Up and Login

● Create Sign Up and Login Screen 

● Authenticate users after they have signed up

 ● Add Lottie Animation on Sign Up Page

We wrote user stories, thought about the workflow and designed a rough wireframe for the Book Santa App.

We want them to sign up and authenticate themselves. They can then login and use the app. We created the login page for our Wily App Someone had to create the username and password for the user. Only teachers whose username and password were created could use it.

That was good enough for our Wily app where we wanted only teachers to use our app. In Book Santa App however, we want any user to be able to authenticate themselves and use the application.

On terminal, we can type: expo init BookSanta to create a BookSanta Project in Expo. Then we can move to the BookSanta Directory

Two TextInputs to collect email and password. A login button and a sign up button.

User should be able to sign up if they are using the App for the first time or login if they have already created their account.

We can create a new Component called WelcomeScreen in 'screens'. We can export the component from WelcomeScreen. We can import and use it inside App.jsstart building the UI for this. We will create the sign up and login feature after that.

creates a new component called WelcomeScreen which renders a simple Text. exports the Component from WelcomeScreen.js and then imports and uses it from App.js

add the two TextInput Components on the WelcomeScreen which will collect usernames and password.

\- Adding Two TextInput Components on the WelcomeScreen to collect email and password - Make the TextInput Components editable

TouchableOpacity Component



What do we want to do when the user clicks on the Sign Up Button. We want to create a user with the given email and password in our database.

What do we want to do when the user clicks on the Login Button. We want to authenticate the user and allow them to get inside our app.

Firebase has services built to create a new user and to authenticate a user using email and password.

Let's create a new cloud firestore database called BookSanta which will contain the users and database for the app. Let's also create a config file and import it in our Welcome Screen. Also, let's install and import firebase in our project.



creates a new firestore database

installs the firebase node module in their project.

creates a config.js file in the project containing the API keys

imports config.js as db and firebase into the project.