import { CategoryDef } from '../types/exercise';
import { doubleField, intField, lineField, wordField } from '../utils/fieldBuilders';

export const biographyCategory: CategoryDef = {
  id: 'biography',
  name: 'Biography of a Famous Person',
  prefix: 'BIO',
  tagline: 'A biography record about someone notable',
  description: 'Enter facts about a scientist, artist, athlete, leader, or historical figure you choose.',
  programTitle: 'BIOGRAPHY RECORD',
  highlights: ['Nationality', 'Famous work', 'Major award', 'Legacy'],
  answerNote: 'Answer about the famous person you chose, using facts from a reliable source. This tool doesn\u2019t check them for you.',
  fields: [
  lineField('fullName', 'fullName', 'Full Name', ["Enter the famous person\u2019s full name:", "What is the full name of the famous person?"], 'Their complete name, as listed in a reliable source'),
  lineField('knownAs', 'knownAs', 'Known As', ["Enter the name this person is popularly known by:", "What name is this person best known by?"], 'Popular, stage, or short name'),
  lineField('nationality', 'nationality', 'Nationality', ["Enter the person\u2019s nationality:", "What is this person\u2019s nationality?"], 'e.g. Filipino'),
  intField('birthYear', 'birthYear', 'Birth Year', ["Enter the person\u2019s birth year:", "In what year was this person born?"], '4-digit year', { group: 'birth', min: 1, max: 2026 }),
  wordField('birthCentury', 'birthCentury', 'Century of Birth', ["Enter the century the person was born in (e.g. 19th):", "In which century was this person born?"], 'One word, e.g. 19th', { group: 'birth' }),
  wordField('birthMonth', 'birthMonth', 'Birth Month', ["Enter the person\u2019s birth month:", "In what month was this person born?"], 'One word, e.g. June'),
  lineField('birthplace', 'birthplace', 'Birthplace', ["Enter the person\u2019s birthplace:", "Where was this person born?"], 'City and country'),
  lineField('profession', 'profession', 'Profession', ["Enter the person\u2019s profession:", "What is or was this person\u2019s profession?"], 'e.g. Novelist, physicist, sprinter', { group: 'profession' }),
  lineField('mainField', 'fieldOfWork', 'Field of Work', ["Enter the person\u2019s main field of work:", "In what field did this person do their main work?"], 'e.g. Chemistry, civil rights, architecture', { group: 'profession' }),
  lineField('majorAchievement', 'majorAchievement', 'Major Achievement', ["Enter the person\u2019s major achievement:", "What is this person\u2019s greatest achievement?"], 'A short phrase'),
  lineField('contribution', 'notableContribution', 'Notable Contribution', ["Enter a notable contribution of this person:", "What did this person contribute to their field or society?"], 'A short phrase'),
  lineField('famousWork', 'famousWork', 'Famous Work', ["Enter the person\u2019s most famous work:", "What work is this person best known for?"], 'Title of a book, film, song, painting, or project'),
  lineField('award', 'majorAward', 'Major Award', ["Enter a major award the person received:", "What major award has this person received?"], 'Name of the award or honor'),
  intField('awardYear', 'awardYear', 'Year of Major Award', ["Enter the year the person received a major award:", "In what year did this person receive a major award?"], '4-digit year', { min: 1, max: 2026 }),
  intField('awardCount', 'numberOfAwards', 'Number of Major Awards', ["Enter the number of major awards the person has received:", "How many major awards has this person received?"], 'Whole number', { min: 0, max: 1000 }),
  lineField('organization', 'organization', 'Associated Organization', ["Enter an organization associated with the person:", "Which organization is this person associated with?"], 'Company, university, agency, or group', { group: 'affiliation' }),
  lineField('team', 'teamOrInstitution', 'Team or Institution', ["Enter the team or institution associated with the person:", "Which team or institution is this person linked to?"], 'e.g. a club, league team, or school', { group: 'affiliation' }),
  lineField('historicalPeriod', 'historicalPeriod', 'Historical Period', ["Enter the historical period the person lived in:", "During which historical period did this person live?"], 'e.g. Spanish colonial period'),
  lineField('discovery', 'scientificDiscovery', 'Scientific Discovery', ["Enter the person\u2019s scientific discovery:", "What scientific discovery is this person known for?"], 'A short phrase', { group: 'discovery' }),
  lineField('invention', 'invention', 'Invention', ["Enter the person\u2019s invention:", "What did this person invent?"], 'A short phrase', { group: 'discovery' }),
  lineField('genre', 'genreOrStyle', 'Genre or Style', ["Enter the person\u2019s main genre or artistic style:", "What genre or style is this person known for?"], 'e.g. Magical realism, jazz, impressionism'),
  intField('accomplishmentYear', 'accomplishmentYear', 'Year of Major Accomplishment', ["Enter the year of the person\u2019s major accomplishment:", "In what year did this person achieve their most notable accomplishment?"], '4-digit year', { min: 1, max: 2026 }),
  intField('ageAtAccomplishment', 'ageAtAccomplishment', 'Age at Major Accomplishment', ["Enter the person\u2019s age at their major accomplishment:", "How old was this person at their major accomplishment?"], 'Whole number', { min: 1, max: 120 }),
  lineField('legacy', 'legacy', 'Legacy', ["Enter the person\u2019s legacy:", "How is this person remembered or still influential today?"], 'A short phrase'),
  lineField('cause', 'causeChampioned', 'Cause Championed', ["Enter a cause the person championed:", "What cause or issue did this person champion?"], 'e.g. Education for girls'),
  intField('yearsActive', 'yearsActive', 'Years Active', ["Enter the number of years the person has been or was active:", "For how many years was this person active in their career?"], 'Whole number', { min: 0, max: 100 }),
  intField('booksPublished', 'booksPublished', 'Books Published', ["Enter the number of books the person has published:", "How many books has this person published?"], 'Whole number', { min: 0, max: 1000 }),
  intField('filmsDirected', 'filmsDirected', 'Films Directed', ["Enter the number of films the person has directed:", "How many films has this person directed?"], 'Whole number', { min: 0, max: 500 }),
  wordField('mainLanguage', 'mainLanguage', 'Main Language', ["Enter the main language the person worked in:", "In which language did this person mainly work?"], 'One word, e.g. English'),
  doubleField('heightMeters', 'heightInMeters', 'Height (m)', ["Enter the person\u2019s height in meters:", "How tall is or was this person in meters?"], 'Decimal, e.g. 1.75, from a reliable source', { min: 0.5, max: 2.8 }),
  doubleField('workRating', 'workRating', 'Best-Known Work Rating (/10)', ["Enter the average audience rating of the person\u2019s best-known work (out of 10):", "What is the average rating of this person\u2019s best-known work out of 10?"], 'Decimal from 0 to 10, e.g. 8.6', { min: 0, max: 10 }),
  doubleField('careerAverage', 'careerAverage', 'Career Statistic Average', ["Enter the person\u2019s main career statistic average (e.g. points per game):", "What is this athlete\u2019s main career average statistic?"], 'Decimal, e.g. 27.1', { min: 0 })],

  patterns: [
  {
    id: 'general', name: 'General Biography', className: 'FamousPersonBiography',
    summary: 'The essential life facts of a well-known person.',
    slots: [['fullName'], ['knownAs'], ['nationality'], ['birthYear'], ['birthplace'], ['profession'], ['famousWork', 'majorAchievement'], ['award', 'legacy'], ['birthMonth', 'mainLanguage'], ['workRating', 'heightMeters']]
  },
  {
    id: 'scientist', name: 'Scientist or Inventor', className: 'ScientistBiography',
    summary: 'A scientist\u2019s or inventor\u2019s discoveries and contributions.',
    slots: [['fullName'], ['nationality', 'birthplace'], ['birthYear'], ['mainLanguage', 'birthMonth'], ['mainField'], ['discovery', 'invention'], ['accomplishmentYear', 'ageAtAccomplishment'], ['organization', 'award'], ['contribution', 'legacy'], ['heightMeters']]
  },
  {
    id: 'artist', name: 'Artist or Writer', className: 'ArtistBiography',
    summary: 'The creative career of an artist, writer, or performer.',
    slots: [['fullName'], ['nationality'], ['birthYear'], ['mainLanguage', 'birthMonth'], ['profession'], ['genre'], ['famousWork'], ['award', 'awardCount'], ['yearsActive', 'booksPublished', 'filmsDirected', 'awardYear'], ['workRating']]
  },
  {
    id: 'athlete', name: 'Athlete or Public Figure', className: 'AthleteBiography',
    summary: 'A sports or public career, with its biggest milestones.',
    slots: [['fullName'], ['nationality', 'birthplace'], ['birthYear'], ['birthMonth'], ['profession'], ['team'], ['majorAchievement'], ['accomplishmentYear', 'ageAtAccomplishment'], ['awardCount', 'yearsActive'], ['careerAverage', 'heightMeters']]
  },
  {
    id: 'advocate', name: 'Leader or Advocate', className: 'AdvocateBiography',
    summary: 'A leader\u2019s cause, organization, and impact.',
    slots: [['fullName'], ['knownAs', 'profession'], ['nationality'], ['birthYear'], ['birthMonth', 'mainLanguage'], ['cause'], ['organization'], ['majorAchievement', 'contribution'], ['accomplishmentYear', 'yearsActive'], ['heightMeters']]
  },
  {
    id: 'historical', name: 'Historical Figure', className: 'HistoricalFigureBiography',
    summary: 'A figure from history and the era they shaped.',
    slots: [['fullName'], ['knownAs', 'nationality'], ['birthCentury'], ['birthplace'], ['historicalPeriod'], ['profession'], ['contribution', 'majorAchievement'], ['ageAtAccomplishment', 'accomplishmentYear'], ['legacy'], ['heightMeters']]
  },
  {
    id: 'creative-works', name: 'Author or Filmmaker', className: 'CreativeWorksBiography',
    summary: 'The body of work of an author or filmmaker.',
    slots: [['fullName'], ['knownAs'], ['nationality'], ['birthYear'], ['mainLanguage'], ['genre', 'profession'], ['famousWork'], ['booksPublished', 'filmsDirected'], ['awardYear', 'yearsActive'], ['workRating']]
  }]

};