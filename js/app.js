import IntroScreen from './screens/intro-screen';
// import GreetingScreen from './screens/greeting-screen';
// import RulesScreen from './screens/rules-screen';
// import GameScreen from './screens/game-screen';
// import StatsScreen from './screens/stats-screen';

export default class Application {

  static showWelcome() {
    console.log('dsds');
    IntroScreen.init();
  }

  // static showGreeting() {
  //   GreetingScreen.init();
  // }

  // static showRules() {
  //   RulesScreen.init();
  // }

  // static showGame(state) {
  //   GameScreen.init(state);
  // }

  // static showStats(state) {
  //   StatsScreen.init(state);
  // }

}
