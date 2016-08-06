import {MongoClient, Db, Collection, ObjectID, Cursor} from 'mongodb';

var state = {
    db: null,
    mode: ""
}

/**
 * DB
 */
export class MongoDB {

    constructor(parameters) {

    }

    static connect(url, done) {
        if (state.db) return done()

        MongoClient.connect(url, (err, db) => {
            if (err) return done(err)
            state.db = db
            done()
        })
    }

    static get() {
        return state.db
    }

    close(done) {
        if (state.db) {
            state.db.close(function (err, result) {
                state.db = null
                state.mode = null
                done(err)
            })
        }
    }
}

export default MongoDB;