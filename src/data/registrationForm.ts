import { CategoryDef } from '../types/exercise';
import { doubleField, intField, lineField, wordField } from '../utils/fieldBuilders';

export const registrationCategory: CategoryDef = {
  id: 'registration',
  name: 'Registration Form',
  prefix: 'REG',
  tagline: 'Simple student registration',
  description: 'Ask for basic personal details and print them back.',
  programTitle: 'REGISTRATION FORM',
  highlights: ['Name', 'Age', 'Course', 'Section'],
  fields: [
  lineField('fullName', 'fullName', 'Full Name', ['Enter your full name:'], 'e.g. Juan Dela Cruz'),
  wordField('nickname', 'nickname', 'Nickname', ['Enter your nickname:'], 'One word, e.g. Juan'),
  intField('age', 'age', 'Age', ['Enter your age:'], 'e.g. 19', { group: 'age', min: 1, max: 120 }),
  intField('birthYear', 'birthYear', 'Birth Year', ['Enter your birth year:'], 'e.g. 2006', { group: 'age', min: 1900, max: 2026 }),
  wordField('gender', 'gender', 'Gender', ['Enter your gender:'], 'One word, e.g. Male'),
  wordField('email', 'email', 'Email', ['Enter your email:'], 'One word, e.g. juan@gmail.com'),
  wordField('contactNumber', 'contactNumber', 'Contact Number', ['Enter your contact number:'], 'One word, e.g. 09171234567'),
  lineField('address', 'address', 'Address', ['Enter your address:'], 'e.g. 123 Mabini St.'),
  lineField('city', 'city', 'City', ['Enter your city:'], 'e.g. Quezon City'),
  lineField('school', 'school', 'School', ['Enter your school:'], 'e.g. STI College'),
  lineField('course', 'course', 'Course', ['Enter your course:'], 'e.g. BS Information Technology'),
  intField('yearLevel', 'yearLevel', 'Year Level', ['Enter your year level:'], 'e.g. 1', { min: 1, max: 6 }),
  wordField('section', 'section', 'Section', ['Enter your section:'], 'One word, e.g. BSIT101'),
  lineField('favoriteSubject', 'favoriteSubject', 'Favorite Subject', ['Enter your favorite subject:'], 'e.g. Computer Programming'),
  intField('siblings', 'siblings', 'Number of Siblings', ['Enter your number of siblings:'], 'e.g. 2', { min: 0, max: 30 }),
  doubleField('height', 'height', 'Height', ['Enter your height in cm:'], 'e.g. 165.5', { min: 0 }),
  doubleField('weight', 'weight', 'Weight', ['Enter your weight in kg:'], 'e.g. 55.5', { min: 0 }),
  doubleField('averageGrade', 'averageGrade', 'Average Grade', ['Enter your average grade (percentage):'], 'e.g. 92.5', { min: 0, max: 100 })],

  patterns: [
  {
    id: 'basic', name: 'Basic Registration', className: 'RegistrationForm',
    summary: 'Basic student details.',
    slots: [['fullName'], ['nickname'], ['age', 'birthYear'], ['gender'], ['email', 'contactNumber'], ['address', 'city'], ['course'], ['yearLevel'], ['section'], ['height', 'weight']]
  },
  {
    id: 'personal', name: 'Personal Registration', className: 'RegistrationForm',
    summary: 'Personal details.',
    slots: [['fullName'], ['age', 'birthYear'], ['gender'], ['contactNumber', 'email'], ['address'], ['school'], ['course', 'favoriteSubject'], ['yearLevel', 'siblings'], ['weight', 'height'], ['nickname', 'section']]
  },
  {
    id: 'school', name: 'School Registration', className: 'RegistrationForm',
    summary: 'School details.',
    slots: [['fullName'], ['nickname'], ['birthYear', 'age'], ['city'], ['school'], ['section'], ['siblings', 'yearLevel'], ['averageGrade'], ['favoriteSubject', 'course'], ['contactNumber', 'email']]
  }]

};