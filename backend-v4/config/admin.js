module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b4eed4a42229be6d85bb5510d0c280a0'),
  },
});
