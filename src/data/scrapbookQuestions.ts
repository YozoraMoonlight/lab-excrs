import { CategoryDef } from '../types/exercise';
import { doubleField, intField, lineField, wordField } from '../utils/fieldBuilders';

export const scrapbookCategory: CategoryDef = {
  id: 'scrapbook',
  name: 'Scrapbook-Type Questions',
  prefix: 'SCR',
  tagline: 'A personal profile page about you',
  description: 'Capture your background, interests, memories, and goals as a scrapbook profile.',
  programTitle: 'MY SCRAPBOOK',
  highlights: ['Nickname', 'Hometown', 'Favorite school memory', 'Career goal'],
  fields: [
  lineField('fullName', 'fullName', 'Full Name', ["Enter your full name:", "What is your complete name?", "Type your first and last name:"], 'e.g. Andrea Mae Santos'),
  wordField('nickname', 'nickname', 'Nickname', ["Enter your nickname:", "What do your friends call you?"], 'One word, e.g. Andi'),
  intField('age', 'age', 'Age', ["Enter your age:", "How old are you?"], 'Whole number, e.g. 18', { group: 'age', min: 1, max: 120 }),
  intField('birthYear', 'birthYear', 'Birth Year', ["Enter your birth year:", "What year were you born?"], '4-digit year, e.g. 2007', { group: 'age', min: 1900, max: 2026 }),
  wordField('birthMonth', 'birthMonth', 'Birth Month', ["Enter your birth month:", "In what month is your birthday?"], 'One word, e.g. September'),
  doubleField('height', 'heightInMeters', 'Height (m)', ["Enter your height in meters:", "How tall are you in meters?"], 'e.g. 1.62', { min: 0.5, max: 2.8 }),
  lineField('hometown', 'hometown', 'Hometown', ["Enter your hometown:", "Where is your hometown?", "Which town or city did you grow up in?"], 'e.g. San Pablo City, Laguna'),
  wordField('favColor', 'favoriteColor', 'Favorite Color', ["Enter your favorite color:", "What is your favorite color?"], 'One word, e.g. Teal'),
  lineField('favFood', 'favoriteFood', 'Favorite Food', ["Enter your favorite food:", "What dish could you eat every day?"], 'e.g. Chicken adobo'),
  lineField('favSubject', 'favoriteSubject', 'Favorite Subject', ["Enter your favorite subject:", "Which school subject do you enjoy the most?"], 'e.g. Computer Programming'),
  lineField('favHobby', 'favoriteHobby', 'Favorite Hobby', ["Enter your favorite hobby:", "What hobby do you enjoy the most?"], 'e.g. Sketching portraits', { group: 'pastime' }),
  lineField('favSport', 'favoriteSport', 'Favorite Sport', ["Enter your favorite sport:", "Which sport do you like to play or watch?"], 'e.g. Table tennis'),
  lineField('favBook', 'favoriteBook', 'Favorite Book', ["Enter the title of your favorite book:", "What book would you recommend to a friend?"], 'e.g. The Little Prince'),
  lineField('favMovie', 'favoriteMovie', 'Favorite Movie', ["Enter your favorite movie:", "Which movie can you watch again and again?"], 'e.g. Spirited Away'),
  lineField('musicGenre', 'favoriteMusicGenre', 'Favorite Music Genre', ["Enter your favorite music genre:", "What kind of music do you listen to most?"], 'e.g. Indie pop'),
  lineField('favAnimal', 'favoriteAnimal', 'Favorite Animal', ["Enter your favorite animal:", "Which animal do you like the most?"], 'e.g. Philippine eagle'),
  lineField('favHoliday', 'favoriteHoliday', 'Favorite Holiday', ["Enter your favorite holiday:", "Which holiday do you look forward to every year?"], 'e.g. Christmas Eve'),
  lineField('favPlace', 'favoritePlace', 'Favorite Place', ["Enter your favorite place:", "Where do you feel most relaxed?"], 'e.g. My lola\u2019s house in Batangas'),
  lineField('dreamJob', 'dreamProfession', 'Dream Profession', ["Enter your dream profession:", "What job would you love to have someday?"], 'e.g. Game developer', { group: 'career' }),
  lineField('careerGoal', 'careerGoal', 'Career Goal', ["Enter your career goal:", "What do you want to achieve in your career?"], 'e.g. Lead a software team', { group: 'career' }),
  lineField('motto', 'personalMotto', 'Personal Motto', ["Enter your personal motto:", "What words do you live by?"], 'e.g. Progress over perfection'),
  lineField('schoolMemory', 'favoriteSchoolMemory', 'Favorite School Memory', ["Enter your favorite school memory:", "What school moment will you never forget?"], 'e.g. Winning the quiz bee in Grade 9', { group: 'memory' }),
  lineField('memorableExperience', 'memorableExperience', 'Most Memorable Experience', ["Enter your most memorable experience:", "What experience left the biggest impression on you?"], 'e.g. Climbing a mountain at sunrise', { group: 'memory' }),
  lineField('skillToLearn', 'skillToLearn', 'Skill to Learn', ["Enter a skill you want to learn:", "What new skill would you like to master?"], 'e.g. Playing the guitar'),
  lineField('weekendActivity', 'weekendActivity', 'Weekend Activity', ["Enter how you like to spend your weekend:", "What is your ideal way to spend a weekend?"], 'e.g. Biking around the plaza', { group: 'pastime' }),
  wordField('favWeather', 'favoriteWeather', 'Favorite Weather', ["Enter your favorite type of weather:", "What kind of weather do you enjoy most?"], 'One word, e.g. Rainy'),
  intField('siblings', 'numberOfSiblings', 'Number of Siblings', ["Enter the number of siblings you have:", "How many brothers and sisters do you have?"], 'Whole number, e.g. 2', { min: 0, max: 30 }),
  intField('languages', 'languagesSpoken', 'Languages Spoken', ["Enter the number of languages you speak:", "How many languages can you speak?"], 'Whole number, e.g. 3', { min: 1, max: 30 }),
  doubleField('hobbyYears', 'yearsPracticingHobby', 'Years Practicing Hobby', ["Enter how many years you have practiced your hobby:", "For how many years have you been doing your hobby?"], 'e.g. 2.5', { min: 0, max: 100 }),
  lineField('achievement', 'memorableAchievement', 'Memorable Achievement', ["Enter a memorable achievement:", "What accomplishment are you most proud of?"], 'e.g. Finished my first 10K run'),
  doubleField('shoeSize', 'shoeSize', 'Shoe Size', ["Enter your shoe size:", "What is your shoe size (US)?"], 'e.g. 7.5', { min: 1, max: 20 }),
  doubleField('sleepHours', 'averageSleepHours', 'Average Sleep (hours)', ["Enter your average hours of sleep per night:", "How many hours do you usually sleep each night?"], 'e.g. 7.5', { min: 0, max: 24 }),
  intField('favNumber', 'favoriteNumber', 'Favorite Number', ["Enter your favorite number:", "What is your lucky or favorite number?"], 'Whole number, e.g. 7')],

  patterns: [
  {
    id: 'personal', name: 'Personal Profile', className: 'ScrapbookPersonalProfile',
    summary: 'Who you are, where you\u2019re from, and what you love.',
    slots: [['fullName'], ['nickname'], ['age', 'birthYear'], ['hometown'], ['favSubject', 'favBook'], ['favHobby'], ['favFood'], ['favColor'], ['height', 'sleepHours'], ['dreamJob', 'motto']]
  },
  {
    id: 'interests', name: 'Interests and Activities', className: 'ScrapbookInterests',
    summary: 'The sports, stories, music, and skills that keep you busy.',
    slots: [['fullName'], ['nickname', 'birthMonth'], ['age'], ['favSport'], ['favBook', 'favMovie'], ['musicGenre', 'favAnimal'], ['weekendActivity'], ['skillToLearn'], ['languages', 'siblings'], ['hobbyYears', 'sleepHours']]
  },
  {
    id: 'memories', name: 'Memories and Goals', className: 'ScrapbookMemoriesGoals',
    summary: 'Moments you remember and where you\u2019re headed next.',
    slots: [['fullName'], ['nickname'], ['birthYear', 'age'], ['hometown'], ['schoolMemory', 'memorableExperience'], ['achievement'], ['careerGoal', 'dreamJob'], ['favPlace', 'favHoliday'], ['hobbyYears'], ['motto']]
  },
  {
    id: 'snapshot', name: 'All About Me Snapshot', className: 'ScrapbookSnapshot',
    summary: 'A quick, fun snapshot of your everyday favorites.',
    slots: [['fullName'], ['birthMonth'], ['age', 'birthYear'], ['height', 'shoeSize'], ['siblings'], ['favColor', 'favWeather'], ['favFood'], ['favHoliday'], ['favMovie', 'musicGenre'], ['weekendActivity', 'favHobby']]
  },
  {
    id: 'future', name: 'Future Me', className: 'ScrapbookFutureMe',
    summary: 'Your strengths today and the person you want to become.',
    slots: [['fullName'], ['nickname', 'favColor'], ['age'], ['favSubject'], ['skillToLearn'], ['dreamJob', 'careerGoal'], ['motto'], ['languages'], ['sleepHours', 'hobbyYears'], ['achievement', 'favPlace']]
  },
  {
    id: 'family', name: 'Family and Hometown', className: 'ScrapbookFamilyHometown',
    summary: 'Home, family traditions, and the places that shaped you.',
    slots: [['fullName'], ['nickname', 'birthMonth'], ['hometown'], ['siblings'], ['favHoliday'], ['favFood', 'favPlace'], ['memorableExperience', 'schoolMemory'], ['favNumber', 'languages'], ['height', 'shoeSize'], ['favAnimal', 'favWeather']]
  }]

};