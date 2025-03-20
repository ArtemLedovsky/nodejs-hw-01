import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    if (!data.length) {
      return console.log('Контактів не знайдено!');
    }
    const newData = data.filter((item) => item.id !== data[data.length - 1].id);
    await writeContacts(newData);
    // data.pop();
    // await writeContacts(data);
    console.log(`Контакт видалено!`);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
