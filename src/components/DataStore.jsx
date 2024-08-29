// DataStore.js
import { useEffect } from 'react';
import { ref, set, get } from 'firebase/database';
import { db } from '../firebase';

const participants = {
  Member: [
    { name: "Kritarth Devli", event: "Induction Program" },
    { name: "Simran Rangar", event: "Induction Program" },
    { name: "Harshit Pundir", event: "Induction Program" },
    { name: "Perna Chandola", event: "Induction Program" },
    { name: "Vaishnavi Chauchan", event: "Induction Program" },
    { name: "Samarth Lingwal", event: "Induction Program" },
    { name: "Aanchal Filhaal", event: "Induction Program" },
  ],
  Organizer: [
    { name: "Sahil Pundir", event: "Induction Program" },
    { name: "Ayush Rwwat", event: "Induction Program" },

  ]
};

const storeParticipantsData = async () => {
  try {
    for (const [role, participantsArray] of Object.entries(participants)) {
      for (const participant of participantsArray) {
        const participantRef = ref(db, `Participants/${role}/${participant.name}`);
        const snapshot = await get(participantRef);

        if (!snapshot.exists()) { // Check if the data already exists
          await set(participantRef, {
            fullName: participant.name,
            role,
            event: participant.event
          });
          console.log(`Stored data for ${participant.name}`);
        } else {
          console.log(`Data for ${participant.name} already exists.`);
        }
      }
    }
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

const DataStore = () => {
  useEffect(() => {
    storeParticipantsData(); // Always run the data storing function
  }, []);

  return null; // No UI needed for this component
};

export default DataStore;
