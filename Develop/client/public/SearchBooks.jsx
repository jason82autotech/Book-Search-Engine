import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../path/to/your/graphql/mutations'; // Import your mutation

const SearchBooks = () => {
  const [savedBooks, setSavedBooks] = useState([]); // State for saving book IDs

  const [saveBookMutation] = useMutation(SAVE_BOOK);

  const handleSaveBook = async (book) => {
    try {
      // Your logic for saving book ID to state
      setSavedBooks((prevSavedBooks) => [...prevSavedBooks, book.id]); // Assuming 'id' is the unique identifier of the book

      // Use the useMutation hook to execute the SAVE_BOOK mutation
      const { data } = await saveBookMutation({
        variables: { input: book }, // Make sure to adjust the variables according to your mutation definition
      });

      // Handle the response data as needed
      console.log('Saved book:', data.saveBook);
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  // Your component rendering and other logic
  return (
    <div>
      {/* Your component JSX */}
      {/* Example: Mapping through search results and rendering a Save button for each book */}
      {searchResults.map((book) => (
        <div key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          {/* Add any other book details you want to display */}
          <button onClick={() => handleSaveBook(book)}>Save Book</button>
        </div>
      ))}

      {/* Example: Displaying saved books */}
      <div>
        <h2>Saved Books</h2>
        {savedBooks.map((savedBookId) => (
          <p key={savedBookId}>Book ID: {savedBookId}</p>
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;
