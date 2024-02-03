module.exports = {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.antlers.php',
      './resources/**/*.blade.php',
      './resources/**/*.vue',
      './resources/**/*.yaml',
      './resources/**/*.svg',
      './content/**/*.md'
    ],
    theme: {
      fluidSpacing: {
        xxs: 'var(--size-xxs)',
        xs: 'var(--size-xs)',
        sm: 'var(--size-sm)',
        100: 'var(--size-100)',
        200: 'var(--size-200)',
        250: 'calc(var(--size-200) + 1px)',
        300: 'var(--size-300)',
        350: 'calc(var(--size-300) + 1px)',
        400: 'var(--size-400)',
        450: 'calc(var(--size-400) + 2px)',
        500: 'var(--size-500)',
        550: 'calc(var(--size-500) * 1.15)',
        600: 'var(--size-600)',
        650: 'calc(var(--size-600) * 1.15)',
        700: 'var(--size-700)',
        750: 'calc(var(--size-700) * 1.2)',
        800: 'var(--size-800)',
        850: 'calc(var(--size-800) * 1.2)',
        900: 'var(--size-900)',
        950: 'calc(var(--size-900) * 1.2)',
        lg: 'var(--size-lg)',
        xl: 'var(--size-xl)',
        xxl: 'var(--size-xxl)',
        huge: 'var(--size-huge)',
        gutter: 'var(--gutter)',
        container: 'var(--container-padding)',
      },
      extend: {
        padding: (theme) => theme('fluidSpacing'),
        margin: (theme) => theme('fluidSpacing'),
        spacing: (theme) => theme('fluidSpacing'),
        gap: (theme) => theme('fluidSpacing'),
        fontSize: (theme) => theme('fluidSpacing'),
        flexGrow: {
          9: '9999',
        },
        transitionTimingFunction: {
          'custom': 'cubic-bezier(0,.1,.05,.99)',
        },
        lineHeight: {
          flat: '1.15',
        },
        borderWidth: {
          small: '3px',
          gutter: 'var(--gutter)',
          large: 'var(--size-900)',
        },
        borderRadius: {
          large: 'var(--size-900)',
          huge: 'var(--size-lg)',
        },
        aspectRatio: {
          '1/1': '1 / 1',
          '1/2': '1 / 2',
          '2/3': '2 / 3',
          '3/4': '3 / 4',
          '4/5': '4 / 5',
          '5/6': '5 / 6',
          '3/1': '3 / 1',
          '3/2': '3 / 2',
          '5/2': '5 / 2',
          '5/3': '5 / 3',
          '16/8': '16 / 8',
        },
        colors: {
          'primary-glare': '#A3D0F4',
          'primary': '#61A8E0',
          'primary-shade': '#214473',
          'dark-glare': '#0D2646',
          'dark': '#0A182A',
          'dark-shade': '#070F1B',
          'light-glare': '#FCFCFC',
          'light': '#E5EFF8',
          'light-shade': '#D2E3F1'
        },
        fontFamily: {
          base: ['Roboto','Helvetica','Arial','Lucida','serif'],
          heading: ['Khand','Helvetica','Arial','Lucida','serif']
        },
        keyframes: {
          "key-move-left": {
            from: {
              transform: "translateX(0%)",
            },
            to: {
              transform: "translateX(-100%)",
            }
          },
          "key-move-right": {
            from: {
              transform: "translateX(-100%)",
            },
            to: {
              transform: "translateX(0%)",
            }
          },
          "move-up": {
            from: {
              transform: "translateY(0%)",
            },
            to: {
              transform: "translateY(-50%)",
            }
          },
          "move-down": {
            from: {
              transform: "translateY(0%)",
            },
            to: {
              transform: "translateY(50%)",
            }
          },
          "rotate": {
            from: {
              transform: "rotate(25deg)",
            },
            to: {
              transform: "rotate(0deg)",
            }
          },
          "scale": {
            '0%, 100%': {
              transform: "translateY(-3%)",
            },
            '50%': {
              transform: "translateY(3%)",
            }
          }
        },
        animation: {
          "scale":  "scale 3s ease infinite",
          "move-left": "key-move-left",
          "move-right": "key-move-right",
          "move-up": "move-up",
          "move-down": "move-down",
          "rotate": "rotate",
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/container-queries')
    ],
  }
  