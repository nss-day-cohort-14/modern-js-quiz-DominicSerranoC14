# Modern JavaScript Developer Quiz
# Robot Battledome

## Setup

1. To install run the following commands.

    ```bash
    npm install --save
    ```

##About this project

This project was designed to utilize the most current developer technologies, and the latest features released in the ES6 2016 release, such as:

1. Use of **let** and **const**
1. Fat arrow functions
1. String literals
1. Object shorthand
1. Prototypal inheritance using **new** keyword


Some of the technologies I used in this project are:

1. jQuery v3
1. Jasmine testing framework
1. Browserify

The function of this project is to create a simple game where the user chooses two robot characters from **3** possible types, and **6** possible models or robots.

Each character takes on a name that the user can pass to it, and has a predefined weapon and other properties. The attack and defense of each robot model has a randomly generated health and attack. Each model of robot also has either an offensive or defensive advantage, based on the model selected.

Once the player has entered valid information for both characters to be generated, the attack button is pressed, and the robots attack each other on a turn-by-turn basis until one of their health amounts are less than zero. Once this happens, the winner is declared and the game ends.


## Bonus Goals

### Bonus Logical Requirements

These are **completely** optional, once you have the basic requirements met and want to practice object composition.

1. Define at least six different modifications and six different weapons that can be added to a robot.
1. Each modification should provide some combination of the following benefits - increased protection, increased damage, or evasion capability (ability to avoid some attacks).
1. Define the range of damage that each weapon can do.


### Bonus Functional Requirements

If you have completed the base requirements, and want to explore object composition more, you may choose to implement these requirements. They are **completely** optional.

1. When your user interface first loads, provide the user with buttons so that one specific robot model can be chosen as Player 1.
1. Once the user selects a robot model for Player 1, show a button for each weapon that can be added to the robot.
1. Once the user selects a weapon for Player 1, show a button for each modification that can be added to the robot.
1. Once Player 1 has a modification, provide the user with buttons so that one specific robot model can be chosen as Player 2.
1. Once the user selects a robot model for Player 2, show a button for each weapon that can be added to the robot.
1. Once the user selects a weapon for Player 2, show a button for each modification that can be added to the robot.
1. Once the modification for Player 2 is chosen, the battle begins.
1. Each round of battle should determine the amount of damage each robot will do with its weapon.
1. That damage should then be adjusted based on the modifications that it has, and what its opponent has.
1. Rounds continue until one of the robots has 0, or less than 0, health.
1. When the battle is over display the outcome to the user. For example...

##### The Viper Drone defeated the Behemoth ATV with its flamethrower.
