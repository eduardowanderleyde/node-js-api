module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: "secret",
  database: 'node-jse-domain',
  define: {
    timestamps: true, // created_at and updated_at
    underscored: true, // snake_case
    underscoredAll: true,
  }
}