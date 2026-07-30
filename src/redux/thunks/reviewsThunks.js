import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { setReviews, setLoading, setError } from "../Slices/reviewsSlice";
import { db } from "../../firebaseConfig";
/** Subscribe to all reviews **/
export const subscribeToReviews = () => dispatch => {
  try {
    dispatch(setLoading(true));
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    return onSnapshot(q, snapshot => {
      const reviews = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toMillis() : data.createdAt,
          updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toMillis() : data.updatedAt
        };
      });
      dispatch(setReviews(reviews));
    });
  } catch (error) {
    dispatch(setError(error.message));
  }
};
