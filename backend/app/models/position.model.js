module.exports = mongoose => {
  const Position = mongoose.model(
    "position",
    mongoose.Schema(
      {
        type: String,
        url: String,
        company: String,
        company_url: String,
        location: String,
        title: String,
        description: String,
        how_to_apply: String,
        company_logo: String
      },
      {
        timestamps: true
      }
    )
  );

  return Position;
};