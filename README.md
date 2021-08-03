# Welcome to Blak-Jak

To view the live project click <a href="https://blak-jak.herokuapp.com/">here</a>.

Technologies used: React, Redux, Flask, SQLAlchemy, SocketIO, Tailwind, CSS.

## Developed by:
### Jeb Griffin
<a href="https://www.linkedin.com/in/jeb-griffin-120631206/">LinkedIn</a>
</br>
<a href="https://github.com/JebGriffin85">GitHub</a>
</br>
<a href="https://jebgriffin85.github.io/">Portfolio</a>

### Chuck Kainrath
<a href="https://www.linkedin.com/in/chuck-kainrath-42820b20b/">LinkedIn</a>
</br>
<a href="https://github.com/chuckkainrath">GitHub</a>
</br>
<a href="https://chuckkainrath.github.io/">Portfolio</a>

### Tristan San Juan
<a href="https://www.linkedin.com/in/tristan-san-juan-75337920b/">LinkedIn</a>
</br>
<a href="https://github.com/tristan-88">GitHub</a>
</br>
<a href="https://tristan-88.github.io/">Portfolio</a>



### Main Features
- Single Player: All logged in users can play the AI in black jack.
- Multiplayer: Up to 4 people can chanllenge the dealer in a live game.
- Leader Board: All users are automatically ranked and the top 10 are displayed on the home page.


### Splash Page
All logged out users will land here and must sign up or login to start playing.

<a href="https://ibb.co/YcbPpbs"><img src="https://i.ibb.co/8rXN6XZ/Screen-Shot-2021-08-03-at-3-15-11-AM.png" alt="Screen-Shot-2021-08-03-at-3-15-11-AM" border="0"></a>


### Home Page
Displays nav functionality, users may view leaderboard, or start a game.

<img src="https://i.ibb.co/MZ1M6kp/Screen-Shot-2021-08-02-at-7-03-38-PM.png" />


### Single Player Game
A user can battle the AI in a single player game.

<img src="https://ibb.co/N2G6Rnh"><img src="https://i.ibb.co/k2PgZ6n/Screen-Shot-2021-08-02-at-7-03-55-PM.png" />


### Multi-Player Game
Up to four users can battle the AI in a live game.

<img src="https://i.ibb.co/94swMzK/Screen-Shot-2021-08-02-at-7-10-31-PM.png" />


### To Deploy:
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/chuckkainrath/cardgames.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run

   ```bash
   heroku login
   ```

5. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
7. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

8. Release your docker container to heroku

   ```bash
   heroku container:release web -a {NAME_OF_HEROKU_APP}
   ```

9. set up your database:

   ```bash
   heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
   heroku run -a {NAME_OF_HEROKU_APP} flask seed all
   ```

10. Under Settings find "Config Vars" and add any additional/secret .env variables.

11. profit
