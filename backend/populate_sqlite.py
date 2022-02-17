import sqlite3,uuid,secrets,string,datetime,multiprocessing

def random_str(N):
    return ''.join(secrets.choice(string.ascii_uppercase + string.digits) for i in range(N))


def populate_sqlite(DATA_COUNT=10000):
    try:
        sqliteConnection = sqlite3.connect('../production.database copy.sqlite')
        print("Successfully Connected to SQLite")       
        while (DATA_COUNT:=DATA_COUNT-1)>=0:            
            try:
                cursor = sqliteConnection.cursor()
                # print("Successfully got the cursor")
                sqlite_insert_query = f"""INSERT INTO users
                                (uuid, name,email, description, createdAt,updatedAt) 
                                VALUES 
                                ('{str(uuid.uuid4())}','{random_str(10)}','{random_str(5)}@{random_str(5)}.com','{random_str(400)}','{datetime.datetime.now()}','{datetime.datetime.now()}')"""
                count = cursor.execute(sqlite_insert_query)
                sqliteConnection.commit()
                print(f"{DATA_COUNT}th Record inserted successfully into users table ", cursor.rowcount)
                _retry=-1
            except sqlite3.Error as error:
                print(f"{DATA_COUNT}th Failed to insert data into sqlite table", error)
            finally:
                cursor.close()              

    except sqlite3.Error as error:
        print("Failed to insert data into sqlite table", error)
    finally:
        if sqliteConnection:
            sqliteConnection.close()
            print("The SQLite connection is closed")


populate_sqlite()