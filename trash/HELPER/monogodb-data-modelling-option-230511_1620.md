MonogoDB data modelling option

```

// User schema

```

```

{

   _id: ObjectId,
   name: String,
   email: {
      type: String,
      unique: true
   },

   phone_number: {

      type: String,

      unique: true

   },

   password: String,

   profile_image: {

      original_name: String,

      filename: String,

      mimetype: String,

      size: Number,

      url: String

   },

   created_at: {

      type: Date,

      default: Date.now

   }

}

```