# MonogoDB data modelling options

Task schema
```
{

   _id: ObjectId,

   title: String,

   description: String,

   creator_id: ObjectId,

   assignee_ids: [ObjectId],

   files: [{

      original_name: String,

      filename: String,

      mimetype: String,

      size: Number,

      url: String

   }],

   due_date: Date,

   repeat: {

      type: String,

      enum: ["daily", "weekly", "monthly", "custom"]

   },

   custom_repeat: [Number], // 1-7 for daily, 1-31 for monthly, or a list of custom days for custom repeat

   reminder: Date,

   steps: [String],

   notes: String,

   progress: {

      type: String,

      enum: ["not started", "completed"],

      default: "not started"

   },

   task_list: {

      type: String,

      enum: ["My day", "Tasks", "Important", "Planned", "Assigned to me"],

      default: "Tasks"

   }

}
```