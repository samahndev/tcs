module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://candyshopnz.us19.list-manage.com/subscribe/post?u=ca4631f7d13651241312957ff&amp;id=5eb28c850e',
      }
    }
  ],
}
