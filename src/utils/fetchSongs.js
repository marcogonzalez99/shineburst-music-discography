import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore instance

export async function fetchSongs() {
  try {
    // Reference the 'songs' collection in Firestore
    const songsCollection = collection(db, "songs");
    const snapshot = await getDocs(songsCollection);

    // Map the Firestore snapshot to an array of objects
    const songsList = snapshot.docs.map((doc) => ({
      id: doc.id, // Document ID
      ...doc.data(), // All fields from the document
    }));

    console.log("Fetched songs:", songsList);
    // Return the array of fetched songs
    return songsList;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}
