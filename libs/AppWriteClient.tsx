import { Account, Client, ID, Databases, Query, Storage } from 'appwrite';

const client = new Client()

    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66ee48ac001b934cc6c1');

    const account = new Account(client);
    const database = new Databases(client);
    const storage = new Storage(client);

export { client , account , database, storage, Query, ID}