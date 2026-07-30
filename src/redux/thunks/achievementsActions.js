import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { setAchievements, setAchievementsError, setAchievementsLoading } from "../Slices/achievementsSlice";
export const subscribeToAchievements = () => dispatch => {
  try {
    dispatch(setAchievementsLoading(true));
    const q = query(collection(db, "achievements"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, snapshot => {
      const achievements = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toMillis() : data.createdAt,
          updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toMillis() : data.updatedAt
        };
      });
      dispatch(setAchievements(achievements));
    }, error => {
      dispatch(setAchievementsError(error.message));
    });
    return unsubscribe;
  } catch (err) {
    dispatch(setAchievementsError(err.message));
    return () => {};
  }
};
