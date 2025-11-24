import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  get,
  set,
  onValue,
  DataSnapshot,
} from "firebase/database";

// Type definitions
export interface SensorData {
  humidity: number;
  temperature: number;
  timestamp: number;
  timeStr?: string;
}

export interface FirebaseSensorEntry {
  deviceId: string;
  hum: number;
  rssi: number;
  t: number;
  temp: number;
  timeStr: string;
  tz: string;
}

export interface HistoricalData {
  [date: string]: {
    humidity: number;
    temperature: number;
    timestamp: number;
  };
}

export interface HistoricalEntry {
  date: string;
  humidity: number;
  temperature: number;
}

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Authentication functions
export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  return auth.onAuthStateChanged(callback);
};

// Database functions
export const writeSensorData = async (data: {
  humidity: number;
  temperature: number;
  timestamp: number;
}): Promise<void> => {
  try {
    const sensorRef = ref(database, "sensorData/current");
    await set(sensorRef, data);
  } catch (error) {
    console.error("Error writing sensor data:", error);
    throw error;
  }
};

export const readSensorData = async (): Promise<SensorData | null> => {
  try {
    const userId = "fzGeI1UaX3bnURc0KTF1Q1IdHcA3";
    const deviceId = "Worm1";
    const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

    const sensorRef = ref(
      database,
      `users/${userId}/sensors/${deviceId}/byDay/${today}`
    );
    const snapshot = await get(sensorRef);
    const data = snapshot.val();

    if (!data) return null;

    // Find the latest entry by timestamp
    const entries = Object.values(data) as FirebaseSensorEntry[];
    const latestEntry = entries.reduce((latest, current) => {
      return current.t > latest.t ? current : latest;
    });

    return {
      humidity: latestEntry.hum,
      temperature: latestEntry.temp,
      timestamp: latestEntry.t,
      timeStr: latestEntry.timeStr,
    };
  } catch (error) {
    console.error("Error reading sensor data:", error);
    throw error;
  }
};

export const subscribeToSensorData = (
  callback: (data: SensorData | null) => void
) => {
  const userId = "fzGeI1UaX3bnURc0KTF1Q1IdHcA3";
  const deviceId = "Worm1";
  const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

  const sensorRef = ref(
    database,
    `users/${userId}/sensors/${deviceId}/byDay/${today}`
  );
  return onValue(sensorRef, (snapshot: DataSnapshot) => {
    const data = snapshot.val();

    if (!data) {
      callback(null);
      return;
    }

    // Find the latest entry by timestamp
    const entries = Object.values(data) as FirebaseSensorEntry[];
    const latestEntry = entries.reduce((latest, current) => {
      return current.t > latest.t ? current : latest;
    });

    callback({
      humidity: latestEntry.hum,
      temperature: latestEntry.temp,
      timestamp: latestEntry.t,
      timeStr: latestEntry.timeStr,
    });
  });
};

export const writeHistoricalData = async (data: {
  date: string;
  humidity: number;
  temperature: number;
}): Promise<void> => {
  try {
    const historicalRef = ref(database, `historicalData/${data.date}`);
    await set(historicalRef, {
      humidity: data.humidity,
      temperature: data.temperature,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error("Error writing historical data:", error);
    throw error;
  }
};

export const readHistoricalData = async (): Promise<HistoricalData | null> => {
  try {
    const historicalRef = ref(database, "historicalData");
    const snapshot = await get(historicalRef);
    return snapshot.val();
  } catch (error) {
    console.error("Error reading historical data:", error);
    throw error;
  }
};

export { app, auth, database };
