# What's the Weather?

View the [live demo](https://ryanbranco.github.io/timelyMdWeatherApp/)

A simple weather app the utalizes the OpenWeather API.

Uses the browsers geolocation feature to get the users latitude and longitute to make the first api request. Subsequent requests can be made by typing a city into the search bar.

After the user has searched a city, they have the option to set it as their preferred location. That pins a button at the top that allows them to see the weather for that location at any moment.

There is a list of features that I would like to add such as always displaying the weather for the preferred location at the top, displaying more data such as "feels like", "wind speed", "sunrise and sunset" etc... but I have to stop myself somewhere and I don't believe that the is goal of this project.

NOTE: I couldn't pass the current ISO timestamp in the header for the api requests because it would return a cors error(passing any sort of headers would return a cors error). A solution that I thought of would be set up a node.js backend and call the api there... but I think that is beyond the scope of this project.
