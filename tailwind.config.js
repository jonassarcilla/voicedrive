module.exports = {
    purge: [
      // 'src/*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: theme => ({
          "hero-img": "url('dist/img/hero-img-1-A.png')",
          "price-tag": "url('../img/hero-img-1-A.png')"
        }),
        backgroundOpacity: {
          '52': '0.52',
        },
        textColor: {
          'primary': '#50abe0',
          'secondary': '#3c8ab1',
          'accent': '#86b1d0',
          'link': '#49a5e9'
        },
        backgroundColor: theme => ({
          'primary': '#50abe0',
          'secondary': '#3c8ab1',
          'accent': '#e6f3fb'
        }),
        borderColor: theme => ({
          'blue-500': '#50abe0'
        })
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }  