/**
 * queries.js - MongoDB queries for the PLP Bookstore database
 *
 * This script demonstrates CRUD operations, advanced queries,
 * aggregation pipelines, and indexing for the plp_bookstore database.
 */

const { MongoClient } = require('mongodb');

// MongoDB connection
const uri = 'mongodb://localhost:27017';
const dbName = 'plp_bookstore';
const collectionName = 'books';

async function runQueries() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // --- TASK 2: BASIC CRUD OPERATIONS ---

    // 1️⃣ Find all books in a specific genre (e.g., Fiction)
    console.log('\n1️⃣ Books in Fiction genre:');
    const fictionBooks = await collection.find({ genre: 'Fiction' }).toArray();
    console.log(fictionBooks);

    // 2️⃣ Find books published after a certain year (e.g., 1950)
    console.log('\n2️⃣ Books published after 1950:');
    const recentBooks = await collection.find({ published_year: { $gt: 1950 } }).toArray();
    console.log(recentBooks);

    // 3️⃣ Find books by a specific author (e.g., George Orwell)
    console.log('\n3️⃣ Books by George Orwell:');
    const orwellBooks = await collection.find({ author: 'George Orwell' }).toArray();
    console.log(orwellBooks);

    // 4️⃣ Update the price of a specific book (e.g., "The Alchemist")
    console.log('\n4️⃣ Updating price of "The Alchemist"...');
    await collection.updateOne({ title: 'The Alchemist' }, { $set: { price: 15.99 } });
    const updatedBook = await collection.findOne({ title: 'The Alchemist' });
    console.log('Updated Book:', updatedBook);

    // 5️⃣ Delete a book by its title (e.g., "Moby Dick")
    console.log('\n5️⃣ Deleting "Moby Dick"...');
    await collection.deleteOne({ title: 'Moby Dick' });
    console.log('Deleted successfully.');

    // --- TASK 3: ADVANCED QUERIES ---

    // 6️⃣ Books that are in stock and published after 2010
    console.log('\n6️⃣ Books in stock and published after 2010:');
    const modernBooks = await collection.find({
      in_stock: true,
      published_year: { $gt: 2010 }
    }).toArray();
    console.log(modernBooks);

    // 7️⃣ Projection (only title, author, and price)
    console.log('\n7️⃣ Showing only title, author, and price:');
    const projectedBooks = await collection.find({}, { projection: { title: 1, author: 1, price: 1, _id: 0 } }).toArray();
    console.log(projectedBooks);

    // 8️⃣ Sorting by price ascending
    console.log('\n8️⃣ Books sorted by price (ascending):');
    const ascBooks = await collection.find().sort({ price: 1 }).toArray();
    console.log(ascBooks);

    // 9️⃣ Sorting by price descending
    console.log('\n9️⃣ Books sorted by price (descending):');
    const descBooks = await collection.find().sort({ price: -1 }).toArray();
    console.log(descBooks);

    // 🔟 Pagination (limit 5 books per page, skip for next pages)
    console.log('\n🔟 First 5 books (Page 1):');
    const page1 = await collection.find().limit(5).toArray();
    console.log(page1);

    console.log('\nNext 5 books (Page 2):');
    const page2 = await collection.find().skip(5).limit(5).toArray();
    console.log(page2);

    // --- TASK 4: AGGREGATION PIPELINES ---

    // 1️⃣ Average price of books by genre
    console.log('\n📊 Average price of books by genre:');
    const avgPriceByGenre = await collection.aggregate([
      { $group: { _id: '$genre', average_price: { $avg: '$price' } } }
    ]).toArray();
    console.log(avgPriceByGenre);

    // 2️⃣ Author with the most books
    console.log('\n📚 Author with the most books:');
    const topAuthor = await collection.aggregate([
      { $group: { _id: '$author', total_books: { $sum: 1 } } },
      { $sort: { total_books: -1 } },
      { $limit: 1 }
    ]).toArray();
    console.log(topAuthor);

    // 3️⃣ Books grouped by publication decade
    console.log('\n🕐 Books grouped by publication decade:');
    const booksByDecade = await collection.aggregate([
      {
        $group: {
          _id: { $concat: [ { $toString: { $multiply: [ { $floor: { $divide: ['$published_year', 10] } }, 10 ] } }, 's' ] },
          total_books: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]).toArray();
    console.log(booksByDecade);

    // --- TASK 5: INDEXING ---

    console.log('\n⚙️ Creating indexes...');
    // Index on title
    await collection.createIndex({ title: 1 });
    // Compound index on author and published_year
    await collection.createIndex({ author: 1, published_year: 1 });
    console.log('Indexes created successfully.');

    // Check index performance using explain()
    console.log('\n📈 Query performance (using explain):');
    const explainResult = await collection.find({ title: '1984' }).explain('executionStats');
    console.log(JSON.stringify(explainResult.executionStats, null, 2));

  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await client.close();
    console.log('\n🔒 Connection closed');
  }
}

runQueries().catch(console.error);
