const mongodb = require("mongodb");
const { getDb } = require("../migrations/database");

const PRODUCT_PER_PAGE = 2;

class Product {
  constructor(name, description, image, id) {
    this.name = name;
    this.description = description;
    this.image = image;
  }

  save() {
    const db = getDb();
    return db.collection("product").insertOne(this);
  }

  static findOne(obj) {
    const db = getDb();
    return db.collection("product").findOne(obj);
  }

  static create(obj) {
    const db = getDb();
    return db.collection("product").insertOne(obj);
  }

  static find(page) {
    const db = getDb();
    return db
      .collection("product")
      .find()
      .skip((page - 1) * PRODUCT_PER_PAGE)
      .limit(PRODUCT_PER_PAGE)
      .toArray();
  }

  static findById(id) {
    const db = getDb();
    return db
      .collection("product")
      .find({ _id: new mongodb.ObjectId(id) })
      .next();
  }

  static findByIdAndUpdate(id, updateobj) {
    const db = getDb();
    return db
      .collection("product")
      .updateOne({ _id: new mongodb.ObjectId(id) }, { $set: updateobj });
  }

  static findByIdAndDelete(id) {
    const db = getDb();
    return db
      .collection("product")
      .deleteOne({ _id: new mongodb.ObjectId(id) });
  }
}

module.exports = Product;
