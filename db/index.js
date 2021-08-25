import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('address.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    // db.transaction(tx => {
    //     tx.executeSql(
    //       `DROP TABLE IF EXISTS treatments;`,
    //       [],
    //       () => { resolve() },
    //       (_, err) => { reject(err) },
    //     )
    // });

    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS pets (
            id INTEGER PRIMARY KEY NOT NULL,
            firebaseId TEXT NOT NULL,
            name TEXT NOT NULL,
            age TEXT NOT NULL,
            date TEXT NOT NULL,
            image REAL NOT NULL,
            treatments INTEGER default 0,
            user_id TEXT NOT NULL
        );`,
        [],
        () => { resolve() },
        (_, err) => { reject(err) },
      )
    });

    db.transaction(tx => {
        tx.executeSql(
          ` CREATE TABLE IF NOT EXISTS treatments (
              id INTEGER PRIMARY KEY NOT NULL,
              firebaseId TEXT NOT NULL,
              name TEXT NOT NULL,
              pet_id TEXT NOT NULL,
              startDate TEXT NOT NULL,
              medications TEXT NOT NULL
            )`,
          [],
          () => { resolve() },
          (_, err) => { reject(err) },
        )
    });


    db.transaction(tx => {
      tx.executeSql(
        ` CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            firebaseId TEXT NOT NULL,
            name TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL,
            user_id TEXT NOT NULL,
            date TEXT NOT NULL
          )`,
        [],
        () => { resolve() },
        (_, err) => { reject(err) },
      )
  });
  });

  return promise;
}

export const db_insertPlace = (
  place, user_id
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO places (firebaseId, name, lat, lng, date, user_id) VALUES (?, ?, ?, ?, ?, ?)`,
        [place.firebaseId, place.name, place.lat, place.lng, place.date, user_id],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}

export const db_getPlaces = (user_id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM places where user_id = ?;`,
        [user_id],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}


export const db_insertPet = (
  pet, user_id
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO pets (firebaseId, name, age, date, image, user_id) VALUES (?, ?, ?, ?, ?, ?)`,
        [pet.firebaseId, pet.name, pet.age, pet.date, pet.image, user_id],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}

export const db_getPets = (user_id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM pets where user_id = ?;`,
        [user_id],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}

export const db_deletePet = (pet_id) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `DELETE FROM pets where id = ?;`,
          [pet_id],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        );
      });
    });
  
    return promise;
}

export const db_insertTreatment = (
    treatment
  ) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO treatments (firebaseId, name, pet_id, startDate, medications) VALUES (?, ?, ?, ?, ?)`,
          [treatment.firebaseId, treatment.name, treatment.pet_id, treatment.startDate, treatment.medications ],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        );
      });
    });
  
    return promise;
  }
  
export const db_getTreatments = (pet_id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
        tx.executeSql(
            `SELECT * FROM treatments where pet_id = ?;`,
            [pet_id],
            (_, result) => resolve(result),
            (_, err) => reject(err),
        );
        });
    });

    return promise;
}

export const db_deleteTreatment = (treatment_id) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `DELETE FROM treatments where id = ?;`,
          [treatment_id],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        );
      });
    });
  
    return promise;
}

export const db_deletePetTreatments = (pet_id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM treatments where pet_id = ?;`,
        [pet_id],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}