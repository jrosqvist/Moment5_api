# Moment5_api
Detta är ett API som hämtar kurser från REST-webbtjänsten från Moment5. Det är även möjligt att lägga till och ta bort kurser.
Datat hämtas, läggs till och raderas med Fetch.

Inmatat data konverteras till JSON och skickas till webbtjänsten. Då datat hämtas via en loop läggs även en radera-knapp
till som får ID:t från databasen.

En färdig webbaplikation finns upplagd på https://studenter.miun.se/~joro1803/dt173g/moment5_api/courselist.html

OBS! För tillfället är tillfredsställande kontrollfunktioner att inmatat data uppfyller vissa kriterier ej tillagda.
