import { CategoryDef } from '../types/exercise';
import { sariSariCategory } from './sariSariInventory';
import { registrationCategory } from './registrationForm';
import { scrapbookCategory } from './scrapbookQuestions';
import { biographyCategory } from './famousBiography';

export const categories: CategoryDef[] = [sariSariCategory, registrationCategory, scrapbookCategory, biographyCategory];